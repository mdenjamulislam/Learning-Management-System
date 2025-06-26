import React, { useEffect, useState } from "react";

const Rating = ({ initialTaring, onRate }) => {
    const [rating, setRating] = useState(initialTaring || 0);

    const handlerating = (value) => {
        setRating(value);
        if (onRate) onRate(value);
    };

    useEffect(() => {
        if (initialTaring) {
            setRating(initialTaring);
        }
    }, [initialTaring]);

    return (
        <div>
            {Array.from({ length: 5 }, (_, index) => {
                const starValue = index + 1;
                return (
                    <span key={index} onClick={() => handlerating(starValue)} className={`text-xl sm:text-2xl cursor-pointer transition-colors ${starValue <= rating ? "text-accent" : "text-gray-400 dark:text-gray-300"}`}>
                        &#9733;
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;
