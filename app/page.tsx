import ImprovedHomepage from "../improved-homepage"
import SolutionTickers from "../components/solution-tickers"
import SEOOptimizedContent from "../components/seo-optimized-content"

export default function Page() {
  return (
    <div>
      <SEOOptimizedContent />
      <ImprovedHomepage />
      <SolutionTickers />
    </div>
  )
}
