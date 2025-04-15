import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Users, Settings, LogOut } from "lucide-react";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className = "" }: SidebarProps) {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", icon: Home, label: "Home" },
    { path: "/courses", icon: BookOpen, label: "Courses" },
    { path: "/community", icon: Users, label: "Community" },
    { path: "/settings", icon: Settings, label: "Settings" },
  ];

  return (
    <aside className={`w-64 min-h-screen p-4 ${className}`}>
      <div className="flex flex-col h-full">
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-auto">
          <button
            className="flex items-center space-x-3 p-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white w-full"
            onClick={() => {
              // Handle logout
            }}
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
} 