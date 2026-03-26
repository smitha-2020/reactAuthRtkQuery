import ViewMyProjects from "./ViewMyProjects";
import UIRowCenter from "./ui/UIRowCenter";

const About = () => {
  return (
    <div className="about text-light py-5 mb-5" id="about">
      <div className="container">
        <div className="row d-flex flex-column">
          <UIRowCenter style="col pb-5 fw-bolder">
            <h3> ABOUT ME</h3>
          </UIRowCenter>

          <div
            className="py-2 px-md-0 mb-5 font-dancing-script lh-sm"
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          >
            <p className="text-start ">
              Hello, 👋 My name is Smitha and Having been lived in Helsinki for
              the past eight years and with over five years of experience
              developing frontend, backend and mobile applications, I am excited
              about the opportunity to contribute to a company that is shaping
              how technology simplifies everyday life for people around the
              world.
            </p>
            <p className="text-start ">
              In am a versatile software engineer with 5+ years of experience in
              frontend and mobile development using React, React Native, and
              Ionic. Proficient in TypeScript/JavaScript and Node.js, with
              experience building scalable APIs and responsive user interfaces.
              Familiar with CI/CD pipelines, automated deployments, and
              databases including PostgreSQL and MongoDB. Strong collaborator,
              comfortable working with cross-functional teams and client
              stakeholders. I have experience collaborating closely with
              development teams to implement new features, improve application
              performance, and create intuitive user experiences. Working on
              enterprise-level applications has strengthened my ability to write
              clean, maintainable code and contribute effectively in agile,
              team-oriented environments. Experience of worknig with AWS cloud
              solutions(Ec2, Lighsail, Lambda functions,S3) and Docker.
            </p>
            <p className="text-start">
              Below are listed a few projects which i developed in my spare
              time. Please have a look.
            </p>
          </div>
          <UIRowCenter style="col">
            <ViewMyProjects />
          </UIRowCenter>
        </div>
      </div>
    </div>
  );
};

export default About;
