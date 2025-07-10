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

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Calendar,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { motion } from "framer-motion"
import { FaDiscord } from "react-icons/fa";

interface ContactPageProps {
  theme: "dark" | "light" | "blue" | "red"
}

export function ContactPage({ theme }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

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
          primaryButton:
            "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
          input: "bg-white border-gray-300 focus:border-blue-500",
          successBg: "bg-green-50 border-green-200",
          errorBg: "bg-red-50 border-red-200",
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
          primaryButton:
            "bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white",
          input: "bg-gray-800/50 border-gray-600 focus:border-blue-500 text-white",
          successBg: "bg-green-900/20 border-green-700/50",
          errorBg: "bg-red-900/20 border-red-700/50",
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
          primaryButton: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white",
          input: "bg-red-950/30 border-red-500/30 focus:border-red-400 text-white",
          successBg: "bg-green-900/20 border-green-700/50",
          errorBg: "bg-red-900/30 border-red-700/50",
        }
      default: // blue
        return {
          card: "bg-slate-800/60 backdrop-blur-md border-blue-500/20 shadow-xl",
          cardTitle: "text-white",
          cardDescription: "text-blue-200",
          text: "text-blue-100",
          textSecondary: "text-blue-200",
          textMuted: "text-blue-300",
          badge: "bg-blue-500/20 text-blue-300 border-blue-400/30",
          button: "border-blue-400/30 text-blue-300 hover:bg-blue-500/20 bg-transparent",
          primaryButton: "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white",
          input: "bg-slate-800/30 border-blue-500/30 focus:border-blue-400 text-white",
          successBg: "bg-green-900/20 border-green-700/50",
          errorBg: "bg-red-900/20 border-red-700/50",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Prepare the data payload
      const payload = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        projectType: formData.projectType,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        apiKey: process.env.API_KEY || "mqNWbeVRctCY0192asdFGHJ!2"
      }

      // Make API call to your contact endpoint
      const response = await fetch('/api/discord-webhook/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      console.log('Contact form submitted successfully:', result)
      
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
      })
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "admin@123gg456.com",
      description: "Send me an email anytime",
      href: "mailto:admin@123gg456.com",
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "123gg456_",
      description: "Let's chat on Discord",
      href: "https://discord.gg/XrqErRqXCu",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book a meeting",
      description: "Let's schedule a voice call",
      href: "https://discord.gg/XrqErRqXCu",
    },
  ]

  const socialLinks = [
    { icon: FaDiscord, href: "https://discord.gg/XrqErRqXCu", label: "Discord" },
    { icon: Globe, href: "https://123gg456.com", label: "Website" },
  ]

  const projectTypes = [
    "Web Development",
    "Cloud Hosting Setup",
    "Pterodactyl Panel Support",
    "E-commerce Website",
    "Custom Web Application",
    "API Development",
    "Database Design",
    "Consulting",
    "Other",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={`text-4xl font-bold ${themeClasses.cardTitle}`}>Get In Touch</h1>
        <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
          Have a project in mind? Want to collaborate? Or just want to say hi? I'd love to hear from you! Let's build
          something amazing together. 🚀
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`text-2xl ${themeClasses.cardTitle}`}>Send Me a Message</CardTitle>
              <CardDescription className={themeClasses.textSecondary}>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitStatus === "success" && (
                <motion.div
                  className={`p-4 rounded-lg border ${themeClasses.successBg} mb-6`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800 dark:text-green-200">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  className={`p-4 rounded-lg border ${themeClasses.errorBg} mb-6`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-800 dark:text-red-200">
                      Something went wrong. Please try again or contact me directly.
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className={themeClasses.text}>
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={themeClasses.input}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className={themeClasses.text}>
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={themeClasses.input}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className={themeClasses.text}>
                    Project Type
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2 rounded-md border ${themeClasses.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className={themeClasses.text}>
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={themeClasses.input}
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={themeClasses.text}>
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={themeClasses.input}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${themeClasses.primaryButton} transition-all duration-300`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Info Sidebar */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Contact Methods */}
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`text-xl ${themeClasses.cardTitle}`}>Contact Information</CardTitle>
              <CardDescription className={themeClasses.textSecondary}>
                Choose your preferred way to reach out
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                    theme === "light"
                      ? "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      : theme === "dark"
                        ? "border-gray-700 hover:border-gray-600 hover:bg-gray-700/30"
                        : theme === "red"
                          ? "border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10"
                          : "border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10"
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-medium ${themeClasses.cardTitle}`}>{method.title}</h3>
                      <p className={`text-sm ${themeClasses.text} truncate`}>{method.value}</p>
                      <p className={`text-xs ${themeClasses.textMuted} mt-1`}>{method.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Availability */}
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`text-xl ${themeClasses.cardTitle} flex items-center`}>
                <Clock className="w-5 h-5 mr-2" />
                Availability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Response Time</span>
                <Badge className={themeClasses.badge}>Within 24 hours</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Time Zone</span>
                <Badge className={themeClasses.badge}>IST (GMT+5:30)</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Best Time</span>
                <Badge className={themeClasses.badge}>2:30 PM - 2 AM</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-sm ${themeClasses.textSecondary}`}>Status</span>
                <Badge className="bg-green-500/20 text-green-400 border-green-400/30">Available for Projects</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`text-xl ${themeClasses.cardTitle}`}>Connect With Me</CardTitle>
              <CardDescription className={themeClasses.textSecondary}>
                Follow my work and connect on social media
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-3 rounded-lg border transition-all duration-300 hover:scale-105 ${
                      theme === "light"
                        ? "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                        : theme === "dark"
                          ? "border-gray-700 hover:border-gray-600 hover:bg-gray-700/30"
                          : theme === "red"
                            ? "border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10"
                            : "border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/10"
                    }`}
                  >
                    <social.icon className={`w-5 h-5 ${themeClasses.text}`} />
                    <span className={`ml-2 text-sm ${themeClasses.text}`}>{social.label}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className={themeClasses.card}>
            <CardHeader>
              <CardTitle className={`text-xl ${themeClasses.cardTitle} flex items-center`}>
                <MapPin className="w-5 h-5 mr-2" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={`${themeClasses.text} mb-2`}>Gujarat, India</p>
              <p className={`text-sm ${themeClasses.textMuted}`}>
                Available for remote work worldwide and local projects in Gujarat.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}