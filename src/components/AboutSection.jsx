import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" text-white font-sans ">
      <div className="h-[200vh] relative">
        {/* Pinned Vision Statement */}
        <div
          ref={pinRef}
          className="h-screen flex flex-col justify-center items-center px-6 md:px-24 text-center"
        >
          <p className="uppercase text-xs tracking-widest text-[#A1A1A1] mb-4">
            ABOUT ME
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-4xl leading-tight">
            INDIA-BASED INDEPENDENT CREATIVE, SPECIALIZING IN HELPING BUSINESSES
            AND INDIVIDUALS TURN THEIR IDEAS INTO IMPACTFUL DEVELOPMENT AND
            DESIGN SOLUTIONS.
          </h2>
          <span className="text-2xl mt-4">✍️</span>
        </div>
      </div>

      {/* Scrollable Image Composition */}
      <div className="  px-6 md:px-24 py-24 space-y-24 z-50">
        {/* Row 1 */}
        <div className="flex justify-between items-center gap-6">
          <img
            src="src\assets\images\about\a1.png"
            alt="Me 1"
            className="w-[160px] h-[200px] object-cover rounded-md"
          />
          <img
            src="src\assets\images\about\a2.png"
            alt="Me 2"
            className="w-[160px] h-[200px] object-cover rounded-md"
          />
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src="src\assets\images\about\a3.png"
            alt="Me 3"
            className="w-[180px] h-[180px] object-cover rounded-md"
          />
        </div>
        {/* Final Image - Large Portrait */}
        <div className="flex justify-center">
          <img
            src="src\assets\images\about\a4.png"
            alt="Me 4"
            className="w-[320px] h-[480px] object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
}
