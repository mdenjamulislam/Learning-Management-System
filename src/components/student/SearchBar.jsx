import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {

    const nevigate = useNavigate()
    const [input, setInput] = useState(data ? data : '');

    const onSearchhandaler = (e) => {
        e.preventDefault();
        nevigate('/course-list/' + input);

    }

    return (
        <form onSubmit={onSearchhandaler} className="max-w-xl w-full md:h-12 h-11 flex items-center bg-white border border-gray-500/20 rounded">
            <img src={assets.search_icon} alt="Search Icon" className="md:w-auto w-10 px-3" />
            <input
                onChange={e => setInput(e.target.value)}
                value={input}
                type="text"
                placeholder="Search for courses"
                className="w-full h-full outline-none text-gray-500/80 px-3"
            />
            <button type="submit" className="bg-accent border border-accent rounded text-white md:px-10 px-7 md:py-3 py-2 mx-0 hover:bg-yellow-600">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
