import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Download,
  Play,
  FileText,
  Users,
  Settings,
  BarChart3,
  Package,
  Shirt,
  Droplets,
  ShoppingCart,
  UserCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"

export default function UserGuidesPage() {
  const productGuides = [
    {
      product: "StitchIT",
      icon: Shirt,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      description: "Complete ERP solution for garment manufacturing",
      guides: [
        {
          title: "Getting Started with StitchIT",
          description: "Initial setup and basic navigation",
          type: "PDF Guide",
          duration: "15 min read",
          level: "Beginner",
        },
        {
          title: "Production Planning & Scheduling",
          description: "Master production planning workflows",
          type: "Video Tutorial",
          duration: "25 min",
          level: "Intermediate",
        },
        {
          title: "Inventory Management",
          description: "Track raw materials and finished goods",
          type: "PDF Guide",
          duration: "20 min read",
          level: "Intermediate",
        },
        {
          title: "Quality Control Processes",
          description: "Implement quality checks and standards",
          type: "Video Tutorial",
          duration: "18 min",
          level: "Advanced",
        },
        {
          title: "Financial Reporting",
          description: "Generate comprehensive financial reports",
          type: "PDF Guide",
          duration: "12 min read",
          level: "Intermediate",
        },
      ],
    },
    {
      product: "WashIT",
      icon: Droplets,
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
      description: "Comprehensive laundry management system",
      guides: [
        {
          title: "WashIT Setup Guide",
          description: "Initial configuration and setup",
          type: "PDF Guide",
          duration: "10 min read",
          level: "Beginner",
        },
        {
          title: "Order Processing Workflow",
          description: "Handle customer orders efficiently",
          type: "Video Tutorial",
          duration: "20 min",
          level: "Beginner",
        },
        {
          title: "Route Optimization",
          description: "Optimize delivery and pickup routes",
          type: "PDF Guide",
          duration: "15 min read",
          level: "Intermediate",
        },
        {
          title: "Customer Management",
          description: "Manage customer profiles and preferences",
          type: "Video Tutorial",
          duration: "12 min",
          level: "Beginner",
        },
        {
          title: "Billing & Payments",
          description: "Process payments and generate invoices",
          type: "PDF Guide",
          duration: "8 min read",
          level: "Intermediate",
        },
      ],
    },
    {
      product: "DigitAil",
      icon: ShoppingCart,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      description: "E-commerce and retail management platform",
      guides: [
        {
          title: "DigitAil Quick Start",
          description: "Set up your online store quickly",
          type: "PDF Guide",
          duration: "12 min read",
          level: "Beginner",
        },
        {
          title: "Product Catalog Management",
          description: "Organize and manage your product listings",
          type: "Video Tutorial",
          duration: "22 min",
          level: "Beginner",
        },
        {
          title: "Order Fulfillment",
          description: "Process and fulfill customer orders",
          type: "PDF Guide",
          duration: "18 min read",
          level: "Intermediate",
        },
        {
          title: "Marketing & Promotions",
          description: "Create campaigns and promotional offers",
          type: "Video Tutorial",
          duration: "16 min",
          level: "Intermediate",
        },
        {
          title: "Analytics & Reporting",
          description: "Track performance and generate insights",
          type: "PDF Guide",
          duration: "14 min read",
          level: "Advanced",
        },
      ],
    },
    {
      product: "HR TECH",
      icon: UserCheck,
      color: "text-green-600",
      bgColor: "bg-green-100",
      description: "Human resource management system",
      guides: [
        {
          title: "HR TECH Fundamentals",
          description: "Basic HR management concepts and setup",
          type: "PDF Guide",
          duration: "15 min read",
          level: "Beginner",
        },
        {
          title: "Employee Onboarding",
          description: "Streamline new employee processes",
          type: "Video Tutorial",
          duration: "20 min",
          level: "Beginner",
        },
        {
          title: "Payroll Processing",
          description: "Manage payroll calculations and disbursements",
          type: "PDF Guide",
          duration: "25 min read",
          level: "Intermediate",
        },
        {
          title: "Performance Management",
          description: "Track and evaluate employee performance",
          type: "Video Tutorial",
          duration: "18 min",
          level: "Intermediate",
        },
        {
          title: "Compliance & Reporting",
          description: "Ensure HR compliance and generate reports",
          type: "PDF Guide",
          duration: "20 min read",
          level: "Advanced",
        },
      ],
    },
  ]

  const generalGuides = [
    {
      title: "System Administration",
      description: "User management, permissions, and system settings",
      icon: Settings,
      guides: 8,
    },
    {
      title: "Data Import/Export",
      description: "Import existing data and export reports",
      icon: Package,
      guides: 5,
    },
    {
      title: "Training Materials",
      description: "Comprehensive training resources for your team",
      icon: Users,
      guides: 12,
    },
    {
      title: "Best Practices",
      description: "Industry best practices and optimization tips",
      icon: BarChart3,
      guides: 15,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center mb-8">
          <Button variant="ghost" asChild className="mr-4">
            <Link href="/support">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Support
            </Link>
          </Button>
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">User Guides</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Master Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Solutions
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Comprehensive guides and tutorials to help you get the most out of our products and services.
          </p>
        </div>
      </section>

      {/* Product Guides */}
      <section className="container mx-auto px-4 py-16">
        <Tabs defaultValue="stitchit" className="w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Product-Specific Guides</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Choose your product to access tailored guides and tutorials.
            </p>
          </div>

          <TabsList className="grid grid-cols-2 lg:grid-cols-4 mb-12 h-auto p-1">
            {productGuides.map((product) => (
              <TabsTrigger
                key={product.product.toLowerCase().replace(" ", "")}
                value={product.product.toLowerCase().replace(" ", "")}
                className="flex flex-col items-center p-4 h-auto"
              >
                <product.icon className={`h-6 w-6 ${product.color} mb-2`} />
                <span className="font-semibold">{product.product}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {productGuides.map((product) => (
            <TabsContent
              key={product.product.toLowerCase().replace(" ", "")}
              value={product.product.toLowerCase().replace(" ", "")}
              className="mt-0"
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className={`h-12 w-12 rounded-full ${product.bgColor} flex items-center justify-center mr-4`}>
                    <product.icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{product.product}</h3>
                    <p className="text-slate-600">{product.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {product.guides.map((guide, index) => (
                  <Card key={index} className="border border-slate-200 hover:border-orange-200 transition-colors">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge
                          variant="outline"
                          className={`${
                            guide.level === "Beginner"
                              ? "border-green-200 text-green-700"
                              : guide.level === "Intermediate"
                                ? "border-orange-200 text-orange-700"
                                : "border-red-200 text-red-700"
                          }`}
                        >
                          {guide.level}
                        </Badge>
                        <div className="flex items-center text-slate-500 text-sm">
                          {guide.type === "PDF Guide" ? (
                            <FileText className="h-4 w-4 mr-1" />
                          ) : (
                            <Play className="h-4 w-4 mr-1" />
                          )}
                          {guide.type}
                        </div>
                      </div>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 mb-4">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-slate-500">{guide.duration}</span>
                        <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                          {guide.type === "PDF Guide" ? (
                            <>
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Watch
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* General Guides */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">General Resources</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Resources</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cross-platform guides and resources to help you maximize your productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {generalGuides.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                  <category.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-slate-500">{category.guides} guides</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    Available
                  </Badge>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Browse Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Training?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our team can provide customized training sessions tailored to your specific business needs and workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-slate-100">
              Schedule Training Session
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Contact Support Team
            </Button>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
