import React from "react";
import { assets } from "../../assets/assets";

const SearchBar = () => {
    return (
        <form action="" className="max-w-xl w-full md:h-12 h-11 flex items-center bg-white border border-gray-500/20 rounded">
            <img src={assets.search_icon} alt="Search Icon" className="md:w-auto w-10 px-3" />
            <input
                type="text"
                placeholder="Search for courses"
                className="w-full h-full outline-none
                 text-gray-500/80"
            />
            <button type="submit" className="bg-accent rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
