import { Card } from "../components/ui/card";
import { BookOpen, Clock, Users, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of HTML, CSS, and JavaScript",
    duration: "8 weeks",
    students: "1.2k",
    rating: 4.8,
    category: "Development",
  },
  {
    id: 2,
    title: "Data Science Essentials",
    description: "Master Python, Pandas, and Data Visualization",
    duration: "12 weeks",
    students: "2.5k",
    rating: 4.9,
    category: "Data Science",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Build cross-platform apps with React Native",
    duration: "10 weeks",
    students: "1.8k",
    rating: 4.7,
    category: "Development",
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    description: "Introduction to ML algorithms and applications",
    duration: "14 weeks",
    students: "3.1k",
    rating: 4.9,
    category: "Data Science",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Explore Courses
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="glass-card p-6 space-y-4 hover:scale-[1.02] transition-transform">
              <div className="flex items-center justify-between">
                <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <div className="flex items-center text-yellow-400">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="ml-1 text-sm">{course.rating}</span>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-white">{course.title}</h2>
              <p className="text-white/70">{course.description}</p>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center text-white/70">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{course.duration}</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{course.students}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 