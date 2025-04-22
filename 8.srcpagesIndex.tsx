
import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import PromptCollection from "../components/PromptCollection";
import PromptDetailModal from "../components/PromptDetailModal";
import ApiShowcase from "../components/ApiShowcase";
import AboutContact from "../components/AboutContact";

const samplePrompts = [
  {
    id: 1,
    title: "Friendly Email Generator",
    description: "Transform bullet points into a professional, friendly email.",
    tags: ["ChatGPT", "Email", "Writing"],
    fullPrompt: "Turn the following bullet points into a friendly, clear email: {input}",
    input: "- Meeting moved to 3pm\n- Bring slides\n- Confirm attendance",
    output: "Subject: Meeting Update\n\nHi team,\n\nJust a quick note: our meeting is now at 3pm. Please remember to bring your slides and confirm if you’re able to attend.\n\nThanks!",
    usage: "Works well with ChatGPT or any GPT-3.5+/4 model. Customize context for tone.",
  },
  {
    id: 2,
    title: "Creative Image Prompt",
    description: "DALL·E prompt for generating minimal, futuristic cityscapes.",
    tags: ["DALL·E", "Image", "Art", "Minimal"],
    fullPrompt: "A minimal, futuristic cityscape at sunset in the style of Syd Mead, high resolution.",
    input: "",
    output: "(Sample DALL·E image output)",
    usage: "Copy into DALL·E or similar image AI platform.",
  },
  {
    id: 3,
    title: "Smart Code Reviewer",
    description: "Ask AI to annotate and review highlighted code for bugs.",
    tags: ["ChatGPT", "Code", "Review", "DevTools"],
    fullPrompt: "Analyze the following code for bugs and potential improvements, and annotate your feedback inline:\n{code}",
    input: "def sum(a, b):\n  return a + b",
    output: "# Looks fine, but no input validation.\ndef sum(a, b):\n  # Consider type checks or try/except\n  return a + b",
    usage: "Great for developer workflow automation with GPT-4.",
  },
];

const Index = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  // Smooth scroll to sections
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-gradient-to-br from-white via-teal-50 to-neutral-100 min-h-screen w-full flex flex-col">
      {/* Hero Section */}
      <HeroSection onScroll={scrollToSection} />

      {/* Prompt Collection */}
      <section id="prompts" className="w-full px-4 py-10 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center animate-fade-in">Prompt Collections</h2>
          <PromptCollection prompts={samplePrompts} onViewPrompt={setSelectedPrompt} />
        </div>
      </section>

      {/* Prompt Detail Modal */}
      {selectedPrompt && (
        <PromptDetailModal prompt={selectedPrompt} onClose={() => setSelectedPrompt(null)} />
      )}

      {/* API Integration Showcase */}
      <section id="api-showcase" className="w-full px-4 py-10 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center animate-fade-in">API Integration Showcase</h2>
          <ApiShowcase />
        </div>
      </section>

      {/* About/Contact */}
      <section id="about" className="w-full px-4 py-10 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto">
          <AboutContact />
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PromptForge &mdash; Crafted by [Your Name]
      </footer>
    </div>
  );
};

export default Index;
