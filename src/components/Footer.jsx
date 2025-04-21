// Footer.js

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    // Footer animation on load
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-br from-slate-900 to-slate-950 py-10 text-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-slate-400 mb-4">
          &copy; <span className="text-indigo-400">[ImUdbhav]</span>. Frontend Web Developer.
        </p>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="https://github.com/ImUdbhav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              GitHub
            </a>
          </li>
          {/* <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              LinkedIn
            </a>
          </li> */}
          <li>
            <a
              href="mailto:your.mishraudbhav04@gmail.com"
              className="text-slate-400 hover:text-indigo-500 transition-transform transform hover:scale-110"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
