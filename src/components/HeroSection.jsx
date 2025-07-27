import React from "react";
import { GoArrowUpRight } from "react-icons/go";

export default function HeroSection() {
  return (
    <section className="min-h-screen  text-white font-sans px-6 md:px-16 lg:px-24 py-10">
      {/* Top Header */}

      {/* Main Title */}
      <div className="mt-16 text-center lg:text-left">
        <h1 className="text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] font-serif leading-none">
          <span className="text-white font-normal">RAJ </span>
          <span className="text-white font-bold">CHHATWANI</span>
          <sup className="text-white text-5xl align-top">©</sup>
        </h1>
      </div>

      {/* Content Row */}
      <div className="mt-10 flex flex-col lg:flex-row items-start lg:items-start justify-between gap-16">
        {/* Left Side - Text Content */}
        <div className="flex-1 max-w-xl">
          <div className="mb-4 text-xl">
            <span className="inline-block transform rotate-45">➝</span>
          </div>
          <p className="text-[#A1A1A1] text-xl leading-relaxed">
            Made with hate
            <br />
            because perfection isn't born out of love,
            <br />
            it's forged in frustration, obsession, and an
            <br />
            unrelenting pursuit of something better.
          </p>
          <button className="mt-8 bg-[#FF6C4F] hover:bg-[#e85a3e] text-white font-bold py-3 px-6 rounded-full text-lg tracking-wide flex items-center gap-2">
            BOOK A CALL
            <span>
              <GoArrowUpRight />
            </span>
          </button>
        </div>

        {/* Right Side - Image and Date in same row */}
        <div className="flex-1 flex flex-row items-start justify-end gap-6">
          <div>
            <img
              src="src\assets\images\heroimg.png"
              alt="Raj"
              className="w-full max-w-sm rounded-lg shadow-lg"
            />
          </div>
          {/* Bottom Freelance Info */}
          <div className="mt-12 lg:mt-24 text-right text-[#A1A1A1] text-sm whitespace-nowrap self-end">
            <div className="text-xs uppercase">
              Available for freelance work
            </div>
            <div className="text-5xl font-bold text-[#A1A1A1] mt-2">
              APR ‘25
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
