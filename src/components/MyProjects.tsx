import { useContext } from "react";
import ProjectsItems from "../assets/ProjectItems";
import ProjectCard from "./ProjectCard";
import { ThemeContext } from "./ThemeContextProvider";

const MyProjects = () => {
  const appContext = useContext(ThemeContext);
  return (
    <section
      id="projects"
      className="portfolio-section"
      aria-labelledby="projects-heading"
    >
      <div className="container card-main">
        <header className="section-heading">
          <p className="section-heading__eyebrow">Selected work</p>
          <h2 id="projects-heading" className="section-heading__title">
            {appContext?.name}&apos;s projects
          </h2>
          <div className="section-heading__line" aria-hidden />
        </header>
        <div className="row g-3 g-md-4" data-testid="projectItems">
          {ProjectsItems.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
