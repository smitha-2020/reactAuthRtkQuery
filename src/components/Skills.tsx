import { useContext, type CSSProperties } from "react";
import SkillsItems from "../assets/SkillsItems";
import { ThemeContext } from "./ThemeContextProvider";

const Skills = () => {
  const appContext = useContext(ThemeContext);

  return (
    <div id="skills" className="skills py-5 mb-5">
      <div className="container card-main">
        <h3 className="mb-4 proj-card-title">
          {appContext?.name.toUpperCase()}&apos;s Skills
        </h3>
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
    </div>
  );
};

export default Skills;
