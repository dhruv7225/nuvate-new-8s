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
  Route,
  Receipt,
  UserSearch,
  Boxes,
  BarChart,
  Calculator,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"

import Link from "next/link"

import { FaDownload } from "react-icons/fa"


export default function WashITPage() {
  const features = [
    {
      title: "Customer Management",
      description: "Comprehensive customer database with detailed profiles, service history, and preferences.",
      icon: "users",
    },
    {
      title: "Route Optimization",
      description: "Intelligent route planning to minimize travel time and maximize delivery efficiency.",
      icon: "route",
    },
    {
      title: "Automated Billing",
      description: "Streamlined billing process with customizable pricing models and automated invoicing.",
      icon: "calculator",
    },
    {
      title: "Inventory Control",
      description: "Real-time tracking of inventory levels, usage patterns, and reorder notifications.",
      icon: "boxes",
    },
    {
      title: "Mobile App",
      description: "Dedicated mobile applications for drivers, customers, and administrators for on-the-go management.",
      icon: "smartphone",
    },
    {
      title: "Reports & Analytics",
      description: "Comprehensive reporting and analytics to track performance and identify growth opportunities.",
      icon: "barChart",
    },
  ]

  const challenges = [
    {
      title: "Inefficient Routes",
      description: "Optimize delivery routes to reduce fuel costs and increase the number of deliveries per day.",
      icon: "route",
    },
    {
      title: "Billing Errors",
      description: "Eliminate manual billing errors with automated pricing calculations and invoice generation.",
      icon: "receipt",
    },
    {
      title: "Customer Tracking",
      description: "Keep track of customer preferences, service history, and special requirements with ease.",
      icon: "userSearch",
    },
    {
      title: "Inventory Management",
      description: "Maintain optimal inventory levels of cleaning supplies, packaging materials, and other essentials.",
      icon: "boxes",
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
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">WashIT</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Complete IT Solution For
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                {" "}
                Industrial Laundry
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your laundry operations with our end-to-end management system covering customer management,
              billing, and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link href='/contact'>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
              <Button size="lg" variant="outline" onClick={() => {
                const link = document.createElement("a");
                link.href = "/brochure.pdf"; // path in public folder
                link.download = "WashIt-Brochure.pdf"; // name the file
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
              src="https://www.youtube.com/embed/SxB6dovVe9U"
              title="INDUSTRIAL LAUNDRY ERP SYSTEM - WASHIT"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;web-share"
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
            { icon: Users, label: "Active Clients", value: "150+" },
            { icon: Zap, label: "Route Efficiency", value: "40%" },
            { icon: Shield, label: "Billing Accuracy", value: "98%" },
            { icon: Target, label: "ROI Timeline", value: "4 months" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <stat.icon className="h-8 w-8 mx-auto text-blue-600" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Challenges We Solve</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Common Challenges in Laundry Operations
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            WashIT addresses the key challenges faced by industrial laundry businesses, helping you optimize operations
            and increase profitability.
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
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                {challenge.icon === "route" && <Route className="h-8 w-8 text-blue-600" />}
                {challenge.icon === "receipt" && <Receipt className="h-8 w-8 text-blue-600" />}
                {challenge.icon === "userSearch" && <UserSearch className="h-8 w-8 text-blue-600" />}
                {challenge.icon === "boxes" && <Boxes className="h-8 w-8 text-blue-600" />}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{challenge.title}</h3>
              <p className="text-slate-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Features */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-200 text-blue-700 hover:bg-blue-300">Comprehensive Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need in One Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              WashIT offers a complete suite of features designed specifically for industrial laundry businesses.
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
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                  {feature.icon === "users" && <Users className="h-8 w-8 text-blue-600" />}
                  {feature.icon === "route" && <Route className="h-8 w-8 text-blue-600" />}
                  {feature.icon === "calculator" && <Calculator className="h-8 w-8 text-blue-600" />}
                  {feature.icon === "boxes" && <Boxes className="h-8 w-8 text-blue-600" />}
                  {feature.icon === "smartphone" && <Smartphone className="h-8 w-8 text-blue-600" />}
                  {feature.icon === "barChart" && <BarChart className="h-8 w-8 text-blue-600" />}
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
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Streamlined Workflow</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            WashIT integrates seamlessly with your existing processes, providing end-to-end visibility and control.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                title: "Customer Registration",
                description:
                  "Easily register new customers with detailed profiles, service preferences, and pricing agreements.",
                image: "/placeholder.svg?height=300&width=500&text=Customer+Registration",
              },
              {
                title: "Order Processing",
                description: "Efficiently process customer orders with automated scheduling and route planning.",
                image: "/placeholder.svg?height=300&width=500&text=Order+Processing",
              },
              {
                title: "Pickup & Delivery",
                description: "Optimize pickup and delivery routes with real-time tracking and customer notifications.",
                image: "/placeholder.svg?height=300&width=500&text=Pickup+Delivery",
              },
              {
                title: "Processing & Quality Control",
                description:
                  "Track laundry processing with detailed workflow management and quality control checkpoints.",
                image: "/placeholder.svg?height=300&width=500&text=Processing",
              },
              {
                title: "Billing & Invoicing",
                description:
                  "Generate accurate invoices automatically based on service provided and pricing agreements.",
                image: "/placeholder.svg?height=300&width=500&text=Billing",
              },
              {
                title: "Reporting & Analytics",
                description:
                  "Gain valuable insights into your business performance with comprehensive reporting and analytics.",
                image: "/placeholder.svg?height=300&width=500&text=Reporting",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  {/* Step Number */}
                  <div className="md:w-1/2 flex md:justify-center relative mb-8 md:mb-0">
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="bg-blue-500 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <div className="aspect-video relative">
                        <Image
                          src={step.image && step.image !== "" ? step.image : "/placeholder.svg?text=" + step.title}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
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
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their operations with WashIT.
          </p>
        </div>

        <Tabs defaultValue="testimonial1" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="testimonial1">CleanPro</TabsTrigger>
            <TabsTrigger value="testimonial2">LaundryKing</TabsTrigger>
            <TabsTrigger value="testimonial3">FreshLinens</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="testimonial1">
              <div className="bg-slate-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Company+Logo"
                      alt="CleanPro Industries"
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
                      "WashIT has revolutionized our laundry operations. The automated billing and route optimization
                      have significantly improved our efficiency and customer satisfaction. Our revenue has increased by
                      40% since implementation."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Priya Patel</p>
                      <p className="text-slate-500">General Manager, CleanPro Industries</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">40%</div>
                        <div className="text-xs text-slate-500">Route Efficiency</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-slate-500">Billing Accuracy</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">30%</div>
                        <div className="text-xs text-slate-500">Cost Reduction</div>
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
                      alt="LaundryKing"
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
                      "The customer management and mobile app features have transformed how we interact with our
                      clients. Our customers love the real-time tracking and notifications, and we've seen a significant
                      increase in repeat business."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Rahul Verma</p>
                      <p className="text-slate-500">CEO, LaundryKing</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">35%</div>
                        <div className="text-xs text-slate-500">Customer Retention</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">45%</div>
                        <div className="text-xs text-slate-500">Customer Satisfaction</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">25%</div>
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
                      alt="FreshLinens"
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
                      "The reporting and analytics features have given us unprecedented visibility into our business
                      performance. We've been able to identify inefficiencies and make data-driven decisions that have
                      significantly improved our bottom line."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Ananya Desai</p>
                      <p className="text-slate-500">Operations Manager, FreshLinens</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">20%</div>
                        <div className="text-xs text-slate-500">Profit Margin</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">30%</div>
                        <div className="text-xs text-slate-500">Operational Efficiency</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">15%</div>
                        <div className="text-xs text-slate-500">Resource Utilization</div>
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
          <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include implementation support and training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "₹39,999",
              description: "Perfect for small laundry businesses just getting started",
              features: [
                "Up to 5 users",
                "Basic customer management",
                "Simple route planning",
                "Basic inventory tracking",
                "Email support",
                "Regular updates",
              ],
              cta: "Get Started",
              popular: false,
            },
            {
              name: "Professional",
              price: "₹79,999",
              description: "Ideal for growing laundry businesses with complex needs",
              features: [
                "Up to 20 users",
                "Advanced customer management",
                "Intelligent route optimization",
                "Comprehensive inventory control",
                "Mobile app for drivers",
                "Priority support",
                "Regular updates",
              ],
              cta: "Most Popular",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "Tailored solutions for large-scale laundry operations",
              features: [
                "Unlimited users",
                "Enterprise-grade customer management",
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
                  <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1">Most Popular</Badge>
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
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Laundry Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have streamlined their operations with WashIT. Schedule a demo today to see
            how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact'>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
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
