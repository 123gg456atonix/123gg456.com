//
//
// 123gg456.com v1.0
// MADE BY `123gg456_`. IF REUSING TO SELL SOMEWHERE ELSE AFTER EDIT, DONT FORGET TO CREDIT ME.
// IF ANY QUESTIONS OR NEED HELP TO SETUP, CONTACT ME AT https://123gg456.com/contact OR ON DISCORD ITSELF
// 
// YOU HAVE TO ADD A API KEY (random generated/self made password) IN ORDER FOR CONTACT FORM SYSTEM TO WORK
// /api/discord-webhook/contact/route.ts && /components/ui/contact-page.tsx && .env (optional if you intend to use that)
//  
//
// DON'T BE SHY TO HELP ME FIX THE MISTAKES I MADE IN THIS!!
// ALSO DONT FORGET TO DONATE ME :)      (if you can....)
//
//
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, User, MapPin, Github, Globe, HandCoins } from "lucide-react"

interface ProfileSidebarProps {
  theme: "dark" | "light" | "blue" | "red"
  skills: Array<{ name: string; level: number }>
}

export function ProfileSidebar({ theme, skills }: ProfileSidebarProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case "light":
        return {
          card: "bg-white/90 backdrop-blur-md border-gray-200 shadow-xl",
          cardTitle: "text-gray-900",
          cardDescription: "text-gray-600",
          text: "text-gray-700",
          textSecondary: "text-gray-600",
          badge: "bg-gray-100 text-gray-700 border-gray-300",
          button: "border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent",
        }
      case "dark":
        return {
          card: "bg-gray-800/70 backdrop-blur-md border-gray-700 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-gray-300",
          text: "text-gray-100",
          textSecondary: "text-gray-300",
          badge: "bg-gray-700/50 text-gray-300 border-gray-600",
          button: "border-gray-600 text-gray-300 hover:bg-gray-700/50 bg-transparent",
        }
      case "red":
        return {
          card: "bg-red-950/60 backdrop-blur-md border-red-500/20 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-red-200",
          text: "text-red-100",
          textSecondary: "text-red-200",
          badge: "bg-red-500/20 text-red-300 border-red-400/30",
          button: "border-red-400/30 text-red-300 hover:bg-red-500/20 bg-transparent",
        }
      default:
        return {
          card: "bg-slate-800/60 backdrop-blur-md border-blue-500/20 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-blue-200",
          text: "text-blue-100",
          textSecondary: "text-blue-200",
          badge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
          button: "border-blue-400/30 text-blue-300 hover:bg-blue-500/20 bg-transparent",
        }
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <div className="lg:col-span-1 space-y-6">
      {/* Profile Card */}
      <Card className={themeClasses.card}>
        <CardHeader className="text-center">
          <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-blue-400/30">
            <AvatarImage src="/img/123gg456.png?height=96&width=96" />
            <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
              P
            </AvatarFallback>
          </Avatar>
          <CardTitle className={`text-xl ${themeClasses.cardTitle}`}>Prakhar/123gg456</CardTitle>
          <CardDescription className={themeClasses.cardDescription}>
            Student Developer & Cloud Hosting Expert
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className={`flex items-center space-x-2 text-sm ${themeClasses.text}`}>
            <Mail className="w-4 h-4 text-blue-400" />
            <span>admin@123gg456.com</span>
          </div>
          <div className={`flex items-center space-x-2 text-sm ${themeClasses.text}`}>
            <User className="w-4 h-4 text-blue-400" />
            <span>15 Years old</span>
          </div>
          <div className={`flex items-center space-x-2 text-sm ${themeClasses.text}`}>
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Gujarat, India</span>
          </div>
          <div className="flex space-x-2 pt-4">
            <Button variant="outline" size="sm" className={`${themeClasses.button} transition-colors`} asChild>
              <a href="https://github.com/123gg456atonix" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className={`${themeClasses.button} transition-colors`} asChild>
              <a href="https://123gg456.com" target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="sm" className={`${themeClasses.button} transition-colors`} asChild>
              <a href="/donation" target="_blank" rel="noopener noreferrer">
                <HandCoins className="w-4 h-4" />
                Donate
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <Card className={themeClasses.card}>
        <CardHeader>
          <CardTitle className={`text-lg ${themeClasses.cardTitle}`}>Quick Stats</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span className={`text-sm ${themeClasses.textSecondary}`}>Projects Completed</span>
            <Badge className={themeClasses.badge}>4</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${themeClasses.textSecondary}`}>Years of Experience</span>
            <Badge className={themeClasses.badge}>2</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${themeClasses.textSecondary}`}>Technologies</span>
            <Badge className={themeClasses.badge}>{skills.length}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span className={`text-sm ${themeClasses.textSecondary}`}>Certifications</span>
            <Badge className={themeClasses.badge}>0</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
