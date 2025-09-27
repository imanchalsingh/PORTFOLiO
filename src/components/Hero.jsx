// components/Hero.js
import React from "react";
import ProfilePic from "./ProfilePic/ProfilePic.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              Hi, I'm{" "}
              <span className="text-indigo-600 dark:text-indigo-400">
                Anchal Singh
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Web Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              From crafting simple landing pages to developing complex,
              component-based web apps, I enjoy turning ideas into digital
              experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-100 dark:bg-indigo-900/30 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                <div className="w-full h-full bg-indigo-300 dark:bg-indigo-700 flex items-center justify-center text-6xl text-white">
                  <img src={ProfilePic} alt="Profile Picture" />
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-indigo-500 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-500 rounded-full -z-10 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
