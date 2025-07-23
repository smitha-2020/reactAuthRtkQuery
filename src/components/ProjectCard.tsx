import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import type { ProjectItemProps } from "../types/type";

const ProjectCard = ({ proj }: { proj: ProjectItemProps }) => {
  return (
    <div className="col-md-6" key={proj.id}>
      <Card className={"shadow "}>
        <Card.Img variant="top" src={proj.projectImg} />
        <Card.Body>
          <div className="card-title">
            <Card.Title className="proj-title text-capitalize fs-3">
              {proj.projectTitle}
            </Card.Title>
          </div>
          <Card.Text>{proj.projectDescription}</Card.Text>
          <div className="card-title">
            <Button variant="primary">Go somewhere</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
