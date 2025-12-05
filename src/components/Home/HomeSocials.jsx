import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import styles from './styles.module.css';
const {home_socials} = styles;
const HomeSocials = () => {
  return (
    <div className={home_socials}>
    <a href='https://www.linkedin.com/in/noiryami/' target='_blank' rel="noreferrer"><FaLinkedin /></a>
    <a href='https://github.com/noiryami' target='_blank' rel='noreferrer' ><FaGithub /> </a>
    <a href='https://dribbble.com/noiryami' target='_blank' rel="noreferrer"><SiFreelancer /></a>
  </div>
  )
}

export default HomeSocials