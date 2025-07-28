import { useContext } from "react";
import ProjectsItems from "../assets/ProjectItems";
import ProjectCard from "./ProjectCard";
import { ThemeContext } from "./ThemeContextProvider";
const MyProjects = () => {
  const appContext = useContext(ThemeContext);
  return (
    <div id="projects">
      <div className="container card-main">
        <h3 className="mb-3 proj-card-title">
          {appContext?.theme.toUpperCase()}'s Projects
        </h3>
        <div className="row g-2">
          {ProjectsItems.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
