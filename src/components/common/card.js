import React from "react";

const Card = ({ text }) => {
return (
    <div className="px-4 py-2 text-white bg-white bg-opacity-[20%] rounded font-inter font-normal text-xl transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
        {text}
    </div>
);
};

export default Card;
