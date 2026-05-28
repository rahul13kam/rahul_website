import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gray-800">Professional Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          {resumeData.experience.map((exp, index) => (
            <div key={index} className="relative pl-0 md:pl-20">
              {/* Timeline Dot */}
              <div className="absolute left-8 -translate-x-1/2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm hidden md:block"></div>
              
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 sm:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-blue-600 font-medium text-lg sm:text-xl">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                    <p className="text-gray-500 text-sm mt-1">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 sm:space-y-3 text-gray-600">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
