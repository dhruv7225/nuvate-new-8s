"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Calendar, User, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../components/enhanced-header"
import EnhancedFooter from "../../components/enhanced-footer"
import Link from "next/link"

export default function BlogPage() {
  const featuredPost = {
    title: "How Industry 4.0 is Transforming Garment Manufacturing",
    excerpt:
      "Explore how smart factories, IoT, and data analytics are revolutionizing the garment manufacturing industry and how businesses can adapt to stay competitive.",
    image: "https://etimg.etb2bimg.com/photo/116962571.cms",
    date: "June 10, 2024",
    author: "Rajesh Patel",
    readTime: "8 min read",
    category: "Industry Insights",
    slug: "/blog/industry-4-0-transforming-garment-manufacturing",
  }

  const recentPosts = [
    {
      title: "5 Ways to Optimize Your Laundry Business Operations",
      excerpt:
        "Discover practical strategies to streamline your laundry business operations, reduce costs, and improve customer satisfaction.",
      image: "/placeholder.svg?height=400&width=600&text=Laundry+Business",
      date: "June 5, 2024",
      author: "Priya Sharma",
      readTime: "6 min read",
      category: "Business Tips",
      slug: "/blog/optimize-laundry-business-operations",
    },
    {
      title: "The Future of E-commerce: Trends to Watch in 2024",
      excerpt:
        "Stay ahead of the curve with these emerging e-commerce trends that are shaping the future of online retail in India and globally.",
      image: "/placeholder.svg?height=400&width=600&text=E-commerce+Trends",
      date: "May 28, 2024",
      author: "Amit Kumar",
      readTime: "7 min read",
      category: "E-commerce",
      slug: "/blog/future-of-ecommerce-trends-2024",
    },
    {
      title: "HR Compliance: Navigating the Latest Regulatory Changes",
      excerpt:
        "A comprehensive guide to the latest HR compliance requirements in India and how technology can help businesses stay compliant.",
      image: "/placeholder.svg?height=400&width=600&text=HR+Compliance",
      date: "May 20, 2024",
      author: "Lakshmi Narayanan",
      readTime: "9 min read",
      category: "HR & Compliance",
      slug: "/blog/hr-compliance-regulatory-changes",
    },
    {
      title: "Digital Transformation Success Stories: Lessons from Indian SMEs",
      excerpt:
        "Learn from the digital transformation journeys of successful Indian SMEs and the key factors that contributed to their success.",
      image: "/placeholder.svg?height=400&width=600&text=Digital+Transformation",
      date: "May 15, 2024",
      author: "Vikram Singh",
      readTime: "10 min read",
      category: "Case Studies",
      slug: "/blog/digital-transformation-success-stories",
    },
    {
      title: "Sustainable Manufacturing: Balancing Profit and Planet",
      excerpt:
        "How garment manufacturers can implement sustainable practices without compromising on profitability and competitiveness.",
      image: "/placeholder.svg?height=400&width=600&text=Sustainable+Manufacturing",
      date: "May 8, 2024",
      author: "Neha Reddy",
      readTime: "8 min read",
      category: "Sustainability",
      slug: "/blog/sustainable-manufacturing-profit-planet",
    },
    {
      title: "The ROI of ERP Implementation: Measuring Success Beyond Numbers",
      excerpt:
        "A comprehensive framework for measuring the return on investment of ERP implementation, including both tangible and intangible benefits.",
      image: "/placeholder.svg?height=400&width=600&text=ERP+ROI",
      date: "May 1, 2024",
      author: "Rajesh Patel",
      readTime: "7 min read",
      category: "ERP",
      slug: "/blog/erp-implementation-roi",
    },
  ]

  const categories = [
    "All",
    "Business Tips",
    "E-commerce",
    "HR & Compliance",
    "Case Studies",
    "Sustainability",
    "ERP",
    "Technology",
  ]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? recentPosts : recentPosts.filter((post) => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      {/* Enhanced Header */}
      <EnhancedHeader />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">Our Blog</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Insights for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
              {" "}
              Business Growth
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Expert perspectives, industry trends, and practical advice to help your business thrive in the digital age.
          </p>
          {/* 
          <div className="max-w-lg mx-auto relative">
            <Input placeholder="Search articles..." className="pl-10 py-6 text-base rounded-full border-slate-300" />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
          */}
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Featured Article</h2>
        <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-video md:aspect-auto relative">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{featuredPost.category}</Badge>
                  <div className="text-sm text-slate-500 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900">{featuredPost.title}</h3>
                <p className="text-slate-600">{featuredPost.excerpt}</p>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{featuredPost.author}</p>
                    <p className="text-xs text-slate-500 flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {featuredPost.date}
                    </p>
                  </div>
                </div>

                <Link href={featuredPost.slug}>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </div>
        </Card>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm cursor-pointer transition-all duration-200 ${
                category === selectedCategory
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">
          {selectedCategory === "All" ? "Recent Articles" : `${selectedCategory} Articles`}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">{post.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                <p className="text-slate-600 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center space-x-3 pt-2">
                  <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center">
                    <User className="h-4 w-4 text-slate-500" />
                  </div>
                  <p className="text-sm font-medium text-slate-900">{post.author}</p>
                </div>

                <Link href={post.slug}>
                  <Button variant="ghost" className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        {/*
        <div className="text-center mt-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        */}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that have achieved remarkable results with our innovative solutions. Schedule a
            consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter 
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest industry insights, trends, and tips delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 py-6"
            />
            <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-orange-100 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
      */}
      {/* Enhanced Footer */}
      <EnhancedFooter />
    </div>
  )
}
