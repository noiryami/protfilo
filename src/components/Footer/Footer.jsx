import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import styles from "./styles.module.css";

const { footerLogo, permalinks, footerSocials, footerCopyright } = styles;

const Footer = () => {
  return (
    <footer>
      <a href="#" className={footerLogo}>
        Muhammad Kamel
      </a>

      <ul className={permalinks}>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={footerSocials}>
        <a href="https://www.facebook.com/noiryami" target="_blank">
          <FaFacebookF />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=201121016866"
          target="_blank"
        >
          <FaWhatsapp />
        </a>
      </div>

      <div className={footerCopyright}>
        <small>
          &copy; <a href="#">Muhammad Kamel</a> All rights reseved
        </small>
      </div>
    </footer>
  );
};

export default Footer;
