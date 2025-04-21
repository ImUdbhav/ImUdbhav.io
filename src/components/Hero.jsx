import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svg1 from '../assets/svg1.svg';
import svg2 from '../assets/Grad_07.png';


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    // Title Animation
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".hero",
          start: "top center",
        },
      }
    );

    // Background Animation
    const particles = bgRef.current.querySelectorAll(".particle");
    particles.forEach((particle) => {
      gsap.to(particle, {
        x: "random(-50, 50)",
        y: "random(-50, 50)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);
  useEffect(() => {
    // Existing GSAP animations
    const svgElement = document.querySelector('svg[aria-hidden="true"]');
    gsap.to(svgElement, {
      rotation: 360,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <section
      className="hero h-screen relative bg-gray-900 text-white flex flex-col justify-center items-center text-center px-8 relative overflow-hidden"
    >
      {/* Celestial Animated Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 flex justify-center items-center overflow-hidden"
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle w-1 h-1 bg-white rounded-full opacity-50"
            style={{
              position: "absolute",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}                                                                                                                                                                                                                                                  ></div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute w-[69%] top-[15%] left-[2%]">
      <h1 className="hero-title text-shadow text-4xl md:text-9xl font-semibold tracking-tighter mb-6 z-10">
        Crafting  Immersive Digital Experiences
      </h1>
    
      {/* <p className="text-gray-400 text-lg md:text-xl max-w-2xl mt-12 z-10">
        Turning visions into reality through modern web development.
      </p> */}
      <div className="flex space-x-4 z-10 ml-[2.5rem] mt-20">
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition transform hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-transparent border border-indigo-600 text-indigo-400 font-semibold rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition transform hover:scale-105"
        >
          Contact Me
        </a>
      </div>
      </div>

      <div className="absolute -right-64 -z-0">
        <img src={svg2} alt="" style={{height:"60rem" }}/>
      </div>
      
     
      
    </section>
  );
};

export default Hero;
