import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import Navbar from '../components/student/Navbar';

const Root = () => {

    const isEducatorRoute = useMatch('/educator/*');

    return (
        <div className='min-h-screen'>
            {/* When visit the educator the navbar is hidden */}
            {!isEducatorRoute && <Navbar/>} 
            <Outlet/>
        </div>
    );
};

export default Root;