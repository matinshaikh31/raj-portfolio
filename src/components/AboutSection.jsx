// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function AboutSection() {
//   const sectionRef = useRef(null);
//   const pinRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: pinRef.current,
//         start: "top top",
//         end: "+=200%",
//         pin: true,
//         scrub: true,
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className=" text-white font-sans ">
//       <div className="h-[200vh] relative">
//         {/* Pinned Vision Statement */}
//         <div
//           ref={pinRef}
//           className="h-screen flex flex-col justify-center items-center px-6 md:px-24 text-center"
//         >
//           <p className="uppercase text-xs tracking-widest text-[#A1A1A1] mb-4">
//             ABOUT ME
//           </p>
//           <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold max-w-4xl leading-tight">
//             INDIA-BASED INDEPENDENT CREATIVE, SPECIALIZING IN HELPING BUSINESSES
//             AND INDIVIDUALS TURN THEIR IDEAS INTO IMPACTFUL DEVELOPMENT AND
//             DESIGN SOLUTIONS.
//           </h2>
//           <span className="text-2xl mt-4">✍️</span>
//         </div>
//       </div>

//       {/* Scrollable Image Composition */}
//       <div className="  px-6 md:px-24 py-24 space-y-24 z-50">
//         {/* Row 1 */}
//         <div className="flex justify-between items-center gap-6">
//           <img
//             src="src\assets\images\about\a1.png"
//             alt="Me 1"
//             className="w-[160px] h-[200px] object-cover rounded-md"
//           />
//           <img
//             src="src\assets\images\about\a2.png"
//             alt="Me 2"
//             className="w-[160px] h-[200px] object-cover rounded-md"
//           />
//         </div>

//         {/* Center Image */}
//         <div className="flex justify-center">
//           <img
//             src="src\assets\images\about\a3.png"
//             alt="Me 3"
//             className="w-[180px] h-[180px] object-cover rounded-md"
//           />
//         </div>
//         {/* Final Image - Large Portrait */}
//         <div className="flex justify-center">
//           <img
//             src="src\assets\images\about\a4.png"
//             alt="Me 4"
//             className="w-[320px] h-[480px] object-cover rounded-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
            <img src="src/assets/images/about/sign.png" alt="" />
          </span>
        </div>

        {/* Images that will scroll over the pinned text */}
        <div className="absolute inset-0 pointer-events-none">
          {/* First image - left side */}
          <img
            ref={(el) => (imagesRef.current[0] = el)}
            src="src/assets/images/about/a1.png"
            alt="Me 1"
            className="absolute left-[15%] top-1/2 w-[180px] h-[220px] object-cover rounded-lg shadow-2xl z-20"
          />

          {/* Second image - right side */}
          <img
            ref={(el) => (imagesRef.current[1] = el)}
            src="src/assets/images/about/a2.png"
            alt="Me 2"
            className="absolute right-[15%] top-1/2 w-[180px] h-[220px] object-cover rounded-lg shadow-2xl z-50"
          />

          {/* Third image - center */}
          <img
            ref={(el) => (imagesRef.current[2] = el)}
            src="src/assets/images/about/a3.png"
            alt="Me 3"
            className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] object-cover rounded-lg shadow-2xl z-20"
          />

          {/* Final large image - center bottom */}
          <img
            ref={(el) => (imagesRef.current[3] = el)}
            src="src/assets/images/about/a4.png"
            alt="Me 4"
            className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 w-[250px] h-[350px] object-cover rounded-lg shadow-2xl z-30"
          />
        </div>
      </section>
    </>
  );
}
