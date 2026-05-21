import { resumeData } from "@/data/resume";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-32 relative overflow-hidden">
      {/* Abstract Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-down">
          {/* Profile Picture */}
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
            <Image 
              src="/profile.png" 
              alt={resumeData.personalInfo.name}
              fill
              className="rounded-full object-cover border-4 border-white/10 shadow-2xl relative z-10"
              priority
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="sr-only">Rahul Kamble - </span>
            {resumeData.personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-300 mb-8 font-light">
            Senior Software Engineer | Salesforce Developer | UI Specialist
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-gray-300 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>{resumeData.personalInfo.contact.phone}</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>{resumeData.personalInfo.contact.email}</span>
            </div>
            <div className="hidden md:block">|</div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>{resumeData.personalInfo.contact.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-6 flex-wrap">
            <a href="/Rahul_kamble_Developer.pdf" download className="px-6 py-3 bg-white text-blue-900 hover:bg-gray-100 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
              <span>Download Resume</span>
            </a>
            <a href={resumeData.personalInfo.social.linkedin} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <span>LinkedIn</span>
            </a>
            <a href={resumeData.personalInfo.social.github} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <span>GitHub</span>
            </a>
            <a href={resumeData.personalInfo.social.trailblazer} className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.6 2.4c-1.3.8-2.3 2-2.8 3.4.9-1.3 2.1-2.3 3.6-2.9 1.3-.5 2.7-.6 4-.2-.5.8-.8 1.8-.8 2.8 0 1.9 1.1 3.6 2.8 4.5-1 .5-2.2.8-3.3.8-1.5 0-3-.5-4.2-1.4 1.2 2 1.4 4.5.6 6.7-.8 2.2-2.7 3.9-5 4.6-2.3.7-4.8.2-6.7-1.3 1.9.4 3.9-.2 5.3-1.6 1.4-1.4 1.9-3.4 1.3-5.3-.6-1.9-2.2-3.3-4.1-3.7-1.9-.4-3.9.2-5.3 1.6-1.4 1.4-1.9 3.4-1.3 5.3-2.1-.9-3.6-2.9-3.9-5.2-.2-2.3.7-4.6 2.4-6.1 1.7-1.5 4.1-2.1 6.3-1.5-.7 1.1-.9 2.5-.5 3.8.4 1.3 1.4 2.3 2.7 2.8 1.3.5 2.7.4 3.9-.3 1.2-.7 2-1.9 2.1-3.3.1-1.4-.5-2.8-1.5-3.8-1.1-1-2.5-1.5-3.9-1.3z"/>
              </svg>
              <span>Trailblazer</span>
            </a>
            <a href={resumeData.personalInfo.social.portfolio} className="px-6 py-3 border border-white/30 hover:bg-white/10 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
