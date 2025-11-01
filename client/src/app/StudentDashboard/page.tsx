"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Play, Clock, CheckCircle, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from "next/image";




const enrolledCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 65,
    totalLessons: 45,
    completedLessons: 29,
    lastWatched: "Introduction to React Hooks",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=180&fit=crop",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Dr. Michael Chen",
    progress: 30,
    totalLessons: 38,
    completedLessons: 11,
    lastWatched: "Pandas DataFrames",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=180&fit=crop",
    category: "Data Science"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emma Rodriguez",
    progress: 85,
    totalLessons: 32,
    completedLessons: 27,
    lastWatched: "Advanced Prototyping",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=180&fit=crop",
    category: "Design"
  }
];

const achievements = [
  { title: "First Course Completed", icon: Trophy, date: "2024-01-15" },
  { title: "Learning Streak: 7 days", icon: CheckCircle, date: "2024-01-20" },
  { title: "Fast Learner", icon: Clock, date: "2024-01-18" }
];
const Page = () => {
   const [activeTab, setActiveTab] = useState("courses");
  return (
   <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
           <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student</h1>
          <p className="text-muted-foreground">Continue your learning journey and achieve your goals.</p>
        </div>          
         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <Card className="bg-blue-500 text-primary-foreground">
                    <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            </CardHeader>
               <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            </CardContent>
                </Card>     
                <Card className="bg-fuchsia-700 text-primary-foreground">
                    <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completed Lessons</CardTitle>
            </CardHeader>
               <CardContent>
              <div className="text-2xl font-bold">{enrolledCourses.length}</div>
            </CardContent>
                </Card>     
                <Card className="bg-red-400 text-primary-foreground">
                    <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            </CardHeader>
               <CardContent>
              <div className="text-2xl font-bold">60%</div>
            </CardContent>
                </Card>     
                <Card className="bg-blue-900 text-primary-foreground">
                    <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Achievements</CardTitle>
            </CardHeader>
               <CardContent>
              <div className="text-2xl font-bold">{achievements.length}</div>
            </CardContent>
                </Card>     
         </div>
         <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {enrolledCourses.map((course) => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <div className="flex">
                   <Image src={course.image} alt={course.title} width={300} height={180} className="object-cover rounded-l-lg"/>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold line-clamp-1">{course.title}</h3>
                          <p className="text-sm text-gray-600">{course.instructor}</p>
                        </div>
                        <Badge variant="secondary">{course.category}</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2 [&>div]:bg-blue-500" />
                        <p className="text-xs text-gray-600">
                          {course.completedLessons} of {course.totalLessons} lessons completed
                        </p>
                        <p className="text-xs text-gray-500">
                          Last watched: {course.lastWatched}
                        </p>
                      </div>
                      <Button size="sm" className="mt-3 w-full bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-400">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
              </div>
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-dashed border-2 border-blue-200">
              <CardContent className="flex flex-col items-center justify-center py-8">
                <BookOpen className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Discover More Courses</h3>
                <p className="text-gray-600 text-center mb-4">
                  Expand your knowledge with thousands of courses from expert instructors
                </p>
                <Button asChild className='bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400'>
                  <Link href="/courses">Browse Courses</Link>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Track your progress across all enrolled courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{course.title}</h4>
                      <span className="text-sm text-blue-600">{course.progress}%</span>
                    </div>
                   <Progress value={course.progress} className="h-2 [&>div]:bg-blue-500" />
                    <p className="text-sm text-blue-600">
                      {course.completedLessons} of {course.totalLessons} lessons completed
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-linear-to-br from-yellow-50 to-orange-50 border-yellow-200">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <achievement.icon className="h-12 w-12 text-yellow-600 mb-4" />
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">Earned on {achievement.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
         </Tabs>
      </div>

   </div>
  )
}

export default Page