"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedCounterProps {
  value: string
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  value,
  duration = 2000,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  // Parse the value to get the numeric part
  const parseValue = () => {
    // Remove any non-numeric characters except for decimal points
    const numericValue = value.replace(/[^0-9.-]/g, "")
    return Number.parseFloat(numericValue) || 0
  }

  const targetValue = parseValue()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true
          animateCounter()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [])

  const animateCounter = () => {
    const start = 0
    const end = targetValue
    const stepTime = Math.abs(Math.floor(duration / end))

    let current = start
    const timer = setInterval(() => {
      current += 1
      setCount(current)

      if (current >= end) {
        clearInterval(timer)
        setCount(end)
      }
    }, stepTime)
  }

  // Format the display value to match the original format
  const formatDisplayValue = () => {
    if (value.includes("%")) {
      return `${prefix}${count}${suffix}`
    } else if (value.includes("+")) {
      return `${prefix}${count}${suffix}`
    } else if (value.includes("-")) {
      return `${prefix}${count}${suffix}`
    } else {
      return `${prefix}${count}${suffix}`
    }
  }

  return (
    <div ref={countRef} className={className}>
      {formatDisplayValue()}
    </div>
  )
}
