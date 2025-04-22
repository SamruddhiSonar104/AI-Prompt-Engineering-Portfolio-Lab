import React from "react";
import { Copy } from "lucide-react";

interface PromptDetailModalProps {
  prompt: any;
  onClose: () => void;
}

const PromptDetailModal: React.FC<PromptDetailModalProps> = ({ prompt, onClose }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.fullPrompt);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative p-7 animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-teal-600 transition text-xl"
          aria-label="Close"
        >
          <span className="text-2xl font-bold">&times;</span>
        </button>
        <h3 className="text-xl font-bold text-gray-800 mb-4">{prompt.title}</h3>
        <div className="mb-2">
          <span className="inline-block bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full text-xs font-medium mb-2">{prompt.tags.join(", ")}</span>
        </div>
        <div className="mb-4">
          <p className="text-gray-700 text-sm">{prompt.description}</p>
        </div>
        <div className="mb-3">
          <label className="block font-medium text-gray-700 mb-1">Prompt:</label>
          <pre className="bg-gray-50 rounded p-3 text-xs whitespace-pre-wrap break-words relative">
            {prompt.fullPrompt}
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-white rounded px-2 py-1 shadow text-gray-500 hover:bg-teal-50 hover:text-teal-700 flex items-center gap-1"
              aria-label="Copy to clipboard"
            >
              <Copy size={16} /> Copy
            </button>
          </pre>
        </div>
        {prompt.input && (
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1">Sample Input:</label>
            <pre className="bg-gray-50 rounded p-3 text-xs whitespace-pre-wrap break-words">{prompt.input}</pre>
          </div>
        )}
        {prompt.output && (
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1">Sample Output:</label>
            <pre className="bg-gray-50 rounded p-3 text-xs whitespace-pre-wrap break-words">{prompt.output}</pre>
          </div>
        )}
        {prompt.usage && (
          <div className="mb-3">
            <label className="block font-medium text-gray-700 mb-1">Usage & Notes:</label>
            <p className="bg-gray-50 rounded p-3 text-xs text-gray-700">{prompt.usage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptDetailModal;

