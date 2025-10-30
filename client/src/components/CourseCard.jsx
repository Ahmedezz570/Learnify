"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Star, Users } from "lucide-react";
import Link from "next/link";

const CourseCard = ({ course }) => {
  return (
                    <>
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className="bg-blue-600">{course.category}</Badge>
          <Badge variant="secondary">{course.level}</Badge>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription>by {course.instructor}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Users className="h-4 w-4" />
            <span className="text-sm">{course.students.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>

       <CardFooter className="flex items-center justify-between">
                     <div className="text-2xl font-bold text-blue-600">${course.price}</div>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Link href={`/courses/${course.id}`}>View Course</Link>   
                      </Button>
       </CardFooter>
      {/* <CardFooter className="flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">${course.price}</div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
          <Link href={/course/${course.id}}>View Course</Link>
        </Button>
      </CardFooter> */}
    </Card>
    </>
  );
};

export default CourseCard;