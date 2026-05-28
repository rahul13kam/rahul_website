import { resumeData } from "@/data/resume";

export default function Summary() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 relative inline-block leading-tight">
            Professional Summary
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            {resumeData.personalInfo.summary}
          </p>
        </div>
      </div>
    </section>
  );
}
