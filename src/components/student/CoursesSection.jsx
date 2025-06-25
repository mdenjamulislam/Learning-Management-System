import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import CourseCard from './CourseCard';

const CoursesSection = () => {

    const {allCourses} = useContext(AppContext);

    return (
        <section className='sec_padding'>
            <div className="container mx-auto">
                <div className="section_heading">
                    <h2 className="section_title">Learn from the best</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa assumenda, deserunt et suscipit optio eveniet similique, dolor saepe nulla quia quisquam ullam eum eligendi corporis!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 my-10 md:my-16">
                    {allCourses.slice(0, 4).map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>

                <Link to={"/course-list"} onClick={() => scrollTo(0, 0)} className="border border-accent/30 px-10 py-2 rounded">
                    Show all courses
                </Link>
            </div>
        </section>
    );
};

export default CoursesSection;