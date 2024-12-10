import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onSelect: (value: string) => void;
}

export function QuestionCard({ question, onSelect }: QuestionCardProps) {
  return (
    <div className="w-full max-w-2xl animate-fadeIn">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">{question.text}</h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="w-full p-4 text-left bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200"
          >
            <h3 className="text-lg font-medium text-gray-800">{option.text}</h3>
            {option.description && (
              <p className="mt-1 text-gray-600">{option.description}</p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}