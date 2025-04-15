import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useTheme } from "./theme-provider";
import { Sun, Moon, Menu, User, LayoutDashboard, BookOpen, Users, MessageSquare, LogOut, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              ClubVerse
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-white/70 hover:text-white"
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  >
                    <User className="h-4 w-4" />
                    <span>{user?.name || "User"}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-64 bg-black/90 backdrop-blur-md rounded-lg border border-white/10 p-4 space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-white/70">
                          <span className="font-medium">Full Name:</span>
                          <span>{user?.name || "Not set"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <span className="font-medium">Email:</span>
                          <span>{user?.email || "Not set"}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                          <span className="font-medium">Phone:</span>
                          <span>{user?.phone || "Not set"}</span>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-white/10">
                        <Button
                          variant="ghost"
                          className="w-full flex items-center gap-2 text-white/70 hover:text-white"
                          onClick={handleLogout}
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Courses</span>
                </Link>
                <Link
                  to="/community"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <Users className="w-5 h-5" />
                  <span>Community</span>
                </Link>
                <Link
                  to="/members"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Members</span>
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="glass-button px-4 py-2 rounded-lg"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="glass-button"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden glass-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {isAuthenticated ? (
              <>
                <div className="space-y-2 p-4 bg-black/90 backdrop-blur-md rounded-lg border border-white/10">
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="font-medium">Full Name:</span>
                    <span>{user?.name || "Not set"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="font-medium">Email:</span>
                    <span>{user?.email || "Not set"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70">
                    <span className="font-medium">Phone:</span>
                    <span>{user?.phone || "Not set"}</span>
                  </div>
                </div>
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span>Dashboard</span>
                </Link>
                <Link
                  to="/courses"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Courses</span>
                </Link>
                <Link
                  to="/community"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="w-5 h-5" />
                  <span>Community</span>
                </Link>
                <Link
                  to="/members"
                  className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Members</span>
                </Link>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white/70 hover:text-white w-full justify-start"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-white/70 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block glass-button px-4 py-2 rounded-lg text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
