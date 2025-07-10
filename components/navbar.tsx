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
import { Moon, Sun, Palette, Heart, Home, Mail, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import Link from "next/link"

interface NavbarProps {
  theme: "dark" | "light" | "blue" | "red"
  onThemeChange: () => void
  currentPage?: string
  onPageChange?: (page: string) => void
}

export function Navbar({ theme, onThemeChange, currentPage = "home", onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-mobile-menu]")) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="h-4 w-4" />
      case "dark":
        return <Moon className="h-4 w-4" />
      case "red":
        return <Heart className="h-4 w-4" />
      default:
        return <Palette className="h-4 w-4" />
    }
  }

  const getHeaderClasses = () => {
    switch (theme) {
      case "light":
        return {
          header: "bg-white/95 backdrop-blur-md shadow-xl border border-gray-200/50",
          headerText:
            "text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent",
          button: "border-gray-300 text-gray-700 hover:bg-gray-100 bg-white/50",
          navButton: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80",
          navButtonActive: "text-gray-900 bg-gray-200/80",
          mobileMenu: "bg-white/95 backdrop-blur-md border-gray-200",
          overlay: "bg-black/20",
        }
      case "dark":
        return {
          header: "bg-gray-900/95 backdrop-blur-md shadow-xl border border-gray-700/50",
          headerText:
            "text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
          button: "border-gray-600 text-gray-300 hover:bg-gray-700/50 bg-gray-800/50",
          navButton: "text-gray-400 hover:text-gray-100 hover:bg-gray-700/80",
          navButtonActive: "text-gray-100 bg-gray-700/80",
          mobileMenu: "bg-gray-900/95 backdrop-blur-md border-gray-700",
          overlay: "bg-black/40",
        }
      case "red":
        return {
          header: "bg-red-950/95 backdrop-blur-md shadow-xl border border-red-500/20",
          headerText:
            "text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-300 bg-clip-text text-transparent",
          button: "border-red-400/30 text-red-300 hover:bg-red-500/20 bg-red-900/50",
          navButton: "text-red-300 hover:text-red-100 hover:bg-red-500/20",
          navButtonActive: "text-red-100 bg-red-500/30",
          mobileMenu: "bg-red-950/95 backdrop-blur-md border-red-500/20",
          overlay: "bg-black/40",
        }
      default: // blue
        return {
          header: "bg-slate-900/95 backdrop-blur-md shadow-xl border border-blue-500/20",
          headerText:
            "text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent",
          button: "border-blue-400/30 text-blue-300 hover:bg-blue-500/20 bg-slate-800/50",
          navButton: "text-blue-300 hover:text-blue-100 hover:bg-blue-500/20",
          navButtonActive: "text-blue-100 bg-blue-500/30",
          mobileMenu: "bg-slate-900/95 backdrop-blur-md border-blue-500/20",
          overlay: "bg-black/40",
        }
    }
  }

  const headerClasses = getHeaderClasses()

  const navItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "donate", label: "Donate", icon: Heart, href: "/donation" },
    { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
  ]

  const handleNavClick = (item: (typeof navItems)[0]) => {
    if (onPageChange) {
      onPageChange(item.id)
    }
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 ${headerClasses.overlay}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Navbar */}
      <motion.header
        className={cn(
          "fixed top-2 sm:top-4 inset-x-0 mx-auto w-[calc(100%-1rem)] sm:w-fit max-w-4xl z-50 transition-all duration-300 rounded-xl sm:rounded-2xl",
          headerClasses.header,
          isScrolled ? "py-2 px-3 sm:px-4" : "py-2 sm:py-3 px-3 sm:px-6",
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        data-mobile-menu
      >
        <div className="flex items-center justify-between gap-2 sm:gap-8">
          {/* Logo */}
          <motion.h1
            className={cn(headerClasses.headerText, "cursor-pointer flex-shrink-0")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="block">
              <span className="hidden sm:inline">123gg456.com</span>
              <span className="sm:hidden">123gg456</span>
            </Link>
          </motion.h1>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.id} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "flex items-center gap-2 transition-all duration-300 rounded-xl px-3 py-2",
                    currentPage === item.id ? headerClasses.navButtonActive : headerClasses.navButton,
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button & Theme Button */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={onThemeChange}
              className={cn(
                "flex items-center gap-1 sm:gap-2 transition-all duration-300 rounded-xl px-2 sm:px-3 py-2",
                headerClasses.button,
              )}
            >
              {getThemeIcon()}
              <span className="capitalize hidden sm:inline text-xs sm:text-sm">{theme}</span>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleMobileMenu}
              className={cn(
                "lg:hidden flex items-center justify-center transition-all duration-300 rounded-xl p-2",
                headerClasses.button,
              )}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={cn(
              "fixed top-16 sm:top-20 left-2 right-2 z-50 rounded-xl border shadow-2xl lg:hidden",
              headerClasses.mobileMenu,
            )}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            data-mobile-menu
          >
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={item.href} className="block">
                    <Button
                      variant="ghost"
                      onClick={() => handleNavClick(item)}
                      className={cn(
                        "w-full justify-start gap-3 transition-all duration-300 rounded-lg px-4 py-3 text-base",
                        currentPage === item.id ? headerClasses.navButtonActive : headerClasses.navButton,
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="h-16 sm:h-20 lg:h-24" />
    </>
  )
}
