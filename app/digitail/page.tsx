"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Target,
  ChevronRight,
  ShoppingCart,
  BarChart2,
  Package,
  UserCheck,
  Mail,
  Store,
  Boxes,
  ClipboardList,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"

import Link from "next/link"


import { FaDownload } from "react-icons/fa"


export default function DigitAilPage() {
  const BASE_URL = "https://nuvatetechnology.com/";

  const logos = [
    { src: `${BASE_URL}nuvate-image/logo/avadat.png`, alt: "Avadat" },
    { src: `${BASE_URL}nuvate-image/logo/sonam_logo.png`, alt: "Sonam Collection" },
    { src: `${BASE_URL}nuvate-image/logo/kapoor_logo.png`, alt: "Kapoor Enterprises" },
    { src: `${BASE_URL}nuvate-image/logo/zedex_clothing.png`, alt: "Zedex Clothing" },
    { src: `${BASE_URL}nuvate-image/logo/Fashion-Fair.png`, alt: "Fashion Fair" },
    { src: `${BASE_URL}nuvate-image/logo/Kajal-Kids.png`, alt: "Kajal Kids" },
  ]

  const repeatedLogos = [...logos, ...logos] // Duplicate for seamless loop

  const features = [
    {
      title: "Multi-Channel Integration",
      description: "Seamlessly integrate with popular e-commerce platforms, marketplaces, and social media channels.",
      icon: "Store",
    },
    {
      title: "Inventory Synchronization",
      description: "Real-time inventory synchronization across all sales channels to prevent overselling.",
      icon: "Boxes",
    },
    {
      title: "Order Management",
      description: "Centralized order management system for efficient processing and fulfillment.",
      icon: "ClipboardList",
    },
    {
      title: "Customer Management",
      description: "Comprehensive customer database with purchase history, preferences, and communication tools.",
      icon: "UserCheck",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Detailed analytics and reporting to track sales performance, customer behavior, and inventory trends.",
      icon: "BarChart2",
    },
    {
      title: "Marketing Automation",
      description: "Automated marketing tools for email campaigns, promotions, and customer engagement.",
      icon: "Mail",
    },
  ]

  const challenges = [
    {
      title: "Multi-Channel Management",
      description:
        "Efficiently manage inventory, orders, and customers across multiple sales channels from a single platform.",
      icon: "Store",
    },
    {
      title: "Inventory Discrepancies",
      description: "Eliminate overselling and stockouts with real-time inventory synchronization across all channels.",
      icon: "Package",
    },
    {
      title: "Order Processing",
      description: "Streamline order processing and fulfillment to reduce errors and improve delivery times.",
      icon: "ShoppingCart",
    },
    {
      title: "Customer Insights",
      description:
        "Gain valuable insights into customer behavior and preferences to drive targeted marketing campaigns.",
      icon: "Heart",
    },
  ]

  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">DigitAil</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Complete
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500">
                {" "}
                E-commerce Solution
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Build and scale your online business with our comprehensive e-commerce platform featuring advanced
              analytics and seamless integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link href='/contact'>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
              <Button size="lg" variant="outline" onClick={() => {
                const link = document.createElement("a");
                link.href = "/Digitail.pdf"; // path in public folder
                link.download = "DigiTail-Brochure.pdf"; // name the file
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}>

               <FaDownload className="mr-2" />Download Broucher
              </Button>
            </div>
          </div>
          <div className="relative">
            <iframe
              width="746"
              height="420"
              src="https://www.youtube.com/embed/3avYI94_gOM"
              title="Digitail Brochure Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl shadow-xl w-full"
            ></iframe>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, label: "Active Clients", value: "300+" },
            { icon: Zap, label: "Sales Growth", value: "65%" },
            { icon: Shield, label: "Inventory Accuracy", value: "95%" },
            { icon: Target, label: "ROI Timeline", value: "3 months" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <stat.icon className="h-8 w-8 mx-auto text-purple-600" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Challenges We Solve</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Challenges in E-commerce</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            DigitAil addresses the key challenges faced by e-commerce businesses, helping you optimize operations and
            increase profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                {(() => {
                  switch (challenge.icon) {
                    case "Store":
                      return <Store className="h-8 w-8 text-purple-600" />
                    case "Package":
                      return <Package className="h-8 w-8 text-purple-600" />
                    case "ShoppingCart":
                      return <ShoppingCart className="h-8 w-8 text-purple-600" />
                    case "Heart":
                      return <Heart className="h-8 w-8 text-purple-600" />
                    default:
                      return null
                  }
                })()}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Features */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-200 text-purple-700 hover:bg-purple-300">Comprehensive Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need in One Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              DigitAil offers a complete suite of features designed specifically for e-commerce businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index + challenges.length)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                  {(() => {
                    switch (feature.icon) {
                      case "Store":
                        return <Store className="h-8 w-8 text-purple-600" />
                      case "Boxes":
                        return <Boxes className="h-8 w-8 text-purple-600" />
                      case "ClipboardList":
                        return <ClipboardList className="h-8 w-8 text-purple-600" />
                      case "UserCheck":
                        return <UserCheck className="h-8 w-8 text-purple-600" />
                      case "BarChart2":
                        return <BarChart2 className="h-8 w-8 text-purple-600" />
                      case "Mail":
                        return <Mail className="h-8 w-8 text-purple-600" />
                      default:
                        return null
                    }
                  })()}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Streamlined Workflow</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            DigitAil integrates seamlessly with your existing processes, providing end-to-end visibility and control.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                title: "Channel Integration",
                description:
                  "Connect your online store, marketplaces, and social media channels to centralize your e-commerce operations.",
                image: "/placeholder.svg?height=300&width=500&text=Channel+Integration",
              },
              {
                title: "Product Management",
                description:
                  "Manage your product catalog, pricing, and inventory across all sales channels from a single platform.",
                image: "/placeholder.svg?height=300&width=500&text=Product+Management",
              },
              {
                title: "Order Processing",
                description:
                  "Efficiently process orders from all channels with automated workflows and fulfillment options.",
                image: "/placeholder.svg?height=300&width=500&text=Order+Processing",
              },
              {
                title: "Inventory Management",
                description:
                  "Keep track of inventory levels across all channels and locations with real-time synchronization.",
                image: "/placeholder.svg?height=300&width=500&text=Inventory+Management",
              },
              {
                title: "Customer Engagement",
                description:
                  "Build lasting relationships with customers through personalized marketing and communication.",
                image: "/placeholder.svg?height=300&width=500&text=Customer+Engagement",
              },
              {
                title: "Analytics & Growth",
                description:
                  "Gain valuable insights into your business performance and identify opportunities for growth.",
                image: "/placeholder.svg?height=300&width=500&text=Analytics+Growth",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  {/* Step Number */}
                  <div className="md:w-1/2 flex md:justify-center relative mb-8 md:mb-0">
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="bg-purple-500 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with DigitAil.
          </p>
        </div>

        <Tabs defaultValue="testimonial1" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="testimonial1">Style Hub</TabsTrigger>
            <TabsTrigger value="testimonial2">TrendyWear</TabsTrigger>
            <TabsTrigger value="testimonial3">HomeDecor</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="testimonial1">
              <div className="bg-slate-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Company+Logo"
                      alt="Style Hub"
                      width={200}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-slate-600 mb-6">
                      "DigitAil has been a game-changer for our e-commerce business. The multi-channel integration and
                      automated inventory management have helped us scale rapidly while maintaining excellent customer
                      service."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Amit Kumar</p>
                      <p className="text-slate-500">Founder & CEO, Style Hub</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">65%</div>
                        <div className="text-xs text-slate-500">Sales Growth</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">50%</div>
                        <div className="text-xs text-slate-500">Order Fulfillment</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">95%</div>
                        <div className="text-xs text-slate-500">Inventory Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="testimonial2">
              <div className="bg-slate-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Company+Logo"
                      alt="TrendyWear"
                      width={200}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-slate-600 mb-6">
                      "The analytics and reporting features have given us valuable insights into our customer behavior
                      and sales trends. We've been able to make data-driven decisions that have significantly increased
                      our revenue."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Priya Sharma</p>
                      <p className="text-slate-500">Marketing Director, TrendyWear</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">70%</div>
                        <div className="text-xs text-slate-500">Marketing ROI</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">45%</div>
                        <div className="text-xs text-slate-500">Customer Retention</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">55%</div>
                        <div className="text-xs text-slate-500">Revenue Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="testimonial3">
              <div className="bg-slate-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Company+Logo"
                      alt="HomeDecor"
                      width={200}
                      height={200}
                      className="rounded-lg mx-auto"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-400"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-xl italic text-slate-600 mb-6">
                      "Managing inventory across multiple channels was a nightmare before DigitAil. Now, we have
                      real-time visibility into our inventory levels, and the automated synchronization has eliminated
                      overselling issues completely."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Rahul Mehta</p>
                      <p className="text-slate-500">Operations Manager, HomeDecor</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">98%</div>
                        <div className="text-xs text-slate-500">Inventory Accuracy</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">0%</div>
                        <div className="text-xs text-slate-500">Overselling</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">30%</div>
                        <div className="text-xs text-slate-500">Time Savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* scrollb bar */}
      <div className="border-b py-8 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="text-center lg:text-left w-full lg:w-1/3">
            <p className="text-xl font-bold text-slate-800">Trusted by 30+ Clients</p>
          </div>
          <div className="w-full lg:w-2/3">
            <div className="relative overflow-hidden">
              <div className="min-w-max flex gap-12 animate-scroll-x">
                {repeatedLogos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={60}
                    className="h-14 w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>     



      {/* Pricing 
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include implementation support and training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "₹29,999",
              description: "Perfect for small e-commerce businesses just getting started",
              features: [
                "Up to 500 products",
                "2 sales channels",
                "Basic inventory management",
                "Standard reports",
                "Email support",
                "Regular updates",
              ],
              cta: "Get Started",
              popular: false,
            },
            {
              name: "Professional",
              price: "₹59,999",
              description: "Ideal for growing e-commerce businesses with multiple channels",
              features: [
                "Up to 5,000 products",
                "5 sales channels",
                "Advanced inventory management",
                "Comprehensive analytics",
                "Marketing automation",
                "Priority support",
                "Regular updates",
              ],
              cta: "Most Popular",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "Tailored solutions for large-scale e-commerce operations",
              features: [
                "Unlimited products",
                "Unlimited sales channels",
                "Enterprise-grade inventory management",
                "Advanced analytics and reporting",
                "Custom integrations",
                "Dedicated account manager",
                "Custom feature development",
              ],
              cta: "Contact Sales",
              popular: false,
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "relative z-10 scale-105 md:-mt-4 md:-mb-4" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">{plan.price}</div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 text-slate-600">
          All prices are one-time license fees. Annual maintenance and support plans available.
        </div>
      </section>
      */}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your E-commerce Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have streamlined their operations with DigitAil. Schedule a demo today to
            see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact'>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
              Schedule Demo
            </Button>
          </Link>
            
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
