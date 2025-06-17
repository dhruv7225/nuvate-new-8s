import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Users, TrendingUp, CheckCircle, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"
import Link from "next/link"

export default function CleanProCaseStudy() {
  const relatedCaseStudies = [
    {
      title: "Fashion Forward Inc. Increases Production Efficiency by 35%",
      slug: "/case-studies/fashion-forward-inc",
      industry: "Manufacturing",
      solution: "StitchIT",
    },
    {
      title: "Style Hub Achieves 65% Sales Growth with DigitAil",
      slug: "/case-studies/style-hub",
      industry: "E-commerce",
      solution: "DigitAil",
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
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200">WashIT Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                CleanPro Industries Achieves 40% Route Efficiency with WashIT
              </h1>

              <div className="flex flex-wrap gap-6 text-slate-600 mb-8">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Delhi, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>Commercial Laundry</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Implementation: 6 months</span>
                </div>
              </div>

              <p className="text-xl text-slate-600 leading-relaxed">
                Discover how CleanPro Industries transformed their commercial laundry operations, achieving remarkable
                improvements in route efficiency, billing accuracy, and customer satisfaction through WashIT
                implementation.
              </p>
            </div>

            <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=CleanPro+Industries+Case+Study"
                alt="CleanPro Industries Case Study"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Results */}
      <section className="container mx-auto px-4 py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Key Results Achieved</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
                <div className="text-slate-600">Route Efficiency Improvement</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-slate-600">Billing Accuracy</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-slate-600">Customer Satisfaction Increase</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
                <div className="text-slate-600">Operational Cost Reduction</div>
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About CleanPro Industries</h2>
              <p className="text-slate-700 mb-6">
                CleanPro Industries is a leading commercial laundry service provider based in Delhi, serving hotels,
                restaurants, hospitals, and corporate clients across the National Capital Region. With over 15 years of
                experience, they have built a reputation for quality service and reliability.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">150+ active clients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">25 delivery vehicles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">50+ employees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-slate-700">Processing 10,000+ kg daily</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Company Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-slate-600">Years in Business</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">₹5Cr</div>
                  <div className="text-sm text-slate-600">Annual Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">NCR</div>
                  <div className="text-sm text-slate-600">Service Area</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">B2B</div>
                  <div className="text-sm text-slate-600">Focus Market</div>
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
                CleanPro Industries was facing significant operational challenges that were impacting their growth and
                customer satisfaction. Their manual processes were becoming increasingly inefficient as they scaled
                their operations.
              </p>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Pain Points:</h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Inefficient route planning leading to high fuel costs and delayed deliveries</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Manual billing processes causing frequent errors and customer disputes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Lack of real-time visibility into order status and delivery tracking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Difficulty in managing customer relationships and service history</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Inventory management issues leading to stockouts and overstocking</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Impact on Business</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-red-600">25%</div>
                  <div className="text-sm text-red-700">Higher operational costs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">40%</div>
                  <div className="text-sm text-red-700">Customer complaints</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">15%</div>
                  <div className="text-sm text-red-700">Customer churn rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">30%</div>
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8">The Solution: WashIT Implementation</h2>

          <div className="mb-12">
            <p className="text-xl text-slate-600 mb-6">
              We deployed WashIT, our comprehensive laundry management solution, with a focus on route optimization,
              automated billing, and customer management. The implementation was completed in phases to minimize
              business disruption.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Phase 1: Core System Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Customer database migration</li>
                  <li>• Service catalog configuration</li>
                  <li>• Pricing structure setup</li>
                  <li>• User account creation</li>
                  <li>• Basic training sessions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Phase 2: Route Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• GPS integration for vehicles</li>
                  <li>• Route planning algorithms</li>
                  <li>• Mobile app for drivers</li>
                  <li>• Real-time tracking system</li>
                  <li>• Delivery optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">Phase 3: Advanced Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-700">
                  <li>• Automated billing system</li>
                  <li>• Customer portal launch</li>
                  <li>• Inventory management</li>
                  <li>• Analytics dashboard</li>
                  <li>• Integration with accounting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="container mx-auto px-4 py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Timeline</h2>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-300"></div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Month 1-2: Planning & Setup</h3>
                  <p className="text-slate-600">Requirements analysis, system configuration, and data migration</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Month 3-4: Core Implementation</h3>
                  <p className="text-slate-600">Route optimization setup, mobile app deployment, and staff training</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Month 5-6: Advanced Features</h3>
                  <p className="text-slate-600">Automated billing, customer portal, and analytics implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Benefits</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Operational Improvements</h3>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Route Efficiency</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+40%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Billing Accuracy</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">98%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Customer Satisfaction</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">+60%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="text-slate-700">Operational Costs</span>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-semibold">-30%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Business Impact</h3>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Revenue Growth</h4>
                  <p className="text-slate-700">
                    40% increase in revenue due to improved efficiency and customer retention
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Market Expansion</h4>
                  <p className="text-slate-700">Ability to serve 25% more customers with the same resources</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Competitive Advantage</h4>
                  <p className="text-slate-700">
                    Real-time tracking and automated billing set them apart from competitors
                  </p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Scalability</h4>
                  <p className="text-slate-700">System can handle 3x current volume without additional staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-blue-300 mx-auto mb-6" />
          <blockquote className="text-2xl text-slate-700 italic mb-8">
            "WashIT has revolutionized our laundry operations. The automated billing and route optimization have
            significantly improved our efficiency and customer satisfaction. Our revenue has increased by 40% since
            implementation, and we're now able to serve more customers with better service quality."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <Image
              src="/placeholder.svg?height=60&width=60&text=PP"
              alt="Priya Patel"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-900">Priya Patel</div>
              <div className="text-slate-600">General Manager, CleanPro Industries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="container mx-auto px-4 py-16">
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
