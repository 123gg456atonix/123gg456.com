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

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { AnimatedBackground } from "@/components/animated-background"
import { ProfileSidebar } from "@/components/profile-sidebar"
import { MainContent } from "@/components/main-content"
import { Footer } from "@/components/footer"
import { useTheme } from "@/contexts/theme-context"

export default function PortfolioPage() {
  const { theme, cycleTheme } = useTheme()
  const [currentPage, setCurrentPage] = useState("home")

  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "React", level: 60 },
    { name: "Python", level: 50 },
    { name: "Node.js", level: 70 },
    { name: "SQL", level: 60 },
    { name: "HTML", level: 75 },
    { name: "Next.js", level: 80 },
  ]

  const projects = [
    {
      title: "Cloud Hosting",
      description: "Owned and managed many cloud hosting companies",
      technologies: ["AtomsLab", "ZypherCloud", "AtonixClouds", "VoxelVolt"],
      githubUrl: "https://github.com/123gg456atonix",
      liveUrl: "https://voxelvolt.shop",
      dsc1: "Post at Founder/Manager/Developer",
    },
  ]

  const renderCurrentPage = () => {
    switch (currentPage) {
      default:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ProfileSidebar theme={theme} skills={skills} />
              <MainContent theme={theme} skills={skills} projects={projects} />
            </div>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground theme={theme} />
      <Navbar theme={theme} onThemeChange={cycleTheme} currentPage={currentPage} onPageChange={setCurrentPage} />

      {renderCurrentPage()}

      <Footer theme={theme} />
    </div>
  )
}
