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
            className="py-2 px-md-0 mb-5"
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          >
            <p className="text-start lh-lg">
              Hello, welcome to my profile. My name is Smitha, a Frontend
              Developer & Enthusiast , specializing in various technologies.
            </p>
            <p className="text-start lh-lg">
              For the past 5 years, I have worked across diverse technologies
              including React Native,React, Vue.js,Redux/RTKQuery,Python. UI
              Libraries like React Native Paper and react bootstrap .Databases
              such as MySQL, InfluxDB and PostgresSql .AWS cloud solutions(Ec2,
              Lighsail, Lambda functions,S3) and Docker.
            </p>
            <p className="text-start lh-lg">
              Below are listed a few projects which i developed in my spare
              time. Please have a look.
            </p>
            <p className="text-start lh-lg">
              I am enthusiastic and a quick learner and have good communication
              skills in English.
            </p>
            <p className="text-start lh-lg">
              Also I am a Finnish Citizen and Do you not need any Work Visa.
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
