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
import { Github, Globe, Mail, Heart, HandCoins } from "lucide-react"
import { FaDiscord } from "react-icons/fa";

interface FooterProps {
  theme: "dark" | "light" | "blue" | "red"
}

export function Footer({ theme }: FooterProps) {
  const getThemeClasses = () => {
    switch (theme) {
      case "light":
        return {
          footer: "bg-white/90 backdrop-blur-md border-t border-gray-200",
          text: "text-gray-700",
          textSecondary: "text-gray-500",
          button: "border-gray-300 text-gray-700 hover:bg-gray-100 bg-transparent",
          link: "text-gray-600 hover:text-gray-900",
        }
      case "dark":
        return {
          footer: "bg-gray-900/90 backdrop-blur-md border-t border-gray-700",
          text: "text-gray-100",
          textSecondary: "text-gray-400",
          button: "border-gray-600 text-gray-300 hover:bg-gray-700/50 bg-transparent",
          link: "text-gray-400 hover:text-gray-100",
        }
      case "red":
        return {
          footer: "bg-red-950/90 backdrop-blur-md border-t border-red-500/20",
          text: "text-red-100",
          textSecondary: "text-red-300",
          button: "border-red-400/30 text-red-300 hover:bg-red-500/20 bg-transparent",
          link: "text-red-300 hover:text-red-100",
        }
      default: // blue
        return {
          footer: "bg-slate-900/90 backdrop-blur-md border-t border-blue-500/20",
          text: "text-blue-100",
          textSecondary: "text-blue-200",
          button: "border-blue-400/30 text-blue-300 hover:bg-blue-500/20 bg-transparent",
          link: "text-blue-300 hover:text-blue-100",
        }
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <footer className={`mt-20 ${themeClasses.footer}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className={`text-lg font-semibold mb-4 ${themeClasses.text}`}>123gg456 | Prakhar</h3>
            <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed`}>
              Passionate student developer specializing in web development and cloud hosting solutions. Building the
              future one line of code at a time.
            </p>
            <div className="flex space-x-3">
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
                <a href="mailto:admin@123gg456.com">
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" className={`${themeClasses.button} transition-colors`} asChild>
                <a href="https://discord.gg/XrqErRqXCu" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="w-4 h-4"/>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${themeClasses.text}`}>Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className={`${themeClasses.link} transition-colors`}>
                  About Me
                </a>
              </li>
              <li>
                <a href="/donation" className={`${themeClasses.link} transition-colors`}>
                  Donate
                </a>
              </li>
              <li>
                <a href="/contact" className={`${themeClasses.link} transition-colors`}>
                  Contact
                </a>
              </li>
              <li>
                <a href="https://builtbybit.com/members/123gg456.553082/" className={`${themeClasses.link} transition-colors`}>
                  BuildByBit
                </a>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h4 className={`font-semibold mb-4 ${themeClasses.text}`}>Others</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://voxelvolt.shop" className={`${themeClasses.link} transition-colors`}>
                  Voxel Volt
                </a>
              </li>
              <li>
                <a href="https://discord.gg/XrqErRqXCu" className={`${themeClasses.link} transition-colors`}>
                  Discord Server
                </a>
              </li>
              <li>
                <a href="https://billing.voxelvolt.shop" className={`${themeClasses.link} transition-colors`}>
                  Billing site
                </a>
              </li>
              <li>
                <a href="https://billing.zypher.cloud" className={`${themeClasses.link} transition-colors`}>
                  Zypher Cloud
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`mt-8 pt-8 border-t ${theme === "light" ? "border-gray-200" : theme === "dark" ? "border-gray-700" : theme === "red" ? "border-red-500/20" : "border-blue-500/20"} flex flex-col md:flex-row justify-between items-center`}
        >
          <p className={`${themeClasses.textSecondary} text-sm`}>
            Made with ❤️ & ☕ by 123gg456.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="ghost" size="sm" className={`${themeClasses.button} p-0 h-auto`}>
              <Heart className="w-4 h-4 mr-1" />
              <span className="text-sm">Support</span>
            </Button>
            <Button variant="ghost" size="sm" className={`${themeClasses.button} p-0 h-auto`}>
              <HandCoins className="w-4 h-4 mr-1 hover:bg-red-700" />
              <span className="text-sm">Donate</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
