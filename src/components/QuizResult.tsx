
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from 'react-router-dom';
import { Question } from './QuizCard';

interface QuizResultProps {
  questions: Question[];
  userAnswers: (number | null)[];
  quizTitle: string;
  onRetry: () => void;
}

const QuizResult: React.FC<QuizResultProps> = ({ questions, userAnswers, quizTitle, onRetry }) => {
  const correctAnswers = userAnswers.filter((answer, index) => 
    answer !== null && answer === questions[index].correctAnswer
  ).length;
  
  const score = Math.round((correctAnswers / questions.length) * 100);
  
  const getFeedbackMessage = () => {
    if (score >= 90) return "Excellent! You aced it!";
    if (score >= 70) return "Great job! You've got a good grasp of this topic.";
    if (score >= 50) return "Good effort! There's room for improvement.";
    return "Nice try! Keep practicing to improve your score.";
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{quizTitle} - Results</CardTitle>
          <CardDescription>{getFeedbackMessage()}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-8 border-quizflow-gray-light">
              <div className="text-4xl font-bold text-quizflow-teal">{score}%</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Performance Summary</span>
              <span className="font-medium">{correctAnswers} of {questions.length} correct</span>
            </div>
            <Progress value={score} className="h-3" />
          </div>
          
          <div className="text-center mt-6">
            <p className="text-sm text-gray-500 mb-2">Want to share your results?</p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" size="sm">
                Share on Twitter
              </Button>
              <Button variant="outline" size="sm">
                Share on Facebook
              </Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={onRetry} 
            className="w-full sm:w-auto bg-quizflow-teal hover:bg-quizflow-teal/90"
          >
            Try Again
          </Button>
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full">
              Back to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizResult;
