import React from 'react';
import { assets } from '../../assets/assets';

const Footer = () => {
    return (
        <footer className='w-full bg-gray-900 dark:bg-slate-800'>
            <div className="container">
                <div className='flex flex-col md:flex-row items-start justify-center gap-10 md:gap-32 py-10'>
                    <div className='text-left space-y-4'>
                        <img src={assets.logo_dark} alt="Logo" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laudantium iure eaque dolore exercitationem quas.</p>
                    </div>
                    <div className='text-left space-y-4'>
                        <h3 className='text-xl font-medium'>Company</h3>
                        <ul className='text-sm text-white/70 space-y-2'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex flex-col gap-4 items-start w-full'>
                        <h3 className='text-xl font-medium'>Subscribe to our newsletter</h3>
                        <p className='text-sm text-white/70'>Lorem ipsum dolor sit amet.</p>
                        <form action="" className='join'>
                            <div>
                                <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                    >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="write your email" required />
                                </label>
                                <div className="validator-hint hidden">Enter valid email address</div>
                            </div>
                            <button className="btn btn_accent join-item">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            
            <div className='bg-gray-800 dark:bg-slate-900 px-4 md:px-0 py-2 text-center'>
                <p className='text-sm'>Copyright 2025 &copy; Edemy. All Right Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;