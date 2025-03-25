import Hero from "./components/Hero"
import FeaturedBots from "./components/FeaturedBots"
import ProblemSolution from "./components/ProblemSolution"
import AISalesAgents from "./components/AISalesAgents"
import CustomerUseCase from "./components/CustomerUseCase"
import SeamlessIntegration from "./components/SeamlessIntegration"
import ProvenResults from "./components/ProvenResults"
import FeaturesHighlight from "./components/FeaturesHighlight"
import HowItWorks from "./components/HowItWorks"
import EarlyReviews from "./components/EarlyReviews"
import ContactUs from "./components/ContactUs"
import Promise from "./components/Promise"
import Comparison from "./components/Comparison"
import PerfectFor from "./components/PerfectFor"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <section id="hero">
        <Hero />
      </section>
      <ProblemSolution />
      <section id="ai-sales-agents">
      <AISalesAgents />
      </section>
      <section id="use-cases">
      <FeaturesHighlight />
      </section>
      <section id="featured-bots">
        <FeaturedBots />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="integrations">
        <SeamlessIntegration />
      </section>
      <Promise />
      <section id="hire-us">
      <Comparison />
      </section>
      <PerfectFor />
      {/* <section id="pricing">
      <Pricing />
      </section> */}
      <EarlyReviews />
      <FAQ />
      <section id="contact-us">
        <ContactUs />
      </section>
    </main>
  )
}

