import ViewMyProjects from "./ViewMyProjects";
import UIRowCenter from "./ui/UIRowCenter";

const About = () => {
  return (
    <section
      className="about portfolio-section mb-5"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <header className="section-heading">
          <p className="section-heading__eyebrow">Profile</p>
          <h2 id="about-heading" className="section-heading__title">
            About me
          </h2>
          <div className="section-heading__line" aria-hidden />
        </header>

        <div className="about-prose px-3 px-md-4 mb-5">
          <p className="text-start">
            Hello, 👋 My name is Smitha. I have lived in Helsinki for the past
            eight years and bring over five years of experience developing
            frontend, backend, and mobile applications. I am motivated to
            contribute to teams that shape how technology simplifies everyday
            life.
          </p>
          <p className="text-start">
            I am a versatile software engineer with 5+ years of experience in
            frontend and mobile development using React, React Native, and
            Ionic. I work comfortably with TypeScript/JavaScript and Node.js,
            and I have built scalable APIs and responsive interfaces. I am
            familiar with CI/CD, automated deployments, and databases including
            PostgreSQL and MongoDB. I collaborate well with cross-functional
            teams and stakeholders, and I care about performance, maintainable
            code, and intuitive UX in agile environments. I have worked with
            AWS (EC2, Lightsail, Lambda, S3) and Docker.
          </p>
          <p className="text-start mb-0">
            Below are a few projects I developed in my spare time — have a look.
          </p>
        </div>

        <UIRowCenter style="col">
          <ViewMyProjects />
        </UIRowCenter>
      </div>
    </section>
  );
};

export default About;
