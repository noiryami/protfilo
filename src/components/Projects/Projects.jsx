import portfolioDataType from "../Data/portfolioDataType";

import styles from "./styles.module.css";

const {
  projects,
  containerProjects,
  protfolioItem,
  protfolioItemImage,
  protfolioItemBtns,
} = styles;

const portfolioData = portfolioDataType;

const Projects = () => {
  return (
    <section className={projects} id="projects">
      <div className="topSection">
        <h5>What Skills I Have</h5>
        <h2>My Expreience</h2>
      </div>

      <div className="container">
        <div className={containerProjects}>
          {portfolioData.map((el) => (
            <article key={el.id} className={protfolioItem}>
              <div className={protfolioItemImage}>
                <img src={el.image} alt={el.title} />
              </div>
              <h3>{el.title}</h3>
              <div className={protfolioItemBtns}>
                <a href={el.github} target="_blank" className="btn">
                  GitHub
                </a>
                <a href={el.demo} target="_blank" className="btn btn-primary">
                  Live demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
