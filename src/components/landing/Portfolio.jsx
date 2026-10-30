import { ArrowUpRight } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { projects } from "./content";
import { SectionLabel, BrowserBar } from "./shared";

export default function Portfolio({ onProject }) {
  const filters = [
    ["all", "All projects"],
    ["business", "Business & services"],
    ["food", "Food & hospitality"],
    ["education", "Education"],
  ];
  const subsets = {
    all: projects,
    business: [projects[1]],
    food: [projects[0]],
    education: [projects[2]],
  };
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <SectionLabel>A FEW THINGS WE’VE BUILT</SectionLabel>
            <h2>
              Good businesses.
              <br />
              <span className="serif-word">Great first impressions.</span>
            </h2>
          </div>
          <p>
            Different businesses. Different stories. <br />
            The same attention to every little detail.
          </p>
        </div>
        <Tabs defaultValue="all">
          <TabsList aria-label="Filter portfolio by industry">
            {filters.map(([value, label]) => (
              <TabsTrigger key={value} value={value}>
                {label}
                {value === "all" && <span>03</span>}
              </TabsTrigger>
            ))}
          </TabsList>
          {filters.map(([value]) => (
            <TabsContent key={value} value={value}>
              <div className="project-grid">
                {subsets[value].map((project) => (
                  <button
                    className="project-card"
                    key={project.id}
                    onClick={() => onProject(project)}
                    aria-label={`View ${project.name} project`}
                  >
                    <div className={`project-preview ${project.color}`}>
                      <span className="project-preview-label">
                        {project.category}
                      </span>
                      <div className="project-browser">
                        <BrowserBar
                          domain={
                            project.id === "canadian"
                              ? "canadianburger.com"
                              : project.id === "ecoprime"
                                ? "ecoprime.com"
                                : "wapmentors.com"
                          }
                        />
                        <div className="project-image">
                          <img
                            src={project.image}
                            alt={`${project.name} website design preview`}
                            loading="lazy"
                            width="1125"
                            height={
                              project.id === "canadian"
                                ? "3668"
                                : project.id === "ecoprime"
                                  ? "1945"
                                  : "1566"
                            }
                          />
                        </div>
                      </div>
                      <span className="view-project">
                        Explore project
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <div className="project-meta">
                      <div>
                        <h3>{project.name}</h3>
                        <p>{project.tags.join(" · ")}</p>
                      </div>
                      <span>
                        <ArrowUpRight size={22} />
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        <p className="portfolio-note">
          Your business could be our next favourite project.{" "}
          <button
            onClick={() =>
              document.getElementById("pricing")?.scrollIntoView({
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "instant"
                  : "smooth",
              })
            }
          >
            Let’s make it happen
            <ArrowUpRight size={15} />
          </button>
        </p>
      </div>
    </section>
  );
}
