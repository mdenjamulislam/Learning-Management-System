import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { assets } from "../../assets/assets";
import YouTube from "react-youtube";

const Player = () => {
    const { allCourses, enrolledCourses, calculateChapterTime, calculateNoOfLectures, calculateCourseDuration } = useContext(AppContext);
    const { courseId } = useParams();

    const [course, setCourse] = useState(null);
    const [playerData, setPlayerData] = useState(null);

    const getCourseData = () => {
        enrolledCourses.map((course) => {
            if (course._id == courseId) {
                setCourse(course);
            }
        });
    };

    useEffect(() => {
        getCourseData();
    }, [allCourses]);

    return (
        <>
            <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
                {/* left */}
                <div className="text-gray-800 dark:text-gray-200">
                    <h2 className="text-xl font-semibold">Course Structure</h2>
                    <div className="pt-5">
                        {course &&
                            course.courseContent.map((chapter, index) => (
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
                                                            <li
                                                                key={i}
                                                                onClick={() =>
                                                                    setPlayerData({
                                                                        ...lecture,
                                                                        chapter: index + 1,
                                                                        lecture: i + 1,
                                                                    })
                                                                }
                                                                className="flex items-center gap-2 cursor-pointer"
                                                            >
                                                                <img src={false ? assets.blue_tick_icon : assets.play_icon} alt="Play Icon" className="w-4" />
                                                                <div className="flex flex-row justify-between items-center w-full">
                                                                    <h4 className="text-sm md:text-base">{lecture.lectureTitle}</h4>
                                                                    <div className="flex items-center gap-2 text-sm text-neutral dark:text-white/70">
                                                                        {lecture.lectureUrl && <small className="badge badge-soft badge-success text-xs cursor-pointer">Watch</small>}
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
                {/* right */}
                <div>
                    {playerData ? (
                        <div>
                            <YouTube videoId={playerData.videoId} opts={{ playerVars: { autoplay: 1 } }} iframeClassName="w-full aspect-video" />
                            <div>
                                <p>
                                    {playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}
                                </p>
                                <button className="">Marke Complete 5h:30m</button>
                            </div>
                        </div>
                    ) : (
                        <img src={course ? course.courseThumbnail : "Not found"} alt="" className="w-full" />
                    )}
                </div>
            </div>
        </>
    );
};

export default Player;
