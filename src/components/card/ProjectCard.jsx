const ProjectCard = ({ project, height = "auto", gradientClass = "" }) => {
  const heightClasses = {
    medium: "h-[400px]",
    wide: "h-[500px]",
    tall: "h-[600px]",
    auto: "h-auto",
  };

  const imageHeightClasses = {
    medium: "h-[280px]",
    wide: "h-[380px]",
    tall: "h-[480px]",
    auto: "h-auto",
  };

  return (
    <div
      className={`${
        gradientClass || "bg-gradient-to-br from-[#1a1a2e] to-[#16213e]"
      } rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02] group ${
        heightClasses[height]
      }`}
    >
      <div className="p-4 h-full flex flex-col">
        <div className="flex-1 mb-4">
          <img
            src={project.image}
            alt={project.title}
            className={`rounded-xl w-full object-cover group-hover:scale-105 transition-transform duration-300 ${imageHeightClasses[height]}`}
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-white text-lg font-semibold font-serifTitle group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
              @{project.year}
            </span>
          </div>
          <p className="text-sm text-gray-300 font-sansBody leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
