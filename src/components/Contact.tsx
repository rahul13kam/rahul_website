"use client";
import { resumeData } from "@/data/resume";

export default function Contact() {
  return (
    // Section Container (Black Background)
    <section className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Title */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact</h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or just want to chat? Drop me a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* LEFT SIDE: The Form */}
            <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-xl font-semibold mb-6">Send a message</h3>
              
              {/* HTML Form - Simple and Standard */}
              <form 
                action="https://formspree.io/f/mqaelqag" 
                method="POST"
                className="space-y-6"
              >
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
                  ></textarea>
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-500 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT SIDE: Contact Info */}
            <div className="space-y-8 flex flex-col justify-center">
              
              {/* Email Box */}
              <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400">
                  📧
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">{resumeData.personalInfo.contact.email}</p>
                </div>
              </div>

              {/* Phone Box */}
              <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400">
                  📞
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">{resumeData.personalInfo.contact.phone}</p>
                </div>
              </div>

              {/* Location Box */}
              <div className="flex items-center gap-4 p-4 bg-gray-900/30 rounded-xl border border-gray-800">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-yellow-400">
                  📍
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">{resumeData.personalInfo.contact.location}</p>
                </div>
              </div>

            </div>
          </div>
          
          {/* Footer Copyright */}
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
            © {new Date().getFullYear()} {resumeData.personalInfo.name}. All rights reserved.
          </div>

        </div>
      </div>
    </section>
  );
}
