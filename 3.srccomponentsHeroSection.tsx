import React from "react";

interface HeroSectionProps {
  onScroll: (id: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScroll }) => {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-12 pb-24 px-4 bg-gradient-to-b from-teal-50 via-white to-white relative min-h-[60vh]">
      <div className="max-w-2xl flex flex-col items-center text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-gray-900">
          PromptForge
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-4">Crafting smarter AI interactions</p>
        <span className="inline-block text-teal-600 uppercase tracking-widest font-semibold text-xs mb-6">AI Prompt Engineering Portfolio & Lab</span>
        <p className="mb-8 text-base md:text-lg text-gray-700">
          Hi, I'm [Your Name], a Prompt Engineer passionate about building tools, workflows, and creative AI solutions that solve real problems. Here, you'll find curated prompts, code integrations, and proof-of-concepts from my AI journey.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <button
            onClick={() => onScroll("prompts")}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-lg shadow transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 animate-fade-in"
          >
            Explore Prompts
          </button>
          <button
            onClick={() => onScroll("api-showcase")}
            className="bg-white border border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold px-6 py-2 rounded-lg shadow transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            API Showcase
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

