import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Building, Users, TrendingUp, CheckCircle, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"

export default function FashionForwardCaseStudy() {
  const keyResults = [
    { metric: "35%", description: "Increase in production efficiency", icon: TrendingUp },
    { metric: "45%", description: "Reduction in lead time", icon: CheckCircle },
    { metric: "25%", description: "Reduction in material waste", icon: CheckCircle },
    { metric: "20%", description: "Improvement in quality score", icon: TrendingUp },
  ]

  const implementationSteps = [
    {
      phase: "Assessment & Planning",
      duration: "2 weeks",
      description: "Comprehensive analysis of existing processes and identification of optimization opportunities.",
    },
    {
      phase: "System Design & Customization",
      duration: "4 weeks",
      description: "Tailoring StitchIT to match Fashion Forward's specific workflow and integration requirements.",
    },
    {
      phase: "Implementation & Training",
      duration: "3 weeks",
      description: "System deployment, data migration, and comprehensive staff training programs.",
    },
    {
      phase: "Go-Live & Support",
      duration: "1 week",
      description: "System launch with dedicated support team and performance monitoring.",
    },
  ]

  const relatedCaseStudies = [
    {
      title: "CleanPro Industries Achieves 40% Route Efficiency with WashIT",
      company: "CleanPro Industries",
      industry: "Commercial Laundry",
      image: "/placeholder.svg?height=200&width=300&text=CleanPro+Case+Study",
      slug: "/case-studies/cleanpro-industries",
    },
    {
      title: "Style Hub Achieves 65% Sales Growth with DigitAil",
      company: "Style Hub",
      industry: "E-commerce Fashion",
      image: "/placeholder.svg?height=200&width=300&text=Style+Hub+Case+Study",
      slug: "/case-studies/style-hub",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/case-studies"
          className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Case Studies
        </Link>
      </div>

      {/* Case Study Header */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-700">Success Story</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Fashion Forward Inc. Increases Production Efficiency by 35%
              </h1>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-600">
                  <Building className="h-5 w-5 mr-3" />
                  <span className="font-medium">Fashion Forward Inc.</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Users className="h-5 w-5 mr-3" />
                  <span>Apparel Manufacturing</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="h-5 w-5 mr-3" />
                  <span>Mumbai, India</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Implementation: Q2 2024</span>
                </div>
              </div>

              <Badge className="bg-orange-600 text-white px-4 py-2">Powered by StitchIT</Badge>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Fashion+Forward+Manufacturing"
                alt="Fashion Forward Manufacturing Facility"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          {/* Key Results */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {keyResults.map((result, index) => (
              <Card key={index} className="border-0 shadow-lg bg-orange-50">
                <CardContent className="p-6 text-center">
                  <result.icon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-orange-600 mb-2">{result.metric}</div>
                  <div className="text-sm text-slate-600">{result.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Challenge Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">The Challenge</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  Fashion Forward Inc., one of Mumbai's leading apparel manufacturers, was struggling with inefficient
                  production processes that were causing significant delays in delivery and customer dissatisfaction.
                </p>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  The company's manual tracking of samples and inventory was causing errors and bottlenecks throughout
                  their production line, resulting in:
                </p>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span>Frequent production delays and missed deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span>High material wastage due to poor planning</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span>Quality control issues and customer complaints</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    </div>
                    <span>Lack of real-time visibility into production status</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Manufacturing+Challenges"
                  alt="Manufacturing Challenges"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Approach</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=600&text=StitchIT+Solution"
                  alt="StitchIT Solution"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                  We implemented StitchIT with a comprehensive focus on sample management, inventory tracking, and
                  production planning. The solution was carefully customized to match Fashion Forward's specific
                  workflow and seamlessly integrated with their existing systems.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Automated Sample Management</h4>
                      <p className="text-slate-600">Streamlined sample tracking from design to production approval</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Real-time Inventory Control</h4>
                      <p className="text-slate-600">Live tracking of materials and finished goods inventory</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Production Planning & Scheduling</h4>
                      <p className="text-slate-600">Optimized production schedules based on capacity and demand</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Quality Control Integration</h4>
                      <p className="text-slate-600">Built-in quality checkpoints throughout the production process</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implementation Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Implementation Timeline</h2>
            <div className="space-y-6">
              {implementationSteps.map((step, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-4">
                          <span className="text-orange-600 font-semibold">{index + 1}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">{step.phase}</h3>
                      </div>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    <p className="text-slate-600 ml-12">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16">
            <Card className="border-0 shadow-xl bg-slate-50">
              <CardContent className="p-8 relative">
                <Quote className="h-12 w-12 text-orange-300 absolute -top-2 -left-2" />
                <blockquote className="text-xl text-slate-700 italic mb-6 pl-8">
                  "StitchIT has completely transformed our manufacturing process. We've seen remarkable improvements in
                  efficiency and our customers are happier with faster delivery times. The ROI was evident within the
                  first quarter of implementation."
                </blockquote>
                <div className="flex items-center pl-8">
                  <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Rajesh Sharma</p>
                    <p className="text-slate-600">Operations Director, Fashion Forward Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results & Impact */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Operational Improvements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                      <span>35% increase in production efficiency</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                      <span>45% reduction in lead time</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                      <span>25% reduction in material waste</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="h-5 w-5 text-green-500 mr-3" />
                      <span>20% improvement in quality score</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Business Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Improved customer satisfaction scores</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Reduced operational costs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Enhanced competitive positioning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Scalable foundation for future growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="container mx-auto px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedCaseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-slate-100 text-slate-700">{study.industry}</Badge>
                  <h3 className="font-semibold text-slate-900 mb-2">{study.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{study.company}</p>
                  <Link href={study.slug}>
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">Read Case Study</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Manufacturing?</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Join Fashion Forward Inc. and hundreds of other businesses that have achieved remarkable results with
              StitchIT.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}
