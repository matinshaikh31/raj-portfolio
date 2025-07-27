import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import a1 from "../assets/images/about/a1.png";
import a2 from "../assets/images/about/a2.png";
import a3 from "../assets/images/about/a3.png";
import a4 from "../assets/images/about/a4.png";
import sign from "../assets/images/about/sign.png";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Create timeline for the entire sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: textRef.current,
          pinSpacing: false,
        },
      });

      // Set initial states for all images
      gsap.set(imagesRef.current, {
        y: "100vh",
        opacity: 0,
        scale: 0.8,
      });

      // Animate images one by one
      imagesRef.current.forEach((img, index) => {
        if (img) {
          const isLastImage = index === imagesRef.current.length - 1;

          tl.to(
            img,
            {
              y: isLastImage ? "0vh" : "-50vh", // Last image stops at center
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
            },
            index * 0.5
          ); // Stagger timing
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className=" text-white font-sansBody relative  "
        style={{ height: "400vh" }}
      >
        <div className="relative  px-6 md:px-24 py-20">
          <div className="border-b border-[#2C2C2C] mb-2"></div>
          <div className="relative z-10 flex justify-center text-xs text-[#A1A1A1] px-2  font-serif">
            <span>About</span>
          </div>
        </div>
        {/* Pinned Text Section */}

        <div
          ref={textRef}
          className=" flex flex-col justify-center items-center px-6 md:px-24 text-center relative z-10"
        >
          {/* <p className="uppercase text-xs tracking-widest text-[#666666] mb-6 font-sansBody">
          ABOUT ME
        </p> */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold max-w-6xl leading-tight font-serifTitle">
            INDIA-BASED INDEPENDENT CREATIVE, SPECIALIZING IN HELPING BUSINESSES
            AND INDIVIDUALS TURN THEIR IDEAS INTO IMPACTFUL DEVELOPMENT AND
            DESIGN SOLUTIONS.
          </h2>
          <span className="text-2xl mt-6">
            <img src={sign} alt="" />
          </span>
        </div>

        {/* Images that will scroll over the pinned text */}
        <div className="absolute inset-0 pointer-events-none">
          {/* First image - left side */}
          <img
            ref={(el) => (imagesRef.current[0] = el)}
            src={a1}
            alt="Me 1"
            className="absolute left-[15%] top-1/2 w-[180px] h-[220px] object-cover rounded-lg shadow-2xl z-20"
          />

          {/* Second image - right side */}
          <img
            ref={(el) => (imagesRef.current[1] = el)}
            src={a2}
            alt="Me 2"
            className="absolute right-[15%] top-1/2 w-[180px] h-[220px] object-cover rounded-lg shadow-2xl z-50"
          />

          {/* Third image - center */}
          <img
            ref={(el) => (imagesRef.current[2] = el)}
            src={a3}
            alt="Me 3"
            className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] object-cover rounded-lg shadow-2xl z-20"
          />

          {/* Final large image - center bottom */}
          <img
            ref={(el) => (imagesRef.current[3] = el)}
            src={a4}
            alt="Me 4"
            className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 w-[250px] h-[350px] object-cover rounded-lg shadow-2xl z-30"
          />
        </div>
      </section>
    </>
  );
}
