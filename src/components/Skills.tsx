import { resumeData } from "@/data/resume";

export default function Skills() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gray-800">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {Object.entries(resumeData.skills).map(([category, items]) => (
            <div key={category} className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 sm:mb-6 capitalize border-b pb-3 sm:pb-4 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {items.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-50 text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border border-gray-100 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
