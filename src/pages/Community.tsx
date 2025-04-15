import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Users,
  MessageCircle,
  TrendingUp,
  Search,
  Plus,
  ThumbsUp,
  MessageSquare,
  Share2,
} from "lucide-react";

interface Discussion {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
  timePosted: string;
}

interface Member {
  id: number;
  name: string;
  avatar: string;
  role: string;
  contributions: number;
}

const discussions: Discussion[] = [
  {
    id: 1,
    author: "Alex Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    title: "Best practices for React performance optimization",
    content: "I've been working on optimizing my React application and wanted to share some tips...",
    likes: 45,
    comments: 12,
    shares: 8,
    tags: ["React", "Performance", "JavaScript"],
    timePosted: "2h ago"
  },
  {
    id: 2,
    author: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    title: "Getting started with TypeScript in 2024",
    content: "Here's my comprehensive guide to starting with TypeScript this year...",
    likes: 32,
    comments: 8,
    shares: 5,
    tags: ["TypeScript", "JavaScript", "Beginner"],
    timePosted: "4h ago"
  },
  {
    id: 3,
    author: "Mike Peters",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    title: "The future of AI in web development",
    content: "Let's discuss how AI is changing the landscape of web development...",
    likes: 67,
    comments: 23,
    shares: 15,
    tags: ["AI", "WebDev", "Future"],
    timePosted: "6h ago"
  }
];

const members: Member[] = [
  {
    id: 1,
    name: "Emma Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    role: "Community Leader",
    contributions: 156
  },
  {
    id: 2,
    name: "David Kim",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    role: "Moderator",
    contributions: 89
  },
  {
    id: 3,
    name: "Lisa Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    role: "Top Contributor",
    contributions: 67
  }
];

const trendingTopics = [
  "React Hooks",
  "Next.js 14",
  "TypeScript Tips",
  "AI Integration",
  "Web Performance"
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Community
          </h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> New Discussion
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search discussions..."
            className="pl-10 w-full bg-black/20 border-gray-700"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - Discussions */}
          <div className="lg:col-span-2 space-y-4">
            {discussions.map((discussion) => (
              <Card key={discussion.id} className="bg-black/40 border-gray-800 hover:bg-black/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-white">{discussion.author}</h3>
                        <span className="text-sm text-gray-400">{discussion.timePosted}</span>
                      </div>
                      <h4 className="text-lg font-medium mt-1 text-white">{discussion.title}</h4>
                      <p className="text-gray-300 mt-2">{discussion.content}</p>
                      <div className="flex gap-2 mt-3">
                        {discussion.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full text-xs bg-blue-600/20 text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-6 mt-4">
                        <button className="flex items-center text-gray-400 hover:text-blue-400">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {discussion.likes}
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-blue-400">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {discussion.comments}
                        </button>
                        <button className="flex items-center text-gray-400 hover:text-blue-400">
                          <Share2 className="h-4 w-4 mr-1" />
                          {discussion.shares}
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Members */}
            <Card className="bg-black/40 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  Active Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {members.map((member) => (
                    <div key={member.id} className="flex items-center space-x-3">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-white">{member.name}</h4>
                        <p className="text-xs text-gray-400">{member.role}</p>
                      </div>
                      <span className="text-xs text-gray-400">{member.contributions} posts</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="bg-black/40 border-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingTopics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center space-x-2 p-2 rounded-lg hover:bg-white/5 cursor-pointer"
                    >
                      <MessageCircle className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-300">{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 