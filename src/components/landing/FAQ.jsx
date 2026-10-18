import { ArrowUpRight, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { faqs } from "./content";
import { SectionLabel } from "./shared";

export default function FAQ({ onContact }) {
  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-layout">
        <div>
          <SectionLabel>A LITTLE MORE CLARITY</SectionLabel>
          <h2>
            Good questions.
            <br />
            <span className="serif-word">Honest answers.</span>
          </h2>
          <p>
            Taking your business online is a big step.
            <br />
            Let’s make it a little less mysterious.
          </p>
          <div className="faq-contact">
            <MessageCircle size={21} />
            <span>
              Something else on your mind?
              <button onClick={onContact}>
                Ask us directly
                <ArrowUpRight size={15} />
              </button>
            </span>
          </div>
        </div>
        <Accordion
          type="single"
          collapsible
          defaultValue="faq-0"
          className="faq-list"
        >
          {faqs.map(([question, answer], i) => (
            <AccordionItem value={`faq-${i}`} key={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
