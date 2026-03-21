import React from "react";
import Title from "./Title";
import { testimonials } from "../assets/assets";
import TestimonialCards from "./TestimonialCards";
const Testimonial = () => {
  return (
    <section className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title
        title="What Our Guests Say"
        subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
      />
      <ul className="flex flex-wrap items-center gap-6 mt-20 justify-center">
        {testimonials.map((testimonial) => (
          <TestimonialCards key={testimonial.id} testimonial={testimonial} />
        ))}
      </ul>
    </section>
  );
};

export default Testimonial;
