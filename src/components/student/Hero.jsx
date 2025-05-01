import React from "react";
import { assets } from "../../assets/assets";

const Hero = () => {
    return (
        <section>
            <div className="w-full pt-36 px-7 md:px-0 bg-gradient-to-b from-cyan-800/70 to-transparent">
                <div className="lg:max-w-4xl mx-auto space-y-3 flex items-center justify-center text-center flex-col">
                    <h1 className="md:text-2xl text-lg font-semibold relative">
                        Empower your future with the courses designed to <span className="text-blue-600">fit your choice</span>
                        <img src={assets.sketch} alt="" className="md:block hidden absolute -bottom-7 right-0" />
                    </h1>
                    <p>Explore a wide range of courses and unlock your potential with our expert-led programs.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
