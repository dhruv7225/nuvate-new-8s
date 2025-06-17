import { ArrowRight, Search, FileText, BookOpen, Code, Download, ExternalLink, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"

export default function DocumentationPage() {
  const products = [
    {
      id: "stitchit",
      name: "StitchIT",
      description: "Cut To Pack Software Solution",
      color: "orange",
    },
    {
      id: "washit",
      name: "WashIT",
      description: "Complete IT Solution For Industrial Laundry",
      color: "blue",
    },
    {
      id: "digitail",
      name: "DigitAil",
      description: "Complete E-commerce Solution",
      color: "purple",
    },
    {
      id: "hrtech",
      name: "HR TECH",
      description: "Calculate Salary at Your Finger Tip",
      color: "green",
    },
  ]

  const docCategories = [
    {
      title: "Getting Started",
      icon: BookOpen,
      items: ["Installation Guide", "System Requirements", "Quick Start Tutorial", "User Account Setup"],
    },
    {
      title: "User Guides",
      icon: FileText,
      items: ["Dashboard Overview", "Managing Users", "Reports & Analytics", "Settings & Configuration"],
    },
    {
      title: "API Reference",
      icon: Code,
      items: ["Authentication", "Endpoints", "Data Models", "Webhooks"],
    },
    {
      title: "Resources",
      icon: Download,
      items: ["Release Notes", "FAQs", "Troubleshooting", "Video Tutorials"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Documentation</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Product
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Documentation
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Comprehensive guides, tutorials, and reference materials to help you make the most of our solutions.
          </p>

          <div className="max-w-lg mx-auto relative">
            <Input
              placeholder="Search documentation..."
              className="pl-10 py-6 text-base rounded-full border-slate-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <Button className="absolute right-1 top-1 bg-orange-600 hover:bg-orange-700 rounded-full">Search</Button>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="container mx-auto px-4 py-8">
        <Tabs defaultValue="stitchit" className="w-full">
          <TabsList className="grid grid-cols-4 w-full max-w-4xl mx-auto">
            {products.map((product) => (
              <TabsTrigger key={product.id} value={product.id}>
                {product.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent key={product.id} value={product.id} className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">{product.name} Documentation</h2>
                <p className="text-slate-600">{product.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {docCategories.map((category, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-8 w-8 rounded-full bg-${product.color}-100 flex items-center justify-center`}
                        >
                          <category.icon className={`h-4 w-4 text-${product.color}-600`} />
                        </div>
                        <CardTitle className="text-lg">{category.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href="#"
                              className="flex items-center text-slate-600 hover:text-orange-600 transition-colors"
                            >
                              <ChevronRight className="h-4 w-4 mr-1" />
                              <span>{item}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                      <Button
                        variant="link"
                        className={`text-${product.color}-600 hover:text-${product.color}-700 p-0 mt-4`}
                      >
                        View All
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Popular Articles */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Popular Articles</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Most Frequently Viewed</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Quick access to our most popular documentation articles and guides.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Getting Started with StitchIT",
              description: "A comprehensive guide to setting up and configuring StitchIT for your business.",
              category: "StitchIT",
              readTime: "10 min read",
            },
            {
              title: "WashIT Route Optimization",
              description: "Learn how to optimize delivery routes to maximize efficiency and reduce costs.",
              category: "WashIT",
              readTime: "8 min read",
            },
            {
              title: "Setting Up Multi-Channel Sales in DigitAil",
              description: "Step-by-step guide to configuring and managing multiple sales channels.",
              category: "DigitAil",
              readTime: "12 min read",
            },
            {
              title: "HR TECH Payroll Processing",
              description: "Complete guide to processing payroll and managing employee compensation.",
              category: "HR TECH",
              readTime: "15 min read",
            },
            {
              title: "API Integration Guide",
              description: "Technical documentation for integrating our solutions with your existing systems.",
              category: "Developer",
              readTime: "20 min read",
            },
            {
              title: "Troubleshooting Common Issues",
              description: "Solutions to the most common issues encountered by users across all products.",
              category: "Support",
              readTime: "18 min read",
            },
          ].map((article, index) => (
            <Card key={index} className="border border-slate-200 hover:border-orange-200 transition-colors">
              <CardContent className="p-6">
                <Badge
                  className={`mb-4 ${
                    article.category === "StitchIT"
                      ? "bg-orange-100 text-orange-700"
                      : article.category === "WashIT"
                        ? "bg-blue-100 text-blue-700"
                        : article.category === "DigitAil"
                          ? "bg-purple-100 text-purple-700"
                          : article.category === "HR TECH"
                            ? "bg-green-100 text-green-700"
                            : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {article.category}
                </Badge>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{article.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                  <Button variant="link" className="text-orange-600 hover:text-orange-700 p-0">
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Video Tutorials</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Learn by Watching</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Visual guides to help you understand and use our products effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "StitchIT Complete Walkthrough",
              description: "A comprehensive overview of all StitchIT features and functionalities.",
              duration: "45:20",
              thumbnail: "/placeholder.svg?height=300&width=600&text=StitchIT+Tutorial",
            },
            {
              title: "WashIT Mobile App Tutorial",
              description: "Learn how to use the WashIT mobile app for route management and delivery tracking.",
              duration: "32:15",
              thumbnail: "/placeholder.svg?height=300&width=600&text=WashIT+Tutorial",
            },
            {
              title: "DigitAil Inventory Management",
              description: "Master inventory management across multiple sales channels with DigitAil.",
              duration: "28:40",
              thumbnail: "/placeholder.svg?height=300&width=600&text=DigitAil+Tutorial",
            },
            {
              title: "HR TECH Compliance Features",
              description: "Ensure regulatory compliance with HR TECH's built-in compliance features.",
              duration: "36:55",
              thumbnail: "/placeholder.svg?height=300&width=600&text=HR+TECH+Tutorial",
            },
          ].map((video, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video relative bg-slate-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-orange-600/90 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-8 w-8 text-white"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{video.title}</h3>
                <p className="text-slate-600 text-sm">{video.description}</p>
                <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">Watch Tutorial</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
            View All Tutorials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">For Developers</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Developer Resources</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technical documentation, API references, and integration guides for developers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "API Documentation",
              description:
                "Complete reference for our REST APIs, including endpoints, parameters, and response formats.",
              icon: Code,
            },
            {
              title: "SDK & Libraries",
              description: "Official SDKs and libraries for various programming languages to simplify integration.",
              icon: Download,
            },
            {
              title: "Webhooks Guide",
              description: "Learn how to use webhooks to receive real-time updates and notifications from our systems.",
              icon: ExternalLink,
            },
          ].map((resource, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="h-6 w-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{resource.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{resource.description}</p>
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Additional Help?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Our support team is ready to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Join Community Forum
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
