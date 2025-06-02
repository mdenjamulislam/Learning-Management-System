import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/student/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/student/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/student/Footer";

const CoursesList = () => {
    const { navigate, allCourses } = useContext(AppContext);
    const { input } = useParams();

    const [filteredCourses, setFilteredCourses] = useState([]);

    useEffect(() => {
        if (allCourses.length > 0) {
            const tempCourses = allCourses.slice();
            input ? setFilteredCourses(tempCourses.filter((item) => item.courseTitle.toLowerCase().includes(input.toLocaleLowerCase()))) : setFilteredCourses(tempCourses);
        }
    }, [allCourses, input]);

    return (
        <>
            <div className="container my-6 md:my-10">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-0 mb-5">
                    <div>
                        <h1 className="text-2xl lg:text-3xl font-medium">Course List</h1>
                        <div className="breadcrumbs text-sm">
                            <ul>
                                <li>
                                    <a onClick={() => navigate("/")}>Home</a>
                                </li>
                                <li>
                                    <a>Course List</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <SearchBar data={input} />
                </div>

                {input && (
                    <div className="flex items-center gap-3 mb-4">
                        <p>Search result for: </p>
                        <div className="inline-flex items-center gap-1.5 justify-between bg-gray-100 dark:bg-slate-800 border border-gray-500/20 rounded px-2 py-1 text-sm">
                            <p>{input}</p>
                            <img src={assets.cross_icon} alt="Cross icon" className="cursor-pointer" onClick={() => navigate("/course-list")} />
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredCourses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CoursesList;
