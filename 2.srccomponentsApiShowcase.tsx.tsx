import React from "react";

const apiExamples = [
  {
    title: "Slack Bot: Daily Standup Generator",
    desc: "Integrated a prompt-driven standup bot via Slack API for automated team check-ins. Integrates with OpenAI and posts summaries.",
    screenshot: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&q=80",
    code: `fetch("/api/standup", { method: "POST", body: JSON.stringify({ notes }) })`,
    result: "Posts summary directly to the #standup channel.",
  },
  {
    title: "Image Pipeline: DALL·E in Design Tool",
    desc: "Used DALL·E’s API to auto-generate images in Figma plugins for instant creative moodboards.",
    screenshot: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&q=80",
    code: `const dalleRes = await fetch("/api/dalle", { method: "POST", body: JSON.stringify({ prompt }) })`,
    result: "Designers iterate new illustrations in seconds within Figma.",
  },
];

const ApiShowcase = () => (
  <div className="flex flex-col gap-8">
    {apiExamples.map((ex, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col md:flex-row gap-6 md:items-center hover:shadow-lg transition animate-fade-in"
      >
        <img
          src={ex.screenshot}
          alt={ex.title}
          className="w-full md:w-36 h-36 object-cover rounded-lg border border-teal-100 shadow-lg"
          loading="lazy"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-lg text-gray-800 mb-1">{ex.title}</h4>
          <p className="text-gray-600 text-sm mb-2">{ex.desc}</p>
          <div className="bg-gray-50 rounded p-3 mb-2 text-xs font-mono">
            <span className="text-teal-600 font-bold">Code:</span> <pre className="inline">{ex.code}</pre>
          </div>
          <div className="bg-teal-50 rounded px-3 py-2 text-xs text-teal-700">
            <span className="font-bold">Result:</span> {ex.result}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ApiShowcase;

