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
  Calculator,
  UserCheck,
  Clock,
  FileCheck,
  BarChart,
  AlertTriangle,
  Database,
  ClipboardList,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from "next/link"

import { FaDownload } from "react-icons/fa"


export default function HRTechPage() {
  const features = [
    {
      title: "Payroll Automation",
      description: "Automate salary calculations, tax deductions, and compliance with labor laws and regulations.",
      icon: "Calculator",
    },
    {
      title: "Employee Self-Service",
      description: "Empower employees with self-service portal for leave applications, payslip access, and more.",
      icon: "UserCheck",
    },
    {
      title: "Attendance Management",
      description: "Track employee attendance with biometric integration, shift management, and overtime calculations.",
      icon: "Clock",
    },
    {
      title: "Compliance Management",
      description:
        "Stay compliant with labor laws, tax regulations, and statutory requirements with automated updates.",
      icon: "FileCheck",
    },
    {
      title: "Performance Management",
      description: "Set goals, track performance, and conduct reviews to foster employee growth and development.",
      icon: "Award",
    },
    {
      title: "Reports & Analytics",
      description: "Generate comprehensive reports on payroll, attendance, performance, and other HR metrics.",
      icon: "BarChart",
    },
  ]

  const challenges = [
    {
      title: "Payroll Complexity",
      description: "Simplify complex payroll calculations with automated salary processing and tax deductions.",
      icon: "Calculator",
    },
    {
      title: "Compliance Risk",
      description: "Mitigate compliance risks with automated updates to labor laws and regulatory requirements.",
      icon: "AlertTriangle",
    },
    {
      title: "Manual Processes",
      description: "Eliminate time-consuming manual processes with automated workflows and self-service options.",
      icon: "ClipboardList",
    },
    {
      title: "Data Accuracy",
      description: "Ensure data accuracy and integrity with centralized employee database and validation checks.",
      icon: "Database",
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
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">HR TECH</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Calculate Salary at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500">
                {" "}
                Your Finger Tip
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Simplify your HR operations with our intuitive payroll and employee management system designed for modern
              businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href='/contact'>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
              <Button size="lg" variant="outline" onClick={() => {
                const link = document.createElement("a");
                link.href = "/brochure.pdf"; // path in public folder
                link.download = "HrTech-Brochure.pdf"; // name the file
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
              src="https://www.youtube.com/embed/oqjx7XCTYNU"
              title="HR Tech Brochure Video"
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
            { icon: Users, label: "Active Clients", value: "250+" },
            { icon: Zap, label: "Payroll Accuracy", value: "99%" },
            { icon: Shield, label: "Compliance Score", value: "100%" },
            { icon: Target, label: "ROI Timeline", value: "5 months" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <stat.icon className="h-8 w-8 mx-auto text-green-600" />
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">Challenges We Solve</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Common Challenges in HR & Payroll</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            HR TECH addresses the key challenges faced by HR departments, helping you optimize operations and ensure
            compliance.
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
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                {(() => {
                  switch (challenge.icon) {
                    case "Calculator":
                      return <Calculator className="h-8 w-8 text-green-600" />
                    case "AlertTriangle":
                      return <AlertTriangle className="h-8 w-8 text-green-600" />
                    case "ClipboardList":
                      return <ClipboardList className="h-8 w-8 text-green-600" />
                    case "Database":
                      return <Database className="h-8 w-8 text-green-600" />
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
      <section className="w-full py-16 md:py-24 bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-200 text-green-700 hover:bg-green-300">Comprehensive Features</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need in One Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              HR TECH offers a complete suite of features designed specifically for HR and payroll management.
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
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  {(() => {
                    switch (feature.icon) {
                      case "Calculator":
                        return <Calculator className="h-8 w-8 text-green-600" />
                      case "UserCheck":
                        return <UserCheck className="h-8 w-8 text-green-600" />
                      case "Clock":
                        return <Clock className="h-8 w-8 text-green-600" />
                      case "FileCheck":
                        return <FileCheck className="h-8 w-8 text-green-600" />
                      case "Award":
                        return <Award className="h-8 w-8 text-green-600" />
                      case "BarChart":
                        return <BarChart className="h-8 w-8 text-green-600" />
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
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">How It Works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Streamlined Workflow</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            HR TECH integrates seamlessly with your existing processes, providing end-to-end visibility and control.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

          <div className="space-y-12">
            {[
              {
                title: "Employee Onboarding",
                description:
                  "Streamline the onboarding process with digital documentation, automated workflows, and self-service options.",
                image: "/placeholder.svg?height=300&width=500&text=Employee+Onboarding",
              },
              {
                title: "Attendance Tracking",
                description:
                  "Track employee attendance with biometric integration, shift management, and leave management.",
                image: "/placeholder.svg?height=300&width=500&text=Attendance+Tracking",
              },
              {
                title: "Payroll Processing",
                description:
                  "Automate salary calculations, tax deductions, and compliance with labor laws and regulations.",
                image: "/placeholder.svg?height=300&width=500&text=Payroll+Processing",
              },
              {
                title: "Compliance Management",
                description:
                  "Stay compliant with labor laws, tax regulations, and statutory requirements with automated updates.",
                image: "/placeholder.svg?height=300&width=500&text=Compliance+Management",
              },
              {
                title: "Performance Management",
                description:
                  "Set goals, track performance, and conduct reviews to foster employee growth and development.",
                image: "/placeholder.svg?height=300&width=500&text=Performance+Management",
              },
              {
                title: "Reporting & Analytics",
                description:
                  "Generate comprehensive reports on payroll, attendance, performance, and other HR metrics.",
                image: "/placeholder.svg?height=300&width=500&text=Reporting+Analytics",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div
                  className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
                >
                  {/* Step Number */}
                  <div className="md:w-1/2 flex md:justify-center relative mb-8 md:mb-0">
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                      <div className="bg-green-500 text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center shadow-lg">
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
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">Testimonials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hear from businesses that have transformed their HR operations with HR TECH.
          </p>
        </div>

        <Tabs defaultValue="testimonial1" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="testimonial1">Textile Masters</TabsTrigger>
            <TabsTrigger value="testimonial2">TechSolutions</TabsTrigger>
            <TabsTrigger value="testimonial3">GlobalRetail</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="testimonial1">
              <div className="bg-slate-50 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <Image
                      src="/placeholder.svg?height=300&width=300&text=Company+Logo"
                      alt="Textile Masters Ltd."
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
                      "HR TECH has simplified our complex payroll processes tremendously. The automated compliance
                      features ensure we never miss any regulatory requirements, and our employees love the self-service
                      portal."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Lakshmi Narayanan</p>
                      <p className="text-slate-500">HR Director, Textile Masters Ltd.</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">99%</div>
                        <div className="text-xs text-slate-500">Payroll Accuracy</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">80%</div>
                        <div className="text-xs text-slate-500">Processing Time</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">100%</div>
                        <div className="text-xs text-slate-500">Compliance Score</div>
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
                      alt="TechSolutions"
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
                      "The performance management features have transformed how we evaluate and develop our employees.
                      The goal-setting, continuous feedback, and review processes have helped us create a culture of
                      growth and accountability."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Rahul Sharma</p>
                      <p className="text-slate-500">CEO, TechSolutions</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">40%</div>
                        <div className="text-xs text-slate-500">Employee Engagement</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">25%</div>
                        <div className="text-xs text-slate-500">Productivity Increase</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">30%</div>
                        <div className="text-xs text-slate-500">Retention Improvement</div>
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
                      alt="GlobalRetail"
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
                      "With multiple locations and a diverse workforce, managing HR operations was a challenge. HR TECH
                      has provided us with a centralized platform that has simplified our processes and improved
                      efficiency across all our locations."
                    </blockquote>
                    <div>
                      <p className="font-semibold text-slate-900">Priya Mehta</p>
                      <p className="text-slate-500">HR Manager, GlobalRetail</p>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">60%</div>
                        <div className="text-xs text-slate-500">Time Savings</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">45%</div>
                        <div className="text-xs text-slate-500">Cost Reduction</div>
                      </div>
                      <div className="bg-white p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">90%</div>
                        <div className="text-xs text-slate-500">Process Standardization</div>
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
          <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-200">Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that best fits your business needs. All plans include implementation support and training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "₹19,999",
              description: "Perfect for small businesses with basic HR needs",
              features: [
                "Up to 25 employees",
                "Basic payroll processing",
                "Attendance management",
                "Employee self-service",
                "Email support",
                "Regular updates",
              ],
              cta: "Get Started",
              popular: false,
            },
            {
              name: "Professional",
              price: "₹49,999",
              description: "Ideal for growing businesses with complex HR requirements",
              features: [
                "Up to 100 employees",
                "Advanced payroll processing",
                "Comprehensive attendance management",
                "Performance management",
                "Compliance management",
                "Priority support",
                "Regular updates",
              ],
              cta: "Most Popular",
              popular: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "Tailored solutions for large organizations with multiple locations",
              features: [
                "Unlimited employees",
                "Enterprise-grade payroll processing",
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
                  <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1">Most Popular</Badge>
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
                      ? "bg-green-600 hover:bg-green-700 text-white"
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
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your HR Operations?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have streamlined their HR processes with HR TECH. Schedule a demo today to
            see how we can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href='/contact'>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
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
