import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer';

const MyEnrollments = () => {

    const { enrolledCourses, calculateCourseDuration, currency, navigate } = useContext(AppContext);

    const [progressArray, setProgressArray] = useState([
        {lectureCompleted: 2, totalLectures: 4},
        {lectureCompleted: 3, totalLectures: 10},
        {lectureCompleted: 1, totalLectures: 8},
        {lectureCompleted: 10, totalLectures: 10},
        {lectureCompleted: 5, totalLectures: 9},
        {lectureCompleted: 7, totalLectures: 12},
        {lectureCompleted: 3, totalLectures: 6},
        {lectureCompleted: 4, totalLectures: 14},
        {lectureCompleted: 8, totalLectures: 9},
        {lectureCompleted: 3, totalLectures: 4},
        {lectureCompleted: 2, totalLectures: 5},
        {lectureCompleted: 0, totalLectures: 5},
        {lectureCompleted: 1, totalLectures: 4},
    ])
    return (
        <>
            <section className='py-6 md:py-10'>
                <div className="container">
                    <h1 className="text-2xl font-semibold pb-6 md:pb-8">My Enrollments</h1>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Course</th>
                                    <th>Duration</th>
                                    <th>Completed</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {enrolledCourses.map((course, index) => (
                                    <tr>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-square h-14 w-20 rounded">
                                                        <img src={course.courseThumbnail} alt={course.courseTitle} />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <p className="font-bold">{course.courseTitle}</p>
                                                    <Line strokeWidth={4} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0} className="bg-accent rounded-full" />
                                                    {/* <p className="text-sm opacity-50">
                                                    {currency}
                                                    {course.coursePrice}
                                                </p> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{calculateCourseDuration(course)}</td>
                                        <td>
                                            {progressArray[index] && `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`} <span>lectures</span>
                                        </td>
                                        <th>
                                            <button onClick={() => navigate("/player/" + course._id)} className="badge badge-info">
                                                {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 ? "Completed" : "On Going"}
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MyEnrollments;