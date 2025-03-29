
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuizCard, { Question } from '../components/QuizCard';
import QuizResult from '../components/QuizResult';
import { Button } from '@/components/ui/button';

// Mock quiz data
const quizData = {
  quiz1: {
    id: 'quiz1',
    title: 'World Geography Basics',
    description: 'Test your knowledge of countries and capitals',
    category: 'Geography',
    questions: [
      {
        id: 1,
        text: 'What is the capital of France?',
        options: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 2
      },
      {
        id: 2,
        text: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'Thailand', 'South Korea'],
        correctAnswer: 1
      },
      {
        id: 3,
        text: 'The Great Barrier Reef is located in which country?',
        options: ['Brazil', 'Australia', 'Mexico', 'Indonesia'],
        correctAnswer: 1
      },
      {
        id: 4,
        text: 'Which river is the longest in the world?',
        options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
        correctAnswer: 1
      },
      {
        id: 5,
        text: 'Which desert is the largest in the world?',
        options: ['Gobi', 'Sahara', 'Antarctic', 'Arabian'],
        correctAnswer: 2
      }
    ]
  },
  quiz2: {
    id: 'quiz2',
    title: 'Science Quiz: Space Edition',
    description: 'All about our solar system and beyond',
    category: 'Science',
    questions: [
      {
        id: 1,
        text: 'What is the closest planet to the Sun?',
        options: ['Venus', 'Earth', 'Mercury', 'Mars'],
        correctAnswer: 2
      },
      {
        id: 2,
        text: 'How many planets are in our solar system?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 1
      },
      {
        id: 3,
        text: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correctAnswer: 2
      },
      {
        id: 4,
        text: 'What is the name of our galaxy?',
        options: ['Andromeda', 'Milky Way', 'Orion', 'Cassiopeia'],
        correctAnswer: 1
      },
      {
        id: 5,
        text: 'What is a light-year?',
        options: ['The brightness of a star', 'The distance light travels in one year', 'A year with more daylight', 'The speed of light'],
        correctAnswer: 1
      }
    ]
  }
};

const QuizPage: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quiz, setQuiz] = useState<{
    id: string;
    title: string;
    description: string;
    category: string;
    questions: Question[];
  } | null>(null);

  useEffect(() => {
    // In a real app, this would fetch from an API
    if (!quizId || !quizData[quizId as keyof typeof quizData]) {
      navigate('/');
      return;
    }
    
    setQuiz(quizData[quizId as keyof typeof quizData]);
    
    // Initialize userAnswers array with nulls
    const answersArray = Array(quizData[quizId as keyof typeof quizData].questions.length).fill(null);
    setUserAnswers(answersArray);
  }, [quizId, navigate]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    setShowResult(true);
    
    // Update userAnswers array
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newUserAnswers);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedOption(null);
    
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(quiz.questions.length).fill(null));
    setSelectedOption(null);
    setShowResult(false);
    setQuizComplete(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4 bg-quizflow-gray-light/30">
        <div className="container mx-auto">
          {!quizComplete ? (
            <>
              <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold mb-2">{quiz.title}</h1>
                <p className="text-gray-600">{quiz.description}</p>
              </div>
              
              <QuizCard
                question={quiz.questions[currentQuestionIndex]}
                currentQuestion={currentQuestionIndex + 1}
                totalQuestions={quiz.questions.length}
                selectedOption={selectedOption}
                onOptionSelect={handleOptionSelect}
                onNextQuestion={handleNextQuestion}
                showResult={showResult}
              />
            </>
          ) : (
            <QuizResult
              questions={quiz.questions}
              userAnswers={userAnswers}
              quizTitle={quiz.title}
              onRetry={handleRestartQuiz}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizPage;
