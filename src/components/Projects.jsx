import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PrismREC from '../assets/PrismRec3.webm';
import ZentryREC from '../assets/ZentryRecFi.webm';
import SynerREC from '../assets/SynerRec2.webm';
import SynerSS from '../assets/SynerSS.webp';
import ZentrySS from '../assets/ZentrySS.webp';
import PrismSS from '../assets/Prism&PoiseSS2.webp';
import NissiSS from '../assets/NISSISS.webp';
import NissiREC from '../assets/NissiRec2.webm';
import CelestiaSS from '../assets/celestianightsss2.webp';
import CelestiaREC from '../assets/CelestiaNightsRec.webm';
import DreamSS from '../assets/DreamSS.webp';
import DreamREC from '../assets/DreamRec.webm';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  const videoRefs = useRef([]);

  const projects = [
    {
      title: "CelestiaNights",
      description: " An immersive, GSAP-powered event website showcasing an interactive festival experience with dynamic animations, smooth transitions, and engaging UI elements.",
      tech: ["ReactJS", "GSAP", "Tailwind"],
      video: CelestiaREC,
      poster:  CelestiaSS
    },
   
    {
      title: "ZentryGaming",
      description: "ZentryGaming Clone - a gaming community website with immersive animations.",
      tech: ["ReactJS", "GSAP", "Tailwind"],
      video: ZentryREC,
      poster:  ZentrySS
    },
    {
      title: "Prism & Poise",
      description: "Prism and Poise - where art, culture, and fashion converge.",
      tech: ["ReactJS", "GSAP", "Tailwind"],
      video: PrismREC,
      poster: PrismSS
    },
    {
      title: "Dreamitechture",
      description: "Dreamitechture is a visually immersive architecture portfolio website that showcases innovative design services, featured projects, and the studio’s philosophy. The site blends smooth animations, interactive galleries, and modern layouts to highlight architectural expertise and inspire potential clients.",
      tech: ["ReactJS", "Motion", "Tailwind"],
      video: DreamREC,
      poster: DreamSS
    },
    {
      title: "SynerGrowthSolutions",
      description: "Live Consultancy website for SynerGrowthSolutions with custom animations.",
      tech: ["ReactJS", "Motion", "Tailwind"],
      video: SynerREC,
      poster: SynerSS
    },
    {
      title: "NISSIHomeCare",
      description: "Live NDIS service provider website with custom animations.",
      tech: ["ReactJS", "GSAP", "Tailwind"],
      video: NissiREC,
      poster: NissiSS

    },
   
  ];

  useEffect(() => {
    gsap.set(projectsRef.current.children, { opacity: 0, y: 50 });

    gsap.to(projectsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: projectsRef.current,
        start: "top center+=200",
        toggleActions: "play none none none"
      }
    });
  }, []);

  const handleHover = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].muted = true;
      videoRefs.current[index].play();
    }
  };

  const handleHoverEnd = (index) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <section id='projects' className="relative py-28 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-5xl md:text-7xl font-grotesk font-bold text-indigo-600 mb-16">
          Featured Projects
        </h2>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24 mb-24">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-slate-900/50 backdrop-blur-lg rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="h-64 overflow-hidden relative">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-contain md:object-cover object-center"
                  poster={project.poster}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleHoverEnd(index)}
                  muted
                  loop
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-slate-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-indigo-500/10 text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
