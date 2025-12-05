import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import styles from "./styles.module.css";

const { containerServices, card, icon } = styles;

const servicesdata = [
  {
    id: 1,
    icon: <MdDesignServices />,
    title: "Web Design",
    disc: "Creating visually appealing and user-friendly website designs that engage your audience and enhance your brand presence.",
  },
  {
    id: 2,
    icon: <IoIosRocket />,
    title: "Fast Performance",
    disc: "Building high-speed, optimized websites that load quickly and deliver seamless user experiences across all devices.",
  },
  {
    id: 3,
    icon: <FaCode />,
    title: "Clean Code",
    disc: "Writing maintainable, well-structured code with best practices that ensures scalability, readability, and easy collaboration for future development.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="topSection">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container">
        <div className={containerServices}>
          {servicesdata.map((el) => (
            <article key={el.id} className={card}>
              <div className={icon}>{el.icon}</div>

              <h3>{el.title}</h3>
              <p className="text-light">{el.disc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
