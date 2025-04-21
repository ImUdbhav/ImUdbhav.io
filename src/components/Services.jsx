import React, { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = React.memo(({ service, index }) => {
  const cardRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    const hoverTL = gsap.timeline({ paused: true });
    hoverTL
      .to(card, { 
        y: -20,
        rotateZ: index % 2 === 0 ? -2 : 2,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(content, {
        opacity: 1,
        y: 0,
        duration: 0.4
      }, "-=0.1");

    const handleMouseEnter = () => {
      hoverTL.play();
      card.style.zIndex = 10;
    };
    
    const handleMouseLeave = () => {
      hoverTL.reverse();
      card.style.zIndex = 1;
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Entrance animation
    gsap.fromTo(card, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0,
        duration: 1,
        delay: index * 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%"
        }
      }
    );

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`group relative h-[600px] p-8 rounded-[4rem] bg-gradient-to-br 
        ${service.gradient} border-2 border-slate-800/50 hover:border-indigo-400/30 
        transition-all duration-500 overflow-hidden transform-style-preserve-3d 
        perspective-1000`}
    >
      <div 
        ref={contentRef}
        className="service-content relative z-10 h-full flex flex-col 
        justify-between opacity-0 translate-y-10"
      >
        <div>
          <div className="text-6xl font-bold mb-6 text-slate-300/50">
            0{index + 1}
          </div>
          <h3 className="text-3xl font-semibold font-grotesk text-slate-100 mb-6 leading-tight">
            {service.title}
          </h3>
          <p className="text-slate-400 text-lg mb-8 font-mono">{service.description}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {service.tech.map((tech, i) => (
            <span 
              key={i}
              className="px-4 py-2 text-sm font-medium bg-slate-900/50 
                text-slate-300 rounded-full backdrop-blur-lg hover:bg-indigo-500/30 
                transition-all duration-300 cursor-crosshair font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

const Services = () => {
  const sectionRef = useRef(null);

  const services = useMemo(() => [
    {
      title: "Immersive Web Experiences",
      description: "React-powered applications with scroll-triggered animations and 3D integrations",
      tech: ["React", "GSAP", "Animation"],
      gradient: "from-purple-500/20 to-indigo-500/20",
    },
    {
      title: "Dynamic UI Systems",
      description: "Component-driven interfaces with micro-interactions and fluid transitions",
      tech: ["React", "Tailwind", "CSS Modules", "Motion"],
      gradient: "from-emerald-500/20 to-cyan-500/20",
    },
    {
      title: "Performance Architecture",
      description: "Optimized web applications with lightning-fast load times and smooth animations",
      tech: ["Best-Practices","Memoization"],
      gradient: "from-rose-500/20 to-orange-500/20",
    }
  ], []);

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(sectionRef.current, 
      { opacity: 0 },
      { 
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id='services'
      ref={sectionRef}
      className="relative min-h-screen bg-slate-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-28 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-indigo-400 to-purple-400 mb-8 md:mb-0 leading-tight font-grotesk">
            Engineering Digital<br />
            <span className="text-slate-300 font-grotesk">Excellence</span>
          </h2>
          <p className="text-slate-400 md:max-w-md text-lg px-0 md:px-6 mt-4 md:text-xl leading-relaxed font-mono">
            Transforming ideas into performant web experiences through innovative 
            React architectures and captivating animations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative py-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
            />
          ))}
        </div>

        <div className="mt-32 border-t border-slate-800/50 pt-12 grid grid-cols-3 gap-4">
          {['React Architecture', 'Animation Systems', 'Performance Optimization'].map((text, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center"
            >
              <span className="text-4xl text-indigo-400 animate-pulse mb-2">
                {['✦', '◉', '◆'][index]}
              </span>
              <span className="text-lg md:text-xl text-slate-400 hover:text-indigo-300 
                transition-colors cursor-help">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;