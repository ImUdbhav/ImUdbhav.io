import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import rogueImage from '../assets/Rogue.svg';
import { HiSquare3Stack3D } from "react-icons/hi2"
import { MdAnimation } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
      }
    });
  
    const boxes = containerRef.current.querySelectorAll('.bento-box');
    tl.fromTo(boxes, {
      y: 50,
      opacity: 0,
      scale: 0.9,
      rotate: -10
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.15
    });
  
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  

  return (
    <section id='about' className="py-28 px-6 md:px-12 bg-slate-950">
      <div ref={containerRef} className="max-w-7xl mt-24 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Core Skills Box */}
        <div className="bento-box opacity-0 translate-y-[50px] bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300">
          <img src={rogueImage} className="mb-4 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20" alt="Core Skills" />
          <h3 className="text-2xl font-grotesk font-semibold text-white mb-4">Creative Developer</h3>
          <p className="text-slate-400 leading-relaxed font-mono">
            Bridging design and technology to create immersive digital experiences with clean, maintainable code.
          </p>
        </div>

        {/* Tech Stack Box */}
        <div className="bento-box opacity-0 translate-y-[50px] bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300">
  <div className="mb-4 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  </div>
          <h3 className="text-2xl font-grotesk font-semibold text-white mb-4 ">Technical Arsenal</h3>
          <div className="grid grid-cols-2 gap-5 font-mono font-semibold text-center">
            {['ReactJS', 'JavaScript', 'GSAP', 'Tailwind', 'Motion'].map((tech) => (
              <span 
                key={tech} 
                className=" bg-slate-800/50 rounded-lg text-slate-300 text-sm text-center  hover:bg-purple-500/20 py-3 px-3" 
              >
                {tech}
              </span>
            ))}
          </div>
          <div className='mt-20 h-20 w-26 text-purple-300 '>
          <HiSquare3Stack3D style={{height:'100%', width:'100%'}}/>
          </div>
          
        </div>

        {/* Experience Box */}
        <div className="bento-box opacity-0 translate-y-[50px] bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300">
        <div className="mb-4 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  </div>
          <h3 className="text-2xl font-grotesk font-semibold text-white mb-4">Development Expertise</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-mono">Frontend Architecture</span>
              <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[90%] h-full bg-rose-500/50 rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400 font-mono">Animation Systems</span>
              <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-rose-500/50 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className='mt-[90px] h-20 w-26 text-rose-300 '>
          <MdAnimation style={{height:'100%', width:'100%'}}/>
          </div>
          
        </div>

      {/* Global Freelance Expertise Box */}
{/* Global Freelance Approach Box */}
<div className="bento-box opacity-0 translate-y-[50px] bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 md:col-span-2 lg:col-span-1">
  <div className="mb-4 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  </div>
  <h3 className="text-2xl font-grotesk font-semibold text-white mb-4">Global Freelance Approach</h3>
  
  <div className="space-y-4">
    {/* Timezone Section */}
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 text-sky-400 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="text-sky-400 font-medium font-mono">Timezone Agnostic</h4>
        <p className="text-slate-400 text-sm font-mono">
          Seamless collaboration across PST to GMT+8 with flexible scheduling
          and async-first workflows
        </p>
      </div>
    </div>

    {/* Workflow Section */}
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 text-sky-400 mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
        <h4 className="text-sky-400 font-medium font-mono">Precision Workflow</h4>
        <p className="text-slate-400 text-sm font-mono">
          Focused sprints with clear milestones and transparent communication
        </p>
      </div>
    </div>

    {/* Value Section */}
    <div className="mt-4 p-4 bg-slate-800/30 rounded-lg">
      <div className="flex items-center gap-2 text-sky-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="font-medium font-mono">Core Focus:</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-2 font-mono">
        <span className="text-xs text-sky-400/90 px-2 py-1 bg-sky-500/10 rounded">Quality over Quantity</span>
        <span className="text-xs text-sky-400/90 px-2 py-1 bg-sky-500/10 rounded">Strategic Solutions</span>
        <span className="text-xs text-sky-400/90 px-2 py-1 bg-sky-500/10 rounded">Client Education</span>
        <span className="text-xs text-sky-400/90 px-2 py-1 bg-sky-500/10 rounded">Future-Proof Code</span>
      </div>
    </div>

    <div className="text-xs text-slate-500 mt-3 text-center font-mono">
      Building strong foundations for lasting digital presence
    </div>
  </div>
</div>
         {/* Animation & SEO Combined Box */}
         <div className="bento-box opacity-0 translate-y-[50px] bg-slate-900/50 backdrop-blur-lg p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Animation Column */}
            <div className="space-y-4">
              <div className="mb-4 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-grotesk font-semibold text-white mb-2">Motion Engineering</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-indigo-400 text-sm font-mono">Performance Focus</span>
                  <span className="text-xs text-indigo-400/80 font-mono">60 FPS Target</span>
                </div>
                <div className="h-1 bg-slate-800 rounded-full">
                  <div className="w-4/5 h-full bg-indigo-500 rounded-full" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['GSAP', 'Motion', 'CSS Keyframes', 'Web Animations'].map((tech) => (
                    <span key={tech} className="px-2 py-1.5 font-mono bg-slate-800/50 rounded text-indigo-300 text-xs lg:text-sm text-center">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* SEO Column */}
            <div className="space-y-4">
              <div className="mb-4 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-grotesk font-semibold text-white mb-2">SEO Foundation</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-400 text-sm font-mono">Lighthouse Score</span>
                  <div className="radial-progress text-emerald-500 text-xs" style={{"--value":92}}>92%</div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {['Semantic HTML', 'Structured Data', 'Accessibility', 'Meta Tags'].map((item) => (
                    <span key={item} className="px-2 py-1 font-mono bg-slate-800/50 rounded text-emerald-300 text-xs lg:text-sm text-center">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-2 font-mono">Cross-browser optimized performance</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;