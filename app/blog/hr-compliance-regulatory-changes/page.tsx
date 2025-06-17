import Image from "next/image"
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import EnhancedHeader from "../../../components/enhanced-header"
import EnhancedFooter from "../../../components/enhanced-footer"
import Link from "next/link"

export default function HRComplianceBlogPost() {
  const relatedPosts = [
    {
      title: "How Industry 4.0 is Transforming Garment Manufacturing",
      slug: "/blog/industry-4-0-transforming-garment-manufacturing",
      category: "Industry Insights",
      readTime: "8 min read",
    },
    {
      title: "The Future of E-commerce: Trends to Watch in 2024",
      slug: "/blog/future-of-ecommerce-trends-2024",
      category: "E-commerce",
      readTime: "7 min read",
    },
    {
      title: "Digital Transformation Success Stories: Lessons from Indian SMEs",
      slug: "/blog/digital-transformation-success-stories",
      category: "Case Studies",
      readTime: "10 min read",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50">
      <EnhancedHeader />

      {/* Back Button */}
      <section className="container mx-auto px-4 py-8">
        <Link href="/blog">
          <Button variant="ghost" className="text-orange-600 hover:text-orange-700 hover:bg-orange-50">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>
      </section>

      {/* Article Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">HR & Compliance</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            HR Compliance: Navigating the Latest Regulatory Changes
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Lakshmi Narayanan</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>May 20, 2024</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>9 min read</span>
            </div>
            <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
              <Share2 className="h-4 w-4 mr-1" />
              Share
            </Button>
          </div>

          <div className="aspect-video relative mb-8 rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=HR+Compliance+Guide"
              alt="HR Compliance Guide"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Staying compliant with HR regulations in India is becoming increasingly complex. With frequent updates to
              labor laws and new compliance requirements, businesses need to stay informed and adapt quickly to avoid
              penalties and legal issues.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Changes in Indian Labor Laws</h2>
            <p className="text-slate-700 mb-6">
              The Indian government has introduced several significant changes to labor laws in recent years. These
              changes affect various aspects of employment, from wages and working hours to social security and
              industrial relations.
            </p>

            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-800 mb-2">⚠️ Critical Updates</h3>
              <ul className="text-red-700">
                <li>• New Code on Wages (2019) - Minimum wage standardization</li>
                <li>• Industrial Relations Code (2020) - Strike and lockout regulations</li>
                <li>• Social Security Code (2020) - Extended coverage for gig workers</li>
                <li>• Occupational Safety Code (2020) - Enhanced workplace safety requirements</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Compliance Areas</h2>

            <h3 className="text-2xl font-semibold text-slate-800 mb-3">1. Wage and Hour Compliance</h3>
            <p className="text-slate-700 mb-4">
              The new wage codes have standardized minimum wage calculations across states. Employers must ensure:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700">
              <li>Proper calculation of overtime payments</li>
              <li>Timely payment of wages (within 7 days for less than 1000 employees)</li>
              <li>Maintenance of accurate wage records</li>
              <li>Compliance with working hour limits (9 hours per day, 48 hours per week)</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mb-3">2. Social Security Compliance</h3>
            <p className="text-slate-700 mb-6">
              The Social Security Code has expanded coverage to include gig workers and platform workers. Key
              requirements include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-slate-700">
              <li>EPF registration for all eligible employees</li>
              <li>ESI coverage for establishments with 10+ employees</li>
              <li>Gratuity provisions for establishments with 10+ employees</li>
              <li>New social security schemes for gig and platform workers</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mb-3">3. Workplace Safety and Health</h3>
            <p className="text-slate-700 mb-6">
              The Occupational Safety, Health and Working Conditions Code has introduced stricter safety requirements:
            </p>

            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Safety Checklist</h4>
              <ul className="text-green-700">
                <li>✓ Annual safety audits for factories</li>
                <li>✓ Safety committees in establishments with 500+ workers</li>
                <li>✓ Mandatory safety training programs</li>
                <li>✓ Incident reporting within 24 hours</li>
                <li>✓ Regular health check-ups for workers in hazardous industries</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technology Solutions for Compliance</h2>
            <p className="text-slate-700 mb-6">
              Managing compliance manually is no longer feasible for growing businesses. Technology solutions can help
              automate compliance processes and reduce the risk of violations.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mb-3">Automated Compliance Features</h3>
            <ul className="list-disc pl-6 mb-6 text-slate-700">
              <li>Real-time wage calculation with overtime tracking</li>
              <li>Automated statutory deduction calculations</li>
              <li>Compliance dashboard with alerts and notifications</li>
              <li>Digital record keeping with audit trails</li>
              <li>Automated report generation for government filings</li>
            </ul>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">How HR TECH Ensures Compliance</h3>
              <p className="text-slate-700">
                Our HR TECH platform is designed with compliance at its core. It automatically updates with the latest
                regulatory changes, ensures accurate calculations, and provides comprehensive reporting to keep your
                business compliant with all HR regulations.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Best Practices for HR Compliance</h2>
            <ol className="list-decimal pl-6 mb-6 text-slate-700">
              <li>
                <strong>Stay Updated:</strong> Subscribe to regulatory updates and maintain a compliance calendar
              </li>
              <li>
                <strong>Document Everything:</strong> Maintain detailed records of all HR processes and decisions
              </li>
              <li>
                <strong>Regular Audits:</strong> Conduct internal compliance audits quarterly
              </li>
              <li>
                <strong>Employee Training:</strong> Train managers on compliance requirements
              </li>
              <li>
                <strong>Technology Investment:</strong> Use automated systems to reduce human error
              </li>
              <li>
                <strong>Legal Consultation:</strong> Maintain relationships with employment law experts
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Compliance Mistakes to Avoid</h2>
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <ul className="text-yellow-800">
                <li>• Misclassifying employees as contractors</li>
                <li>• Incorrect overtime calculations</li>
                <li>• Delayed statutory payments</li>
                <li>• Inadequate record keeping</li>
                <li>• Ignoring state-specific regulations</li>
                <li>• Failing to update policies with law changes</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mb-4">Conclusion</h2>
            <p className="text-slate-700 mb-6">
              HR compliance is not just about avoiding penalties—it's about creating a fair and safe workplace for your
              employees. By staying informed about regulatory changes and investing in the right technology solutions,
              businesses can ensure compliance while focusing on growth and employee satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="container mx-auto px-4 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-orange-100 text-orange-700">{post.category}</Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">{post.title}</h3>
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <BookOpen className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </div>
                  <Link href={post.slug}>
                    <Button variant="ghost" className="text-orange-600 hover:text-orange-700 p-0">
                      Read More →
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
