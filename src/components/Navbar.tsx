
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-quizflow-teal font-poppins">Quiz<span className="text-quizflow-orange">Flow</span></span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-quizflow-gray-dark font-medium hover:text-quizflow-teal transition-colors">
              Home
            </Link>
            <Link to="/quizzes" className="text-quizflow-gray-dark font-medium hover:text-quizflow-teal transition-colors">
              Quizzes
            </Link>
            <Link to="/profile" className="text-quizflow-gray-dark font-medium hover:text-quizflow-teal transition-colors">
              Profile
            </Link>
          </nav>
          
          <div className="flex items-center">
            <Button variant="outline" className="hidden md:inline-flex mr-4">
              Sign In
            </Button>
            <Button className="bg-quizflow-teal hover:bg-quizflow-teal/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
