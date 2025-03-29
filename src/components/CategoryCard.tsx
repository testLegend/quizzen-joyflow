
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
      <Card className="h-full card-hover">
        <CardHeader className="pb-2">
          <div className="w-12 h-12 mb-4 flex items-center justify-center bg-quizflow-teal/10 rounded-md text-quizflow-teal">
            {icon}
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <p className="text-sm font-medium text-quizflow-teal">Explore quizzes →</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CategoryCard;
