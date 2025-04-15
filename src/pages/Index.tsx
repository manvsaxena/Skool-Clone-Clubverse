import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, LogIn, UserPlus } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Welcome to Nexus
        </h1>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Your gateway to immersive learning experiences. Join a community of passionate learners and unlock your potential.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/login" className="w-full sm:w-auto">
            <Button className="glass-button text-lg px-8 py-6 w-full sm:w-auto flex items-center gap-2">
              <LogIn className="h-5 w-5" />
              Login
            </Button>
          </Link>
          <Link to="/signup" className="w-full sm:w-auto">
            <Button variant="outline" className="text-lg px-8 py-6 border-white/20 hover:bg-white/10 w-full sm:w-auto flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Sign Up
            </Button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass-card p-6 hover:scale-[1.02] transition-transform">
            <div className="glass-icon mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Learning</h3>
            <p className="text-white/70">
              Engage with interactive courses designed to maximize your learning potential.
            </p>
          </Card>

          <Card className="glass-card p-6 hover:scale-[1.02] transition-transform">
            <div className="glass-icon mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="text-white/70">
              Connect with like-minded learners and experts in your field of interest.
            </p>
          </Card>

          <Card className="glass-card p-6 hover:scale-[1.02] transition-transform">
            <div className="glass-icon mb-4">
              <Trophy className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Achievement Tracking</h3>
            <p className="text-white/70">
              Track your progress and earn certificates as you master new skills.
            </p>
          </Card>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-white/70">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-white/70">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-white/70">Hours of Content</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-white/70">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
