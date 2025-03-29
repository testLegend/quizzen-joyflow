
import React from 'react';
import { Brain, GraduationCap, Sparkles, Globe, Code, Atom } from 'lucide-react';
import CategoryCard, { CategoryProps } from './CategoryCard';

const Categories: React.FC = () => {
  const categories: CategoryProps[] = [
    {
      id: 'trivia',
      title: 'General Trivia',
      description: 'Test your knowledge on a variety of general topics.',
      icon: <Brain size={24} />
    },
    {
      id: 'education',
      title: 'Educational',
      description: 'Learn while you play with academic-focused quizzes.',
      icon: <GraduationCap size={24} />
    },
    {
      id: 'fun',
      title: 'Just for Fun',
      description: 'Quick brain teasers for all ages and interests.',
      icon: <Sparkles size={24} />
    },
    {
      id: 'geography',
      title: 'Geography',
      description: 'Explore the world with map and location-based quizzes.',
      icon: <Globe size={24} />
    },
    {
      id: 'technology',
      title: 'Technology',
      description: 'From coding to gadgets - test your tech knowledge.',
      icon: <Code size={24} />
    },
    {
      id: 'science',
      title: 'Science',
      description: 'Discover the wonders of science with these quizzes.',
      icon: <Atom size={24} />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Quiz Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
