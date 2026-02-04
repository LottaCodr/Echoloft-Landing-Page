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
import ContactDialog from "./components/ContactDialog"

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const openBooking = () => setBookingOpen(true)
  const handleBookingChange = (open) => setBookingOpen(open)

  const openContact = () => setContactOpen(true)
  const handleContactChange = (open) => setContactOpen(open)

  return (
    <div className="w-screen min-w-0 overflow-x-hidden">
      <Navbar onOpenBooking={openBooking} />
      <Hero onOpenBooking={openBooking} />
      <WhatIsIncluded />
      <Benefits/>
      <Portfolio />
      <HowItWorks onOpenBooking={openBooking} />
      <WhoWeHelp />
      <FAQ />
      <CTA onOpenBooking={openBooking} onOpenContact={openContact} />
      <Footer />
      <WhatsApp/>
      <BookingDialog open={bookingOpen} onOpenChange={handleBookingChange} />
      <ContactDialog open={contactOpen} onOpenChange={handleContactChange} />
      {/* <OurStory />
      <WhatWeDo />
      <About />
      <MissionVision />
      <Features />
      <Team />
      <Pricing /> */}
    </div>
  )
}
