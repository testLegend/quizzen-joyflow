
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Play, Crown, Telescope, BookOpen, Cpu, Film } from 'lucide-react';

interface FeaturedQuizProps {
  id: string;
  title: string;
  description: string;
  category: string;
  questions: number;
  icon: React.ReactNode;
}

const FeaturedQuizzes: React.FC = () => {
  const featuredQuizzes: FeaturedQuizProps[] = [
    {
      id: 'quiz1',
      title: 'World Geography Marvels',
      description: 'Explore the wonders of countries and capitals',
      category: 'Geography',
      questions: 10,
      icon: <Telescope size={18} />
    },
    {
      id: 'quiz2',
      title: 'Cosmic Wonders',
      description: 'Journey through our solar system and beyond',
      category: 'Science',
      questions: 15,
      icon: <Crown size={18} />
    },
    {
      id: 'quiz3',
      title: 'History's Tapestry',
      description: 'Unravel the stories of the 20th century',
      category: 'Education',
      questions: 12,
      icon: <BookOpen size={18} />
    },
    {
      id: 'quiz4',
      title: 'Digital Frontiers',
      description: 'For the tech-savvy knowledge seekers',
      category: 'Technology',
      questions: 10,
      icon: <Cpu size={18} />
    },
    {
      id: 'quiz5',
      title: 'Cultural Odyssey',
      description: 'Movies, music, and entertainment gems',
      category: 'Fun',
      questions: 15,
      icon: <Film size={18} />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-quizflow-gray-light/30 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold font-playfair text-quizflow-gray-dark flex items-center">
            <span className="bg-gradient-to-r from-quizflow-teal to-quizflow-orange bg-clip-text text-transparent">Today's Top Quizzes</span>
          </h2>
          <Link to="/quizzes" className="text-quizflow-teal font-medium hover:underline group transition-all duration-300 flex items-center">
            View all quizzes
            <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        <ScrollArea className="w-full">
          <div className="flex space-x-6 pb-4">
            {featuredQuizzes.map((quiz) => (
              <Card key={quiz.id} className="min-w-[320px] bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                <CardHeader className="pb-2 border-b border-gray-50">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1 rounded-full bg-quizflow-orange/10 text-quizflow-orange">
                      {quiz.icon}
                    </div>
                    <div className="text-sm font-medium text-quizflow-orange">{quiz.category}</div>
                  </div>
                  <CardTitle className="font-playfair">{quiz.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardDescription>{quiz.description}</CardDescription>
                  <div className="mt-3 text-sm text-gray-500 font-medium">{quiz.questions} enchanting questions</div>
                </CardContent>
                <CardFooter>
                  <Link to={`/quiz/${quiz.id}`} className="w-full">
                    <Button className="w-full bg-gradient-to-r from-quizflow-teal to-quizflow-teal/90 hover:shadow-md transition-all duration-300 group">
                      <Play size={16} className="mr-2 transition-transform duration-300 group-hover:scale-110" /> 
                      Begin Journey
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
