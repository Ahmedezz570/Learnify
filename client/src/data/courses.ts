export interface Course {
  id: number;
  title: string;
  instructor: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  lessons: number;
  duration: string;
}

export const featuredCourses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    price: 99.99,
    rating: 4.8,
    students: 12540,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
    category: "Web Development",
    lessons: 45,
    duration: "12 hours"
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Dr. Michael Chen",
    price: 79.99,
    rating: 4.9,
    students: 8930,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
    category: "Data Science",
    lessons: 38,
    duration: "10 hours"
  },
  {
    id: 3,
    title: "UI/UX Design Masterclass",
    instructor: "Emma Rodriguez",
    price: 89.99,
    rating: 4.7,
    students: 6750,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
    category: "Design",
    lessons: 32,
    duration: "8 hours"
  }
];