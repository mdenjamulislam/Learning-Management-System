import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const educatorData = dummyEducatorData;
    const { user } = useUser();
    return (
        <nav className="flex items-center justify-between px-4 xl:px-20 py-4 shadow-sm bg-cyan-800/60">
            <Link to="/">
                <img src={assets.logo_dark} alt="Logo" className="w-28 lg:w-32" />
            </Link>

            <div className="flex items-center gap-4 relative">
                <p>Hi! {user ? user.fullName : "Developer"}</p>
                {user ? <UserButton /> : <img src={assets.profile_img} className="max-w-8" />}
            </div>
        </nav>
    );
};

export default Navbar;
