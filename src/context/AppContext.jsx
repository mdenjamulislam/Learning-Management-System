import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);
    const [isEducator, setIsEducator] = useState(true);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const fetchAllCourses = async () => {
        setAllCourses(dummyCourses);
    }

    // Fetch user enrolled courses
    const fetchUeseEnrolledCourses = async () => {
        setEnrolledCourses(dummyCourses);

    }

    useEffect(() => {
        fetchAllCourses();
        fetchUeseEnrolledCourses();
    }, [])

    // function to calculate average rating of course
    const calculateRating = (course) => {
        if (course.courseRatings.length === 0) {
            return 0;
        }

        let totalRating = 0;
        course.courseRatings.forEach((rating) => {
            totalRating += rating.rating;
        })

        return totalRating / course.courseRatings.length;
    }

    // Calculate course chapter time
    const calculateChapterTime = (chapter) => {
        let time = 0;
        chapter.chapterContent.map((lecture) => time += lecture.lectureDuration)

        return humanizeDuration(time *60 * 1000, {units: ["h", "m", "s"]});
    }

    // Calculate course total time
    const calculateCourseDuration = (course) => {
        let totalTime = 0;
        course.courseContent.map((chapter) => chapter.chapterContent.map((lectute) => totalTime += lectute.lectureDuration));
        return humanizeDuration(totalTime * 60 * 1000, { units: ["h", "m", "s"] });
    }

    // Function calculate to No of lectures in a course
    const calculateNoOfLectures = (course) => {
        let totalLectures = 0;
        course.courseContent.forEach((chapter) => {
            if(Array.isArray(chapter.chapterContent)) {
                totalLectures += chapter.chapterContent.length;
            }
        });
        return totalLectures;
    }

    const value = {
        currency,
        allCourses,
        navigate,
        calculateRating,
        isEducator,
        setIsEducator,
        calculateChapterTime,
        calculateCourseDuration,
        calculateNoOfLectures,
        enrolledCourses,
        fetchUeseEnrolledCourses,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}