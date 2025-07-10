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

import { type NextRequest, NextResponse } from "next/server"

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL

// In-memory storage for rate limiting (use Redis in production). Contact me for Redis setup @123gg456_
const rateLimitStore = new Map<string, number>()

const RATE_LIMIT_WINDOW = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const remoteAddress = request.headers.get('x-vercel-forwarded-for') || 
                       request.headers.get('cf-connecting-ip')

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  return remoteAddress || 'unknown'
}

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const lastSubmission = rateLimitStore.get(ip)
  
  if (lastSubmission && (now - lastSubmission) < RATE_LIMIT_WINDOW) {
    return true
  }
  
  rateLimitStore.forEach((timestamp, key) => {
    if (now - timestamp >= RATE_LIMIT_WINDOW) {
      rateLimitStore.delete(key)
    }
  })
  
  return false
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, projectType, timestamp, userAgent, apiKey } = body

    // Validate API key, PUT UR API KEY HERE
    if (!apiKey || apiKey !== "mqNWbeVRctCY0192asdFGHJ!2") {
      return NextResponse.json({ error: "Invalid or missing API key" }, { status: 401 })
    }

    const clientIP = getClientIP(request)
    
    if (isRateLimited(clientIP)) {
      return NextResponse.json({ 
        error: "Rate limit exceeded. You can only send one message per 24 hours." 
      }, { status: 429 })
    }

    
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    rateLimitStore.set(clientIP, Date.now())

    if (DISCORD_WEBHOOK_URL) {
      const discordWebhook = {
        content: `📧 New contact form submission received!`,
        embeds: [
          {
            title: "📬 New Contact Form Submission",
            color: 0x3b82f6,
            fields: [
              {
                name: "👤 Name",
                value: name,
                inline: true,
              },
              {
                name: "📧 Email",
                value: email,
                inline: true,
              },
              {
                name: "🌐 IP Address",
                value: clientIP,
                inline: true,
              },
              {
                name: "🏷️ Project Type",
                value: projectType || "Not specified",
                inline: true,
              },
              {
                name: "📝 Subject",
                value: subject,
                inline: false,
              },
              {
                name: "💬 Message",
                value: message.length > 1024 ? message.substring(0, 1021) + "..." : message,
                inline: false,
              },
            ],
            footer: {
              text: `Submitted via Contact Form • ${userAgent || "Unknown browser"}`,
            },
            timestamp: timestamp || new Date().toISOString(),
          },
        ],
      }

      const webhookResponse = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordWebhook),
      })

      if (!webhookResponse.ok) {
        const errorText = await webhookResponse.text()
        throw new Error(`Discord webhook failed: ${webhookResponse.status} ${errorText}`)
      }
    }


    console.log("Contact form submission:", {
      name,
      email,
      subject,
      projectType,
      clientIP,
      timestamp: timestamp || new Date().toISOString(),
    })

    return NextResponse.json({ 
      success: true, 
      message: "Contact form submitted successfully" 
    })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ 
      error: "Failed to process contact form submission" 
    }, { status: 500 })
  }
}