import React from "react";

import Star from "./Star";

const TestimonialCards = ({ testimonial }) => {
  return (
    <li key={testimonial.id} className="bg-white p-6 rounded-xl shadow">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-playfair text-xl">{testimonial.name}</p>
          <p className="text-gray">{testimonial.address}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 mt-4">
        <Star rating={testimonial.rating} />
      </div>
      <p className="text-gray-500 max-w-90 mt-4">{testimonial.review}</p>
    </li>
  );
};

export default TestimonialCards;
