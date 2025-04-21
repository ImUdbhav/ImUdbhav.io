import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoIosMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';

gsap.registerPlugin(ScrollTrigger);

//Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  message: yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
});

const Contact = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);

  //React Hook Form
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  //EmailJS Submission
  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        'service_urjw13b',  //  EmailJS Service ID
        'template_j9rw9ol', //  EmailJS Template ID
        {
          from_email: data.email,
          message: data.message,
        },
        'C4-5BDun6bg4WSoQv' //  EmailJS Public Key
      );

      alert("Message sent successfully!");
      reset(); // Reset form after submission
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 bg-slate-950"
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Column */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-indigo-400 to-purple-400 mb-6 font-grotesk">
              Let's Connect
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-8 font-mono">
              Have a project in mind? Let's create something extraordinary together.
            </p>
            <div className="mt-8 pt-8 border-t border-slate-800/50 flex gap-10">
              <a
                href="mailto:mishraudbhav04@gmail.com"
                className="text-slate-400 hover:text-indigo-400 transition-colors font-mono"
              >
                <IoIosMail style={{width:'2.5rem', height:'4rem'}}/> Email ↗
              </a>
              <a
                href="https://github.com/ImUdbhav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors font-mono"
              >
                <FaGithub style={{width:'2rem', height:'4rem'}}/> GitHub ↗
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-800">
              {/* Contact Form */}
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-slate-300 text-sm font-mono mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-slate-200 
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="hello@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-mono mb-2">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    className="w-full bg-slate-800/50 rounded-xl px-4 py-3 text-slate-200 
                      focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                </div>
                <button
                  ref={buttonRef}
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 
                    text-white font-mono py-4 rounded-xl transition-all duration-500 hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
