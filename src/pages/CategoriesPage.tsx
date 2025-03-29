
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const QuizzesPage: React.FC = () => {
  // Mock quiz data
  const quizzes = [
    {
      id: 'quiz1',
      title: 'World Geography Basics',
      description: 'Test your knowledge of countries and capitals',
      category: 'Geography',
      questions: 5,
      difficulty: 'Beginner'
    },
    {
      id: 'quiz2',
      title: 'Science Quiz: Space Edition',
      description: 'All about our solar system and beyond',
      category: 'Science',
      questions: 5,
      difficulty: 'Intermediate'
    },
    {
      id: 'quiz3',
      title: 'History Highlights',
      description: 'Major events from the 20th century',
      category: 'Education',
      questions: 10,
      difficulty: 'Advanced'
    },
    {
      id: 'quiz4',
      title: 'Tech Trivia Challenge',
      description: 'For the tech-savvy quiz takers',
      category: 'Technology',
      questions: 8,
      difficulty: 'Intermediate'
    },
    {
      id: 'quiz5',
      title: 'Pop Culture Puzzler',
      description: 'Movies, music, and entertainment',
      category: 'Fun',
      questions: 12,
      difficulty: 'Beginner'
    },
    {
      id: 'quiz6',
      title: 'Math Masters',
      description: 'Put your calculation skills to the test',
      category: 'Education',
      questions: 10,
      difficulty: 'Advanced'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4">
        <div className="container mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-4">All Quizzes</h1>
            <p className="text-gray-600">Find the perfect quiz for you from our collection.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz) => (
              <Card key={quiz.id} className="card-hover">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-sm font-medium text-quizflow-orange mb-1">{quiz.category}</div>
                      <CardTitle>{quiz.title}</CardTitle>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                      quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {quiz.difficulty}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{quiz.description}</CardDescription>
                  <div className="text-sm text-gray-500">{quiz.questions} questions</div>
                </CardContent>
                <CardFooter>
                  <Link to={`/quiz/${quiz.id}`} className="w-full">
                    <Button className="w-full bg-quizflow-teal hover:bg-quizflow-teal/90">
                      Start Quiz
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuizzesPage;
