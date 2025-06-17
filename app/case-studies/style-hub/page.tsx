import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Users, TrendingUp, CheckCircle, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"
import Link from "next/link"

export default function StyleHubCaseStudy() {
  const relatedCaseStudies = [
    {
      title: "Fashion Forward Inc. Increases Production Efficiency by 35%",
      slug: "/case-studies/fashion-forward-inc",
      industry: "Manufacturing",
      solution: "StitchIT",
    },
    {
      title: "CleanPro Industries Achieves 40% Route Efficiency with WashIT",
      slug: "/case-studies/clean-pro-industries",
      industry: "Laundry Services",
      solution: "WashIT",
    },
    {
      title: "Textile Masters Achieves 99% Payroll Accuracy with HR TECH",
      slug: "/case-studies/textile-masters",
      industry: "HR & Payroll",
      solution: "HR TECH",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Back Button */}
      <section className="container mx-auto px-4 py-8">
        <Link href="/case-studies">
          <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Button>
        </Link>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">DigitAil Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Style Hub Achieves 65% Sales Growth with DigitAil
              </h1>

              <div className="flex flex-wrap gap-6 text-slate-600 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Bangalore, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>E-commerce Fashion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Implementation: 4 months</span>
                </div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                Learn how Style Hub transformed their multi-channel e-commerce operations, achieving remarkable sales
                growth and operational efficiency through DigitAil's comprehensive platform.
              </p>
            </div>

            <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Style+Hub+Case+Study"
                alt="Style Hub Case Study"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="container mx-auto px-4 py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Results Achieved</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">65%</div>
                <div className="text-slate-600">Sales Growth</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">50%</div>
                <div className="text-slate-600">Order Fulfillment Improvement</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                <div className="text-slate-600">Inventory Accuracy</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
                <div className="text-slate-600">Customer Retention Increase</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About Style Hub</h2>
              <p className="text-slate-700 mb-6">
                Style Hub is a fast-growing e-commerce fashion retailer based in Bangalore, specializing in trendy
                apparel for young professionals. Founded in 2019, they quickly expanded to multiple online platforms
                including their own website, Amazon, Flipkart, and social media channels.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">5 sales channels</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">2000+ SKUs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">50,000+ customers</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Pan-India delivery</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Company Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-purple-600">2019</div>
                  <div className="text-sm text-slate-600">Founded</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">₹10Cr</div>
                  <div className="text-sm text-slate-600">Annual Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">25-35</div>
                  <div className="text-sm text-slate-600">Target Age Group</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600">Fashion</div>
                  <div className="text-sm text-slate-600">Industry Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-700 mb-6">
                Style Hub was experiencing rapid growth but struggling to manage inventory across multiple sales
                channels. Their manual processes were leading to overselling, stockouts, and customer dissatisfaction.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Pain Points:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Inventory discrepancies across multiple platforms</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Overselling leading to order cancellations and customer complaints</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Manual order processing causing delays and errors</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Lack of unified view of business performance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Difficulty in demand forecasting and inventory planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Impact on Business</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-red-600">20%</div>
                  <div className="text-sm text-red-700">Order cancellation rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">35%</div>
                  <div className="text-sm text-red-700">Inventory holding costs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">15%</div>
                  <div className="text-sm text-red-700">Customer churn rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">40%</div>
                  <div className="text-sm text-red-700">Time spent on manual tasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Solution: DigitAil Implementation</h2>

          <div className="mb-12">
            <p className="text-xl text-slate-600 mb-6">
              We implemented DigitAil with a focus on multi-channel integration, inventory synchronization, and order
              management. The solution provide real-time visibility and automated processes across all sales channels.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Multi-Channel Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Website integration</li>
                  <li>• Amazon & Flipkart APIs</li>
                  <li>• Social commerce platforms</li>
                  <li>• Unified product catalog</li>
                  <li>• Real-time sync</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Real-time stock tracking</li>
                  <li>• Automated reorder points</li>
                  <li>• Demand forecasting</li>
                  <li>• Warehouse optimization</li>
                  <li>• Stock alerts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">Order Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Automated order routing</li>
                  <li>• Shipping integration</li>
                  <li>• Payment processing</li>
                  <li>• Customer notifications</li>
                  <li>• Returns management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="container mx-auto px-4 py-16 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Benefits</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Business Growth</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Sales Revenue</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+65%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Order Volume</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+80%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Customer Base</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+120%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Market Reach</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+200%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Operational Efficiency</h3>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Inventory Accuracy</h4>
                  <p className="text-slate-700">
                    Achieved 95% inventory accuracy across all channels, eliminating overselling issues
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Order Processing</h4>
                  <p className="text-slate-700">
                    50% faster order processing with automated workflows and integrations
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Customer Satisfaction</h4>
                  <p className="text-slate-700">45% increase in customer retention through improved service quality</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Cost Reduction</h4>
                  <p className="text-slate-700">30% reduction in operational costs through process automation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-purple-300 mx-auto mb-6" />
          <blockquote className="text-2xl text-slate-700 italic mb-8">
            "DigitAil has been a game-changer for our business. The multi-channel integration and real-time inventory
            management have allowed us to scale rapidly while maintaining excellent customer service. Our sales have
            grown by 65% since implementation, and we're now confident about expanding to new markets."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <Image
              src="/placeholder.svg?height=60&width=60&text=AS"
              alt="Arjun Sharma"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Arjun Sharma</div>
              <div className="text-slate-600">Founder & CEO, Style Hub</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedCaseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-100 text-orange-700">{study.solution}</Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{study.title}</h3>
                  <p className="text-slate-600 mb-4">{study.industry}</p>
                  <Link href={study.slug}>
                    <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                      Read Case Study →
                    </Button>
                  </Link>
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
