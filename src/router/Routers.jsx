import { Route, Routes } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/student/Home";
import CoursesList from "../pages/student/CoursesList";
import CourseDetails from "../pages/student/CourseDetails";
import MyEnrollments from "../pages/student/MyEnrollments";
import Player from "../pages/student/Player";
import Loading from "../components/student/Loading";
import Dashboard from "../pages/educator/Dashboard";
import Educator from "../pages/educator/Educator";
import AddCourse from "../pages/educator/AddCourse";
import MyCourses from "../pages/educator/MyCourses";
import StudentEnrolled from "../pages/educator/StudentEnrolled";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route index element={<Home />} />
                    <Route path="/course-list" element={<CoursesList />} />
                    <Route path="/course-list/:input" element={<CoursesList />} />
                    <Route path="/course/:id" element={<CourseDetails />} />
                    <Route path="/my-enrollments" element={<MyEnrollments />} />
                    <Route path="/player/:courseId" element={<Player />} />
                    <Route path="/loading/:path" element={<Loading />} />
                    <Route path="/educator" element={<Educator />}>
                        <Route path="educator" element={<Dashboard />} />
                        <Route path="add-course" element={<AddCourse />} />
                        <Route path="my-courses" element={<MyCourses />} />
                        <Route path="student-enrolled" element={<StudentEnrolled />} />
                    </Route>
                </Route>
            </Routes>
        </>
    );
};

export default Routers;
