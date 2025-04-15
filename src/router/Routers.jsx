import { Route, Routes } from "react-router-dom";
import Home from "../pages/student/Home";
import CoursesList from "../pages/student/CoursesList";
import CourseDetails from "../pages/student/CourseDetails";
import MyEnrollments from "../pages/student/MyEnrollments";
import Player from "../pages/student/Player";
import Loading from "../components/student/Loading";
import Dashboard from "../pages/educator/Dashboard";
import Educator from "../pages/educator/Educator";
import Educator from "../pages/educator/AddCourse";
import Educator from "../pages/educator/MyCourses";
import Educator from "../pages/educator/StudentEnrolled";
import StudentEnrolled from "../pages/educator/StudentEnrolled";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/course-list" element={<CoursesList />} />
                <Route path="/course-list/:input" element={<CoursesList />} />
                <Route path="/course/:id" element={<CourseDetails />} />
                <Route path="/my-enrollments" element={<MyEnrollments />} />
                <Route path="/player/:courseId" element={<Player />} />
                <Route path="/loading/:path" element={<Loading />} />
                <Route path="/educator" element={ <Educator />}>
                    <Route path="/educator" element={<Dashboard />} />
                    <Route path="/add-course" element={<AddCourse />} />
                    <Route path="/my-courses" element={<MyCourses/>} />
                    <Route path="/student-enrolled" element={<StudentEnrolled/>} />
                </Route>
            </Routes>
        </>
    );
};

export default Routers;
