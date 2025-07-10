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

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  theme: "dark" | "light" | "blue" | "red"
}

interface FloatingOrb {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseSize: number
  opacity: number
  baseOpacity: number
  color: string
  pulse: number
  pulseSpeed: number
  mouseDistance: number
}

interface Wave {
  amplitude: number
  frequency: number
  phase: number
  speed: number
  color: string
}

export function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const orbsRef = useRef<FloatingOrb[]>([])
  const wavesRef = useRef<Wave[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Mouse position tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    document.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Get theme-specific colors
    const getThemeColors = () => {
      switch (theme) {
        case "light":
          return {
            orbs: [
              "rgba(59, 130, 246, 0.4)",
              "rgba(16, 185, 129, 0.3)",
              "rgba(139, 69, 19, 0.3)",
              "rgba(236, 72, 153, 0.3)",
            ],
            waves: ["rgba(59, 130, 246, 0.1)", "rgba(16, 185, 129, 0.08)", "rgba(139, 69, 19, 0.08)"],
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }
        case "dark":
          return {
            orbs: [
              "rgba(147, 51, 234, 0.5)",
              "rgba(59, 130, 246, 0.4)",
              "rgba(16, 185, 129, 0.4)",
              "rgba(236, 72, 153, 0.4)",
            ],
            waves: ["rgba(147, 51, 234, 0.15)", "rgba(59, 130, 246, 0.12)", "rgba(16, 185, 129, 0.1)"],
            gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          }
        case "red":
          return {
            orbs: [
              "rgba(239, 68, 68, 0.6)",
              "rgba(220, 38, 127, 0.5)",
              "rgba(190, 24, 93, 0.4)",
              "rgba(157, 23, 77, 0.4)",
            ],
            waves: ["rgba(239, 68, 68, 0.2)", "rgba(220, 38, 127, 0.15)", "rgba(190, 24, 93, 0.12)"],
            gradient: "linear-gradient(135deg, #dc2626 0%, #be185d 100%)",
          }
        default: //blue theme colors
          return {
            orbs: [
              "rgba(59, 130, 246, 0.6)",
              "rgba(99, 102, 241, 0.5)",
              "rgba(139, 92, 246, 0.4)",
              "rgba(168, 85, 247, 0.4)",
            ],
            waves: ["rgba(59, 130, 246, 0.2)", "rgba(99, 102, 241, 0.15)", "rgba(139, 92, 246, 0.12)"],
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }
      }
    }

    const colors = getThemeColors()
    const createOrbs = () => {
      const orbs: FloatingOrb[] = []
      const orbCount = 15
      for (let i = 0; i < orbCount; i++) {
        const baseSize = Math.random() * 100 + 30
        const baseOpacity = Math.random() * 0.4 + 0.1
        orbs.push({
          x: Math.random() * (canvas?.width || 800),
          y: Math.random() * (canvas?.height || 600),
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: baseSize,
          baseSize: baseSize,
          opacity: baseOpacity,
          baseOpacity: baseOpacity,
          color: colors.orbs[Math.floor(Math.random() * colors.orbs.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          mouseDistance: Number.POSITIVE_INFINITY,
        })
      }
      return orbs
    }
    const createWaves = () => {
      const waves: Wave[] = []
      const waveCount = 3
      for (let i = 0; i < waveCount; i++) {
        waves.push({
          amplitude: Math.random() * 60 + 20,
          frequency: Math.random() * 0.02 + 0.01,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.03 + 0.01,
          color: colors.waves[i % colors.waves.length],
        })
      }
      return waves
    }
    orbsRef.current = createOrbs()
    wavesRef.current = createWaves()
    let time = 0
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      time += 0.016
      wavesRef.current.forEach((wave, index) => {
        ctx.beginPath()
        ctx.strokeStyle = wave.color
        ctx.lineWidth = 2
        ctx.globalAlpha = 0.6
        const waveHeight = canvas.height / 2 + index * 100
        ctx.moveTo(0, waveHeight)
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = waveHeight + Math.sin(x * wave.frequency + wave.phase + time * wave.speed) * wave.amplitude
          ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.globalAlpha = 1
      })
      orbsRef.current.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy
        if (orb.x < 0 || orb.x > canvas.width) {
          orb.vx *= -0.8
          orb.x = Math.max(0, Math.min(canvas.width, orb.x))
        }
        if (orb.y < 0 || orb.y > canvas.height) {
          orb.vy *= -0.8
          orb.y = Math.max(0, Math.min(canvas.height, orb.y))
        }

        orb.pulse += orb.pulseSpeed

        const dx = mouseRef.current.x - orb.x
        const dy = mouseRef.current.y - orb.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        orb.mouseDistance = distance

        if (!Number.isFinite(orb.x) || !Number.isFinite(orb.y)) return

        if (distance < 300 && distance > 1) {
          const force = (300 - distance) / 300
          const attractionStrength = 0.02

          orb.vx += (dx / distance) * force * attractionStrength
          orb.vy += (dy / distance) * force * attractionStrength

          const sizeMultiplier = 1 + force * 2
          const opacityMultiplier = 1 + force * 3

          orb.size = orb.baseSize * sizeMultiplier
          orb.opacity = Math.min(orb.baseOpacity * opacityMultiplier, 0.9)
        } else {
          orb.size += (orb.baseSize - orb.size) * 0.05
          orb.opacity += (orb.baseOpacity - orb.opacity) * 0.05
        }

        orb.vx *= 0.98
        orb.vy *= 0.98

        const currentSize = orb.size + Math.sin(orb.pulse) * 15

        for (let i = 0; i < 3; i++) {
          const glowSize = currentSize * (1 + i * 0.5)
          const glowOpacity = orb.opacity / (i + 1)

          const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, glowSize)
          gradient.addColorStop(0, orb.color.replace(/[\d.]+\)$/g, `${glowOpacity})`))
          gradient.addColorStop(1, "rgba(0, 0, 0, 0)")

          ctx.beginPath()
          ctx.arc(orb.x, orb.y, glowSize, 0, Math.PI * 2)
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      for (let i = 0; i < orbsRef.current.length; i++) {
        for (let j = i + 1; j < orbsRef.current.length; j++) {
          const orb1 = orbsRef.current[i]
          const orb2 = orbsRef.current[j]
          const dx = orb1.x - orb2.x
          const dy = orb1.y - orb2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 300) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 - distance / 3000})`
            ctx.lineWidth = 1
            ctx.moveTo(orb1.x, orb1.y)
            ctx.lineTo(orb2.x, orb2.y)
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      document.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  const getBackgroundClasses = () => {
    switch (theme) {
      case "light":
        return "fixed inset-0 -z-10 bg-gradient-to-br from-slate-100 via-purple-50 to-indigo-100"
      case "dark":
        return "fixed inset-0 -z-10 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900"
      case "red":
        return "fixed inset-0 -z-10 bg-gradient-to-br from-red-900 via-rose-900 to-pink-900"
      default:
        return "fixed inset-0 -z-10 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
    }
  }

  return (
    <div className={getBackgroundClasses()}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full mix-blend-screen"
        style={{ pointerEvents: "none" }}
      />
      {/* Additional decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
    </div>
  )
}
