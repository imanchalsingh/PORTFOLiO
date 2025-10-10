// components/About.js
import React from "react";
import {
  CodeBracketIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import { LanguageIcon } from "@heroicons/react/16/solid";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript & TypeScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Node.js", level: 75 },
    { name: "Next.js", level: 70 },
    { name: "Prisma ORM", level: 85 },
    { name: "MySQL & PostgreSQL", level: 80 },
    { name: "MongoDB", level: 70 },
    { name: "Git and GitHub", level: 90 },
    { name: "Bootstrap & Mui", level: 75 },
    { name: "Figma", level: 65 },
    { name: "C & C++", level: 70 },
    { name: "Python & Java", level: 20 },
    { name: "DSA & Problem Solving", level: 60 },
    { name: "Communication", level: 85 },

  ];

  const services = [
    {
      icon: (
        <CodeBracketIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Full Stack Development",
      description:
        "Building responsive and modern web applications using the latest technologies.",
    },
    {
      icon: (
        <PaintBrushIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "UI/UX Design and Responsive Design",
      description:
        "Designing intuitive and beautiful user interfaces that enhance user experience.",
    },
    {
      icon: (
        <GlobeAltIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Contributions to Open Source",
      description:
        "Actively contributing to open source projects to give back to the developer community.",
    },
    {
      icon: (
        <PencilIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Problem Solving",
      description:
        "Applying analytical skills to solve complex coding challenges efficiently.",
    },
    {
      icon: (
        <LanguageIcon className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Learning & Experimenting",
      description:
        "Constantly learning new technologies and experimenting with innovative solutions.",
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
<<<<<<< HEAD
              I’m a final-year Computer Science (BCA) student. Passionate about web
=======
              I’m a final-year Computer Science (BCA) student. Passionate about 
>>>>>>> a368d3e9873423dd5e263bad0232407739b52110
              Development with strong hands-on experience in building
              interactive, responsive, and user-friendly web applications.
              Skilled in React.js, TypeScript, JavaScript, Tailwind CSS,
              Node.js, and Bootstrap, with an eye for detail in UI/UX design.
              Currently exploring Next.js, Prisma ORM, and PostgreSQL to enhance my
              full-stack development skills.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open source projects, or hiking in the mountains
              to clear my mind and find inspiration.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              What I Do
            </h3>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 rounded-lg bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0">{service.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
