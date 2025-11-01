"use client";
import React , {useState}from 'react';
import  Link  from 'next/link';
import { Star, Users, BookOpen } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Pagination from '@/pages/Pagination';
export const teachers = [
  {
    id: 1,
    name: "Sarah Johnson",
    specialty: "Web Development",
    rating: 4.9,
    students: 25000,
    courses: 12,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    bio: "Passionate web developer with 10+ years of experience building scalable applications. Specialized in React, Node.js, and full-stack development.",
    achievements: ["Top Instructor 2023", "5M+ Student Minutes", "Expert Certified"],
    totalReviews: 15420,
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Data Science & AI",
    rating: 4.9,
    students: 18500,
    courses: 8,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    bio: "PhD in Machine Learning with extensive experience in AI research and practical applications. Former lead data scientist at Fortune 500 companies.",
    achievements: ["AI Research Award", "Published Author", "Industry Expert"],
    totalReviews: 12300,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    specialty: "UI/UX Design",
    rating: 4.8,
    students: 15200,
    courses: 10,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    bio: "Award-winning designer focused on creating beautiful, user-centered experiences. Worked with leading tech companies and startups.",
    achievements: ["Design Excellence Award", "Top-Rated Instructor", "Published Designer"],
    totalReviews: 10800,
  },
  {
    id: 4,
    name: "James Wilson",
    specialty: "Mobile Development",
    rating: 4.9,
    students: 20300,
    courses: 15,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    bio: "Mobile development expert specializing in iOS and Android apps. Built apps with millions of downloads across various industries.",
    achievements: ["App Developer of the Year", "Million Downloads", "Tech Innovator"],
    totalReviews: 14200,
  },
  {
    id: 5,
    name: "James Wilson",
    specialty: "Mobile Development",
    rating: 4.9,
    students: 20300,
    courses: 15,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    bio: "Mobile development expert specializing in iOS and Android apps. Built apps with millions of downloads across various industries.",
    achievements: ["App Developer of the Year", "Million Downloads", "Tech Innovator"],
    totalReviews: 14200,
  },
  {
    id: 6,
    name: "James Wilson",
    specialty: "Mobile Development",
    rating: 4.9,
    students: 20300,
    courses: 15,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    bio: "Mobile development expert specializing in iOS and Android apps. Built apps with millions of downloads across various industries.",
    achievements: ["App Developer of the Year", "Million Downloads", "Tech Innovator"],
    totalReviews: 14200,
  },
  {
    id: 7,
    name: "James Wilson",
    specialty: "Mobile Development",
    rating: 4.9,
    students: 20300,
    courses: 15,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    bio: "Mobile development expert specializing in iOS and Android apps. Built apps with millions of downloads across various industries.",
    achievements: ["App Developer of the Year", "Million Downloads", "Tech Innovator"],
    totalReviews: 14200,
  },
];

export const teacherCourses = [
  {
    id: 1,
    teacherId: 1,
    title: "Complete Web Development Bootcamp",
    rating: 4.8,
    students: 12540,
    price: 99.99,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    teacherId: 1,
    title: "Advanced React Patterns",
    rating: 4.9,
    students: 8320,
    price: 89.99,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
  },
];

const Teachers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(teachers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTeachers = teachers.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent">Our Expert Teachers</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry professionals with years of experience
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTeachers.map((teacher) => (
            <Card key={teacher.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary/20">
                    <AvatarImage src={teacher.image} alt={teacher.name} />
                    <AvatarFallback className="text-2xl">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="text-2xl">{teacher.name}</CardTitle>
                <CardDescription className="text-base">{teacher.specialty}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-card border">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-sm">{teacher.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div className="p-2 rounded-lg bg-card border">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="font-bold text-sm">{(teacher.students / 1000).toFixed(0)}K</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Students</p>
                  </div>
                  <div className="p-2 rounded-lg bg-card border">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <BookOpen className="h-4 w-4 text-black" />
                      <span className="font-bold text-sm">{teacher.courses}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Courses</p>
                  </div>
                </div>

                
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {teacher.bio}
                </p>

               
                <Button asChild className="w-full bg-blue-500">
                  <Link href={`/teachers/${teacher.id}`}>View Profile</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default Teachers;
