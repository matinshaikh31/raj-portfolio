import React from "react";

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
    image: "src/assets/images/work/w1.png",
  },
  {
    title: "Unboxing Community",
    subtitle: "App design / Consumer strategy",
    year: "2023",
    image: "src/assets/images/work/w1.png",
  },
  {
    title: "Motion Design",
    subtitle: "Motion / Micro Interaction",
    year: "2019",
    image: "src/assets/images/work/w1.png",
  },
  {
    title: "Neuramonks",
    subtitle: "UI/UX design / Motion Design",
    year: "2017",
    image: "src/assets/images/work/w1.png",
  },
];

export default function FeaturedWork() {
  return (
    <section className=" text-white font-sans px-6 md:px-16 lg:px-24 py-24">
      <div className="text-center mb-16">
        <p className="text-[#A1A1A1] text-sm">// THE HALL OF FAME //</p>
        <h2 className="text-5xl font-serif mt-2">
          <span className="block">FEATURED</span>
          <span className="inline-block border-t-4 border-[#FF6C4F] mt-[-12px] pt-1 font-bold">
            WORK
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* First two side by side */}
        {projects.slice(0, 2).map((project, index) => (
          <div key={index} className="bg-[#1B1B1B] rounded-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-[#A1A1A1]">{project.subtitle}</p>
              <p className="text-sm text-[#A1A1A1] mt-2">@{project.year}</p>
            </div>
          </div>
        ))}

        {/* Large Centered Image */}
        <div className="md:col-span-2">
          <div className="bg-[#1B1B1B] rounded-md overflow-hidden">
            <img
              src="src/assets/images/work/w1.png"
              alt="Unboxing Community"
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">Unboxing Community</h3>
              <p className="text-sm text-[#A1A1A1]">
                App design / Consumer strategy
              </p>
              <p className="text-sm text-[#A1A1A1] mt-2">@2023</p>
            </div>
          </div>
        </div>

        {/* Last two side by side */}
        {projects.slice(3).map((project, index) => (
          <div key={index} className="bg-[#1B1B1B] rounded-md overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-[#A1A1A1]">{project.subtitle}</p>
              <p className="text-sm text-[#A1A1A1] mt-2">@{project.year}</p>
            </div>
          </div>
        ))}
      </div>
      <img src="src\assets\images\work\nuv.png" alt="Unboxing Community" />
    </section>
  );
}
