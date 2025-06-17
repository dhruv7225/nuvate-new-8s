"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Quote,
  Building2,
  MapPin,
} from "lucide-react"

interface CaseStudy {
  id: string
  company: string
  industry: string
  location: string
  employees: string
  solution: string
  challenge: string
  implementation: string
  results: {
    metric: string
    improvement: string
    icon: any
    color: string
  }[]
  testimonial: {
    quote: string
    author: string
    position: string
    avatar: string
  }
  keyFeatures: string[]
  timeline: string
  roi: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "fashion-forward",
    company: "Fashion Forward Inc.",
    industry: "Apparel Manufacturing",
    location: "Mumbai, India",
    employees: "500+",
    solution: "StitchIT",
    challenge:
      "Fashion Forward Inc. was struggling with production delays, inventory mismanagement, and quality control issues across their 5 manufacturing units. Manual processes led to 30% production delays and 15% material waste.",
    implementation:
      "Implemented StitchIT across all manufacturing units with integrated inventory management, real-time production tracking, and automated quality control checkpoints. The rollout was completed in 6 weeks with comprehensive staff training.",
    results: [
      {
        metric: "Production Efficiency",
        improvement: "+35%",
        icon: TrendingUp,
        color: "text-green-600",
      },
      {
        metric: "Lead Time Reduction",
        improvement: "-45%",
        icon: Clock,
        color: "text-blue-600",
      },
      {
        metric: "Material Waste",
        improvement: "-25%",
        icon: DollarSign,
        color: "text-orange-600",
      },
      {
        metric: "Quality Score",
        improvement: "+20%",
        icon: BarChart3,
        color: "text-purple-600",
      },
    ],
    testimonial: {
      quote:
        "StitchIT has completely transformed our manufacturing process. We've seen remarkable improvements in efficiency and our customers are happier with faster delivery times. The ROI was evident within the first quarter.",
      author: "Rajesh Sharma",
      position: "Operations Director",
      avatar: "/placeholder.svg?height=60&width=60&text=RS",
    },
    keyFeatures: [
      "Real-time production tracking across 5 units",
      "Automated inventory management with reorder alerts",
      "Quality control checkpoints with defect tracking",
      "Integrated financial management and invoicing",
    ],
    timeline: "6 weeks",
    roi: "280%",
  },
  {
    id: "clean-pro",
    company: "CleanPro Industries",
    industry: "Commercial Laundry",
    location: "Delhi, India",
    employees: "200+",
    solution: "WashIT",
    challenge:
      "CleanPro was facing challenges with customer management, route optimization, and billing accuracy. Manual processes resulted in 20% billing errors and poor customer satisfaction due to delayed deliveries.",
    implementation:
      "Deployed WashIT with customer management system, automated billing, route optimization, and real-time tracking. Integration with existing POS systems and mobile apps for drivers and customers.",
    results: [
      {
        metric: "Billing Accuracy",
        improvement: "+98%",
        icon: CheckCircle,
        color: "text-green-600",
      },
      {
        metric: "Route Efficiency",
        improvement: "+40%",
        icon: TrendingUp,
        color: "text-blue-600",
      },
      {
        metric: "Customer Satisfaction",
        improvement: "+60%",
        icon: Users,
        color: "text-purple-600",
      },
      {
        metric: "Operational Costs",
        improvement: "-30%",
        icon: DollarSign,
        color: "text-orange-600",
      },
    ],
    testimonial: {
      quote:
        "WashIT has revolutionized our laundry operations. The automated billing and route optimization have significantly improved our efficiency and customer satisfaction. Our revenue has increased by 40% since implementation.",
      author: "Priya Patel",
      position: "General Manager",
      avatar: "/placeholder.svg?height=60&width=60&text=PP",
    },
    keyFeatures: [
      "Customer portal with real-time order tracking",
      "Automated billing with GST compliance",
      "Route optimization for pickup and delivery",
      "Inventory management for chemicals and supplies",
    ],
    timeline: "4 weeks",
    roi: "320%",
  },
  {
    id: "style-hub",
    company: "Style Hub",
    industry: "E-commerce Fashion",
    location: "Bangalore, India",
    employees: "150+",
    solution: "DigitAil",
    challenge:
      "Style Hub was managing multiple e-commerce channels manually, leading to inventory discrepancies, order fulfillment delays, and poor customer experience. They were losing 25% of potential sales due to stock-outs.",
    implementation:
      "Implemented DigitAil with multi-channel integration, automated inventory sync, order management, and customer analytics. Connected with Amazon, Flipkart, Myntra, and their own website.",
    results: [
      {
        metric: "Sales Growth",
        improvement: "+65%",
        icon: TrendingUp,
        color: "text-green-600",
      },
      {
        metric: "Order Fulfillment",
        improvement: "+50%",
        icon: Clock,
        color: "text-blue-600",
      },
      {
        metric: "Inventory Accuracy",
        improvement: "+95%",
        icon: BarChart3,
        color: "text-purple-600",
      },
      {
        metric: "Customer Retention",
        improvement: "+45%",
        icon: Users,
        color: "text-orange-600",
      },
    ],
    testimonial: {
      quote:
        "DigitAil has been a game-changer for our e-commerce business. The multi-channel integration and automated inventory management have helped us scale rapidly while maintaining excellent customer service.",
      author: "Amit Kumar",
      position: "Founder & CEO",
      avatar: "/placeholder.svg?height=60&width=60&text=AK",
    },
    keyFeatures: [
      "Multi-channel inventory synchronization",
      "Automated order processing and fulfillment",
      "Customer analytics and behavior tracking",
      "Integrated payment gateway and accounting",
    ],
    timeline: "5 weeks",
    roi: "450%",
  },
  {
    id: "textile-masters",
    company: "Textile Masters Ltd.",
    industry: "Textile Manufacturing",
    location: "Chennai, India",
    employees: "800+",
    solution: "HR TECH",
    challenge:
      "Managing payroll for 800+ employees with different pay structures (monthly, hourly, piece-rate) was complex and error-prone. Manual calculations led to 15% payroll errors and compliance issues.",
    implementation:
      "Deployed HR TECH with automated salary calculations, compliance management, and employee self-service portal. Integrated with biometric attendance systems and government compliance requirements.",
    results: [
      {
        metric: "Payroll Accuracy",
        improvement: "+99%",
        icon: CheckCircle,
        color: "text-green-600",
      },
      {
        metric: "Processing Time",
        improvement: "-80%",
        icon: Clock,
        color: "text-blue-600",
      },
      {
        metric: "Compliance Score",
        improvement: "+100%",
        icon: BarChart3,
        color: "text-purple-600",
      },
      {
        metric: "HR Efficiency",
        improvement: "+70%",
        icon: Users,
        color: "text-orange-600",
      },
    ],
    testimonial: {
      quote:
        "HR TECH has simplified our complex payroll processes tremendously. The automated compliance features ensure we never miss any regulatory requirements, and our employees love the self-service portal.",
      author: "Lakshmi Narayanan",
      position: "HR Director",
      avatar: "/placeholder.svg?height=60&width=60&text=LN",
    },
    keyFeatures: [
      "Multi-structure payroll automation",
      "Government compliance management",
      "Employee self-service portal",
      "Biometric integration and attendance tracking",
    ],
    timeline: "3 weeks",
    roi: "380%",
  },
]

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0])

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Real Results from Real Customers</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how leading businesses across different industries have transformed their operations with our
            innovative solutions.
          </p>
        </div>

        <Tabs defaultValue="fashion-forward" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-2">
              {caseStudies.map((study) => (
                <TabsTrigger
                  key={study.id}
                  value={study.id}
                  className="flex flex-col items-center p-4 data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
                  onClick={() => setSelectedCase(study)}
                >
                  <div className="font-medium text-sm">{study.company}</div>
                  <div className="text-xs text-slate-500">{study.solution}</div>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {caseStudies.map((study) => (
            <TabsContent key={study.id} value={study.id} className="mt-0">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Company Overview */}
                <Card className="lg:col-span-1">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building2 className="h-8 w-8 text-orange-600" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{study.company}</h3>
                        <p className="text-slate-600">{study.industry}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-slate-500" />
                        <span className="text-sm text-slate-600">{study.employees} employees</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary">{study.solution}</Badge>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-slate-900 mb-2">Implementation Timeline</h4>
                      <p className="text-2xl font-bold text-orange-600">{study.timeline}</p>
                    </div>

                    <div className="pt-4 border-t">
                      <h4 className="font-semibold text-slate-900 mb-2">ROI Achieved</h4>
                      <p className="text-2xl font-bold text-green-600">{study.roi}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Case Study Details */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">The Challenge</h4>
                        <p className="text-slate-600 leading-relaxed">{study.challenge}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-slate-900 mb-3">Our Solution</h4>
                        <p className="text-slate-600 leading-relaxed">{study.implementation}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Results */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">Measurable Results</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                            <result.icon className={`h-8 w-8 mx-auto mb-2 ${result.color}`} />
                            <div className={`text-2xl font-bold mb-1 ${result.color}`}>{result.improvement}</div>
                            <div className="text-sm text-slate-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Features */}
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-slate-900 mb-4">Key Features Implemented</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {study.keyFeatures.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Testimonial */}
                  <Card className="bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Quote className="h-8 w-8 text-orange-600 flex-shrink-0" />
                        <div>
                          <blockquote className="text-lg text-slate-700 italic mb-4">
                            "{study.testimonial.quote}"
                          </blockquote>
                          <div className="flex items-center space-x-3">
                            <Image
                              src={study.testimonial.avatar || "/placeholder.svg"}
                              alt={study.testimonial.author}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div>
                              <div className="font-semibold text-slate-900">{study.testimonial.author}</div>
                              <div className="text-sm text-slate-600">{study.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Schedule Your Success Story
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
