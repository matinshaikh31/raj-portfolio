import React from "react";
import ProjectCard from "./card/ProjectCard";

const projects = [
  {
    title: "Tech Expo",
    subtitle: "Branding / Identity / UX",
    year: "2024",
    image: "src/assets/images/work/w1.png",
  },
  {
    title: "Honigdachs",
    subtitle: "UI/UX Design / Agency Website",
    year: "2024",
    image: "src/assets/images/work/w2.png",
  },
  {
    title: "Unboxing Community",
    subtitle: "App design / Consumer strategy",
    year: "2023",
    image: "src/assets/images/work/w3.png",
  },
  {
    title: "Motion Design",
    subtitle: "Motion / Micro Interaction",
    year: "2019",
    image: "src/assets/images/work/w4.png",
  },
  {
    title: "Neuramonks",
    subtitle: "UI/UX design / Motion Design",
    year: "2017",
    image: "src/assets/images/work/w5.png",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#0f0d0d] text-white font-sansBody px-6 md:px-16 lg:px-24 py-24">
      <div className="text-center mb-16 px-4">
        {/* Subtitle */}
        <p className="text-[#A1A1A1] text-xs md:text-sm tracking-widest uppercase font-sansBody">
          // THE HALL OF FAME //
        </p>

        {/* Title */}
        <h2 className="mt-2 text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] font-serif leading-none">
          <span className="block">FEATURED</span>
          <div className="mt-4 flex justify-center items-center gap-4">
            {/* Line */}
            <div className="w-30 h-[10px] bg-[#FF6C4F] rounded-full"></div>

            {/* WORK */}
            <span className="text-white text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] font-extrabold tracking-tight">
              WORK
            </span>
          </div>
        </h2>
        {/* Line + WORK in one row, centered */}
      </div>

      {/* Masonry Grid Layout */}
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ProjectCard
            project={projects[0]}
            height="medium"
            gradientClass="card-gradient-1"
          />
          <ProjectCard
            project={projects[1]}
            height="medium"
            gradientClass="card-gradient-2"
          />
        </div>

        {/* Row 2: Full width card */}
        <div className="mb-6">
          <ProjectCard
            project={projects[2]}
            height="wide"
            gradientClass="card-gradient-3"
          />
        </div>

        {/* Row 3: Two cards side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            project={projects[3]}
            height="medium"
            gradientClass="card-gradient-4"
          />
          <ProjectCard
            project={projects[4]}
            height="medium"
            gradientClass="card-gradient-5"
          />
        </div>
      </div>
      <img src="src/assets/images/work/nuv.png" alt="Line" className="w-full" />
    </section>
  );
}
