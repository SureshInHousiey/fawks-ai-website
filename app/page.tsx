import dynamic from "next/dynamic"
import Hero from "./components/Hero"
import FeaturedBots from "./components/FeaturedBots"
import CustomerUseCase from "./components/CustomerUseCase"
import SeamlessIntegration from "./components/SeamlessIntegration"
import ProvenResults from "./components/ProvenResults"
import FeaturesHighlight from "./components/FeaturesHighlight"
import HowItWorks from "./components/HowItWorks"
import EarlyReviews from "./components/EarlyReviews"
import ContactUs from "./components/ContactUs"

//const DynamicVoiceChatPopup = dynamic(() => import('./components/VoiceChatPopup'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#0B162C] transition-colors duration-300">
      <section id="hero">
        <Hero />
      </section>
      <section id="featured-bots">
        <FeaturedBots />
      </section>
      <section id="use-cases">
        <CustomerUseCase />
      </section>
      <section id="integrations">
        <SeamlessIntegration />
      </section>
      <ProvenResults />
      <FeaturesHighlight />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <EarlyReviews />
      <section id="contact-us">
        <ContactUs />
      </section>
    </main>
  )
}

