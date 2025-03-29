
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { SparklesIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-r from-[#F0F4F8] to-[#A1C4FD] relative overflow-hidden">
      {/* Subtle animated particles */}
      <div className="absolute inset-0 opacity-20">
        <div className="particle-1 absolute w-2 h-2 rounded-full bg-white animate-float left-1/4 top-1/4"></div>
        <div className="particle-2 absolute w-3 h-3 rounded-full bg-white animate-float-delayed left-2/3 top-1/2"></div>
        <div className="particle-3 absolute w-2 h-2 rounded-full bg-white animate-float-slow left-1/2 top-3/4"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-quizflow-gray-dark font-playfair animate-fade-in">
            Unleash Your Brilliance, One Quiz at a Time
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 animate-fade-in animation-delay-200">
            Discover an enchanting world of knowledge through our carefully crafted quizzes.
          </p>
          <Link to="/quizzes">
            <Button className="bg-quizflow-teal hover:bg-quizflow-teal/90 hover:shadow-glow text-white rounded-full px-8 py-6 text-lg animate-scale-in animation-delay-400 group transition-all duration-300">
              <SparklesIcon className="mr-2 opacity-70 group-hover:opacity-100 transition-opacity" size={20} />
              Start a Quiz
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
