// components/Education.js
import React from "react";

import { AcademicCapIcon } from "@heroicons/react/24/outline";

const Education = () => {
  const education = [
    {
      institute: "Institute of Engineering and Technology",
      type: "Computer Science Course",
      actual_location: "Ayodhya, Uttar Pradesh, India",
      location: "On-Campus",
      roles: [
        {
          role: "Bachelor's in Computer Applications (BCA)",
          period: "July 2023 - Present · 2 yr",
          description:
            "Pursuing a Bachelor's degree in Computer Applications, focusing on software development, algorithms, and data structures.",
          skills: [
            "Software Development",
            "Algorithms",
            "Data Structures",
            "Databases",
            "Web Development",
            "Problem Solving",
            "Team Collaboration",
          ],
        },
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-indigo-600 mx-auto mb-12"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-indigo-200 dark:bg-indigo-900/50 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {education.map((exp, index) => (
              <div
                key={exp.id}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Empty half to balance */}
                <div className="md:w-1/2"></div>

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -ml-2.5 md:-ml-3.5 w-5 h-5 md:w-7 md:h-7 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 shadow-lg transform -translate-x-1/2"></div>

                {/* Card */}
                <div
                  className={`md:w-1/2 p-4 md:p-6 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Company Header */}
                    <div className="flex items-start mb-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg mr-4">
                        <AcademicCapIcon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                          {exp.institute}
                        </h3>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                          {exp.type}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {exp.actual_location} · {exp.location}
                        </p>
                      </div>
                    </div>

                    {/* Roles under this company */}
                    <div className="space-y-6">
                      {exp.roles.map((role, i) => (
                        <div key={i}>
                          <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            &bull; {role.role}
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                            {role.period}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {role.description}
                          </p>

                          {/* Skills badges */}
                          {role.skills?.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {role.skills.map((skill, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 text-xs rounded-lg bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
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

export default Education;
