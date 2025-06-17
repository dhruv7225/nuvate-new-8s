"use client"

import { useState, useEffect } from "react"
import { Scissors, Droplets, ShoppingCart, Users } from "lucide-react"

interface Solution {
  id: string
  title: string
  tagline: string
  description: string
  icon: any
  color: string
  bgGradient: string
  features: string[]
  stats: {
    label: string
    value: string
  }[]
}

const solutions: Solution[] = [
  {
    id: "stitchit",
    title: "StitchIT",
    tagline: "Cut to Pack Software Solution",
    description:
      "Complete garment manufacturing solution optimizing processes from sampling to production, procurement to invoicing.",
    icon: Scissors,
    color: "text-orange-600",
    bgGradient: "from-orange-100 to-red-100",
    features: ["Production Planning", "Inventory Management", "Quality Control", "Financial Integration"],
    stats: [
      { label: "Efficiency Increase", value: "35%" },
      { label: "Waste Reduction", value: "25%" },
      { label: "Faster Delivery", value: "40%" },
    ],
  },
  {
    id: "washit",
    title: "WashIT",
    tagline: "Complete IT Solution For Industrial Laundry",
    description:
      "Transform your laundry operations with end-to-end management covering customer relations, billing, and operational efficiency.",
    icon: Droplets,
    color: "text-blue-600",
    bgGradient: "from-blue-100 to-cyan-100",
    features: ["Customer Management", "Route Optimization", "Automated Billing", "Real-time Tracking"],
    stats: [
      { label: "Billing Accuracy", value: "98%" },
      { label: "Route Efficiency", value: "40%" },
      { label: "Cost Reduction", value: "30%" },
    ],
  },
  {
    id: "digitail",
    title: "DigitAil",
    tagline: "Complete E-commerce Solution",
    description:
      "Build and scale your online business with comprehensive e-commerce platform featuring advanced analytics and seamless integrations.",
    icon: ShoppingCart,
    color: "text-purple-600",
    bgGradient: "from-purple-100 to-pink-100",
    features: ["Multi-channel Sales", "Inventory Sync", "Payment Gateway", "Analytics Dashboard"],
    stats: [
      { label: "Sales Growth", value: "65%" },
      { label: "Order Accuracy", value: "95%" },
      { label: "Customer Retention", value: "45%" },
    ],
  },
  {
    id: "hrtech",
    title: "HR TECH",
    tagline: "Calculate Salary at Your Finger Tip",
    description:
      "Simplify HR operations with intuitive payroll and employee management system designed for modern businesses.",
    icon: Users,
    color: "text-green-600",
    bgGradient: "from-green-100 to-emerald-100",
    features: ["Payroll Automation", "Employee Self-Service", "Compliance Management", "Performance Tracking"],
    stats: [
      { label: "Payroll Accuracy", value: "99%" },
      { label: "Time Savings", value: "80%" },
      { label: "HR Efficiency", value: "70%" },
    ],
  },
]

export default function SolutionTickers() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentSolution = solutions[currentIndex]

  return null
}
