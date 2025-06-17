"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, ArrowRight, Star, Zap, Shield, HeadphonesIcon, Calculator, MessageSquare } from "lucide-react"

interface PricingTier {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

interface PricingData {
  [key: string]: {
    tiers: PricingTier[]
    description: string
  }
}

const pricingData: PricingData = {
  stitchit: {
    description: "Flexible pricing plans for garment manufacturers of all sizes",
    tiers: [
      {
        name: "Starter",
        price: "₹15,000",
        period: "/month",
        description: "Perfect for small garment units with basic requirements",
        features: [
          "Up to 50 orders/month",
          "Basic inventory management",
          "Production tracking",
          "Email support",
          "2 user accounts",
          "Basic reporting",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Professional",
        price: "₹35,000",
        period: "/month",
        description: "Ideal for growing manufacturers with advanced needs",
        features: [
          "Up to 200 orders/month",
          "Advanced inventory management",
          "Quality control module",
          "Priority support",
          "10 user accounts",
          "Advanced analytics",
          "Mobile app access",
          "API integrations",
        ],
        popular: true,
        cta: "Get Started",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "Tailored solutions for large-scale operations",
        features: [
          "Unlimited orders",
          "Full feature access",
          "Custom integrations",
          "Dedicated support",
          "Unlimited users",
          "Custom reporting",
          "On-premise deployment",
          "Training & onboarding",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  washit: {
    description: "Comprehensive pricing for laundry and dry cleaning businesses",
    tiers: [
      {
        name: "Basic",
        price: "₹12,000",
        period: "/month",
        description: "Essential features for small laundry operations",
        features: [
          "Up to 100 customers",
          "Basic billing system",
          "Customer management",
          "Email support",
          "2 user accounts",
          "Basic reports",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Standard",
        price: "₹25,000",
        period: "/month",
        description: "Complete solution for growing laundry businesses",
        features: [
          "Up to 500 customers",
          "Advanced billing & GST",
          "Route optimization",
          "Mobile app for drivers",
          "5 user accounts",
          "Advanced analytics",
          "SMS notifications",
          "Inventory management",
        ],
        popular: true,
        cta: "Get Started",
      },
      {
        name: "Premium",
        price: "Custom",
        period: "pricing",
        description: "Enterprise-grade solution for large operations",
        features: [
          "Unlimited customers",
          "Multi-location support",
          "Custom integrations",
          "Dedicated support",
          "Unlimited users",
          "White-label solution",
          "API access",
          "Custom features",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  digitail: {
    description: "Scalable e-commerce solutions for online retailers",
    tiers: [
      {
        name: "Startup",
        price: "₹18,000",
        period: "/month",
        description: "Perfect for new e-commerce businesses",
        features: [
          "Up to 1,000 products",
          "2 sales channels",
          "Basic analytics",
          "Email support",
          "3 user accounts",
          "Standard integrations",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Growth",
        price: "₹40,000",
        period: "/month",
        description: "Advanced features for scaling businesses",
        features: [
          "Up to 10,000 products",
          "5 sales channels",
          "Advanced analytics",
          "Priority support",
          "10 user accounts",
          "Custom integrations",
          "Automated workflows",
          "Multi-warehouse support",
        ],
        popular: true,
        cta: "Get Started",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "Complete solution for large retailers",
        features: [
          "Unlimited products",
          "Unlimited channels",
          "Custom analytics",
          "Dedicated support",
          "Unlimited users",
          "White-label solution",
          "Custom development",
          "SLA guarantee",
        ],
        cta: "Contact Sales",
      },
    ],
  },
  hrtech: {
    description: "Affordable HR solutions for businesses of all sizes",
    tiers: [
      {
        name: "Essential",
        price: "₹8,000",
        period: "/month",
        description: "Basic HR management for small teams",
        features: [
          "Up to 50 employees",
          "Basic payroll",
          "Attendance tracking",
          "Email support",
          "2 user accounts",
          "Standard reports",
        ],
        cta: "Start Free Trial",
      },
      {
        name: "Professional",
        price: "₹20,000",
        period: "/month",
        description: "Complete HR solution for growing companies",
        features: [
          "Up to 200 employees",
          "Advanced payroll",
          "Performance management",
          "Priority support",
          "5 user accounts",
          "Advanced analytics",
          "Mobile app",
          "Compliance management",
        ],
        popular: true,
        cta: "Get Started",
      },
      {
        name: "Enterprise",
        price: "Custom",
        period: "pricing",
        description: "Comprehensive HR suite for large organizations",
        features: [
          "Unlimited employees",
          "Custom workflows",
          "Advanced compliance",
          "Dedicated support",
          "Unlimited users",
          "Custom integrations",
          "Multi-location support",
          "Training included",
        ],
        cta: "Contact Sales",
      },
    ],
  },
}

export default function PricingSection() {
  const [selectedProduct, setSelectedProduct] = useState("stitchit")
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Transparent Pricing</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Flexible pricing options designed to grow with your business. No hidden fees, no long-term contracts.
          </p>
        </div>

        <Tabs value={selectedProduct} onValueChange={setSelectedProduct} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-2">
              <TabsTrigger value="stitchit" className="flex flex-col items-center p-4">
                <div className="font-medium">StitchIT</div>
                <div className="text-xs text-slate-500">Garment Manufacturing</div>
              </TabsTrigger>
              <TabsTrigger value="washit" className="flex flex-col items-center p-4">
                <div className="font-medium">WashIT</div>
                <div className="text-xs text-slate-500">Laundry Management</div>
              </TabsTrigger>
              <TabsTrigger value="digitail" className="flex flex-col items-center p-4">
                <div className="font-medium">DigitAil</div>
                <div className="text-xs text-slate-500">E-commerce Solution</div>
              </TabsTrigger>
              <TabsTrigger value="hrtech" className="flex flex-col items-center p-4">
                <div className="font-medium">HR TECH</div>
                <div className="text-xs text-slate-500">HR Management</div>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(pricingData).map(([product, data]) => (
            <TabsContent key={product} value={product} className="mt-0">
              <div className="text-center mb-8">
                <p className="text-lg text-slate-600">{data.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {data.tiers.map((tier, index) => (
                  <Card
                    key={index}
                    className={`relative ${
                      tier.popular ? "ring-2 ring-orange-200 shadow-xl scale-105" : "shadow-lg"
                    } transition-all duration-300 hover:shadow-xl`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <Badge className="bg-orange-600 text-white px-4 py-1">
                          <Star className="h-3 w-3 mr-1" />
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold text-slate-900">{tier.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                        <span className="text-slate-600">{tier.period}</span>
                      </div>
                      <p className="text-slate-600 mt-2">{tier.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className={`w-full ${
                          tier.popular ? "bg-orange-600 hover:bg-orange-700" : "bg-slate-900 hover:bg-slate-800"
                        }`}
                        onClick={() => {
                          if (tier.cta === "Contact Sales") {
                            setIsContactOpen(true)
                          }
                        }}
                      >
                        {tier.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto">
              <Shield className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">30-Day Money Back</h3>
            <p className="text-slate-600">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <HeadphonesIcon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">24/7 Support</h3>
            <p className="text-slate-600">Get help whenever you need it with our dedicated support team.</p>
          </div>

          <div className="text-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">Quick Setup</h3>
            <p className="text-slate-600">Get up and running in minutes with our easy setup process.</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="gap-2">
                  <Calculator className="h-4 w-4" />
                  Calculate Your Savings
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>ROI Calculator</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="employees">Number of Employees</Label>
                    <Input id="employees" type="number" placeholder="50" />
                  </div>
                  <div>
                    <Label htmlFor="revenue">Monthly Revenue (₹)</Label>
                    <Input id="revenue" type="number" placeholder="1000000" />
                  </div>
                  <div>
                    <Label htmlFor="solution">Select Solution</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a solution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stitchit">StitchIT</SelectItem>
                        <SelectItem value="washit">WashIT</SelectItem>
                        <SelectItem value="digitail">DigitAil</SelectItem>
                        <SelectItem value="hrtech">HR TECH</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">Estimated Savings</h4>
                    <div className="text-2xl font-bold text-orange-600">₹2,50,000/month</div>
                    <p className="text-sm text-slate-600">Based on 35% efficiency improvement</p>
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Get Detailed Report</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Get Custom Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Get Custom Pricing</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <Label htmlFor="solution-interest">Solution Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select solution" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="stitchit">StitchIT</SelectItem>
                        <SelectItem value="washit">WashIT</SelectItem>
                        <SelectItem value="digitail">DigitAil</SelectItem>
                        <SelectItem value="hrtech">HR TECH</SelectItem>
                        <SelectItem value="custom">Custom ERP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="requirements">Requirements</Label>
                    <Textarea id="requirements" placeholder="Tell us about your specific needs..." />
                  </div>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">Send Request</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-sm text-slate-500">
            Need help choosing? Our experts are here to help you find the perfect solution.
          </p>
        </div>
      </div>
    </section>
  )
}
