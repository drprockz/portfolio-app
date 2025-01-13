import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ image, title, description, role, date, link }) => {
  return (
    <div className="max-w-[33%] h-fit bg-[#202020] rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />

      {/* Text Content Section */}
      <div className="p-4">
        {/* Title and Date */}
        <div className="flex justify-between items-center">
          <h3 className="font-inter font-bold text-white text-[40px] -tracking-[5%] underline">{title}</h3>
          <span className="font-inter font-medium text-[#A1A1A1] text-[12px] uppercase">{date}</span>
        </div>

        {/* Description */}
        <p className="font-inter font-normal text-white text-[40px] -tracking-[5%] mt-2 w-[85%]">{description}</p>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-700 flex justify-between items-center">
        <span className="font-inter font-normal text-[#A1A1A1] text-[14px] uppercase">
          <span className="font-inter font-bold text-white uppercase">→ Role:</span> {role}
        </span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter font-normal uppercase text-white text-[14px] hover:underline hover:cursor-pointer"
        >
          View Detail →
        </a>
      </div>
    </div>
  );
};

// Prop Types for Validation
ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default ProjectCard;
