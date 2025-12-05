
import IMage from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import styles from './styles.module.css';
const {about,topSection,aboutContainer,aboutMe,aboutMeImage,aboutContent,aboutCards,aboutCard,aboutIcon } = styles;

const AboutMe = () => {
  return (
    <section className={about} id="about">
      <div className={topSection}>
        <h5>Get to know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container">
        <div className={aboutContainer}>
          <div className={aboutMe}>
            <div className={aboutMeImage}>
              <img src={IMage} alt="About Me" />
            </div>
          </div>
          <div className={aboutContent}>
            <div className={aboutCards}>
              <div className={aboutCard}>
                <FaAward className={aboutIcon} />
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </div>
              <div className={aboutCard}>
                <FiUsers className={aboutIcon} />
                <h5>Clients</h5>
                <small>0</small>
              </div>
              <div className={aboutCard}>
                <VscFolderLibrary className={aboutIcon} />
                <h5>Projects</h5>
                <small>2 Completed</small>
              </div>
            </div>

            <p>
              I'm a 24-year-old Front-End Developer specializing in building
              modern, responsive web applications. Skilled in React,
              JavaScript, HTML, CSS, and Vite, I craft seamless user
              interfaces with attention to detail and performance. I'm
              comfortable deploying projects on platforms like Vercel, and I
              enjoy working with both static and dynamic data. My focus is on
              creating visually engaging, user-friendly experiences that balance
              design and functionality.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe