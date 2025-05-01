import React from 'react';
import { Outlet } from 'react-router-dom';

const Educator = () => {
    return (
        <div>
            Educator Page
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Educator;