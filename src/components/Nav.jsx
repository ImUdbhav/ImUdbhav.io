import React, { useRef, useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { gsap } from 'gsap';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);
  const menuRef = useRef(null);
  const cursorRef = useRef(null);

  
  const navLinks = [
    { to: "hero2", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "services", label: "Services" },
    { to: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // Custom cursor animation
    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    };
    window.addEventListener('mousemove', moveCursor);

    // Initial setup
    if (navRef.current) {
      gsap.set(navRef.current, {
        visibility: 'hidden',
        clipPath: 'circle(0% at calc(100% - 55px) 45px)'
      });
      
      gsap.set(menuRef.current?.children, {
        opacity: 0,
        x: 100,
        rotateY: 90
      });
    }

    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    
    if (!isOpen) {
      // Open animation
      gsap.to(navRef.current, {
        visibility: 'visible',
        clipPath: 'circle(150% at calc(100% - 55px) 45px)',
        duration: 1,
        ease: 'power4.inOut'
      });

      // Button animation
      gsap.to(btnRef.current, {
        scale: 1,
        rotate: 180,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)'
      });

      // Stagger menu items with 3D effect
      gsap.to(menuRef.current?.children, {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power4.out',
        delay: 0.3
      });
    } else {
      // Close animation
      gsap.to(navRef.current, {
        clipPath: 'circle(0% at calc(100% - 55px) 45px)',
        duration: 0.8,
        ease: 'power4.inOut',
        onComplete: () => {
          gsap.set(navRef.current, { visibility: 'hidden' });
        }
      });

      // Button reverse animation 
      gsap.to(btnRef.current, {
        scale: 1,
        rotate: 0,
        duration: 0.6,
        ease: 'power2.inOut'
      });

      // Hide menu items with 3D effect
      gsap.to(menuRef.current?.children, {
        opacity: 0,
        x: 100,
        rotateY: 90,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power2.in'
      });
    }
  };

  return (
    <header className="fixed top-2 left-0 right-2 flex justify-between h-20 z-50">
      <h1 className='font-unbounded text-slate-500 text-sm font-light p-[15px]'>Im.Udbhav</h1>
      <div className="custom-cursor hidden md:block" ref={cursorRef}></div>
      <div className="relative w-full">
        <button
          ref={btnRef}
          onClick={toggleNav}
          className={`header_btn absolute right-4 top-2 md:top-4 z-[60] w-12 h-12 cursor-pointer rounded-full transition-all duration-300 hover:scale-110
            ${isOpen ? 'bg-black' : 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'}`}
          type="button"
          aria-label="Toggle navigation"
        />
        <nav
          ref={navRef}
          className="header_nav fixed overflow-hidden z-[55] top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center px-8"
        >
          <ul ref={menuRef} className="header_menu space-y-4">
            {navLinks.map((link) => (
              <li key={link.label} className="header_menu-item text-center perspective-1000">
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="header_menu-link text-6xl md:text-8xl font-light tracking-tighter text-white hover:text-black transition-colors duration-300 inline-block transform hover:scale-110"
                  onClick={toggleNav}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;