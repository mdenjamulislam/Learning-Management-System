import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {

    const {navigate, isEducator} = useContext(AppContext);

    const isCourseListPage = location.pathname.includes('/course-list');

    const { openSignIn } = useClerk();
    const { user } = useUser();


    return (
        <header>
            <nav className={`navbar px-4 xl:px-10 shadow-sm ${isCourseListPage ? "bg-white" : "bg-cyan-100/80"}`}>
                <div className="flex-1">
                    <Link className="flex items-center gap-1.5">
                        <img onClick={() => navigate('/')} src={assets.logo} alt="" />
                    </Link>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <div>
                        {user && (
                            <>
                                <ul className="menu menu-horizontal px-1">
                                    <li>
                                        <button onClick={() => {navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
                                    </li>
                                    <li>
                                        <Link to="/my-enrollments">My Enrollment</Link>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>


                    {user ? (
                        <UserButton />
                    ) : (
                        <button onClick={() => openSignIn()} className="btn btn-sm btn-success">
                            Create Account
                        </button>
                    )}
                </div>
                {/* Mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <div className="flex items-center gap-2">
                        <button onClick={() => {navigate('/educator')}}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
                    </div>
                    {user ? (
                        <UserButton />
                    ) : (
                        <button onClick={() => openSignIn()}>
                            <img src={assets.user_icon} alt="User Icon" />
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
