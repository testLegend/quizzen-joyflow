
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const ProfilePage: React.FC = () => {
  // Mock user data
  const userData = {
    name: "Alex Johnson",
    quizzesTaken: 12,
    averageScore: 78,
    badgesEarned: 5,
    recentQuizzes: [
      { id: "quiz1", title: "World Geography Basics", score: 80, date: "2023-04-15" },
      { id: "quiz2", title: "Science Quiz: Space Edition", score: 90, date: "2023-04-10" },
      { id: "quiz3", title: "Tech Trivia Challenge", score: 75, date: "2023-04-05" }
    ],
    favoriteQuizzes: [
      { id: "quiz2", title: "Science Quiz: Space Edition" },
      { id: "quiz5", title: "Pop Culture Puzzler" }
    ],
    achievements: [
      { id: "achievement1", name: "Quiz Master", description: "Complete 10 quizzes", completed: true },
      { id: "achievement2", name: "Perfect Score", description: "Get 100% on any quiz", completed: false },
      { id: "achievement3", name: "Science Whiz", description: "Complete all science quizzes", completed: false },
      { id: "achievement4", name: "Quick Thinker", description: "Finish a quiz in under 2 minutes", completed: true },
      { id: "achievement5", name: "Dedicated Learner", description: "Take a quiz every day for a week", completed: false }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-24 px-4 bg-quizflow-gray-light/30">
        <div className="container mx-auto max-w-5xl">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="w-24 h-24 bg-quizflow-teal rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {userData.name.charAt(0)}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-2xl font-bold mb-2">{userData.name}</h1>
                  <p className="text-gray-600 mb-4">Quiz enthusiast and lifelong learner</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-quizflow-teal">{userData.quizzesTaken}</div>
                      <div className="text-sm text-gray-500">Quizzes Taken</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-quizflow-teal">{userData.averageScore}%</div>
                      <div className="text-sm text-gray-500">Average Score</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-3xl font-bold text-quizflow-teal">{userData.badgesEarned}</div>
                      <div className="text-sm text-gray-500">Badges Earned</div>
                    </div>
                  </div>
                  
                  <Button className="bg-quizflow-teal hover:bg-quizflow-teal/90">Edit Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="recent" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="recent">Recent Quizzes</TabsTrigger>
              <TabsTrigger value="favorites">Favorites</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            
            <TabsContent value="recent">
              <div className="grid gap-4">
                {userData.recentQuizzes.map((quiz) => (
                  <Card key={quiz.id} className="overflow-hidden">
                    <div className="flex flex-col sm:flex-row">
                      <div className="flex-1 p-6">
                        <CardTitle className="text-lg mb-1">{quiz.title}</CardTitle>
                        <CardDescription>Taken on {new Date(quiz.date).toLocaleDateString()}</CardDescription>
                      </div>
                      <div className="w-full sm:w-auto p-6 bg-slate-50 flex flex-row sm:flex-col items-center justify-between sm:justify-center">
                        <div className="text-sm text-gray-500">Score</div>
                        <div className="text-2xl font-bold text-quizflow-teal">{quiz.score}%</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="favorites">
              <div className="grid gap-4">
                {userData.favoriteQuizzes.length > 0 ? (
                  userData.favoriteQuizzes.map((quiz) => (
                    <Card key={quiz.id} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row justify-between items-center p-6">
                        <CardTitle className="text-lg">{quiz.title}</CardTitle>
                        <Button variant="outline" className="mt-4 sm:mt-0">
                          Take Quiz
                        </Button>
                      </div>
                    </Card>
                  ))
                ) : (
                  <Card>
                    <CardContent className="pt-6 text-center">
                      <p className="text-gray-500">You haven't added any favorites yet.</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="achievements">
              <div className="grid gap-4">
                {userData.achievements.map((achievement) => (
                  <Card key={achievement.id} className="overflow-hidden">
                    <div className="flex items-center p-6">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        achievement.completed 
                          ? 'bg-quizflow-teal text-white' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {achievement.completed ? '✓' : '?'}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{achievement.name}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </div>
                      {achievement.completed && (
                        <span className="text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
