import { ArrowUpRight, MapPin } from "lucide-react";
import { SectionLabel } from "./shared";

export default function Team() {
  const people = [
    {
      name: "Joel C. Anih",
      role: "UI/UX Designer",
      imageKey: "joel",
      image: "/images/optimized/joel.webp",
      href: "https://www.linkedin.com/in/joel-anih-70655214b",
    },
    {
      name: "Lotanna C. Iwuanyanwu",
      role: "Software Engineer",
      imageKey: "lotta",
      image: "/images/optimized/lotta.webp",
      href: "https://www.linkedin.com/in/lotanna-chuka-4075591b3",
    },
    {
      name: "Noble Nnamani",
      role: "Brand Designer",
      imageKey: "noble",
      image: "/images/optimized/noble.webp",
      href: "https://www.linkedin.com/in/noble-nnamani-8baba8151",
    },
  ];
  return (
    <section id="team" className="section team-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel>THE PEOPLE BEHIND THE PIXELS</SectionLabel>
            <h2>
              Small team.
              <br />
              <span className="serif-word">Personally invested.</span>
            </h2>
          </div>
          <p>
            Designers. Builders. Your biggest cheerleaders. <br />
            We care about your business like it’s our own.
          </p>
        </div>
        <div className="team-grid">
          {people.map((person) => (
            <a
              className="team-card"
              key={person.name}
              href={person.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name}, ${person.role}, on LinkedIn (opens in a new tab)`}
            >
              <div className={`team-image team-${person.imageKey}`}>
                <img
                  src={person.image}
                  alt={person.name}
                  loading="lazy"
                  decoding="async"
                  width="1024"
                  height="1024"
                />
                <span aria-hidden="true">
                  <ArrowUpRight size={20} />
                </span>
              </div>
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </a>
          ))}
        </div>
        <div className="team-location">
          <MapPin size={15} /> Rooted in Nigeria. Building for your next
          chapter.
        </div>
      </div>
    </section>
  );
}
