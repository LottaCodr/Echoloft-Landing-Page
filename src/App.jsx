import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import MissionVision from "./components/MissionVision"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Portfolio from "./components/Portfolio"
import Team from "./components/Team"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import './App.css'
import OurStory from "./components/OurStory"
import WhatWeDo from "./components/WhatWeDo"
import WhatIsIncluded from "./components/WhatIsIncluded"
import Benefits from "./components/Benefits"
import WhoWeHelp from "./components/WhoWeHelp"
import FAQ from "./components/FAQ"
import CTA from "./components/CTA"
import WhatsApp from "./components/WhatsApp"

export default function App() {
  return (
    <div className="w-screen min-w-0 overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatIsIncluded />
      <Benefits/>
      <HowItWorks />
      <WhoWeHelp />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsApp/>
      {/* <OurStory />
      <WhatWeDo />
      <About />
      <MissionVision />
      <Features />
      <Portfolio />
      <Team />
      <Pricing /> */}
    </div>
  )
}
