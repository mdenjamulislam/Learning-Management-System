import React from 'react';

const Loading = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loading;