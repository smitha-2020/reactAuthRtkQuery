import { useContext, type CSSProperties } from "react";
import SkillsItems from "../assets/SkillsItems";
import { ThemeContext } from "./ThemeContextProvider";

const Skills = () => {
  const appContext = useContext(ThemeContext);

  return (
    <section
      id="skills"
      className="skills portfolio-section py-5 mb-5"
      aria-labelledby="skills-heading"
    >
      <div className="container card-main">
        <header className="section-heading">
          <p className="section-heading__eyebrow">Toolkit</p>
          <h2 id="skills-heading" className="section-heading__title">
            {appContext?.name}&apos;s skills
          </h2>
          <div className="section-heading__line" aria-hidden />
        </header>
        <div className="row g-3" data-testid="skillsItems">
          {SkillsItems.map((skill, index) => (
            <div key={skill.id} className="col-6 col-md-4 col-lg-3">
              <div
                className="skill-chip text-center"
                style={
                  {
                    "--skill-delay": `${index * 0.06}s`,
                  } as CSSProperties
                }
              >
                {skill.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
