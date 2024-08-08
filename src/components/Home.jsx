import React, { useRef, useEffect } from "react";
import backgroundImage1 from "/bg1.jpg";
import { motion } from "framer-motion";
function Home() {
  return (
    <div className="flex flex-col h-full bg-gray-950">
      {/* First Box */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        // ref={(el) => (boxesRefs.current[0] = el)}
        className="w-8/12 flex h-auto justify-center my-20 p-10 bg-black shadow-lg rounded-lg gap-10 relative "
      >
        <div className="flex flex-col w-1/2 animate-slide-in-left">
          <div className="w-full h-auto p-4 font-sans">
            <div className="text-sky-800 text-4xl font-semibold">
              Connecting Talent with Opportunity
            </div>
            <div className="text-sm text-slate-500 my-4 w-3/4">
              Welcome to InterWeU, where talent meets opportunity in the most
              seamless way possible. Our platform revolutionizes the hiring
              process, making it easier for candidates to showcase their skills
              and for HR professionals to find the perfect fit for their
              organizations.
            </div>
          </div>
        </div>
        <div className="w-96 h-auto bg-black">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${backgroundImage1}) ` }}
          ></div>
        </div>
      </motion.div>

      {/* Second Box */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // ref={(el) => (boxesRefs.current[1] = el)}
        className="w-8/12 flex h-auto justify-center my-20 p-10 bg-black shadow-lg rounded-lg gap-10 relative left-1/3"
      >
        <div className="flex flex-col w-1/2 animate-slide-in-left">
          <div className="w-full h-auto p-4 font-sans">
            <div className="text-sky-800 text-4xl font-semibold">
              Empowering Job Seekers and Recruiters
            </div>
            <div className="text-sm text-slate-500 my-4 w-3/4">
              At InterWeU, we believe that finding the right job or the right
              candidate shouldn't be a hassle. That's why we've created a
              comprehensive online platform that brings together job seekers and
              recruiters in one place. With features designed to simplify every
              step of the recruitment process, we aim to create a more
              efficient, transparent, and rewarding experience for everyone
              involved.
            </div>
          </div>
        </div>
        <div className="w-96 h-auto bg-black">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          ></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // ref={(el) => (boxesRefs.current[1] = el)}
        className="w-8/12 flex h-auto justify-center my-20 p-10 bg-black shadow-lg rounded-lg gap-10 relative left-1/3"
      >
        <div className="flex flex-col w-1/2 animate-slide-in-left">
          <div className="w-full h-auto p-4 font-sans">
            <div className="text-sky-800 text-4xl font-semibold">
              Empowering Job Seekers and Recruiters
            </div>
            <div className="text-sm text-slate-500 my-4 w-3/4">
              At InterWeU, we believe that finding the right job or the right
              candidate shouldn't be a hassle. That's why we've created a
              comprehensive online platform that brings together job seekers and
              recruiters in one place. With features designed to simplify every
              step of the recruitment process, we aim to create a more
              efficient, transparent, and rewarding experience for everyone
              involved.
            </div>
          </div>
        </div>
        <div className="w-96 h-auto bg-black">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          ></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // ref={(el) => (boxesRefs.current[1] = el)}
        className="w-8/12 flex h-auto justify-center my-20 p-10 bg-black shadow-lg rounded-lg gap-10 relative left-1/3"
      >
        <div className="flex flex-col w-1/2 animate-slide-in-left">
          <div className="w-full h-auto p-4 font-sans">
            <div className="text-sky-800 text-4xl font-semibold">
              Empowering Job Seekers and Recruiters
            </div>
            <div className="text-sm text-slate-500 my-4 w-3/4">
              At InterWeU, we believe that finding the right job or the right
              candidate shouldn't be a hassle. That's why we've created a
              comprehensive online platform that brings together job seekers and
              recruiters in one place. With features designed to simplify every
              step of the recruitment process, we aim to create a more
              efficient, transparent, and rewarding experience for everyone
              involved.
            </div>
          </div>
        </div>
        <div className="w-96 h-auto bg-black">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          ></div>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        // ref={(el) => (boxesRefs.current[1] = el)}
        className="w-8/12 flex h-auto justify-center my-20 p-10 bg-black shadow-lg rounded-lg gap-10 relative left-1/3"
      >
        <div className="flex flex-col w-1/2 animate-slide-in-left">
          <div className="w-full h-auto p-4 font-sans">
            <div className="text-sky-800 text-4xl font-semibold">
              Empowering Job Seekers and Recruiters
            </div>
            <div className="text-sm text-slate-500 my-4 w-3/4">
              At InterWeU, we believe that finding the right job or the right
              candidate shouldn't be a hassle. That's why we've created a
              comprehensive online platform that brings together job seekers and
              recruiters in one place. With features designed to simplify every
              step of the recruitment process, we aim to create a more
              efficient, transparent, and rewarding experience for everyone
              involved.
            </div>
          </div>
        </div>
        <div className="w-96 h-auto bg-black">
          <div
            className="w-full h-full bg-cover bg-center rounded-xl"
            style={{ backgroundImage: `url(${backgroundImage1})` }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
