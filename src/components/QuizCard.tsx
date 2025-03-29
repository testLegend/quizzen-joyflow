
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedOption: number | null;
  onOptionSelect: (optionIndex: number) => void;
  onNextQuestion: () => void;
  showResult: boolean;
}

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  currentQuestion,
  totalQuestions,
  selectedOption,
  onOptionSelect,
  onNextQuestion,
  showResult
}) => {
  const progress = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Question {currentQuestion} of {totalQuestions}</span>
          <span className="text-sm font-medium text-gray-500">{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="animate-scale-in shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl md:text-2xl">{question.text}</CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <RadioGroup 
            value={selectedOption !== null ? selectedOption.toString() : undefined}
            onValueChange={(value) => onOptionSelect(parseInt(value))}
            className="space-y-4"
          >
            {question.options.map((option, index) => (
              <div key={index} className={`flex items-center border rounded-lg p-4 transition-colors ${
                showResult 
                  ? index === question.correctAnswer 
                    ? 'border-green-500 bg-green-50' 
                    : selectedOption === index 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-gray-200'
                  : 'border-gray-200 hover:border-quizflow-teal hover:bg-quizflow-teal/5'
              }`}>
                <RadioGroupItem value={index.toString()} id={`option-${index}`} disabled={showResult} />
                <Label htmlFor={`option-${index}`} className="flex-1 ml-3 text-base cursor-pointer">
                  {option}
                </Label>
                {showResult && index === question.correctAnswer && (
                  <span className="ml-2 text-green-600 font-medium">Correct</span>
                )}
                {showResult && selectedOption === index && index !== question.correctAnswer && (
                  <span className="ml-2 text-red-600 font-medium">Incorrect</span>
                )}
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between pt-4">
          {showResult ? (
            <Button 
              onClick={onNextQuestion} 
              className="w-full bg-quizflow-teal hover:bg-quizflow-teal/90"
            >
              {currentQuestion === totalQuestions ? 'See Results' : 'Next Question'}
            </Button>
          ) : (
            <Button 
              onClick={() => onOptionSelect(selectedOption || 0)} 
              className="w-full bg-quizflow-teal hover:bg-quizflow-teal/90"
              disabled={selectedOption === null}
            >
              Submit Answer
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizCard;
