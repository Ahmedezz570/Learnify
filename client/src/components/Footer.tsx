import React from 'react'
import { BookOpen } from 'lucide-react'
import  Link from 'next/link'
const Footer = () => {
  return (
    <div>
                    <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold">Learnify</span>
              </div>
              <p className="text-gray-400">
                Empowering learners worldwide with quality education and expert instruction.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Students</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/courses" className="hover:text-white transition-colors">Browse Courses</Link></li>
                <li><Link href="/student-dashboard" className="hover:text-white transition-colors">My Learning</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Certificates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Teachers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/teacher-dashboard" className="hover:text-white transition-colors">Teach on EduPlatform</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 learnify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer