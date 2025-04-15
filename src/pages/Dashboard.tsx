import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Search, Plus, ChevronRight } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

const categories = [
  { name: "All", icon: "🌐" },
  { name: "Hobbies", icon: "🎨" },
  { name: "Music", icon: "🎸" },
  { name: "Money", icon: "💰" },
  { name: "Spirituality", icon: "🙏" },
  { name: "Tech", icon: "💻" },
  { name: "Health", icon: "🥕" },
  { name: "Sports", icon: "⚽" },
  { name: "Self-improvement", icon: "📚" },
  { name: "Relationships", icon: "❤️" },
  { name: "More...", icon: "..." },
];

const communities = [
  // Hobbies Category
  {
    id: 1,
    name: "Calligraphy Skool",
    description: "Learn modern calligraphy the fun, easy way! ✍️ With sisters Jordan & Jillian",
    members: "1.2k",
    price: "$9/month",
    category: "Hobbies"
  },
  {
    id: 2,
    name: "Photography Masters",
    description: "Master the art of photography with professional tips and techniques 📸",
    members: "3.5k",
    price: "$19/month",
    category: "Hobbies"
  },
  {
    id: 3,
    name: "Gardening Gurus",
    description: "Grow your green thumb with expert gardening advice 🌱",
    members: "2.8k",
    price: "Free",
    category: "Hobbies"
  },
  {
    id: 4,
    name: "Chess Champions",
    description: "Improve your chess game with daily challenges and lessons ♟️",
    members: "5.1k",
    price: "$15/month",
    category: "Hobbies"
  },
  {
    id: 5,
    name: "Cooking Club",
    description: "Master culinary skills with step-by-step video tutorials 👨‍🍳",
    members: "8.2k",
    price: "$29/month",
    category: "Hobbies"
  },
  {
    id: 6,
    name: "DIY Masters",
    description: "Transform your home with creative DIY projects 🛠️",
    members: "4.3k",
    price: "Free",
    category: "Hobbies"
  },
  {
    id: 7,
    name: "Art Studio",
    description: "Unleash your creativity with digital and traditional art lessons 🎨",
    members: "6.7k",
    price: "$24/month",
    category: "Hobbies"
  },
  {
    id: 8,
    name: "Wine Connoisseurs",
    description: "Discover the world of fine wines and tasting techniques 🍷",
    members: "2.1k",
    price: "$39/month",
    category: "Hobbies"
  },
  {
    id: 9,
    name: "Knitting Circle",
    description: "Create beautiful handmade items with expert guidance 🧶",
    members: "3.9k",
    price: "Free",
    category: "Hobbies"
  },
  {
    id: 10,
    name: "Pottery Studio",
    description: "Learn the art of pottery making and ceramics 🏺",
    members: "1.8k",
    price: "$49/month",
    category: "Hobbies"
  },

  // Music Category
  {
    id: 11,
    name: "Unison Producer Growth Hub",
    description: "The #1 free community for music producers to grow, learn, connect and simplify the process of producing pro-quality music.",
    members: "27k",
    price: "Free",
    category: "Music"
  },
  {
    id: 12,
    name: "Guitar Masters",
    description: "Master guitar techniques with daily lessons and challenges 🎸",
    members: "15.2k",
    price: "$19/month",
    category: "Music"
  },
  {
    id: 13,
    name: "Piano Academy",
    description: "Learn piano from scratch or improve your skills 🎹",
    members: "12.8k",
    price: "$29/month",
    category: "Music"
  },
  {
    id: 14,
    name: "Vocal Training",
    description: "Develop your singing voice with professional techniques 🎤",
    members: "9.5k",
    price: "$24/month",
    category: "Music"
  },
  {
    id: 15,
    name: "DJ Academy",
    description: "Learn to mix and master like a pro DJ 🎧",
    members: "7.3k",
    price: "$39/month",
    category: "Music"
  },
  {
    id: 16,
    name: "Music Theory",
    description: "Understand the fundamentals of music theory 🎼",
    members: "5.6k",
    price: "Free",
    category: "Music"
  },
  {
    id: 17,
    name: "Songwriting Circle",
    description: "Write and compose your own music 🎵",
    members: "4.2k",
    price: "$19/month",
    category: "Music"
  },
  {
    id: 18,
    name: "Drum School",
    description: "Master drumming techniques and rhythms 🥁",
    members: "6.1k",
    price: "$29/month",
    category: "Music"
  },
  {
    id: 19,
    name: "Music Production",
    description: "Learn professional music production techniques 🎚️",
    members: "8.4k",
    price: "$49/month",
    category: "Music"
  },
  {
    id: 20,
    name: "Music Business",
    description: "Navigate the music industry and build your career 🎪",
    members: "3.7k",
    price: "$39/month",
    category: "Music"
  },

  // Money Category
  {
    id: 21,
    name: "Zero To Founder by Tom Bilyeu",
    description: "Level up your business and get on the path to financial freedom with billion-dollar founder Tom Bilyeu.",
    members: "852",
    price: "$119/month",
    category: "Money"
  },
  {
    id: 22,
    name: "Stock Trading",
    description: "Learn to trade stocks and build your portfolio 📈",
    members: "15.6k",
    price: "$49/month",
    category: "Money"
  },
  {
    id: 23,
    name: "Real Estate Investing",
    description: "Master real estate investment strategies 🏠",
    members: "12.3k",
    price: "$59/month",
    category: "Money"
  },
  {
    id: 24,
    name: "Crypto Academy",
    description: "Navigate the world of cryptocurrency and blockchain ₿",
    members: "18.9k",
    price: "$39/month",
    category: "Money"
  },
  {
    id: 25,
    name: "Personal Finance",
    description: "Manage your money and build wealth 💰",
    members: "25.4k",
    price: "Free",
    category: "Money"
  },
  {
    id: 26,
    name: "E-commerce Masters",
    description: "Build and scale your online business 🛍️",
    members: "14.7k",
    price: "$69/month",
    category: "Money"
  },
  {
    id: 27,
    name: "Freelance Success",
    description: "Build a successful freelance career 💼",
    members: "8.2k",
    price: "$29/month",
    category: "Money"
  },
  {
    id: 28,
    name: "Passive Income",
    description: "Create multiple streams of passive income 💸",
    members: "11.5k",
    price: "$49/month",
    category: "Money"
  },
  {
    id: 29,
    name: "Financial Freedom",
    description: "Achieve financial independence and early retirement 🏦",
    members: "9.8k",
    price: "$39/month",
    category: "Money"
  },
  {
    id: 30,
    name: "Business Growth",
    description: "Scale your business to new heights 📊",
    members: "7.6k",
    price: "$79/month",
    category: "Money"
  },

  // Spirituality Category
  {
    id: 31,
    name: "Meditation Masters",
    description: "Deepen your meditation practice and find inner peace 🧘‍♂️",
    members: "12.4k",
    price: "Free",
    category: "Spirituality"
  },
  {
    id: 32,
    name: "Yoga Community",
    description: "Practice yoga and mindfulness together 🧘‍♀️",
    members: "15.8k",
    price: "$19/month",
    category: "Spirituality"
  },
  {
    id: 33,
    name: "Spiritual Growth",
    description: "Explore spiritual practices and personal development 🌟",
    members: "9.2k",
    price: "Free",
    category: "Spirituality"
  },
  {
    id: 34,
    name: "Mindfulness Hub",
    description: "Cultivate mindfulness in daily life 🧠",
    members: "11.7k",
    price: "$15/month",
    category: "Spirituality"
  },
  {
    id: 35,
    name: "Energy Healing",
    description: "Learn energy healing techniques and practices ✨",
    members: "6.5k",
    price: "$29/month",
    category: "Spirituality"
  },
  {
    id: 36,
    name: "Astrology Circle",
    description: "Explore the mysteries of astrology and horoscopes 🌙",
    members: "8.9k",
    price: "Free",
    category: "Spirituality"
  },
  {
    id: 37,
    name: "Tarot Masters",
    description: "Learn tarot reading and divination 🃏",
    members: "5.3k",
    price: "$19/month",
    category: "Spirituality"
  },
  {
    id: 38,
    name: "Crystal Healing",
    description: "Discover the power of crystals and gemstones 💎",
    members: "7.1k",
    price: "$24/month",
    category: "Spirituality"
  },
  {
    id: 39,
    name: "Chakra Balance",
    description: "Balance and align your chakras for optimal well-being 🌀",
    members: "4.8k",
    price: "Free",
    category: "Spirituality"
  },
  {
    id: 40,
    name: "Spiritual Awakening",
    description: "Guide your spiritual awakening journey 🌅",
    members: "10.2k",
    price: "$39/month",
    category: "Spirituality"
  },

  // Tech Category
  {
    id: 41,
    name: "Web Dev Masters",
    description: "Master web development with modern technologies 💻",
    members: "25.6k",
    price: "$49/month",
    category: "Tech"
  },
  {
    id: 42,
    name: "AI & ML Hub",
    description: "Explore artificial intelligence and machine learning 🤖",
    members: "18.3k",
    price: "$59/month",
    category: "Tech"
  },
  {
    id: 43,
    name: "Cybersecurity",
    description: "Learn to protect systems and data from cyber threats 🔒",
    members: "12.9k",
    price: "$69/month",
    category: "Tech"
  },
  {
    id: 44,
    name: "Mobile App Dev",
    description: "Build and launch successful mobile applications 📱",
    members: "15.4k",
    price: "$49/month",
    category: "Tech"
  },
  {
    id: 45,
    name: "Data Science",
    description: "Master data analysis and visualization 📊",
    members: "20.1k",
    price: "$59/month",
    category: "Tech"
  },
  {
    id: 46,
    name: "Cloud Computing",
    description: "Learn cloud platforms and infrastructure ☁️",
    members: "14.7k",
    price: "$49/month",
    category: "Tech"
  },
  {
    id: 47,
    name: "Game Development",
    description: "Create your own video games 🎮",
    members: "11.2k",
    price: "$39/month",
    category: "Tech"
  },
  {
    id: 48,
    name: "DevOps Masters",
    description: "Master DevOps practices and tools 🔧",
    members: "9.8k",
    price: "$59/month",
    category: "Tech"
  },
  {
    id: 49,
    name: "UI/UX Design",
    description: "Create beautiful and user-friendly interfaces 🎨",
    members: "13.5k",
    price: "$49/month",
    category: "Tech"
  },
  {
    id: 50,
    name: "Blockchain Dev",
    description: "Build decentralized applications and smart contracts ⛓️",
    members: "16.8k",
    price: "$69/month",
    category: "Tech"
  },

  // Health Category
  {
    id: 51,
    name: "Day by Day Wellness Club",
    description: "#1 community dedicated to anyone on their journey to becoming their best self.",
    members: "50.3k",
    price: "Free",
    category: "Health"
  },
  {
    id: 52,
    name: "Fitness Masters",
    description: "Achieve your fitness goals with expert guidance 💪",
    members: "35.2k",
    price: "$29/month",
    category: "Health"
  },
  {
    id: 53,
    name: "Nutrition Hub",
    description: "Learn about healthy eating and nutrition 🥗",
    members: "28.7k",
    price: "$19/month",
    category: "Health"
  },
  {
    id: 54,
    name: "Mental Health",
    description: "Support and resources for mental well-being 🧠",
    members: "42.1k",
    price: "Free",
    category: "Health"
  },
  {
    id: 55,
    name: "Yoga & Wellness",
    description: "Practice yoga and holistic wellness 🧘‍♀️",
    members: "31.5k",
    price: "$24/month",
    category: "Health"
  },
  {
    id: 56,
    name: "Weight Loss",
    description: "Sustainable weight loss strategies and support ⚖️",
    members: "25.9k",
    price: "$39/month",
    category: "Health"
  },
  {
    id: 57,
    name: "Sleep Better",
    description: "Improve your sleep quality and habits 😴",
    members: "18.4k",
    price: "Free",
    category: "Health"
  },
  {
    id: 58,
    name: "Stress Management",
    description: "Learn to manage stress effectively 🧘‍♂️",
    members: "22.6k",
    price: "$19/month",
    category: "Health"
  },
  {
    id: 59,
    name: "Healthy Aging",
    description: "Stay healthy and active as you age 👴",
    members: "15.3k",
    price: "$29/month",
    category: "Health"
  },
  {
    id: 60,
    name: "Women's Health",
    description: "Comprehensive health resources for women 👩",
    members: "27.8k",
    price: "$39/month",
    category: "Health"
  },

  // Sports Category
  {
    id: 61,
    name: "That Pickleball School",
    description: "👉 THAT place for pickleball players serious about getting better.",
    members: "971",
    price: "$39/month",
    category: "Sports"
  },
  {
    id: 62,
    name: "The Aspinall Way",
    description: "Join the FIRST and ONLY Community Created by a UFC Champion, Become Extraordinary Today!🥊",
    members: "9.5k",
    price: "Free",
    category: "Sports"
  },
  {
    id: 63,
    name: "Basketball Academy",
    description: "Improve your basketball skills and game 🏀",
    members: "12.4k",
    price: "$29/month",
    category: "Sports"
  },
  {
    id: 64,
    name: "Soccer Stars",
    description: "Master soccer techniques and strategies ⚽",
    members: "15.8k",
    price: "$24/month",
    category: "Sports"
  },
  {
    id: 65,
    name: "Tennis Masters",
    description: "Elevate your tennis game to the next level 🎾",
    members: "8.7k",
    price: "$39/month",
    category: "Sports"
  },
  {
    id: 66,
    name: "Golf Academy",
    description: "Perfect your golf swing and technique ⛳",
    members: "11.2k",
    price: "$49/month",
    category: "Sports"
  },
  {
    id: 67,
    name: "Swimming Club",
    description: "Improve your swimming technique and endurance 🏊‍♂️",
    members: "7.5k",
    price: "$19/month",
    category: "Sports"
  },
  {
    id: 68,
    name: "Running Community",
    description: "Train for races and improve your running 🏃‍♂️",
    members: "14.3k",
    price: "Free",
    category: "Sports"
  },
  {
    id: 69,
    name: "Cycling Club",
    description: "Join fellow cyclists and improve your riding 🚴‍♂️",
    members: "9.6k",
    price: "$24/month",
    category: "Sports"
  },
  {
    id: 70,
    name: "Martial Arts",
    description: "Learn various martial arts disciplines 🥋",
    members: "13.1k",
    price: "$39/month",
    category: "Sports"
  },

  // Self-improvement Category
  {
    id: 71,
    name: "Productivity Masters",
    description: "Boost your productivity and achieve more ⚡",
    members: "18.9k",
    price: "$29/month",
    category: "Self-improvement"
  },
  {
    id: 72,
    name: "Time Management",
    description: "Master your time and accomplish more ⏰",
    members: "15.4k",
    price: "$19/month",
    category: "Self-improvement"
  },
  {
    id: 73,
    name: "Public Speaking",
    description: "Become a confident and effective speaker 🎤",
    members: "12.7k",
    price: "$39/month",
    category: "Self-improvement"
  },
  {
    id: 74,
    name: "Leadership Skills",
    description: "Develop strong leadership abilities 👥",
    members: "14.2k",
    price: "$49/month",
    category: "Self-improvement"
  },
  {
    id: 75,
    name: "Memory Training",
    description: "Improve your memory and learning abilities 🧠",
    members: "9.8k",
    price: "$24/month",
    category: "Self-improvement"
  },
  {
    id: 76,
    name: "Habit Building",
    description: "Build positive habits and break bad ones 🔄",
    members: "16.5k",
    price: "Free",
    category: "Self-improvement"
  },
  {
    id: 77,
    name: "Confidence Boost",
    description: "Build unshakeable confidence and self-esteem 💪",
    members: "11.3k",
    price: "$29/month",
    category: "Self-improvement"
  },
  {
    id: 78,
    name: "Mindset Mastery",
    description: "Develop a growth mindset for success 🌱",
    members: "13.8k",
    price: "$19/month",
    category: "Self-improvement"
  },
  {
    id: 79,
    name: "Goal Setting",
    description: "Set and achieve your goals effectively 🎯",
    members: "10.6k",
    price: "Free",
    category: "Self-improvement"
  },
  {
    id: 80,
    name: "Emotional Intelligence",
    description: "Develop your emotional intelligence skills ❤️",
    members: "12.1k",
    price: "$39/month",
    category: "Self-improvement"
  },

  // Relationships Category
  {
    id: 81,
    name: "Dating Success",
    description: "Master the art of dating and relationships 💑",
    members: "15.7k",
    price: "$29/month",
    category: "Relationships"
  },
  {
    id: 82,
    name: "Marriage Masters",
    description: "Strengthen your marriage and relationship 💍",
    members: "12.4k",
    price: "$39/month",
    category: "Relationships"
  },
  {
    id: 83,
    name: "Parenting Hub",
    description: "Parenting advice and support 👨‍👩‍👧‍👦",
    members: "18.2k",
    price: "Free",
    category: "Relationships"
  },
  {
    id: 84,
    name: "Friendship Circle",
    description: "Build and maintain meaningful friendships 👥",
    members: "9.6k",
    price: "Free",
    category: "Relationships"
  },
  {
    id: 85,
    name: "Family Dynamics",
    description: "Improve family relationships and communication 👨‍👩‍👧‍👦",
    members: "11.8k",
    price: "$19/month",
    category: "Relationships"
  },
  {
    id: 86,
    name: "Social Skills",
    description: "Develop strong social skills and confidence 🗣️",
    members: "14.5k",
    price: "$24/month",
    category: "Relationships"
  },
  {
    id: 87,
    name: "Conflict Resolution",
    description: "Learn to resolve conflicts effectively 🤝",
    members: "8.9k",
    price: "Free",
    category: "Relationships"
  },
  {
    id: 88,
    name: "Communication Skills",
    description: "Master effective communication techniques 💬",
    members: "13.2k",
    price: "$29/month",
    category: "Relationships"
  },
  {
    id: 89,
    name: "Relationship Goals",
    description: "Set and achieve relationship goals together 💕",
    members: "10.3k",
    price: "$19/month",
    category: "Relationships"
  },
  {
    id: 90,
    name: "Love Languages",
    description: "Understand and speak your partner's love language 💝",
    members: "11.6k",
    price: "Free",
    category: "Relationships"
  }
];

export default function Dashboard() {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayedCommunities, setDisplayedCommunities] = useState(communities.slice(0, 9));
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newCommunity, setNewCommunity] = useState({
    name: "",
    description: "",
    category: "All",
    price: "Free"
  });
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterCommunities(query, selectedCategory);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    filterCommunities(searchQuery, category);
  };

  const filterCommunities = (query: string, category: string) => {
    let filtered = communities;
    
    if (category !== "All") {
      filtered = filtered.filter(community => 
        community.description.toLowerCase().includes(category.toLowerCase())
      );
    }
    
    if (query) {
      filtered = filtered.filter(community => 
        community.name.toLowerCase().includes(query) ||
        community.description.toLowerCase().includes(query)
      );
    }
    
    setDisplayedCommunities(filtered.slice(0, 9));
  };

  const handleLoadMore = () => {
    const currentLength = displayedCommunities.length;
    const nextCommunities = communities.slice(currentLength, currentLength + 9);
    setDisplayedCommunities([...displayedCommunities, ...nextCommunities]);
  };

  const handleCreateCommunity = () => {
    if (!newCommunity.name || !newCommunity.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        type: "error"
      });
      return;
    }

    const newId = communities.length + 1;
    const createdCommunity = {
      id: newId,
      name: newCommunity.name,
      description: newCommunity.description,
      members: "0",
      price: newCommunity.price,
      category: newCommunity.category
    };

    communities.unshift(createdCommunity);
    setDisplayedCommunities([createdCommunity, ...displayedCommunities.slice(0, 8)]);
    setShowCreateModal(false);
    setNewCommunity({
      name: "",
      description: "",
      category: "All",
      price: "Free"
    });
    
    toast({
      title: "Success",
      description: "Community created successfully!",
      type: "success"
    });
  };
  
  const handleJoinCommunity = (communityId: number) => {
    toast({
      title: "Success",
      description: "You have joined the community!",
      type: "success"
    });
  };

  if (!isAuthenticated) {
    return null;
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Main Content */}
      <div className="container mx-auto p-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Discover communities
          </h2>
          <p className="text-xl text-white/70">or create your own</p>
          </div>
          
        {/* Search and Create */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
            <input
              type="text"
              placeholder="Search communities..."
              className="w-full pl-10 pr-4 py-3 bg-black/20 border border-white/10 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-primary"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
          <Button 
            className="glass-button flex items-center gap-2"
            onClick={() => setShowCreateModal(true)}
          >
            <Plus className="h-4 w-4" />
            Create Community
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={selectedCategory === category.name ? "default" : "ghost"}
              className={`flex items-center ${
                selectedCategory === category.name
                  ? "bg-primary text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
              onClick={() => handleCategorySelect(category.name)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
        
        {/* Communities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCommunities.map((community) => (
            <Card key={community.id} className="glass-card p-6 space-y-4 hover:scale-[1.02] transition-transform">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{community.name}</h3>
                  <p className="text-white/70 mt-2">{community.description}</p>
                </div>
                <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">
                  #{community.id}
                </span>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="text-white/70">
                  {community.members} Members
                </div>
                <div className="text-primary font-medium">
                  {community.price}
                </div>
              </div>

              <Button 
                className="glass-button w-full"
                onClick={() => handleJoinCommunity(community.id)}
              >
                Join Community
              </Button>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {displayedCommunities.length < communities.length && (
          <div className="text-center">
            <Button 
              variant="ghost" 
              className="text-white/70 hover:text-white"
              onClick={handleLoadMore}
            >
              Load More <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Create Community Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <Card className="w-full max-w-md p-6 bg-black/80 border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">Create New Community</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-white/70 mb-1">Community Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-white"
                    value={newCommunity.name}
                    onChange={(e) => setNewCommunity({...newCommunity, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Description</label>
                  <textarea
                    className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-white"
                    rows={3}
                    value={newCommunity.description}
                    onChange={(e) => setNewCommunity({...newCommunity, description: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Category</label>
                  <select
                    className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-white"
                    value={newCommunity.category}
                    onChange={(e) => setNewCommunity({...newCommunity, category: e.target.value})}
                  >
                    {categories.map((category) => (
                      <option key={category.name} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-1">Price</label>
                  <select
                    className="w-full px-3 py-2 bg-black/20 border border-white/10 rounded-lg text-white"
                    value={newCommunity.price}
                    onChange={(e) => setNewCommunity({...newCommunity, price: e.target.value})}
                  >
                    <option value="Free">Free</option>
                    <option value="$9/month">$9/month</option>
                    <option value="$19/month">$19/month</option>
                    <option value="$29/month">$29/month</option>
                    <option value="$49/month">$49/month</option>
                    <option value="$99/month">$99/month</option>
                  </select>
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    onClick={() => setShowCreateModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="glass-button"
                    onClick={handleCreateCommunity}
                  >
                    Create
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
