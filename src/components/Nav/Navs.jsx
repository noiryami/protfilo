import { useState } from "react";

import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

import styles from "./styles.module.css";

const { navs, active } = styles;

const Navs = () => {

  const [isActive, setIsActive] = useState("#");
  
   
  return (
    <div className={navs}>
      <a
        className={isActive === "#" ? active : ""}
        href="#"
        onClick={() => setIsActive("#")}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={isActive === "#about" ? active : ""}
        onClick={() => setIsActive("#about")}
      >
        <LuUserRound />
      </a>
      <a
        href="#services"
        className={isActive === "#services" ? active : ""}
        onClick={() => setIsActive("#services")}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        className={isActive === "#projects" ? active : ""}
        onClick={() => setIsActive("#projects")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={isActive === "#contact" ? active : ""}
        onClick={() => setIsActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </div>
  );
};

export default Navs;
