import React from "react";

const experiences = [
  {
    company: "STEALTH STARTUP",
    role: "FOUNDING MEMBER",
    description:
      "Clavmen inspires creativity and makes learning piano fun. The sleek, lightweight body fits easily into gig bags for portability.",
    date: "2025 – PRESENT",
  },
  {
    company: "APPSROW",
    role: "UI / UX DESIGNER",
    description:
      "Fitness and well-being with personalized coaching and innovative wellness solutions.",
    date: "2024 – JAN TO DEC",
  },
  {
    company: "UNBOXING COMMUNITY",
    role: "PRODUCT DESIGN INTERN",
    description:
      "Gaming Experiences with Innovative Technology and Unparalleled Performance.",
    date: "2023 – JUL TO DEC",
  },
];

export default function Experience() {
  return (
    <section className=" text-white px-6 md:px-16 lg:px-24 py-20 font-sans">
      {/* Top Section Label */}
      <div className="flex justify-between text-xs border-b border-[#1F1F1F] pb-4 text-[#A1A1A1]">
        <span>07</span>
        <span>//EXPERIENCE</span>
        <span>2013 – PRESENT</span>
      </div>

      {/* Section Heading */}
      <div className="mt-12 mb-10">
        <h2 className="text-4xl font-bold">EXPERIENCE</h2>
      </div>

      {/* Experience List */}
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-b border-[#1F1F1F] pb-6 flex flex-col md:flex-row justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-bold uppercase">{exp.company}</h3>
              <p className="text-xs font-semibold text-[#A1A1A1] mt-1">
                {exp.role}
              </p>
              <p className="text-sm text-[#A1A1A1] mt-2 max-w-xl leading-relaxed">
                {exp.description}
              </p>
            </div>
            <div className="text-sm text-[#A1A1A1] md:text-right whitespace-nowrap mt-2 md:mt-0">
              {exp.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
