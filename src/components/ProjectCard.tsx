import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import type { ProjectItemProps } from "../types/type";

const ProjectCard = ({ proj }: { proj: ProjectItemProps }) => {
  return (
    <div className="col-md-12 proj-card" key={proj.id}>
      <Card className={" border-light  shadow "}>
        <Row>
          <Col md={5} className="project-card-img-col">
            <Card.Img
              variant="top"
              src={proj.projectImg}
              className="project-card-img"
            />
          </Col>
          <Col md={7}>
            <Card.Body>
              <div className="proj-card-title">
                <Card.Title className="proj-title  text-capitalize fs-3 text-custom-color">
                  {proj.projectTitle}
                </Card.Title>
              </div>
              <Card.Text className="text-body-secondary">
                {proj.projectDescription}
              </Card.Text>
              <div className="proj-card-button">
                <Button href={proj.projectLink} target="_blank" variant="flat">
                  Project Details
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProjectCard;
