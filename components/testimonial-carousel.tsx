"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight, Play, Pause, MapPin } from "lucide-react"
import AnimatedCounter from "./animated-counter"
import AnimatedStat from "./animated-stat"
import { useRouter } from "next/navigation"

interface Testimonial {
  id: string
  company: string
  industry: string
  location: string
  solution: string
  result: string
  resultLabel: string
  quote: string
  author: string
  position: string
  avatar: string
  metrics: {
    label: string
    value: string
  }[]
  bgGradient: string
  accentColor: string
}

const testimonials: Testimonial[] = [
  {
    id: "fashion-forward",
    company: "Fashion Forward Inc.",
    industry: "Apparel Manufacturing",
    location: "Mumbai, India",
    solution: "StitchIT",
    result: "+35%",
    resultLabel: "Production Efficiency",
    quote:
      "StitchIT has completely transformed our manufacturing process. We've seen remarkable improvements in efficiency and our customers are happier with faster delivery times. The ROI was evident within the first quarter.",
    author: "Rajesh Sharma",
    position: "Operations Director",
    avatar: "/placeholder.svg?height=60&width=60&text=RS",
    metrics: [
      { label: "Lead Time", value: "-45%" },
      { label: "Material Waste", value: "-25%" },
      { label: "Quality Score", value: "+20%" },
    ],
    bgGradient: "from-orange-500/10 to-red-500/10",
    accentColor: "text-orange-400",
  },
  {
    id: "clean-pro",
    company: "CleanPro Industries",
    industry: "Commercial Laundry",
    location: "Delhi, India",
    solution: "WashIT",
    result: "+40%",
    resultLabel: "Route Efficiency",
    quote:
      "WashIT has revolutionized our laundry operations. The automated billing and route optimization have significantly improved our efficiency and customer satisfaction. Our revenue has increased by 40% since implementation.",
    author: "Priya Patel",
    position: "General Manager",
    avatar: "/placeholder.svg?height=60&width=60&text=PP",
    metrics: [
      { label: "Billing Accuracy", value: "+98%" },
      { label: "Customer Satisfaction", value: "+60%" },
      { label: "Operational Costs", value: "-30%" },
    ],
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    accentColor: "text-blue-400",
  },
  {
    id: "style-hub",
    company: "Style Hub",
    industry: "E-commerce Fashion",
    location: "Bangalore, India",
    solution: "DigitAil",
    result: "+65%",
    resultLabel: "Sales Growth",
    quote:
      "DigitAil has been a game-changer for our e-commerce business. The multi-channel integration and automated inventory management have helped us scale rapidly while maintaining excellent customer service.",
    author: "Amit Kumar",
    position: "Founder & CEO",
    avatar: "/placeholder.svg?height=60&width=60&text=AK",
    metrics: [
      { label: "Order Fulfillment", value: "+50%" },
      { label: "Inventory Accuracy", value: "+95%" },
      { label: "Customer Retention", value: "+45%" },
    ],
    bgGradient: "from-purple-500/10 to-pink-500/10",
    accentColor: "text-purple-400",
  },
  {
    id: "textile-masters",
    company: "Textile Masters Ltd.",
    industry: "Textile Manufacturing",
    location: "Chennai, India",
    solution: "HR TECH",
    result: "+99%",
    resultLabel: "Payroll Accuracy",
    quote:
      "HR TECH has simplified our complex payroll processes tremendously. The automated compliance features ensure we never miss any regulatory requirements, and our employees love the self-service portal.",
    author: "Lakshmi Narayanan",
    position: "HR Director",
    avatar: "/placeholder.svg?height=60&width=60&text=LN",
    metrics: [
      { label: "Processing Time", value: "-80%" },
      { label: "Compliance Score", value: "+100%" },
      { label: "HR Efficiency", value: "+70%" },
    ],
    bgGradient: "from-green-500/10 to-emerald-500/10",
    accentColor: "text-green-400",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()

  const currentTestimonial = testimonials[currentIndex]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextSlide()
      }, 8000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, currentIndex])

  const nextSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return

    setIsTransitioning(true)
    setCurrentIndex(index)

    // Reset transition state after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-orange-500/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-orange-600 text-white hover:bg-orange-700 px-4 py-2 font-medium">
            <Star className="h-4 w-4 mr-2" />
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-display">
            Real Results from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              {" "}
              Real Customers
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-body">
            Discover how leading businesses across different industries have transformed their operations and achieved
            remarkable growth with our innovative solutions.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Carousel Controls */}
          <div className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 hover:text-white"
              onClick={prevSlide}
              disabled={isTransitioning}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 z-10">
            <Button
              size="icon"
              variant="outline"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 hover:text-white"
              onClick={nextSlide}
              disabled={isTransitioning}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Play/Pause Button */}
          <div className="absolute top-4 right-4 z-10">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 rounded-full bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700"
              onClick={togglePlayPause}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
          </div>

          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <div
              className={`transition-all duration-500 ease-in-out transform ${
                isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Card
                className={`bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden`}
              >
                <CardContent className="p-6 md:p-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Company Info & Quote */}
                    <div className="space-y-6">
                      {/* Company Info */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge className={`bg-orange-500 text-white border-none`}>
                            {currentTestimonial.solution}
                          </Badge>
                          <Badge variant="outline" className="border-slate-300 text-slate-600">
                            {currentTestimonial.industry}
                          </Badge>
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">{currentTestimonial.company}</h3>
                          <div className="flex items-center text-slate-500 text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{currentTestimonial.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative mt-8">
                        <Quote className="h-10 w-10 text-orange-200 absolute -top-4 -left-2" />
                        <p className="text-slate-600 italic leading-relaxed pl-8 text-lg">
                          "{currentTestimonial.quote}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                        <Image
                          src={currentTestimonial.avatar || "/placeholder.svg"}
                          alt={currentTestimonial.author}
                          width={60}
                          height={60}
                          className="rounded-full border-2 border-orange-100"
                        />
                        <div>
                          <div className="font-semibold text-slate-800 text-lg">{currentTestimonial.author}</div>
                          <div className="text-slate-500">{currentTestimonial.position}</div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Results & Metrics */}
                    <div className="space-y-8">
                      {/* Main Result */}
                      <div className="text-center py-8 bg-orange-50 rounded-xl border border-orange-100">
                        <AnimatedCounter
                          value={currentTestimonial.result}
                          className={`text-5xl font-bold text-orange-500 mb-2`}
                          prefix={
                            currentTestimonial.result.startsWith("+")
                              ? "+"
                              : currentTestimonial.result.startsWith("-")
                                ? "-"
                                : ""
                          }
                          suffix={currentTestimonial.result.endsWith("%") ? "%" : ""}
                          duration={2500}
                        />
                        <div className="text-slate-700 font-medium text-lg">{currentTestimonial.resultLabel}</div>
                      </div>

                      {/* Additional Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {currentTestimonial.metrics.map((metric, metricIndex) => (
                          <div
                            key={metricIndex}
                            className="text-center p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                          >
                            <AnimatedStat
                              value={metric.value}
                              label={metric.label}
                              valueClassName={`text-xl font-bold text-orange-500`}
                              labelClassName="text-sm text-slate-600 mt-1"
                            />
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      {/* <Button
                        className={`w-full bg-orange-500 hover:bg-orange-600 text-white border-none shadow-md hover:shadow-lg transition-all duration-300`}
                        onClick={() => router.push("/case-studies")}
                      >
                        Read Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 transition-all duration-300 rounded-full ${
                  index === currentIndex ? "w-10 bg-orange-500" : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { label: "Average ROI", value: "300%", color: "text-green-600" },
            { label: "Client Satisfaction", value: "98%", color: "text-blue-600" },
            { label: "Implementation Time", value: "6", suffix: " weeks", color: "text-purple-600" },
            { label: "Happy Customers", value: "500+", color: "text-orange-600" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AnimatedCounter
                value={stat.value}
                className={`text-3xl font-bold ${stat.color}`}
                suffix={stat.suffix || ""}
              />
              <div className="text-slate-600 mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => router.push("/case-studies")}
          >
            View All Success Stories
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
