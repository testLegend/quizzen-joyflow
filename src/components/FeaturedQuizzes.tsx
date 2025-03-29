
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

interface FeaturedQuizProps {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: number;
}

const FeaturedQuizzes: React.FC = () => {
  const featuredQuizzes: FeaturedQuizProps[] = [
    {
      id: 'quiz1',
      title: 'World Geography Basics',
      description: 'Test your knowledge of countries and capitals',
      category: 'Geography',
      questions: 10
    },
    {
      id: 'quiz2',
      title: 'Science Quiz: Space Edition',
      description: 'All about our solar system and beyond',
      category: 'Science',
      questions: 15
    },
    {
      id: 'quiz3',
      title: 'History Highlights',
      description: 'Major events from the 20th century',
      category: 'Education',
      questions: 12
    },
    {
      id: 'quiz4',
      title: 'Tech Trivia Challenge',
      description: 'For the tech-savvy quiz takers',
      category: 'Technology',
      questions: 10
    },
    {
      id: 'quiz5',
      title: 'Pop Culture Puzzler',
      description: 'Movies, music, and entertainment',
      category: 'Fun',
      questions: 15
    }
  ];

  return (
    <section className="py-16 bg-quizflow-gray-light/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Today's Top Quizzes</h2>
          <Link to="/quizzes" className="text-quizflow-teal font-medium hover:underline">
            View all quizzes
          </Link>
        </div>

        <ScrollArea className="w-full">
          <div className="flex space-x-6 pb-4">
            {featuredQuizzes.map((quiz) => (
              <Card key={quiz.id} className="min-w-[300px] card-hover">
                <CardHeader className="pb-2">
                  <div className="text-sm font-medium text-quizflow-orange mb-1">{quiz.category}</div>
                  <CardTitle>{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{quiz.description}</CardDescription>
                  <div className="mt-2 text-sm text-gray-500">{quiz.questions} questions</div>
                </CardContent>
                <CardFooter>
                  <Link to={`/quiz/${quiz.id}`} className="w-full">
                    <Button className="w-full bg-quizflow-teal hover:bg-quizflow-teal/90">
                      <Play size={16} className="mr-2" /> Play Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default FeaturedQuizzes;
