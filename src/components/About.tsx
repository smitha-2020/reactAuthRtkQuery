import ViewMyProjects from "./ViewMyProjects";

const About = () => {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="row d-flex flex-column">
          <div className="col d-flex flex-row justify-content-center pb-5 fw-bolder">
            <h3> ABOUT US</h3>
          </div>
          <div
            className="col py-2 px-md-0 mb-5"
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          >
            <p className="text-start lh-lg">
              Hello, welcome to my LinkedIn profile. My name is Smitha, a
              software developer, specializing in various technologies.
            </p>
            <p className="text-start lh-lg">
              For the past 5 years, I have worked across diverse technologies
              like React Native,React, Vue.js,Redux/RTKQuery Python. Databases
              like MySQL, InfluxDB .AWS cloud solutions(Ec2, Lighsail, Lambda
              functions,S3) and Docker.
            </p>
            <p className="text-start lh-lg">
              I am enthusiastic and a quick learner and have good communication
              skills in English.
            </p>
          </div>
          <div className="col d-flex flex-row justify-content-center">
            <ViewMyProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
