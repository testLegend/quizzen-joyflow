
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-quizflow-teal font-poppins">Quiz<span className="text-quizflow-orange">Flow</span></span>
            </Link>
            <p className="mt-2 text-sm text-gray-600">Test your knowledge, anytime.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/about" className="text-sm text-gray-600 hover:text-quizflow-teal transition-colors">
              About Us
            </Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-quizflow-teal transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-sm text-gray-600 hover:text-quizflow-teal transition-colors">
              Terms
            </Link>
            <Link to="/contact" className="text-sm text-gray-600 hover:text-quizflow-teal transition-colors">
              Contact
            </Link>
            <Link to="/support" className="text-sm text-gray-600 hover:text-quizflow-teal transition-colors">
              Support
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} QuizFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
