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
    <section className=" text-white px-6 md:px-24 py-20 font-sans">
      {/* Top Floating Meta Over Line */}
      <div className="relative mb-20">
        <div className="border-b border-[#2C2C2C] mb-2"></div>
        <div className="relative z-10 flex justify-between text-xs text-[#A1A1A1] px-2 w-full">
          <span>07</span>
          <span>//EXPERIENCE</span>
          <span>2013 – PRESENT</span>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left - Heading */}
        <div className="md:w-1/3">
          <h2 className="text-4xl font-bold">EXPERIENCE</h2>
        </div>

        {/* Right - Experience List */}
        <div className="flex-1 space-y-16 pt-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Line ABOVE each experience card */}
              <div className="border-b border-[#2C2C2C] absolute top-0 left-0 w-full -translate-y-3"></div>

              <div className="flex flex-col md:flex-row justify-between pt-6">
                <div>
                  <h3 className="text-xl font-semibold uppercase">
                    {exp.company}
                  </h3>
                  <p className="text-xs text-[#A1A1A1] mt-1 font-medium">
                    {exp.role}
                  </p>
                  <p className="text-sm text-[#A1A1A1] mt-3 max-w-2xl leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <p className="text-sm text-[#A1A1A1] whitespace-nowrap mt-4 md:mt-0 md:text-right">
                  {exp.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
