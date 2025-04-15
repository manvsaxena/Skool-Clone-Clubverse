import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { User, Mail, Phone, Lock, Edit2 } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black p-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Info */}
          <Card className="glass-card p-6 space-y-6 md:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Personal Information</h2>
              <Button variant="ghost" className="text-white/70 hover:text-white">
                <Edit2 className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                  <Input
                    type="text"
                    defaultValue="John Doe"
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                  <Input
                    type="email"
                    defaultValue="john@example.com"
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                  <Input
                    type="tel"
                    defaultValue="+1 234 567 890"
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Security Settings */}
          <Card className="glass-card p-6 space-y-6">
            <h2 className="text-xl font-semibold text-white">Security</h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm text-white/70">Current Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                  <Input
                    type="password"
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                  <Input
                    type="password"
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70">Confirm New Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                  <Input
                    type="password"
                    className="pl-10 bg-black/20 border-white/10 text-white"
                  />
                </div>
              </div>
            </div>

            <Button className="glass-button w-full">Update Password</Button>
          </Card>
        </div>
      </div>
    </div>
  );
} 