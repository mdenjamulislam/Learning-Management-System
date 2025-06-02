import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
    return (
        <section className='pt-10 pb-24'>
            <div className='container'>
                <div className="section_heading">
                    <h2 className='section_title'>Learn anything, anytime, anywhere</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, fugit delectus ex earum sint error animi quasi iste eos dicta, distinctio quod numquam temporibus cupiditate quidem ipsa suscipit voluptatibus magnam!</p>
                    <div className='flex items-center justify-center gap-4'>
                        <button className='btn'>Get stared</button>
                        <button className='btn btn_accent group/button'>Learn more <img className='-rotate-[30deg] group-hover/button:rotate-0 transition-all duration-200 ease-in-out' src={assets.arrow_icon} alt="Arrow Icon" /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;