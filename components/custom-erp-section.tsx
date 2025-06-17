"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Settings,
  Puzzle,
  Zap,
  Shield,
  Database,
  Cloud,
  ArrowRight,
  CheckCircle,
  Building2,
  Factory,
  ShoppingBag,
  Truck,
  GraduationCap,
  Heart,
} from "lucide-react"

interface Industry {
  id: string
  name: string
  icon: any
  description: string
  modules: string[]
  color: string
}

const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Complete ERP solution for manufacturing operations",
    modules: ["Production Planning", "Inventory Management", "Quality Control", "Supply Chain", "Financial Management"],
    color: "text-blue-600",
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingBag,
    description: "Comprehensive retail management system",
    modules: ["POS System", "Inventory Tracking", "Customer Management", "Multi-channel Sales", "Analytics"],
    color: "text-purple-600",
  },
  {
    id: "logistics",
    name: "Logistics & Transportation",
    icon: Truck,
    description: "End-to-end logistics management solution",
    modules: ["Fleet Management", "Route Optimization", "Warehouse Management", "Tracking System", "Billing"],
    color: "text-green-600",
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Complete education management system",
    modules: ["Student Management", "Academic Planning", "Fee Management", "Library System", "Examination"],
    color: "text-indigo-600",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Heart,
    description: "Integrated healthcare management solution",
    modules: ["Patient Management", "Appointment System", "Billing", "Inventory", "Reporting"],
    color: "text-red-600",
  },
  {
    id: "services",
    name: "Service Industry",
    icon: Building2,
    description: "Tailored solutions for service businesses",
    modules: ["Project Management", "Resource Planning", "Client Management", "Billing", "Time Tracking"],
    color: "text-orange-600",
  },
]

const features = [
  {
    icon: Puzzle,
    title: "Modular Architecture",
    description: "Pick and choose modules that fit your business needs. Add more as you grow.",
  },
  {
    icon: Settings,
    title: "Fully Customizable",
    description: "Tailor every aspect of the system to match your unique business processes.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "Get up and running quickly with our proven implementation methodology.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with role-based access control and data encryption.",
  },
  {
    icon: Cloud,
    title: "Cloud & On-Premise",
    description: "Choose between cloud hosting or on-premise deployment based on your needs.",
  },
  {
    icon: Database,
    title: "Seamless Integration",
    description: "Connect with your existing systems through our robust API framework.",
  },
]

export default function CustomERPSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0])
  const [isConsultationOpen, setIsConsultationOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Custom Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Customizable ERP Solutions for Every Industry
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            When off-the-shelf solutions don't fit, we build custom ERP systems tailored to your specific business
            requirements and industry needs.
          </p>
        </div>

        {/* Industry Selection */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Choose Your Industry</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedIndustry.id === industry.id ? "ring-2 ring-orange-200 shadow-lg" : ""
                }`}
                onClick={() => setSelectedIndustry(industry)}
              >
                <CardContent className="p-4 text-center">
                  <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center mx-auto mb-3">
                    <industry.icon className={`h-6 w-6 ${industry.color}`} />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">{industry.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected Industry Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-2xl bg-orange-100 flex items-center justify-center">
                <selectedIndustry.icon className={`h-8 w-8 ${selectedIndustry.color}`} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">{selectedIndustry.name}</h3>
                <p className="text-lg text-slate-600">Custom ERP Solution</p>
              </div>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">{selectedIndustry.description}</p>

            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Key Modules Available:</h4>
              <div className="grid grid-cols-1 gap-3">
                {selectedIndustry.modules.map((module, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Custom+ERP+Dashboard"
                alt="Custom ERP Dashboard"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Customizable</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Why Choose Our Custom ERP?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">{feature.title}</h4>
                  <p className="text-slate-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Our Development Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your business processes and requirements in detail.",
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Create detailed system architecture and user interface designs.",
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build your custom ERP with rigorous testing at every stage.",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description: "Deploy the system and provide ongoing support and maintenance.",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-orange-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{phase.title}</h4>
                <p className="text-slate-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Proven Results Across Industries</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: "50+", label: "Custom ERP Projects" },
              { metric: "95%", label: "Client Satisfaction" },
              { metric: "6 weeks", label: "Average Implementation" },
              { metric: "300%", label: "Average ROI" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.metric}</div>
                <div className="text-orange-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Dialog */}
        <Dialog open={isConsultationOpen} onOpenChange={setIsConsultationOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Free ERP Consultation</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="Your Company" />
                </div>
                <div>
                  <Label htmlFor="industry-select">Industry</Label>
                  <Input id="industry-select" value={selectedIndustry.name} readOnly />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" placeholder="you@company.com" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Phone</Label>
                  <Input id="contact-phone" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div>
                <Label htmlFor="company-size">Company Size</Label>
                <Input id="company-size" placeholder="Number of employees" />
              </div>

              <div>
                <Label>Required Modules (Select all that apply)</Label>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  {selectedIndustry.modules.map((module, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox id={`module-${index}`} />
                      <Label htmlFor={`module-${index}`} className="text-sm">
                        {module}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="requirements-detail">Specific Requirements</Label>
                <Textarea
                  id="requirements-detail"
                  placeholder="Tell us about your specific business needs and challenges..."
                  rows={4}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to receive information about Nuvatech's custom ERP solutions
                </Label>
              </div>

              <Button className="w-full bg-orange-600 hover:bg-orange-700">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
