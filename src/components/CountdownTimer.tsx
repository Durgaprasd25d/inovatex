"use client"

import type React from "react"
import { useState, useEffect } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const targetDate = new Date("2025-04-16T00:00:00").getTime()

const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl md:text-7xl font-bold text-white">{value}</div>
      <div className="text-lg md:text-xl text-gray-400">{label}</div>
    </div>
  )
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full py-12 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  )
}

export default CountdownTimer

