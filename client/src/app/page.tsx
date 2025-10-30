"use client"
import React from 'react'
import {featuredCourses} from '@/data/courses'
import { Button } from '@/components/ui/button'
import { Play, Video, Clock, Award ,Star} from 'lucide-react'
import  Link  from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import CourseCard from '@/components/CourseCard'
const page = () => {
  return (
    <div>
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50" />
        <div className="container mx-auto text-center relative">
          <div className="inline-block mb-4 px-4 py-2 bg-yellow-100 rounded-full">
            <span className="text-primary font-semibold">🎓 Transform Your Future</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Learn Without Limits
          </h2>
          <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
            Join thousands of students mastering new skills with our expert-led courses. 
            From web development to data science, start your learning journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild className="px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600">
              <Link href="/courses" className="flex items-center gap-2">
                <Play className="h-5 w-5 " />
                Explore Courses
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
              <Link href="/register">
                Start Teaching
              </Link> 
            </Button>
          </div>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border">
              <Video className="h-4 w-4 text-primary" />
              <span>HD Video Lessons</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border">
              <Clock className="h-4 w-4 text-black" />
              <span>Learn at Your Pace</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border">
              <Award className="h-4 w-4 text-black" />
              <span>Certificates Included</span>
            </div>
          </div>
        </div>
      </section>


       {/* Stats Section */}
      <section className="py-16 bg-card/50 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">50,000+</div>
              <div className="text-muted-foreground font-medium">Active Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-black">1,200+</div>
              <div className="text-muted-foreground font-medium">Expert Instructors</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-black">5,000+</div>
              <div className="text-muted-foreground font-medium">Premium Courses</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Featured Courses</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular courses taught by industry experts
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
               <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Link href="/courses">
                View All Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page