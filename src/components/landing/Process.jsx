import { MessageCircle, Rocket, Layers3 } from "lucide-react";
import { SectionLabel, BookingButton } from "./shared";

export default function Process({ onBooking }) {
  const steps = [
    {
      icon: MessageCircle,
      title: "First, we get to know you.",
      text: "A friendly chat about your business, your goals, and what you have in mind. No tech jargon. No pressure.",
      detail: "A free consultation",
    },
    {
      icon: Layers3,
      title: "Then, we bring it to life.",
      text: "We design and build your website around your brand, keeping you in the loop and making room for your feedback.",
      detail: "Designed together",
    },
    {
      icon: Rocket,
      title: "And just like that, you’re live.",
      text: "We handle the launch and walk you through your new website. Your business is ready for its next chapter.",
      detail: "4 working days to launch",
    },
  ];
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel>LESS COMPLICATED. MORE YOU.</SectionLabel>
            <h2>
              From “I need a website”
              <br />
              to <span className="serif-word">“that’s my website.”</span>
            </h2>
          </div>
          <BookingButton onClick={onBooking} className="outline-action">
            Start the conversation
          </BookingButton>
        </div>
        <div className="steps-grid">
          {steps.map(({ icon: Icon, title, text, detail }, i) => (
            <article className="step-card" key={title}>
              <div className="step-top">
                <span>0{i + 1}</span>
                <Icon size={25} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="step-detail">
                <span />
                {detail}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
