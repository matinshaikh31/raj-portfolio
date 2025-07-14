import React from "react";

export default function StackToolsSection() {
  const tools = [
    {
      id: 1,
      name: "FIGMA",
      role: "DESIGN TOOL",
      desc: "Figma is a collaborative web application for design with additional offline features for macOS and Windows.",
      percent: "98%",
    },
    {
      id: 2,
      name: "ADOBE AFTER EFFECT",
      role: "FRONT END DEVELOPMENT",
      desc: "JavaScript, often abbreviated as JS, is a programming language and technology alongside HTML and CSS.",
      percent: "92%",
    },
    {
      id: 3,
      name: "ADOBE PHOTOSHOP",
      role: "MACBOOK PRO",
      desc: "Apple Inc. is an American multinational tech company headquartered in California, in Silicon Valley.",
      percent: "M4",
    },
    {
      id: 4,
      name: "FRAMER",
      role: "WEB DESIGN PLATFORM",
      desc: "The Internet is your canvas. Framer is where design and publish stunning sites based in Amsterdam.",
      percent: "96%",
    },
  ];

  return (
    <section className=" text-white font-sans px-6 md:px-16 lg:px-24 py-20">
      <div className="flex justify-between items-center text-sm text-[#A1A1A1] border-b border-[#2C2C2C] pb-2">
        <span>010</span>
        <span className="font-semibold tracking-wide">EXPERTISE</span>
        <span className="text-xs">SUB TITLE</span>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          STACK & TOOLS
        </h3>

        <div className="space-y-10">
          {tools.map((tool) => (
            <div key={tool.id} className="border-b border-[#2C2C2C] pb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-[#A1A1A1] uppercase font-semibold mb-2">
                    {tool.role}
                  </p>
                  <p className="text-sm text-[#A1A1A1] max-w-md leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
                <span className="text-sm text-[#A1A1A1] font-semibold whitespace-nowrap">
                  {tool.percent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
