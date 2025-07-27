import React, { useState } from "react";
import t1 from "../assets/images/testimonial/t1.png";

const testimonials = [
  {
    name: "Karishma Khemani",
    title: "Founder's Associate @Leap",
    quote: "Raj is phenomenal. An absolute pleasure to work with!",
    tags: ["Web Design", "Web Development", "SEO"],
    image: t1,
  },
  {
    name: "John Doe",
    title: "CEO @StartupX",
    quote: "Raj is an outstanding collaborator. Delivered top quality.",
    tags: ["UX Audit", "Optimization"],
    image: t1,
  },
];

const TrustedSection = () => {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const next = () => setIndex((index + 1) % testimonials.length);
  const prev = () =>
    setIndex((index - 1 + testimonials.length) % testimonials.length);

  return (
    <section className=" text-white px-6 md:px-20 py-20 font-sans">
      {/* Heading and Testimonials Label */}
      <div className="relative mb-50">
        <h2 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] leading-tight font-light">
          <span className="font-serif block">TRUSTED</span>
          <span className="font-bold block">BY FOUNDERS</span>
        </h2>

        <div className="absolute left-0 mt-6 md:mt-10 md:ml-[280px] max-w-xl">
          <p className="text-xs uppercase text-gray-400 mb-1">(Testimonials)</p>
          <p className="text-gray-400 text-sm md:text-base">
            Here’s what my clients say about our collaboration. Their
            satisfaction and meeting expectations are my top priorities,
            ensuring the best experience possible.
          </p>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <p className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            "{testimonial.quote}"
          </p>
          <p className="text-md font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-400 mb-4">{testimonial.title}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {testimonial.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#1e1c1c] text-sm rounded-full border border-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-[#ff6a3d] text-white text-sm rounded-full"
            >
              PREV
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-[#ff6a3d] text-white text-sm rounded-full"
            >
              NEXT
            </button>
          </div>

          {/* Pagination */}
          <div className="mt-4 text-sm text-gray-500">
            {index + 1} <span className="mx-2">——</span> {testimonials.length}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="rounded-xl w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
