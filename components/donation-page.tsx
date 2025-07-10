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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { Heart, Coffee, Zap, Crown, Gift, CreditCard, Smartphone, Globe, Copy, X } from "lucide-react"
import { motion } from "framer-motion"

interface DonationPageProps {
  theme: "dark" | "light" | "blue" | "red"
}

interface DonationTier {
  name: string
  amount: string
  icon: any
  description: string
  perks: string[]
  popular: boolean
  numericAmount?: number
}

export function DonationPage({ theme }: DonationPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTier, setSelectedTier] = useState<DonationTier | null>(null)
  const [customAmount, setCustomAmount] = useState("")

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
          heartButton: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white",
          modal: "bg-white border-gray-200",
          overlay: "bg-black/50",
          qrBg: "bg-gray-50",
          copyButton: "bg-gray-100 hover:bg-gray-200 text-gray-700",
          closeButton: "text-gray-500 hover:text-gray-700",
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
          heartButton: "bg-gradient-to-r from-red-600 to-pink-700 hover:from-red-700 hover:to-pink-800 text-white",
          modal: "bg-gray-800 border-gray-700",
          overlay: "bg-black/70",
          qrBg: "bg-gray-700",
          copyButton: "bg-gray-700 hover:bg-gray-600 text-gray-300",
          closeButton: "text-gray-400 hover:text-gray-200",
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
          heartButton: "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white",
          modal: "bg-red-950 border-red-500/20",
          overlay: "bg-black/70",
          qrBg: "bg-red-900/30",
          copyButton: "bg-red-500/20 hover:bg-red-500/30 text-red-300",
          closeButton: "text-red-300 hover:text-red-100",
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
          heartButton: "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white",
          modal: "bg-slate-800 border-blue-500/20",
          overlay: "bg-black/70",
          qrBg: "bg-slate-700",
          copyButton: "bg-blue-500/20 hover:bg-blue-500/30 text-blue-300",
          closeButton: "text-blue-300 hover:text-blue-100",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const donationTiers: DonationTier[] = [
    {
      name: "Coffee Supporter",
      amount: "₹50",
      numericAmount: 50,
      icon: Coffee,
      description: "Buy me a coffee to fuel late-night coding sessions",
      perks: ["Thank you message", "Name in supporters list"],
      popular: false,
    },
    {
      name: "Code Contributor",
      amount: "₹200",
      numericAmount: 200,
      icon: Zap,
      description: "Support my open-source projects and development",
      perks: ["All Coffee perks", "Early access to projects", "Discord access"],
      popular: true,
    },
    {
      name: "Tech Patron",
      amount: "₹500",
      numericAmount: 500,
      icon: Crown,
      description: "Help me invest in better tools and resources",
      perks: ["All previous perks", "Monthly progress updates", "1-on-1 consultation"],
      popular: false,
    },
    {
      name: "Custom Amount",
      amount: "Any",
      icon: Gift,
      description: "Choose your own amount to support my journey",
      perks: ["Flexible support", "Personal thank you"],
      popular: false,
    },
  ]

  const paymentMethods = [
    { name: "UPI", icon: Smartphone, id: "prakharkothari24@okaxis" },
    { name: "PayPal", icon: Globe, id: "paypal.me/123gg456" },
    { name: "Bank Transfer", icon: CreditCard, id: "Contact for details" },
  ]

  const handleDonateClick = (tier: DonationTier) => {
    setSelectedTier(tier)
    setCustomAmount(tier.numericAmount?.toString() || "")
    setIsModalOpen(true)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const generateUPILink = (amount: string) => {
    const upiId = "prakharkothari24@okaxis"
    const name = "Prakhar Kothari"
    const note = "Donation for 123gg456"
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`
  }

  const generateQRCodeURL = (amount: string) => {
    const upiLink = generateUPILink(amount)
    // Using QR Server API to generate QR code
    return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(upiLink)}`
  }

  const getFinalAmount = () => {
    if (selectedTier?.name === "Custom Amount") {
      return customAmount || "0"
    }
    return selectedTier?.numericAmount?.toString() || customAmount || "0"
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="w-8 h-8 text-red-500 animate-pulse" />
          <h1 className={`text-4xl font-bold ${themeClasses.cardTitle}`}>Support My Journey</h1>
          <Heart className="w-8 h-8 text-red-500 animate-pulse" />
        </div>
        <p className={`text-lg ${themeClasses.textSecondary} max-w-3xl mx-auto`}>
          Your support helps me continue building amazing projects, learning new technologies, and contributing to the
          open-source community. Every contribution, no matter the size, makes a huge difference! 🚀
        </p>
      </motion.div>

      {/* Why Support Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className={themeClasses.card}>
          <CardHeader>
            <CardTitle className={`text-2xl ${themeClasses.cardTitle} text-center`}>Why Your Support Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className={`font-semibold ${themeClasses.cardTitle}`}>Better Tools</h3>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Invest in premium development tools, hosting, and resources
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-green-400" />
                </div>
                <h3 className={`font-semibold ${themeClasses.cardTitle}`}>More Time</h3>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Dedicate more time to coding and less time worrying about expenses
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className={`font-semibold ${themeClasses.cardTitle}`}>Open Source</h3>
                <p className={`text-sm ${themeClasses.textMuted}`}>
                  Keep projects free and open for everyone to use and learn from
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Donation Tiers */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className={`text-2xl font-bold ${themeClasses.cardTitle} text-center mb-8`}>Choose Your Support Level</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donationTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card
                className={`${themeClasses.card} relative ${tier.popular ? "ring-2 ring-blue-500" : ""} hover:scale-105 transition-transform duration-300`}
              >
                {tier.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <tier.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className={`text-lg ${themeClasses.cardTitle}`}>{tier.name}</CardTitle>
                  <CardDescription className={`text-2xl font-bold ${themeClasses.text}`}>{tier.amount}</CardDescription>
                  <p className={`text-sm ${themeClasses.textMuted}`}>{tier.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className={`text-sm ${themeClasses.textSecondary} flex items-center`}>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${tier.popular ? themeClasses.primaryButton : themeClasses.heartButton} transition-all duration-300`}
                    onClick={() => handleDonateClick(tier)}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Support Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Payment Methods */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Card className={themeClasses.card}>
          <CardHeader>
            <CardTitle className={`text-xl ${themeClasses.cardTitle} text-center`}>Payment Methods</CardTitle>
            <CardDescription className={`${themeClasses.textSecondary} text-center`}>
              Choose your preferred way to support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={method.name}
                  className={`p-4 rounded-lg border ${theme === "light" ? "border-gray-200 hover:border-gray-300" : theme === "dark" ? "border-gray-700 hover:border-gray-600" : theme === "red" ? "border-red-500/20 hover:border-red-500/40" : "border-blue-500/20 hover:border-blue-500/40"} transition-colors cursor-pointer`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className={`font-medium ${themeClasses.cardTitle}`}>{method.name}</h3>
                      <p className={`text-sm ${themeClasses.textMuted}`}>{method.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Thank You Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className={themeClasses.card}>
          <CardContent className="text-center py-8">
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
            <h3 className={`text-xl font-semibold ${themeClasses.cardTitle} mb-2`}>Thank You for Your Support! 💖</h3>
            <p className={`${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Every contribution helps me grow as a developer and create better projects for the community. Your support
              means the world to me and motivates me to keep pushing boundaries!
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <Button variant="outline" className={themeClasses.button} asChild>
                <a href="mailto:admin@123gg456.com">
                  <Coffee className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="outline" className={themeClasses.button} asChild>
                <a href="https://github.com/123gg456atonix" target="_blank" rel="noopener noreferrer">
                  <Zap className="w-4 h-4 mr-2" />
                  Follow Progress
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Responsive Payment Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent
          className={`${themeClasses.modal} w-[95vw] max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl max-h-[95vh] overflow-y-auto mx-auto p-0`}
        >
          {/* Custom Header with Close Button */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700">
            <div>
              <DialogTitle className={`${themeClasses.cardTitle} flex items-center text-lg sm:text-xl`}>
                <Heart className="w-5 h-5 mr-2 text-red-500" />
                {selectedTier?.name} - Support
              </DialogTitle>
              <DialogDescription className={`${themeClasses.textSecondary} text-sm sm:text-base mt-1`}>
                Complete your donation using UPI payment
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsModalOpen(false)}
              className={`${themeClasses.closeButton} p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full`}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="p-4 sm:p-6 space-y-6">
            {/* Custom Amount Input for "Custom Amount" tier */}
            {selectedTier?.name === "Custom Amount" && (
              <div className="space-y-2">
                <Label htmlFor="amount" className={`${themeClasses.text} text-sm sm:text-base`}>
                  Enter Amount (₹)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className={`${themeClasses.modal} border text-base sm:text-lg h-12`}
                />
              </div>
            )}

            {/* Amount Display */}
            <div className="text-center py-4">
              <p className={`text-sm sm:text-base ${themeClasses.textMuted}`}>Amount to pay</p>
              <p className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${themeClasses.cardTitle}`}>
                ₹{getFinalAmount()}
              </p>
            </div>

            {/* Responsive Layout for QR Code and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* QR Code Section */}
              {getFinalAmount() !== "0" && (
                <div className="text-center space-y-4 order-1 lg:order-1">
                  <div className={`${themeClasses.qrBg} p-4 sm:p-6 rounded-lg inline-block w-full max-w-sm mx-auto`}>
                    <img
                      src={generateQRCodeURL(getFinalAmount()) || "/img/123gg456.png"}
                      alt="UPI QR Code"
                      className="w-full h-auto max-w-[250px] sm:max-w-[300px] mx-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                  <p className={`text-sm sm:text-base ${themeClasses.textMuted}`}>Scan QR code with any UPI app</p>
                </div>
              )}

              {/* Payment Details Section */}
              <div className="space-y-4 order-2 lg:order-2">
                {/* UPI ID */}
                <div className="space-y-2">
                  <Label className={`${themeClasses.text} text-sm sm:text-base font-medium`}>UPI ID</Label>
                  <div className="flex items-center space-x-2">
                    <Input
                      value="prakharkothari24@okaxis"
                      readOnly
                      className={`${themeClasses.modal} border flex-1 text-sm sm:text-base h-12`}
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard("prakharkothari24@okaxis")}
                      className={`${themeClasses.copyButton} h-12 px-3`}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Instructions */}
                <div className={`p-4 sm:p-5 rounded-lg ${themeClasses.qrBg}`}>
                  <h4 className={`font-medium ${themeClasses.cardTitle} mb-3 text-sm sm:text-base`}>
                    Payment Instructions:
                  </h4>
                  <ol className={`text-sm sm:text-base ${themeClasses.textMuted} space-y-2`}>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">1.</span>
                      <span>Scan the QR code or copy the UPI ID</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">2.</span>
                      <span>Open your UPI app (GPay, PhonePe, Paytm, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">3.</span>
                      <span>Enter amount: ₹{getFinalAmount()}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">4.</span>
                      <span>Complete the payment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">5.</span>
                      <span>Screenshot the success message (optional)</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
              {getFinalAmount() !== "0" && (
                <Button
                  className={`${themeClasses.primaryButton} flex-1 h-12 text-base`}
                  onClick={() => {
                    const upiLink = generateUPILink(getFinalAmount())
                    window.open(upiLink, "_blank")
                  }}
                >
                  <Smartphone className="w-5 h-5 mr-2" />
                  Pay with UPI
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className={`${themeClasses.button} flex-1 sm:flex-none h-12 text-base`}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
