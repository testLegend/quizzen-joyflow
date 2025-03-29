
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 bg-hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-quizflow-gray-dark">
            Test Your Knowledge, Anytime
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Discover fun and educational quizzes on a wide range of topics. Challenge yourself or compete with friends!
          </p>
          <Link to="/quizzes">
            <Button className="bg-quizflow-teal hover:bg-quizflow-teal/90 text-white rounded-full px-8 py-6 text-lg">
              Start a Quiz
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
