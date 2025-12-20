// components/Hero.js
import React from "react";
import ProfilePic from "./ProfilePic/ProfilePic.jpg";
import { FiArrowRight, FiMail } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6">
              👋 Welcome to my portfolio
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                Anchal Singh
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              Full Stack Developer & Digital Creator
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
              I transform ideas into exceptional digital experiences. From elegant landing pages
              to scalable web applications, I bridge creativity with technology to deliver
              impactful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800/50 transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:shadow-md"
              >
                <FiMail />
                Contact Me
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">50+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative z-20">
                <img
                  src={ProfilePic}
                  alt="Anchal Singh - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full -z-10 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full -z-10 animate-float-delayed"></div>

              {/* Tech stack badges */}
              <div className="absolute -left-4 top-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Open to Work</span>
              </div>

              <div className="absolute -right-4 bottom-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-full px-4 py-2">
                <span className="text-sm font-medium">✨ Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;