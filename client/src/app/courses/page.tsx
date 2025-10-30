import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger ,SelectValue , SelectItem} from '@/components/ui/select'
import { allCourses } from '@/data/AllCourses'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Clock, Star, Users } from 'lucide-react'
import Link from 'next/link'
const page = () => {
                    const categories = ["All", "Web Development", "Data Science", "Design", "Mobile Development"];
                    const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  return (
    <div className='min-h-screen bg-blue-50 py-12'>
          <div className="container mx-auto px-4 py-8">
                     <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Amazing Courses
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from thousands of courses taught by expert instructors from around the world
          </p>
        </div>
              <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 mb-8 border border-gray-200">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                                        <Input placeholder="Search courses..."  className="pl-10"/> 
                    </div>
                    <Select>
                                        <SelectTrigger>
                                                            <SelectValue placeholder="Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
                    </Select>
                    <Select >
              <SelectTrigger>
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                {levels.map(level => (
                  <SelectItem key={level} value={level}>{level}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select >
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
               </div>
              </div>
              <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {allCourses.length} courses 
          </p>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCourses.map((course) => (
            <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className="bg-blue-600">
                    {course.category}
                  </Badge>
                  <Badge variant="secondary">
                    {course.level}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription>
                  by {course.instructor}
                </CardDescription>
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
                <div className="text-2xl font-bold text-blue-600">
                  ${course.price}
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Link href={`/course/${course.id}`}>
                    View Course
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {allCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No courses found matching your criteria.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
console.log('Clear filters clicked')

              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>         
    </div>
  )
}

export default page