import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const WHATSAPP_NUMBER = "+2348130923309" // Replace with your real WhatsApp number (no plus, remove leading zero)
const DEFAULT_MESSAGE =
  "Hello, I'm interested in getting a professional website for my business!"

export default function WhatsApp() {
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg group transition-all duration-300"
        aria-label="Chat with us on WhatsApp"
        tabIndex={0}
      >
        <FaWhatsapp className="text-3xl group-hover:scale-110 transition-transform duration-200" color="#fff" />
        <span className="sr-only">Chat with us on WhatsApp</span>
      </a>
    </div>
  )
}
