import React from "react";

interface PromptCardProps {
  title: string;
  description: string;
  tags: string[];
  onClick: () => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, description, tags, onClick }) => (
  <div
    className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 cursor-pointer flex flex-col gap-2 hover:scale-[1.02] animate-fade-in"
    onClick={onClick}
    tabIndex={0}
    role="button"
    onKeyPress={e => (e.key === "Enter" || e.key === " ") && onClick()}
    aria-label={`View details for ${title}`}
  >
    <h3 className="font-semibold text-lg text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm mb-2">{description}</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag, i) => (
        <span key={i} className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium">
          {tag}
        </span>
      ))}
    </div>
    <button className="self-start mt-2 bg-teal-500 text-white px-3 py-1.5 rounded shadow hover:bg-teal-600 transition text-xs font-semibold">
      View Prompt
    </button>
  </div>
);

export default PromptCard;

