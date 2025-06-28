import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    const { isEducator } = useContext(AppContext);

    const menuItems = [
        { name: "Dashboard", path: "/educator", icon: assets.home_icon },
        { name: "Add Course", path: "/educator/add-course", icon: assets.add_icon },
        { name: "My Courses", path: "/educator/my-courses", icon: assets.my_course_icon },
        { name: "Student Enrolled", path: "/educator/student-enrolled", icon: assets.person_tick_icon },
    ];
    return (
        <aside className="w-16 md:w-64 border-r min-h-screen text-base border-gray-500 dark:border-gray-300 flex flex-col">
            
            {menuItems && menuItems.map((item) => {
                <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center gap-2`}
                >
                    <img src={item.icon} alt={item.name} />
                    <span>{item.name}</span>
                </Link>;
            })}
        </aside>
    );
};

export default Sidebar;
