import { resumeData } from "@/data/resume";

export default function SalesforceCertifications() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-blue-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12 md:mb-16 text-gray-800">
          Salesforce Certifications & Achievements
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {resumeData.salesforceCertifications.map((cert, index) => (
            <div key={index} className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg border border-blue-100 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-5 sm:mb-6 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{cert.source}</p>
              
              {cert.link && (
                <a 
                  href={`https://${cert.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Profile
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
