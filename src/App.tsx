import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar';
import { QuestionCard } from './components/QuestionCard';
import { Result } from './components/Result';
import { questions } from './data/questions';
import { getMacRecommendation } from './utils/recommendations';
import { Laptop2 } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswer = (value: string) => {
    const currentQuestion = questions[currentStep];
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
  };

  const isComplete = currentStep === questions.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Laptop2 className="h-12 w-12 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Mac
          </h1>
          <p className="text-gray-600">
            Answer a few questions to get a personalized recommendation
          </p>
        </div>

        <ProgressBar
          current={currentStep}
          total={questions.length}
        />

        <div className="flex justify-center">
          {!isComplete ? (
            <QuestionCard
              question={questions[currentStep]}
              onSelect={handleAnswer}
            />
          ) : (
            <Result
              recommendation={getMacRecommendation(answers)}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;