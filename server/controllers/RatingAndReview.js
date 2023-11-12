const RatingAndReview = require("../models/RatingAndReview")
const Course = require("../models/Course");
const { default: mongoose } = require("mongoose");

// create rating
exports.createRating = async (req, res) => {
    try {
        // get usedId
        const userId = req.user.id

        // fetch data from request ki body
        const { rating, review, courseId } = req.body;

        // check if user is enrolled or not
        const courseDetails = await Course.findOne({
            _id: courseId,
            studentsEnrolled: { $elemMatch: { $eq: userId } },
        });

        if (!courseDetails) {
            return res.status(404).json({
                success: false,
                error: "Student is not enrolled in the course"
            })
        }

        // check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user: userId,
            Course: courseId,
        });
        if (alreadyReviewed) {
            return res.status(403).json({
                success: false,
                message: "Course is already reviewed by the user",
            })
        }

        // create rating and review
        const ratingReview = await RatingAndReview.create({
            rating,
            review,
            Course: courseId,
            user: userId,
        })

        // update the course with this rating and review 
        const updatedCourseDetails = await Course.findByIdAndUpdate({ _id: courseId }, {
            $push: {
                ratingAndReviews: ratingReview._id,
            }
        }, { new: true })
        console.log(updatedCourseDetails);

        // return response
        return res.status(201).json({
            success: true,
            message: 'Rating and review created successfully',
            ratingReview,
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

// get Average rating
exports.getAverageRating = async (req,res) => {
    try{
        // get course id
        const courseId = req.body.courseId;

        // calculate avg rating
        const result = await RatingAndReview.aggregate([  //didn't got properly
            {
                $match:{
                    course: new mongoose.Types.ObjectId(courseId)
                },
            },
            {
                $group:{
                    _id:null,
                    averageRating:{$avg: "$rating"}
                }
            }
        ])

        // return rating
        if(result.length > 0) {
            return res.status(200).json({
                success:true,
                averageRating:result[0].averageRating,
            })
        }

        // if no rating/review exist
        return res.status(200).json({
            success:true,
            message:"Average rating is 0 no rating given till now",
            averageRating:0,
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}

//  getAllRating
exports.getAllRating = async (req,res) => {
    try{
        const allReviews = await RatingAndReview.find({}).sort({rating:"desc"}).populate({
            Path:"user",
            select:"firstName lastName email image",
        })
        .populate({
            path:"course",
            select:"courseName",
        })
        .exec();

        return res.status(200).json({
            success:true,   
            message:"All review fetched successfully"
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:error.message,
        })
    }
}