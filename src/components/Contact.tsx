import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or just want to chat? Drop me a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form Card */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Send a message</h3>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true"
                className="space-y-6"
              >
                {/* Netlify Form Handling */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors text-gray-200 placeholder-gray-500"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors text-gray-200 placeholder-gray-500"
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-colors text-gray-200 placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info Side (Keeping the existing info but styled nicely) */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <a 
                  href={`mailto:${resumeData.personalInfo.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-400">{resumeData.personalInfo.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <p className="text-gray-400">{resumeData.personalInfo.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                    <p className="text-gray-400">{resumeData.personalInfo.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-500">© {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
