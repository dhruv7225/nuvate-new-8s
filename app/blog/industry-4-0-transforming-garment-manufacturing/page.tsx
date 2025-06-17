import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"

export default function Industry40BlogPost() {
  const relatedPosts = [
    {
      title: "5 Ways to Optimize Your Laundry Business Operations",
      excerpt: "Discover practical strategies to streamline your laundry business operations.",
      image: "/placeholder.svg?height=200&width=300&text=Laundry+Business",
      category: "Business Tips",
      readTime: "6 min read",
      slug: "/blog/optimize-laundry-business-operations",
    },
    {
      title: "The Future of E-commerce: Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with these emerging e-commerce trends.",
      image: "/placeholder.svg?height=200&width=300&text=E-commerce+Trends",
      category: "E-commerce",
      readTime: "7 min read",
      slug: "/blog/future-of-ecommerce-trends-2024",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4 bg-orange-100 text-orange-700">Industry Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              How Industry 4.0 is Transforming Garment Manufacturing
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>Rajesh Patel</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>June 10, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>8 min read</span>
              </div>
              <Button variant="outline" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video relative mb-12 rounded-xl overflow-hidden">
            <Image
              src="https://etimg.etb2bimg.com/photo/116962571.cms"
              alt="Industry 4.0 Manufacturing"
              fill
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              The garment manufacturing industry is experiencing a revolutionary transformation through Industry 4.0
              technologies. Smart factories, IoT devices, and data analytics are reshaping how clothing is designed,
              produced, and delivered to consumers.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">
              The Digital Revolution in Garment Manufacturing
            </h2>
            <p className="text-slate-700 mb-6">
              Industry 4.0 represents the fourth industrial revolution, characterized by the integration of digital
              technologies into manufacturing processes. In the garment industry, this transformation is particularly
              significant due to the sector's traditionally labor-intensive nature and complex supply chains.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mt-10 mb-4">Key Technologies Driving Change</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>
                <strong>Internet of Things (IoT):</strong> Connected machines and sensors provide real-time data on
                production efficiency
              </li>
              <li>
                <strong>Artificial Intelligence:</strong> AI-powered quality control and predictive maintenance systems
              </li>
              <li>
                <strong>Robotics:</strong> Automated cutting, sewing, and finishing processes
              </li>
              <li>
                <strong>Big Data Analytics:</strong> Data-driven insights for demand forecasting and inventory
                optimization
              </li>
              <li>
                <strong>Cloud Computing:</strong> Scalable infrastructure for managing complex supply chains
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Benefits of Industry 4.0 Implementation</h2>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Increased Efficiency</h4>
                  <p className="text-slate-600">
                    Automated processes and real-time monitoring lead to 30-40% improvement in production efficiency.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Quality Enhancement</h4>
                  <p className="text-slate-600">
                    AI-powered quality control systems reduce defects by up to 50% through early detection.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Cost Reduction</h4>
                  <p className="text-slate-600">
                    Optimized resource utilization and reduced waste lead to significant cost savings.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Faster Time-to-Market</h4>
                  <p className="text-slate-600">
                    Streamlined processes enable faster product development and delivery cycles.
                  </p>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Implementation Challenges</h2>
            <p className="text-slate-700 mb-6">
              While the benefits are substantial, implementing Industry 4.0 technologies comes with challenges:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-8">
              <li>High initial investment costs for technology infrastructure</li>
              <li>Need for skilled workforce training and development</li>
              <li>Integration complexity with existing legacy systems</li>
              <li>Data security and privacy concerns</li>
              <li>Change management and organizational culture adaptation</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">The Future Outlook</h2>
            <p className="text-slate-700 mb-6">
              The future of garment manufacturing lies in fully integrated smart factories where every aspect of
              production is connected and optimized. Companies that embrace these technologies early will gain
              significant competitive advantages in terms of efficiency, quality, and customer satisfaction.
            </p>

            <div className="bg-orange-50 p-6 rounded-lg my-8">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Key Takeaway</h3>
              <p className="text-orange-800">
                Industry 4.0 is not just about technology adoption; it's about transforming business models and creating
                new value propositions for customers. Companies that successfully navigate this transformation will be
                the leaders of tomorrow's garment industry.
              </p>
            </div>
          </div>

          {/* Author Bio */}
          <div className="border-t border-slate-200 pt-8 mt-12">
            <div className="flex items-start space-x-4">
              <div className="h-16 w-16 rounded-full bg-slate-200 flex items-center justify-center">
                <User className="h-8 w-8 text-slate-500" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Rajesh Patel</h3>
                <p className="text-slate-600 mb-2">Senior Industry Analyst</p>
                <p className="text-sm text-slate-500">
                  Rajesh has over 15 years of experience in manufacturing technology and digital transformation. He
                  specializes in helping companies adopt Industry 4.0 solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-100 text-orange-700">{post.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{post.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                    <Link href={post.slug}>
                      <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
