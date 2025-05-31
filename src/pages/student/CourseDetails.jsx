import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";

const CourseDetails = () => {
    const { allCourses, calculateRating, calculateNoOfLectures, calculateCourseDuration, calculateChapterTime } = useContext(AppContext);
    const { id } = useParams();

    const [course, setCourse] = useState(null);

    const fetchCourseData = async () => {
        const fintCourse = allCourses.find((course) => course._id === id);
        setCourse(fintCourse);
    };

    useEffect(() => {
        fetchCourseData();
    }, []);

    return course ? (
        <>
            <div className="absolute top-0 left-0 w-full h-section-height-mobile md:h-section-height -z-[1] bg-gradient-to-b from-cyan-100/70 dark:from-cyan-800/70"></div>
            <div className="container">
                <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between py-10 md:py-20">
                    {/* Left */}
                    <div className="max-w-xl z-10">
                        <h1 className="text-course-details-heading-small md:text-course-details-heading-large font-semibold ">{course.courseTitle}</h1>
                        <p dangerouslySetInnerHTML={{ __html: course.courseDescription.slice(0, 210) }}></p>

                        {/* Course Rating/ Reviews */}
                        <div className="flex items-center gap-2 text-sm my-2">
                            <p>{calculateRating(course)}</p>
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <>
                                        <img key={i} src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} alt="Star" className="w-3.5 h-3.5" />
                                    </>
                                ))}
                            </div>
                            <p className="text-gray-400">
                                {course.courseRatings.length} {course.courseRatings.length > 1 ? "Reviews" : "Review"}
                            </p>
                            |
                            <p className="dark:text-white/70 text-gray-500">
                                {course.enrolledStudents.length} {course.enrolledStudents.length > 1 ? "Students" : "Student"}
                            </p>
                        </div>
                        <p>
                            Course By: <span className="text-primary dark:text-accent">Enjamul Islam</span>
                        </p>

                        {/* course details */}
                        <div className="pt-8 text-gray-800 dark:text-gray-200">
                            <h4 className="text-xl font-semibold">Course Structure</h4>
                            <p>{calculateNoOfLectures(course) - calculateCourseDuration(course)}</p>

                            <div className="pt-5">
                                {course.courseContent.map((chapter, index) => (
                                    <>
                                        <div key={index}>
                                            <div className="">
                                                <div tabIndex={0} className="collapse collapse-arrow bg-base-100 dark:bg-slate-800 border-base-300 border mb-2">
                                                    <div className="collapse-title font-semibold flex items-center gap-4">
                                                        {chapter.chapterTitle}
                                                        <p className="flex items-center gap-1.5 text-sm text-neutral dark:text-white/70">
                                                            {chapter.chapterContent.length} chapters -
                                                            <img src={assets.time_clock_icon} alt="" className="w-4" /> {calculateChapterTime(chapter)}
                                                        </p>
                                                    </div>
                                                    <div className="collapse-content text-sm">
                                                        <ul className="list-none space-y-3">
                                                            {chapter.chapterContent.map((lecture, i) => (
                                                                <li key={i} className="flex items-center gap-2">
                                                                    <img src={assets.play_icon} alt="Play Icon" className="w-4" />
                                                                    <div className="flex flex-row justify-between items-center w-full">
                                                                        <h4 className="text-sm md:text-base">{lecture.lectureTitle}</h4>
                                                                        <div className="flex items-center gap-2 text-sm text-neutral dark:text-white/70">
                                                                            {lecture.isPreviewFree && <small className="badge badge-soft badge-success text-xs">Preview</small>}
                                                                            <p>{humanizeDuration(lecture.lectureDuration * 60 * 1000, { units: ["h", "m"] })}</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className="pt-8 text-sm md:text-base">
                            <h4 className="text-xl font-semibold">Course Details</h4>
                            <p className="mt-3 rich-text" dangerouslySetInnerHTML={{ __html: course.courseDescription }}></p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className="max-w-course-card z-10 shadow-custom-card dark:shadow-lg dark:shadow-white/20 rounded-t-xl md:rounded-none overflow-hidden min-w-[300px] sm:min-w-[420px]">
                        <img src={course.courseThumbnail} alt={ course.courseTitle} className="w-full" />
                        <div className="pt-4">
                            <div className="flex items-center gap-2">
                                <img src={assets.time_left_clock_icon} alt="" />
                                <p className="text-red-500 dark:text-red-400 text-sm md:text-base">
                                    <span className="font-medium">5 days left at this price!</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default CourseDetails;
