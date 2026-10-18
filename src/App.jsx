import { useRef, useState } from "react";
import Header from "./components/landing/Header";
import Hero from "./components/landing/Hero";
import Services from "./components/landing/Services";
import Portfolio from "./components/landing/Portfolio";
import Process from "./components/landing/Process";
import Pricing from "./components/landing/Pricing";
import Team from "./components/landing/Team";
import FAQ from "./components/landing/FAQ";
import Footer from "./components/landing/Footer";
import FloatingWhatsApp from "./components/landing/FloatingWhatsApp";
import ConsultationDialog from "./components/landing/ConsultationDialog";
import ContactDialog from "./components/landing/ContactDialog";
import ProjectDialog from "./components/landing/ProjectDialog";
import "./App.css";

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [project, setProject] = useState(null);
  const returnFocusRef = useRef(null);
  const rememberFocus = () => {
    returnFocusRef.current = document.activeElement;
  };
  const openBooking = () => {
    rememberFocus();
    setBookingOpen(true);
  };
  const openContact = () => {
    rememberFocus();
    setContactOpen(true);
  };
  const restoreFocus = () =>
    requestAnimationFrame(() => {
      if (returnFocusRef.current?.isConnected) returnFocusRef.current.focus();
      else document.querySelector(".mobile-menu-button")?.focus();
    });
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header onBooking={openBooking} />
      <main id="main">
        <Hero onBooking={openBooking} />
        <Services onBooking={openBooking} />
        <Portfolio
          onProject={(value) => {
            rememberFocus();
            setProject(value);
          }}
        />
        <Process onBooking={openBooking} />
        <Pricing onBooking={openBooking} />
        <Team />
        <FAQ onContact={openContact} />
      </main>
      <Footer onBooking={openBooking} onContact={openContact} />
      <FloatingWhatsApp />
      <ConsultationDialog
        open={bookingOpen}
        onOpenChange={(value) => {
          setBookingOpen(value);
          if (!value) restoreFocus();
        }}
      />
      <ContactDialog
        open={contactOpen}
        onOpenChange={(value) => {
          setContactOpen(value);
          if (!value) restoreFocus();
        }}
      />
      <ProjectDialog
        project={project}
        onOpenChange={(value) => {
          if (!value) {
            setProject(null);
            restoreFocus();
          }
        }}
      />
    </>
  );
}
