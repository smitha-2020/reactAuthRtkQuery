import ProjectsItems from "../assets/ProjectItems";
import ProjectCard from "./ProjectCard";
const MyProjects = () => {
  return (
    <div>
      <div className="container card-main">
        <div className="row g-5">
          {ProjectsItems.map((proj) => (
            <ProjectCard key={proj.id} proj={proj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
