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
import { useState } from "react"
import BookingDialog from "./components/BookingDialog"

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)

  const openBooking = () => setBookingOpen(true)
  const handleBookingChange = (open) => setBookingOpen(open)

  return (
    <div className="w-screen min-w-0 overflow-x-hidden">
      <Navbar onOpenBooking={openBooking} />
      <Hero onOpenBooking={openBooking} />
      <WhatIsIncluded />
      <Benefits/>
      <HowItWorks />
      <WhoWeHelp />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsApp/>
      <BookingDialog open={bookingOpen} onOpenChange={handleBookingChange} />
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
