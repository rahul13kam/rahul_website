"use client";
import { resumeData } from "@/data/resume";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const EMAILJS_FALLBACK = {
  serviceId: "service_ghf9y49",
  templateId: "template_5m7g21b",
  publicKey: "0e9awzIAPptdNqLkI",
};

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'config_error'>('idle');

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID?.trim() || EMAILJS_FALLBACK.serviceId;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID?.trim() || EMAILJS_FALLBACK.templateId;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.trim() || EMAILJS_FALLBACK.publicKey;
  const isEmailConfigured = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailConfigured) {
      console.error(
        "EmailJS env vars are missing. Set NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, and NEXT_PUBLIC_EMAILJS_PUBLIC_KEY in .env.local (local) or hosting environment variables (production), then restart/redeploy."
      );
      setStatus('config_error');
      return;
    }
    const finalServiceId = serviceId as string;
    const finalTemplateId = templateId as string;
    const finalPublicKey = publicKey as string;

    setStatus('submitting');
    const form = e.currentTarget;

    try {
      await emailjs.sendForm(finalServiceId, finalTemplateId, form, { publicKey: finalPublicKey });
      setStatus('success');
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section className="bg-black text-white py-12 sm:py-16 md:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact</h2>
            <p className="text-gray-400 text-lg">
              Have a project in mind or just want to chat? Drop me a message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form Card */}
            <div className="bg-gray-900/50 p-5 sm:p-8 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6">Send a message</h3>
              
              {status === 'success' ? (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-300">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-blue-600 hover:text-blue-500 font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-gray-200 placeholder-gray-500"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-gray-200 placeholder-gray-500"
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
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors text-gray-200 placeholder-gray-500 resize-none"
                    ></textarea>
                  </div>

                  {/* Error Message */}
                  {(status === 'error' || status === 'config_error') && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                      {status === 'config_error'
                        ? 'Email service is not configured yet. Please set EmailJS environment variables and restart.'
                        : 'Something went wrong while sending. Please try again later.'}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
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
                    )}
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Side */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="space-y-6">
                <a 
                  href={`mailto:${resumeData.personalInfo.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                    <p className="text-gray-400 break-all">{resumeData.personalInfo.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                    <p className="text-gray-400">{resumeData.personalInfo.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-900/50 transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
