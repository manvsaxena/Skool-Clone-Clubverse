import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, UserPlus, MessageSquare, Star } from "lucide-react";
import { cn } from "@/lib/theme";

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
  joinedDate: string;
  contributions: number;
  communities: string[];
  isOnline: boolean;
}

const members: Member[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Community Leader",
    avatar: "https://i.pravatar.cc/150?img=1",
    joinedDate: "Jan 2023",
    contributions: 1250,
    communities: ["Web Dev Masters", "AI & ML Hub"],
    isOnline: true
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Active Member",
    avatar: "https://i.pravatar.cc/150?img=2",
    joinedDate: "Mar 2023",
    contributions: 856,
    communities: ["Music Production", "Guitar Masters"],
    isOnline: true
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Moderator",
    avatar: "https://i.pravatar.cc/150?img=3",
    joinedDate: "Feb 2023",
    contributions: 2100,
    communities: ["Fitness Masters", "Yoga Community"],
    isOnline: false
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "Active Member",
    avatar: "https://i.pravatar.cc/150?img=4",
    joinedDate: "Apr 2023",
    contributions: 450,
    communities: ["Photography Masters", "Art Studio"],
    isOnline: true
  },
  {
    id: 5,
    name: "David Lee",
    role: "Community Leader",
    avatar: "https://i.pravatar.cc/150?img=5",
    joinedDate: "Dec 2022",
    contributions: 3200,
    communities: ["Stock Trading", "Crypto Academy"],
    isOnline: true
  },
  {
    id: 6,
    name: "Lisa Park",
    role: "Active Member",
    avatar: "https://i.pravatar.cc/150?img=6",
    joinedDate: "May 2023",
    contributions: 320,
    communities: ["Meditation Masters", "Yoga Community"],
    isOnline: false
  },
  {
    id: 7,
    name: "James Wilson",
    role: "Moderator",
    avatar: "https://i.pravatar.cc/150?img=7",
    joinedDate: "Jan 2023",
    contributions: 1800,
    communities: ["Web Dev Masters", "UI/UX Design"],
    isOnline: true
  },
  {
    id: 8,
    name: "Sophia Kim",
    role: "Active Member",
    avatar: "https://i.pravatar.cc/150?img=8",
    joinedDate: "Mar 2023",
    contributions: 620,
    communities: ["Music Theory", "Piano Academy"],
    isOnline: true
  },
  {
    id: 9,
    name: "Robert Chen",
    role: "Community Leader",
    avatar: "https://i.pravatar.cc/150?img=9",
    joinedDate: "Nov 2022",
    contributions: 2800,
    communities: ["Cybersecurity", "AI & ML Hub"],
    isOnline: false
  },
  {
    id: 10,
    name: "Olivia Davis",
    role: "Active Member",
    avatar: "https://i.pravatar.cc/150?img=10",
    joinedDate: "Feb 2023",
    contributions: 780,
    communities: ["Nutrition Hub", "Fitness Masters"],
    isOnline: true
  }
];

export default function Members() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedMembers, setDisplayedMembers] = useState(members);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = members.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.role.toLowerCase().includes(query) ||
      member.communities.some(community => 
        community.toLowerCase().includes(query)
      )
    );
    
    setDisplayedMembers(filtered);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto p-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Community Members
          </h2>
          <p className="text-xl text-white/70">Connect with fellow learners and experts</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
          <input
            type="text"
            placeholder="Search members..."
            className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedMembers.map((member) => (
            <Card 
              key={member.id} 
              className={cn(
                "p-6 space-y-4 hover:scale-[1.02] transition-transform",
                "bg-black/20 border-white/10 backdrop-blur-sm"
              )}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {member.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                    <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-white/70 mt-1">Joined {member.joinedDate}</p>
                  <p className="text-white/70 mt-2">
                    <Star className="inline-block w-4 h-4 mr-1" />
                    {member.contributions} contributions
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm text-white/70 mb-2">Active Communities</h4>
                <div className="flex flex-wrap gap-2">
                  {member.communities.map((community, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded-full"
                    >
                      {community}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="flex-1 bg-primary/10 hover:bg-primary/20 text-white">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button className="flex-1 bg-primary/10 hover:bg-primary/20 text-white">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Connect
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 