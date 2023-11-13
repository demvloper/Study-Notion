import React from "react";
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom";
import HighlightText from "../components/core/Homepage/HighlightText"
import CTAButton from "../components/core/Homepage/Button"
import Banner from "../assets/images/banner.mp4"
import CodeBlocks from "../components/core/Homepage/CodeBlocks";

const Home = () => {
    return (
        <div>
            {/*Section 1*/}
            <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
                <Link to={"/signup"}>
                    <div className="group mt-16 p-1mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                        <div className="flex flex-row items-center gap-2 rounded px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Instructor</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className="text-center text-4xl font-semihold mt-7">
                    Empower Your Future With
                    <HighlightText text={"Coding Skills"} />
                </div>

                <div className="mt-4 w-[90%] text-center text-lg font-bold text-richblack-300 ">
                    With our online coding courses you can learn at your own pace, from anywhere in the world, and get access to a wealth of resource, including hands-on projects, quizzes, and personalized feedback from Instructor
                </div>
                <div className="flex flex-row gap-7 mt-8">
                    <CTAButton active={true} linkto={"/signup"} >
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>
                </div>

                <div className="mx-3 my-12 shadow-blue-200 ">
                    <video loop autoPlay>
                        <source src={Banner} type="video/mp4" />

                    </video>
                </div>

                {/* code section 1 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock Your
                                <HighlightText text={"Coding Potential "} />
                                With our online courses
                            </div>
                        }
                        subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passinate about sharing their knowledge with you"}
                        ctabtn1={
                            {
                                btnText: "Try it Yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Document</title>\n<link rel="stylesheet" href="style.css">\n</head>\n<body>\n</body>\n</html>`}
                        codeColor={"text-yellow-25"}

                    />
                </div>

                {/* code section 2*/}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Start
                                <HighlightText text={"Coding in seconds"} />
                            </div>
                        }
                        subheading={"Go ahead, give a try. Our hands on Learning Enviroment means you'll writting real code from our very first lesson "}
                        ctabtn1={
                            {
                                btnText: "Continue Lesson",
                                linkto: "/signup",
                                active: true,
                            }
                        }
                        ctabtn2={
                            {
                                btnText: "Learn More",
                                linkto: "/login",
                                active: false,
                            }
                        }
                        codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8" />\n<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n<title>Document</title>\n<link rel="stylesheet" href="style.css">\n</head>\n<body>\n</body>\n</html>`}
                        codeColor={"text-yellow-25"}

                    />
                </div>

            </div>


            {/*Section 2*/}


            {/*Section 3*/}


            {/*Footer*/}


        </div>
    )
}

export default Home