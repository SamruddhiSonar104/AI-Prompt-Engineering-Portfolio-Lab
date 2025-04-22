import React from "react";
import PromptCard from "./PromptCard";

interface Prompt {
  id: number | string;
  title: string;
  description: string;
  tags: string[];
}

interface PromptCollectionProps {
  prompts: Prompt[];
  onViewPrompt: (prompt: any) => void;
}

const PromptCollection: React.FC<PromptCollectionProps> = ({ prompts, onViewPrompt }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
    {prompts.map((prompt) => (
      <PromptCard
        key={prompt.id}
        title={prompt.title}
        description={prompt.description}
        tags={prompt.tags}
        onClick={() => onViewPrompt(prompt)}
      />
    ))}
  </div>
);

export default PromptCollection;

