"use client";
import React, { useState } from 'react';
import  Link  from 'next/link';
import { Plus, Edit, Trash2, Users, DollarSign, BarChart3, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/context/AuthContext';
import { CreateCourseDialog } from "@/components/dialogs/CreateCourseDialog";
import { EditCourseDialog } from "@/components/dialogs/EditCourseDialog";

interface Course {
  id: number;
  title: string;
  students: number;
  revenue: number;
  status: string;
  category: string;
  price: number;
  rating: number;
  lessons: number;
  image: string;
}

const teacherCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    students: 12540,
    revenue: 1254000,
    status: "Published",
    category: "Web Development",
    price: 99.99,
    rating: 4.8,
    lessons: 45,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=180&fit=crop"
  },
  {
    id: 2,
    title: "Advanced JavaScript & React",
    students: 8930,
    revenue: 893000,
    status: "Published",
    category: "Web Development",
    price: 119.99,
    rating: 4.9,
    lessons: 52,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=180&fit=crop"
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    students: 0,
    revenue: 0,
    status: "Draft",
    category: "Web Development",
    price: 89.99,
    rating: 0,
    lessons: 0,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=180&fit=crop"
  }
];
const Page = () => {
  const {user} = useAuth();   
  const [courses, setCourses] = useState(teacherCourses);
  const [activeTab, setActiveTab] = useState("courses");
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    level: ''
  });               

  const handleCreateCourse = () => {
       alert(`Course "${formData.title}" created!`);
       setIsCreateDialogOpen(false);
       setFormData({
         title: '',
         description: '',
         category: '',
         price: '',
         level: ''
       });             
  }
  const handleDeleteCourse = (id : number) => {
        alert(`Course deleted! ${id}`);

  }
  const handleUpdateCourse = () => {
        alert('Course updated!');            
  }
   const openEditDialog = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      title: course.title,
      description: '',
      category: course.category,
      price: course.price.toString(),
      level: ''
    });
  };  

  const totalStudents = courses.reduce((acc, course) => acc + course.students, 0);
  const totalRevenue = courses.reduce((acc, course) => acc + course.revenue, 0);
  const publishedCourses = courses.filter(course => course.status === 'Published').length;
  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                <div>
            <h1 className="text-3xl font-bold mb-2">Welcome, {user?.name || 'Teacher'}!</h1>
            <p className="text-muted-foreground">Manage your courses and track your teaching progress.</p>
          </div>    
            <CreateCourseDialog
              open={isCreateDialogOpen}
              onOpenChange={setIsCreateDialogOpen}
              formData={formData}
              setFormData={setFormData}
              onCreate={handleCreateCourse}
            />
         </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-blue-400 text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalStudents.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-fuchsia-700 text-secondary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">${(totalRevenue / 100).toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card className="bg-red-400 text-accent-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-white">Published Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{publishedCourses}</div>
            </CardContent>
          </Card>
          <Card className="bg-blue-900 text-primary-foreground">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
            </CardContent>
          </Card>
        </div>
         
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card
  key={course.id}
  className="group hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm flex flex-col h-full"
>
  <div className="relative">
    <img
      src={course.image}
      alt={course.title}
      className="w-full h-32 object-cover rounded-t-lg"
    />
    <Badge
      className={`absolute top-2 right-2 ${
        course.status === "Published" ? "bg-green-600" : "bg-yellow-600"
      }`}
    >
      {course.status}
    </Badge>
  </div>

  <CardHeader className="pb-2">
    <CardTitle className="line-clamp-1">{course.title}</CardTitle>
    <CardDescription>{course.category}</CardDescription>
  </CardHeader>

  <CardContent className="space-y-3 flex flex-col flex-1">
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div className="flex items-center gap-1">
        <Users className="h-4 w-4 text-gray-500" />
        <span>{course.students.toLocaleString()} students</span>
      </div>
      <div className="flex items-center gap-1">
        <DollarSign className="h-4 w-4 text-gray-500" />
        <span>${course.price}</span>
      </div>
    </div>

    {course.status === "Published" && (
      <div className="bg-green-50 p-2 rounded text-sm">
        <div className="text-green-700 font-medium">
          Revenue: ${(course.revenue / 100).toLocaleString()}
        </div>
        <div className="text-green-600">Rating: {course.rating}/5.0</div>
      </div>
    )}

    
    <div className="flex gap-2 mt-auto pt-2">
      <Button
        size="sm"
        variant="outline"
        className="flex-1"
        onClick={() => openEditDialog(course)}
      >
        <Edit className="h-4 w-4 mr-1" />
        Edit
      </Button>
      <Button size="sm" variant="outline" className="flex-1">
        <Eye className="h-4 w-4 mr-1" />
        View
      </Button>
      <Button
        size="sm"
        variant="destructive"
        onClick={() => handleDeleteCourse(course.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  </CardContent>
</Card>

              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Course Performance
                </CardTitle>
                <CardDescription>Track your courses` performance and student engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courses.filter(course => course.status === 'Published').map((course) => (
                    <div key={course.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{course.title}</h4>
                        <p className="text-sm text-gray-600">{course.students.toLocaleString()} students enrolled</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">
                          ${(course.revenue / 100).toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Revenue</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Teacher Profile Settings</CardTitle>
                <CardDescription>Manage your teaching profile and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="teacher-name">Display Name</Label>
                  <Input id="teacher-name" defaultValue="Sarah Johnson" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea id="bio" placeholder="Tell students about yourself and your expertise" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
                <Button className='bg-blue-500'>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
          </Tabs>
                    <EditCourseDialog
                    open={!!editingCourse}
                    onClose={() => setEditingCourse(null)}
                    formData={formData}
                    setFormData={setFormData}
                    onSave={handleUpdateCourse}
                    />
       </div>            
    </div>
  )
}

export default Page