src/components/AboutContact.tsx

import React from "react";

const AboutContact = () => (
  <div className="w-full flex flex-col gap-8 items-center">
    <div className="text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">About Me</h2>
      <p className="text-gray-700 mb-3">
        Hi, I’m [Your Name], a prompt engineer and AI workflow builder specializing in using LLM models to solve text, image, and business problems creatively. My interests span prompt design, automation, and creative hackathons.
      </p>
      <div className="flex gap-5 justify-center my-2">
        <a
          href="mailto:your.email@example.com"
          className="underline text-teal-600 hover:text-teal-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile/"
          className="underline text-teal-600 hover:text-teal-800 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="/resume.pdf"
          className="underline text-teal-600 hover:text-teal-800 transition-colors"
          download
        >
          Resume
        </a>
      </div>
    </div>
    <form
      className="w-full max-w-md bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 flex flex-col gap-4 animate-fade-in"
      action="mailto:your.email@example.com"
      method="POST"
      encType="text/plain"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-400 focus:border-teal-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-400 focus:border-teal-400"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-400 focus:border-teal-400"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-600 text-white font-semibold px-5 py-2 rounded transition hover:bg-teal-700"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default AboutContact;
