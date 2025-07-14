import React from "react";

export default function ServiceSection() {
  return (
    <section className="  text-white font-sans px-6 md:px-16 lg:px-24 py-20">
      <h3 className="text-[#A1A1A1] text-sm font-semibold mb-12">
        // I MIGHT HELP YOU //
      </h3>

      <div className="space-y-12">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-[#2C2C2C] pb-8">
          <div className="flex items-baseline gap-4">
            <span className="text-[#FF6C4F] font-bold">[02]</span>
            <h4 className="text-3xl font-bold">UI/UX design</h4>
          </div>
          <p className="text-[#A1A1A1] text-right text-sm md:max-w-sm mt-4 md:mt-0">
            / User-centric approach / Seamless navigation /<br />
            Intuitive Interfaces
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-[#2C2C2C] pb-8">
          <div className="flex items-baseline gap-4">
            <span className="text-[#FF6C4F] font-bold">[03]</span>
            <h4 className="text-3xl font-bold">Branding & identity</h4>
          </div>
          <p className="text-[#A1A1A1] text-right text-sm md:max-w-sm mt-4 md:mt-0">
            / Memorable & unique / Consistent brand voice /<br />
            Strategic visual identity / Creative & impactful
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-[#2C2C2C] pb-8">
          <div className="flex items-baseline gap-4">
            <span className="text-[#FF6C4F] font-bold">[05]</span>
            <h4 className="text-3xl font-bold">Motion Design</h4>
          </div>
          <p className="text-[#A1A1A1] text-right text-sm md:max-w-sm mt-4 md:mt-0">
            / User-friendly shopping / Secure payment gateways
            <br />/ Optimized for sales growth
          </p>
        </div>
      </div>
    </section>
  );
}
