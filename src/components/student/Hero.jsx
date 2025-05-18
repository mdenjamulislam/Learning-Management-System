import React from "react";
import { assets } from "../../assets/assets";
import SearchBar from "./SearchBar";

const Hero = () => {
    return (
        <section className="w-full"> 
            <div className="w-full pt-36 px-7 md:px-0 bg-gradient-to-b from-cyan-800/70 to-transparent">
                <div className="lg:max-w-3xl mx-auto space-y-3 flex items-center justify-center text-center flex-col">
                    <h1 className="md:text-home-heading-large text-home-heading-small font-semibold relative mb-0 md:mb-5">
                        Empower your future with the courses designed to <span className="text-blue-600">fit your choice.</span>
                        <img src={assets.sketch} alt="" className="md:block hidden absolute -bottom-7 right-2" />
                    </h1>
                    <p>Explore a wide range of courses and unlock your potential with our expert-led programs.</p>
                    <SearchBar/>
                </div>
            </div>
        </section>
    );
};

export default Hero;
