"use client"

import { useState } from "react"
import Image from "next/image"
import {
  ArrowRight,
  Users,
  Zap,
  Shield,
  Target,
  Scissors,
  Clock,
  Package,
  BarChart3,
  FileText,
  Layers,
  AlertTriangle,
  ClipboardCheck,
  BoxesIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from "next/link"

import { FaDownload } from "react-icons/fa"

export default function StitchITPage() {
  const features = [
    {
      title: "Cutting Plan Optimization",
      description: "Optimize fabric utilization with advanced algorithms that minimize waste and maximize efficiency.",
      icon: Scissors,
    },
    {
      title: "Production Tracking",
      description: "Real-time tracking of production status across all stages from cutting to packing.",
      icon: BarChart3,
    },
    {
      title: "Quality Control",
      description: "Integrated quality control processes to ensure consistent product quality and reduce defects.",
      icon: ClipboardCheck,
    },
    {
      title: "Inventory Management",
      description: "Comprehensive inventory management for raw materials, work-in-progress, and finished goods.",
      icon: BoxesIcon,
    },
    {
      title: "Cost Calculation",
      description: "Accurate cost calculation for each product based on materials, labor, and overhead costs.",
      icon: FileText,
    },
    {
      title: "Reports & Analytics",
      description: "Detailed reports and analytics to help you make data-driven decisions and optimize operations.",
      icon: Layers,
    },
  ]

  const challenges = [
    {
      title: "Material Wastage",
      description: "Reduce fabric wastage with optimized cutting plans and efficient material utilization.",
      icon: Scissors,
    },
    {
      title: "Production Delays",
      description: "Eliminate bottlenecks and delays with real-time production tracking and proactive alerts.",
      icon: Clock,
    },
    {
      title: "Quality Issues",
      description: "Improve product quality with integrated quality control processes and defect tracking.",
      icon: AlertTriangle,
    },
    {
      title: "Inventory Management",
      description: "Optimize inventory levels and prevent stockouts with accurate inventory tracking.",
      icon: Package,
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
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">StitchIT</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Cut To Pack
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                {" "}
                Software Solution
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Streamline your garment manufacturing process with our comprehensive software solution designed for
              cutting, packing, an inventory management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/StitchIT.pdf" // Updated path
                  link.download = "StitchIT-Brochure.pdf" // name the file
                  document.body.appendChild(link)
                  link.click()
                  document.body.removeChild(link)
                }}
              >
                <FaDownload className="mr-2" />
                Download Broucher
              </Button>
            </div>
          </div>
          <div className="relative">
            <iframe
              width="746"
              height="420"
              src="https://www.youtube.com/embed/BbGNoItTbuI"
              title="StitchIT - Complete Cut to Pack Software Solution for Garment Unit."
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;          web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-xl shadow-xl w-full "
            ></iframe>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Users, label: "Active Clients", value: "200+" },
            { icon: Zap, label: "Efficiency Increase", value: "35%" },
            { icon: Shield, label: "Material Savings", value: "25%" },
            { icon: Target, label: "ROI Timeline", value: "6 months" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <stat.icon className="h-8 w-8 mx-auto text-orange-600" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Challenges We Solve</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Challenges in Garment Manufacturing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            StitchIT addresses the key challenges faced by garment manufacturers, helping you optimize operations and
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
              <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                {typeof challenge.icon === "string" ? (
                  <Image
                    src={challenge.icon || "/placeholder.svg"}
                    alt={challenge.title}
                    width={40}
                    height={40}
                    className="h-8 w-8"
                  />
                ) : (
                  <challenge.icon className="h-8 w-8 text-orange-600" />
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Features */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-200 text-orange-700 hover:bg-orange-300">Comprehensive Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need in One Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              StitchIT offers a complete suite of features designed specifically for garment manufacturing businesses.
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
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  {typeof feature.icon === "string" ? (
                    <Image
                      src={feature.icon || "/placeholder.svg"}
                      alt={feature.title}
                      width={40}
                      height={40}
                      className="h-8 w-8"
                    />
                  ) : (
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  )}
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
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Streamlined Workflow</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            StitchIT integrates seamlessly with your existing processes, providing end-to-end visibility and control.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200 hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                title: "Order Management",
                description:
                  "Efficiently manage customer orders, from initial inquiry to final delivery, with comprehensive order tracking.",
                image: "https://www.hotwaxsystems.com/hubfs/Imported_Blog_Media/AdobeStock_463292493-scaled-3.jpeg",
              },
              {
                title: "Production Planning",
                description:
                  "Create optimized production plans based on order requirements, resource availability, and delivery schedules.",
                image:
                  "https://www.projectmanager.com/wp-content/uploads/2023/11/Production-Order-for-Manufacturing.jpg",
              },
              {
                title: "Cutting Management",
                description:
                  "Generate efficient cutting plans that minimize fabric wastage while meeting production requirements.",
                image: "https://deltatextilesolutions.com/wp-content/uploads/2019/04/cortando-tecido-enfestado-1.jpg",
              },
              {
                title: "Production Tracking",
                description:
                  "Track production progress in real-time across all stages, identifying bottlenecks and optimizing workflow.",
                image:
                  "https://cdn.prod.website-files.com/644fcf9703178f069710e97f/66e35c31b748ad0d7aa10e5d_Production%20tracking%20software%20guide.png",
              },
              {
                title: "Quality Control",
                description:
                  "Implement comprehensive quality control processes to ensure consistent product quality and customer satisfaction.",
                image: "https://vietnamcleanroom.com/vcr-media/23/3/27/7-nguyen-tac-quan-ly-chat-luong-6.jpg",
              },
              {
                title: "Packing & Shipping",
                description:
                  "Streamline packing and shipping processes with automated documentation and tracking capabilities.",
                image: "https://cashflowinventory.com/blog/wp-content/uploads/2023/03/pick-and-pack-process.webp",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  {/* Step Number */}
                  <div className="md:w-1/2 flex md:justify-center relative mb-8 md:mb-0">
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="bg-orange-500 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
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
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with StitchIT.
          </p>
        </div>

        <Tabs defaultValue="testimonial1" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="testimonial1">Fashion Forward</TabsTrigger>
            <TabsTrigger value="testimonial2">Style Hub</TabsTrigger>
            <TabsTrigger value="testimonial3">Textile Masters</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="testimonial1">
              <div className="bg-slate-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Image
                      src="https://etimg.etb2bimg.com/photo/112029077.cms"
                      alt="Fashion Forward Inc."
                      width={350}
                      height={350}
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
                      "StitchIT has completely transformed our manufacturing process. We've seen remarkable improvements
                      in efficiency and our customers are happier with faster delivery times. The ROI was evident within
                      the first quarter."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Rajesh Sharma</p>
                      <p className="text-slate-500">Operations Director, Fashion Forward Inc.</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">35%</div>
                        <div className="text-xs text-slate-500">Efficiency Increase</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">45%</div>
                        <div className="text-xs text-slate-500">Lead Time Reduction</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">25%</div>
                        <div className="text-xs text-slate-500">Material Waste Reduction</div>
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
                      src="https://thygesenapparel.com/wp-content/uploads/2025/06/scaling-your-clothing-brand-successfully-depends-on-both-your-brand-and-your-manufacturing-partner.png"
                      alt="Style Hub"
                      width={350}
                      height={350}
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
                      "As a growing fashion brand, we needed a solution that could scale with us. StitchIT provided the
                      perfect balance of functionality and ease of use. Our production efficiency has increased
                      dramatically."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Priya Mehta</p>
                      <p className="text-slate-500">CEO, Style Hub</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">40%</div>
                        <div className="text-xs text-slate-500">Production Capacity</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">30%</div>
                        <div className="text-xs text-slate-500">Cost Reduction</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">50%</div>
                        <div className="text-xs text-slate-500">Faster Delivery</div>
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
                      src="https://audaces.com/wp-content/uploads/2024/08/fabric-cutting-systems-feature.webp"
                      alt="Textile Masters"
                      width={350}
                      height={350}
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
                      "The cutting optimization feature alone saved us enough material to justify the investment. The
                      entire system has streamlined our operations and given us unprecedented visibility into our
                      production process."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Amit Patel</p>
                      <p className="text-slate-500">Production Manager, Textile Masters Ltd.</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">28%</div>
                        <div className="text-xs text-slate-500">Material Savings</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">60%</div>
                        <div className="text-xs text-slate-500">Planning Time</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">20%</div>
                        <div className="text-xs text-slate-500">Quality Improvement</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </section>

      {/* Pricing 
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include implementation support and training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "₹49,999",
              description: "Perfect for small businesses just getting started",
              features: [
                "Up to 5 users",
                "Basic cutting plan optimization",
                "Production tracking",
                "Basic inventory management",
                "Email support",
                "Regular updates",
              ],
              cta: "Get Started",
              popular: false,
            },
            {
              name: "Professional",
              price: "₹99,999",
              description: "Ideal for growing businesses with complex needs",
              features: [
                "Up to 20 users",
                "Advanced cutting plan optimization",
                "Real-time production tracking",
                "Comprehensive inventory management",
                "Quality control module",
                "Priority support",
                "Regular updates",
              ],
              cta: "Most Popular",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "Tailored solutions for large-scale operations",
              features: [
                "Unlimited users",
                "Enterprise-grade cutting optimization",
                "Advanced analytics and reporting",
                "Multi-location support",
                "API access for custom integrations",
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
                  <Badge className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-1">Most Popular</Badge>
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
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
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
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Manufacturing Process?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have streamlined their operations with StitchIT. Schedule a demo today to
            see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" passHref>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
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
