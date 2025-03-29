
import React from 'react';
import { Brain, GraduationCap, Sparkles, Globe, Code, Atom } from 'lucide-react';
import CategoryCard, { CategoryProps } from './CategoryCard';

const Categories: React.FC = () => {
  const categories: CategoryProps[] = [
    {
      id: 'trivia',
      title: 'General Trivia',
      description: 'Test your knowledge on a variety of fascinating topics.',
      icon: <Brain size={24} className="text-quizflow-teal" />
    },
    {
      id: 'education',
      title: 'Educational Journey',
      description: 'Enrich your mind with academic-focused quizzes.',
      icon: <GraduationCap size={24} className="text-quizflow-teal" />
    },
    {
      id: 'fun',
      title: 'Just for Fun',
      description: 'Delightful brain teasers for all ages and interests.',
      icon: <Sparkles size={24} className="text-quizflow-teal" />
    },
    {
      id: 'geography',
      title: 'World Explorations',
      description: 'Embark on a global adventure with location-based quizzes.',
      icon: <Globe size={24} className="text-quizflow-teal" />
    },
    {
      id: 'technology',
      title: 'Digital Frontiers',
      description: 'Navigate the digital landscape from coding to cutting-edge tech.',
      icon: <Code size={24} className="text-quizflow-teal" />
    },
    {
      id: 'science',
      title: 'Scientific Wonders',
      description: 'Unravel the mysteries of science with captivating quizzes.',
      icon: <Atom size={24} className="text-quizflow-teal" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-3 text-center font-playfair">Explore Quiz Categories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Discover curated collections of quizzes designed to delight, challenge, and inspire your curiosity.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
