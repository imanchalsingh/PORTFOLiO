// components/CodingProfiles.js
import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ViewColumnsIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

const CodingProfiles = () => {
  const [viewMode, setViewMode] = useState("horizontal"); // "horizontal" or "grid"

  const profiles = [
    {
      id: 1,
      name: "LeetCode",
      description: "Problem solving and algorithm challenges",
      link: "https://leetcode.com/imanchalsingh",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    },
    {
      id: 2,
      name: "GeeksforGeeks",
      description: "Data structures and algorithm practice",
      link: "https://auth.geeksforgeeks.org/user/imanchalsingh",
      icon: "https://media.geeksforgeeks.org/wp-content/uploads/20210628182253/gfglogo.png",
    },
    {
      id: 3,
      name: "InterviewBit",
      description: "Coding interview preparation platform",
      link: "https://www.interviewbit.com/profile/anchal-singh_974",
      icon: "https://user-images.githubusercontent.com/49322948/159159046-7fbe7f20-bcc4-4142-a255-8566cd69ac98.png",
    },
    {
      id: 4,
      name: "Codolio",
      description: "Portfolio and coding profile showcase",
      link: "https://codolio.com/profile/imanchalsingh",
      icon: "https://codolio.com/codolio_assets/gif-owl-transparent.GIF",
    },
    {
      id: 5,
      name: "HackerRank",
      description: "Coding challenges and skill certifications",
      link: "https://www.hackerrank.com/imanchalsingh",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    },
    {
      id: 6,
      name: "CodeChef",
      description: "Competitive programming platform",
      link: "https://www.codechef.com/users/imanchalsingh",
      icon: "https://cdn.codechef.com/images/cc-logo.svg",
    },
    {
      id: 7,
      name: "Codeforces",
      description: "Competitive programming contests",
      link: "https://codeforces.com/profile/imanchalsingh",
      icon: "https://codeforces.org/s/0/favicon-32x32.png",
    },
    {
      id: 8,
      name: "GitHub",
      description: "Code repository and open source contributions",
      link: "https://github.com/imanchalsingh",
      icon: "https://pngimg.com/uploads/github/github_PNG40.png",
    },
    {
      id: 9,
      name: "SoloLearn",
      description: "Interactive coding courses and community",
      link: "https://www.sololearn.com/en/profile/32128928",
      icon: "https://cdn-images-1.medium.com/max/1200/1*hsdk74SBj4i_UfX8SaW6YA.png",
    },
    {
      id: 10,
      name: "TakeUForward",
      description: "DSA course and coding challenges",
      link: "https://takeuforward.org/profile/imanchalsingh",
      icon: "https://dev.takeuforward.org/static/media/Tuf%20Logo%20B.a2ce02c035734f237b8a.png",
    },
    {
      id: 11,
      name: "Project Euler",
      description: "Mathematical/ computational problems",
      link: "https://projecteuler.net/progress",
      icon: "https://projecteuler.net/themes/logo_default.png",
    },
    {
      id: 12,
      name: "W3Schools",
      description: "Web development tutorials and references",
      link: "https://pathfinder.w3schools.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/3e/W3Schools_logo.png",
    },
    {
      id: 13,
      name: "Code360",
      description: "Coding Ninjas learning platform",
      link: "https://www.naukri.com/code360/profile/imanchalsingh",
      icon: "https://files.codingninjas.com/cnlogo-32874.png",
    },
  ];

  return (
    <section id="coding-profiles" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Coding Profiles
            </h2>
            <div className="w-20 h-1 bg-indigo-600"></div>
          </div>

          <div className="mt-6 md:mt-0 flex space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode("horizontal")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                viewMode === "horizontal"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <ArrowsRightLeftIcon className="w-4 h-4 mr-2" />
              Horizontal View
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center px-4 py-2 rounded-md text-sm font-medium ${
                viewMode === "grid"
                  ? "bg-indigo-600 text-white"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <ViewColumnsIcon className="w-4 h-4 mr-2" />
              Grid View
            </button>
          </div>
        </div>

        <div
          className={`${
            viewMode === "horizontal"
              ? "flex overflow-x-auto pb-6 space-x-6 scrollbar-thin scrollbar-thumb-indigo-600 scrollbar-track-gray-100 dark:scrollbar-track-gray-800"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }`}
          style={viewMode === "horizontal" ? { scrollbarWidth: "thin" } : {}}
        >
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
                viewMode === "horizontal" ? "min-w-[350px]" : ""
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mr-4 overflow-hidden">
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {profile.name}
                  </h3>
                  <p className="text-indigo-600 dark:text-indigo-400 text-sm">
                    Currently Learning
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {profile.description}
              </p>

              <a
                href={profile.link}
                className="flex items-center justify-between mt-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-200 dark:hover:bg-indigo-900/50 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Visit Profile</span>
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
