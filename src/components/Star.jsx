import React from "react";

const Star = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {Array(5).fill(0).map((_, index) => (
        <svg
          key={index}
          className="w-4 h-4 text-yellow-400"
          fill={rating > index ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z"
          />
        </svg>
      ))}
    </div>
  );
};

export default Star;