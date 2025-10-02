// components/Experience.js
import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "Internship",
      role: "Web Development Intern",
      company: "CodeClause",
      period: "Oct 2025 - Nov 2025",
      office: "Pune, Maharashtra, India",
      location: "Remote",
      description:
        "Working on building full-stack web applications using React for front-end and Node.js with Express and databases for back-end. Focused on creating responsive UIs, REST APIs, and seamless integration between client and server.",
    },
    {
      id: 2,
      type: "Internship",
      role: "Full-Stack Development Intern",
      company: "CodeAlpha",
      period: "Oct 2025 - Oct 2025",
      office: "Lucknow, Uttar Pradesh, India",
      location: "Remote",
      description:
        "Contributing to full-stack projects with MERN stack, focusing on REST APIs, authentication, and scalable web apps.",
    },
    {
      id: 3,
      type: "Internship",
      role: "Web Developer",
      company: "CodSoft",
      period: "Sep 2025 - Oct 2025",
      office: "Kolkata, West Bengal, India",
      location: "Remote",
      description:
        "Gained hands-on experience in web development, UI/UX improvement, and real-world project workflows.",
    },
    {
      id: 4,
      type: "Internship",
      role: "Front-End Engineer",
      company: "Tech Training Program",
      period: "Aug 2025 - Sep 2025",
      office: "Bengaluru, Karnataka, India",
      location: "Remote",
      description:
        "Worked on real-world projects, improved UI/UX, explored automation, and strengthened problem-solving skills.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Experiences
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-indigo-200 dark:bg-indigo-900/50 transform -translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2"></div>

                <div className="absolute left-0 md:left-1/2 -ml-2.5 md:-ml-3.5 w-5 h-5 md:w-7 md:h-7 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 shadow-lg transform -translate-x-1/2"></div>

                <div
                  className={`md:w-1/2 p-4 md:p-6 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                        <BriefcaseIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {item.role}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {item.company} &middot; {item.type}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {item.period}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {item.office} &middot; {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
