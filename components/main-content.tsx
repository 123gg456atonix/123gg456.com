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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Star, Award, Code, Briefcase, Calendar, Github, ExternalLink } from "lucide-react"

interface MainContentProps {
  theme: "dark" | "light" | "blue" | "red"
  skills: Array<{ name: string; level: number }>
  projects: Array<{
    title: string
    description: string
    technologies: string[]
    githubUrl: string
    liveUrl: string
    dsc1: string
  }>
}

export function MainContent({ theme, skills, projects }: MainContentProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case "light":
        return {
          card: "bg-white/90 backdrop-blur-md border-gray-200 shadow-xl",
          cardTitle: "text-gray-900",
          cardDescription: "text-gray-600",
          text: "text-gray-700",
          textSecondary: "text-gray-600",
          textMuted: "text-gray-500",
          badge: "bg-gray-100 text-gray-700 border-gray-300",
          button: "border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent",
          tabs: "bg-white/90 backdrop-blur-md border-gray-200",
          tabsTrigger: "data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 text-gray-600",
          progress: "bg-gray-200",
          progressBar: "bg-gradient-to-r from-gray-600 to-gray-800",
        }
      case "dark":
        return {
          card: "bg-gray-800/70 backdrop-blur-md border-gray-700 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-gray-300",
          text: "text-gray-100",
          textSecondary: "text-gray-300",
          textMuted: "text-gray-400",
          badge: "bg-gray-700/50 text-gray-300 border-gray-600",
          button: "border-gray-600 text-gray-300 hover:bg-gray-700/50 bg-transparent",
          tabs: "bg-gray-800/70 backdrop-blur-md border-gray-700",
          tabsTrigger: "data-[state=active]:bg-gray-700/50 data-[state=active]:text-gray-200 text-gray-400",
          progress: "bg-gray-700",
          progressBar: "bg-gradient-to-r from-gray-500 to-gray-300",
        }
      case "red":
        return {
          card: "bg-red-950/60 backdrop-blur-md border-red-500/20 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-red-200",
          text: "text-red-100",
          textSecondary: "text-red-200",
          textMuted: "text-red-300",
          badge: "bg-red-500/20 text-red-300 border-red-400/30",
          button: "border-red-400/30 text-red-300 hover:bg-red-500/20 bg-transparent",
          tabs: "bg-red-950/60 backdrop-blur-md border-red-500/20",
          tabsTrigger: "data-[state=active]:bg-red-500/20 data-[state=active]:text-red-300 text-red-200",
          progress: "bg-red-900",
          progressBar: "bg-gradient-to-r from-red-500 to-pink-400",
        }
      default:
        return {
          card: "bg-slate-800/60 backdrop-blur-md border-blue-500/20 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-blue-200",
          text: "text-blue-100",
          textSecondary: "text-blue-200",
          textMuted: "text-blue-300",
          badge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
          button: "border-blue-400/30 text-blue-300 hover:bg-blue-500/20 bg-transparent",
          tabs: "bg-slate-800/60 backdrop-blur-md border-blue-500/20",
          tabsTrigger: "data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-300 text-blue-200",
          progress: "bg-slate-700",
          progressBar: "bg-gradient-to-r from-blue-500 to-cyan-400",
        }
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <div className="lg:col-span-2 space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className={`grid w-full grid-cols-4 ${themeClasses.tabs}`}>
          <TabsTrigger value="overview" className={`${themeClasses.tabsTrigger} transition-colors`}>
            Overview
          </TabsTrigger>
          <TabsTrigger value="skills" className={`${themeClasses.tabsTrigger} transition-colors`}>
            Skills
          </TabsTrigger>
          <TabsTrigger value="projects" className={`${themeClasses.tabsTrigger} transition-colors`}>
            Projects
          </TabsTrigger>
          <TabsTrigger value="experience" className={`${themeClasses.tabsTrigger} transition-colors`}>
            Experience
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`flex items-center ${themeClasses.cardTitle}`}>
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${themeClasses.text} leading-relaxed mb-4`}>
                I'm a passionate Student developer and computer science student with 2+ years of experience in building
                web applications. I love creating efficient, scalable solutions and am always eager to learn new
                technologies.
              </p>
              <p className={`${themeClasses.text} leading-relaxed`}>
                Currently seeking internship opportunities where I can contribute to meaningful projects while
                continuing to grow my skills in modern web development, cloud technologies, and software engineering
                best practices and earn some money.
              </p>
            </CardContent>
          </Card>

          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`flex items-center ${themeClasses.cardTitle}`}>
                <Award className="w-5 h-5 mr-2 text-blue-400" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-medium ${themeClasses.cardTitle}`}>Founder & CEO</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      AtonixClouds.com (2023-2025), VoxelVolt.shop, zypher.cloud
                    </p>
                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                      Built and managed multiple cloud hosting platforms serving 100+ clients
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-medium ${themeClasses.cardTitle}`}>Hackathon Winner</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>1st Place at Local Tech Hackathon 2023</p>
                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                      Led team of 3 to build a Fully working GameServer panel
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-medium ${themeClasses.cardTitle}`}>Open Source Contributor</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      5+ contributions to various GitHub projects
                    </p>
                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                      Active contributor to React, Node.js, and JavaScript communities
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-medium ${themeClasses.cardTitle}`}>Goals this year</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>Earn profit of 20k INR</p>
                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>
                      By doing internships, Offering Pterodactyl support and addons, Making websites for people
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className={`font-medium ${themeClasses.cardTitle}`}>E-Sports</h4>
                    <p className={`text-sm ${themeClasses.textSecondary}`}>
                      Led the team of 4 in Codm World Cup 2023 and ranked at 64th place
                    </p>
                    <p className={`text-xs ${themeClasses.textMuted} mt-1`}>Call of duty Mobile</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Tab */}
        <TabsContent value="skills" className="space-y-6">
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`flex items-center ${themeClasses.cardTitle}`}>
                <Code className="w-5 h-5 mr-2 text-green-400" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`text-sm font-medium ${themeClasses.cardTitle}`}>{skill.name}</span>
                    <span className={`text-sm ${themeClasses.textMuted}`}>{skill.level}%</span>
                  </div>
                  <div className={`w-full ${themeClasses.progress} rounded-full h-2`}>
                    <div
                      className={`${themeClasses.progressBar} h-2 rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={themeClasses.cardTitle}>Other Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git & GitHub",
                  "Docker",
                  "Pterodactyl",
                  "Linux",
                  "REST APIs",
                  "E-Sports",
                  "Cooking (lol)",
                  "Figma",
                  "Networking",
                ].map((skill) => (
                  <Badge key={skill} className={`${themeClasses.badge} hover:opacity-80 transition-opacity`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projects Tab */}
        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`${themeClasses.card} hover:shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <CardHeader>
                  <CardTitle className={`text-lg ${themeClasses.cardTitle}`}>{project.title}</CardTitle>
                  <CardDescription className={themeClasses.cardDescription}>{project.dsc1}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${themeClasses.text} mb-3`}>{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className={themeClasses.badge}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className={`${themeClasses.button} transition-colors`} asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className={`${themeClasses.button} transition-colors`} asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Experience Tab */}
        <TabsContent value="experience" className="space-y-6">
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`flex items-center ${themeClasses.cardTitle}`}>
                <Briefcase className="w-5 h-5 mr-2 text-orange-400" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-l-2 border-blue-400/30 pl-4 space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className={`font-semibold ${themeClasses.cardTitle}`}>Founder & CEO</h3>
                    <Badge className={themeClasses.badge}>Remote</Badge>
                  </div>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>AtonixClouds.com • 2023 - 2025</p>
                  <ul className={`text-sm ${themeClasses.text} space-y-1`}>
                    <li>• Built and managed cloud hosting platform serving 1000+ clients</li>
                    <li>• Developed custom control panel using React and Node.js</li>
                    <li>• Implemented automated billing and server provisioning systems</li>
                    <li>• Achieved 90.0% uptime and ₹10K+ revenue in 5 Months</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className={`font-semibold ${themeClasses.cardTitle}`}>Web Development Freelancer</h3>
                    <Badge className={themeClasses.badge}>Freelance</Badge>
                  </div>
                  <p className={`text-sm ${themeClasses.textSecondary} mb-1`}>Self-employed • 2025 - Present</p>
                  <ul className={`text-sm ${themeClasses.text} space-y-1`}>
                    <li>• Built custom websites for 8+ small businesses</li>
                    <li>• Managed client relationships and delivered projects on time</li>
                    <li>• Specialized in e-commerce solutions and SQL integration</li>
                    <li>• Maintained 5-star rating across all client reviews</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`flex items-center ${themeClasses.cardTitle}`}>
                <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <h3 className={`font-semibold ${themeClasses.cardTitle}`}>Studying in Class 10th</h3>
                <p className={`text-sm ${themeClasses.textSecondary}`}>L.P. Savani • 2012 - 2026 (Expected)</p>
                <p className={`text-sm ${themeClasses.text} mt-2`}>
                  <strong>Current GPA:</strong> 2.8/4.0
                </p>
                <p className={`text-sm ${themeClasses.text} mt-1`}>
                  <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Database Systems, Software
                  Engineering, Computer Networks, Machine Learning, Web Development
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={themeClasses.cardTitle}>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <h4 className={`font-medium ${themeClasses.cardTitle}`}>Currently none 😞</h4>
                  <p className={`text-sm ${themeClasses.textSecondary}`}>Working on this • 2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
