
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface CategoryProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CategoryCard: React.FC<CategoryProps> = ({ id, title, description, icon }) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white border border-gray-100 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <CardHeader className="pb-2 relative z-10">
          <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-br from-quizflow-teal/10 to-quizflow-orange/10 rounded-md text-quizflow-teal shadow-sm transition-all duration-300 group-hover:shadow-md">
            {icon}
          </div>
          <CardTitle className="text-xl font-playfair">{title}</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <CardDescription className="text-gray-600">{description}</CardDescription>
        </CardContent>
        <CardFooter className="relative z-10">
          <p className="text-sm font-medium text-quizflow-teal group-hover:translate-x-1 transition-transform duration-300">
            Explore quizzes <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;
