
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  instructorId: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: Lesson[];
  createdAt: string;
  updatedAt: string;
  isPublished: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  duration: string;
  order: number;
  isPreview: boolean;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  progress: number;
  completedLessons: string[];
  lastWatchedLesson?: string;
}

export interface Payment {
  id: string;
  userId: string;
  courseId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  paymentMethod: string;
  createdAt: string;
}

// Mock courses data
export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete Web Development Bootcamp',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.',
    instructor: 'Sarah Johnson',
    instructorId: '3',
    price: 99.99,
    rating: 4.8,
    students: 12540,
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
    category: 'Web Development',
    level: 'Beginner',
    duration: '12 hours',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
    isPublished: true,
    lessons: [
      {
        id: '1-1',
        title: 'Introduction to Web Development',
        description: 'Overview of web technologies and development process',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        duration: '15:30',
        order: 1,
        isPreview: true
      },
      {
        id: '1-2',
        title: 'HTML Fundamentals',
        description: 'Learn the basics of HTML markup',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
        duration: '25:45',
        order: 2,
        isPreview: false
      },
      {
        id: '1-3',
        title: 'CSS Styling',
        description: 'Master CSS for beautiful designs',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        duration: '32:20',
        order: 3,
        isPreview: false
      }
    ]
  },
  {
    id: '2',
    title: 'Python for Data Science',
    description: 'Master Python programming for data analysis and machine learning.',
    instructor: 'Dr. Michael Chen',
    instructorId: '5',
    price: 79.99,
    rating: 4.9,
    students: 8930,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop',
    category: 'Data Science',
    level: 'Intermediate',
    duration: '10 hours',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
    isPublished: true,
    lessons: [
      {
        id: '2-1',
        title: 'Python Basics',
        description: 'Introduction to Python programming',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        duration: '20:15',
        order: 1,
        isPreview: true
      },
      {
        id: '2-2',
        title: 'NumPy and Pandas',
        description: 'Data manipulation with Python libraries',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
        duration: '35:30',
        order: 2,
        isPreview: false
      }
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    description: 'Learn design principles, user research, and prototyping.',
    instructor: 'Emma Rodriguez',
    instructorId: '6',
    price: 89.99,
    rating: 4.7,
    students: 6750,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop',
    category: 'Design',
    level: 'Beginner',
    duration: '8 hours',
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-25T00:00:00Z',
    isPublished: true,
    lessons: [
      {
        id: '3-1',
        title: 'Design Principles',
        description: 'Fundamental principles of good design',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        duration: '18:45',
        order: 1,
        isPreview: true
      },
      {
        id: '3-2',
        title: 'User Research',
        description: 'Understanding your users',
        videoUrl: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
        duration: '28:20',
        order: 2,
        isPreview: false
      }
    ]
  }
];

// Mock enrollments
export const mockEnrollments: Enrollment[] = [
  {
    id: '1',
    userId: '2',
    courseId: '1',
    enrolledAt: '2024-01-16T00:00:00Z',
    progress: 65,
    completedLessons: ['1-1', '1-2'],
    lastWatchedLesson: '1-2'
  },
  {
    id: '2',
    userId: '2',
    courseId: '3',
    enrolledAt: '2024-01-18T00:00:00Z',
    progress: 85,
    completedLessons: ['3-1', '3-2'],
    lastWatchedLesson: '3-2'
  },
  {
    id: '3',
    userId: '4',
    courseId: '2',
    enrolledAt: '2024-01-22T00:00:00Z',
    progress: 30,
    completedLessons: ['2-1'],
    lastWatchedLesson: '2-1'
  }
];

// Mock payments
export const mockPayments: Payment[] = [
  {
    id: '1',
    userId: '2',
    courseId: '1',
    amount: 99.99,
    status: 'completed',
    paymentMethod: 'credit_card',
    createdAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '2',
    userId: '2',
    courseId: '3',
    amount: 89.99,
    status: 'completed',
    paymentMethod: 'paypal',
    createdAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '3',
    userId: '4',
    courseId: '2',
    amount: 79.99,
    status: 'completed',
    paymentMethod: 'credit_card',
    createdAt: '2024-01-22T00:00:00Z'
  }
];

// Mock API functions
export const mockCourseAPI = {
  getAllCourses: (): Promise<Course[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockCourses.filter(c => c.isPublished)), 500);
    });
  },
  
  getCourseById: (id: string): Promise<Course | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const course = mockCourses.find(c => c.id === id);
        resolve(course || null);
      }, 300);
    });
  },
  
  getUserEnrollments: (userId: string): Promise<Enrollment[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockEnrollments.filter(e => e.userId === userId));
      }, 300);
    });
  },
  
  enrollInCourse: (userId: string, courseId: string): Promise<Enrollment> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newEnrollment: Enrollment = {
          id: (mockEnrollments.length + 1).toString(),
          userId,
          courseId,
          enrolledAt: new Date().toISOString(),
          progress: 0,
          completedLessons: []
        };
        mockEnrollments.push(newEnrollment);
        resolve(newEnrollment);
      }, 1000);
    });
  },
  
  processPayment: (userId: string, courseId: string, amount: number): Promise<Payment> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate 90% success rate
        if (Math.random() > 0.1) {
          const payment: Payment = {
            id: (mockPayments.length + 1).toString(),
            userId,
            courseId,
            amount,
            status: 'completed',
            paymentMethod: 'credit_card',
            createdAt: new Date().toISOString()
          };
          mockPayments.push(payment);
          resolve(payment);
        } else {
          reject(new Error('Payment failed'));
        }
      }, 2000);
    });
  }
};
