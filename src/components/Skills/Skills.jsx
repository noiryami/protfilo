import SkillsDataType from "../Data/SkillsDataType";

import styles from "./styles.module.css";

const { skills, containerSkills, cardSkill, icon, content } = styles;

const SkillsData = SkillsDataType;

const Skills = () => {
  return (
    <section className={skills} id="skills">
      <div className="topSection">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container">
        <div className={containerSkills}>
          {SkillsData.map((el) => (
            <article className={cardSkill} key={el.id}>
              <div className={icon}>
                <img src={el.image} alt={el.title} />
              </div>
              <div className={content}>
                <h4>{el.title} </h4>
                <p className="text-light">{el.disc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
