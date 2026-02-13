"use client";

import { resumeData } from "@/data/resume";
import { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "Salesforce", "Web Development"];
  
  const filteredProjects = filter === "All" 
    ? resumeData.projects 
    : resumeData.projects.filter(p => p.category === filter);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Featured Projects</h2>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category 
                  ? "bg-blue-600 text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group border border-gray-100 rounded-xl p-6 hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full hover:-translate-y-1 relative overflow-hidden">
              {/* Category Badge */}
              <div className="absolute top-0 right-0 mt-4 mr-4">
                <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${
                  project.category === "Salesforce" 
                    ? "bg-blue-100 text-blue-700" 
                    : "bg-purple-100 text-purple-700"
                }`}>
                  {project.category}
                </span>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-lg transition-colors ${
                  project.category === "Salesforce" 
                    ? "bg-blue-50 group-hover:bg-blue-100" 
                    : "bg-purple-50 group-hover:bg-purple-100"
                }`}>
                  {project.category === "Salesforce" ? (
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.6 2.4c-1.3.8-2.3 2-2.8 3.4.9-1.3 2.1-2.3 3.6-2.9 1.3-.5 2.7-.6 4-.2-.5.8-.8 1.8-.8 2.8 0 1.9 1.1 3.6 2.8 4.5-1 .5-2.2.8-3.3.8-1.5 0-3-.5-4.2-1.4 1.2 2 1.4 4.5.6 6.7-.8 2.2-2.7 3.9-5 4.6-2.3.7-4.8.2-6.7-1.3 1.9.4 3.9-.2 5.3-1.6 1.4-1.4 1.9-3.4 1.3-5.3-.6-1.9-2.2-3.3-4.1-3.7-1.9-.4-3.9.2-5.3 1.6-1.4 1.4-1.9 3.4-1.3 5.3-2.1-.9-3.6-2.9-3.9-5.2-.2-2.3.7-4.6 2.4-6.1 1.7-1.5 4.1-2.1 6.3-1.5-.7 1.1-.9 2.5-.5 3.8.4 1.3 1.4 2.3 2.7 2.8 1.3.5 2.7.4 3.9-.3 1.2-.7 2-1.9 2.1-3.3.1-1.4-.5-2.8-1.5-3.8-1.1-1-2.5-1.5-3.9-1.3z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  )}
                </div>
                {project.link && (
                  <a 
                    href={`https://${project.link}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors z-10"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors pr-16">{project.title}</h3>
              
              <p className="text-gray-600 mb-6 flex-grow leading-relaxed text-sm">
                {project.description}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(',').map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
