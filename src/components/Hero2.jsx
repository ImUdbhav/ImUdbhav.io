import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svg3 from "../assets/Eyeweb.svg";
import svg4 from "../assets/svg4.svg";
gsap.registerPlugin(ScrollTrigger);
const Hero2 = () => {
  const marqueeRef = useRef(null);
  const contentRef = useRef(null);
  const leftSvgRef = useRef(null);
  const rightSvgRef = useRef(null);
  useEffect(() => {
    // Marquee animation with GSAP
    const marqueeAnimation = gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 120,
      ease: "linear",
      repeat: -1,
    });
    // Content fade in
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.InOut",
      }
    );
    // Left SVG bounce animation
    gsap.to(leftSvgRef.current, {
      y: "-20px",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    // Right SVG rotation animation
    gsap.to(rightSvgRef.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 20,
      repeat: -1,
      ease: "none",
    });
    return () => {
      marqueeAnimation.kill();
    };
  }, []);
  return (
    <section id="hero2" className="relative  min-h-screen w-full bg-slate-950 overflow-hidden">
      {/* Hero Content */}
      <div
        ref={contentRef}
        className="absolute left-[7%] top-1/4 w-[90%] md:w-[60%] lg:w-[50%] text-left z-10"
      >
        <p className="font-light font-grotesk text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed">
          "Transforming creative visions into captivating realities 
          through <span className="font-medium">innovative web development.</span> Let your ideas come to life with designs
          that inspire, interfaces that connect, and technology that empowers."
        </p>
      </div>
      {/* Marquee Text */}
      <div className="marquee absolute -bottom-[83px]  w-full overflow-hidden py-20">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap inline-block"
          style={{ width: "fit-content" }}
        >
          <span className="text-8xl md:text-9xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 px-4 leading-tight">
            Crafting Immersive Digital Experiences • Web Development • Frontend •
            ReactJS • TailwindCSS • Animations • GSAP • Modern Design
          </span>
          <span className="text-8xl md:text-9xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 px-4 leading-tight">
            Crafting Immersive Digital Experiences • Web Development • Frontend •
            ReactJS • TailwindCSS • Animations • GSAP • Modern Design
          </span>
        </div>
      </div>
      {/* SVGs */}
      <img
        ref={leftSvgRef}
        src={svg3}
        alt="Decorative SVG"
        className="absolute bottom-[17%] left-[8%] w-[18%] md:w-[16%] lg:w-[10%]  transform -translate-y-1/2"
      />
      <img
        ref={rightSvgRef}
        src={svg4}
        alt="Decorative SVG"
        className="absolute  top-[50%] md:top-[40%] right-[12%] md:right-[10%] w-[18%] md:w-[16%] lg:w-[10%] opacity-90"
      />
    </section>
  );
};
export default Hero2;