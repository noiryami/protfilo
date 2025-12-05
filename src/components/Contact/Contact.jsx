import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

import styles from "./styles.module.css";
import { useRef } from "react";

const { contact, containerContact, contactOptions, contactOption } = styles;

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "mahmedkamel388@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=mahmedkamel388@gmail.com",
    isEmail: true,
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Muhammad Kamel",
    link: "https://m.me/noiryami",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "011 2101 6866",
    link: "https://api.whatsapp.com/send?phone=201121016866",
  },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_v11sb4p",
      "template_9tov0va",
      form.current,
      "KIbsXtOw371WH0BYk"
    );
    e.target.reset();
  };

  return (
    <section className={contact} id="contact">
      <div className="topSection">
        <h5>Get in Touch</h5>
        <h2>Contact Me</h2>
      </div>

      <div className="container">
        <div className={containerContact}>
          <div className={contactOptions}>
            {ContactData.map((el) => (
              <article key={el.id} className={contactOption}>
                {el.icon}
                <h4>{el.title}</h4>
                <h5>{el.info}</h5>
                <a href={el.link} target="_blank" rel="noopener noreferrer">
                  Send Message
                </a>
              </article>
            ))}
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Full Name" name="name" />
            <input type="email" placeholder="Your Email" name="email" />
            <textarea
              rows={10}
              name="message"
              placeholder="Enter Your Message"
            ></textarea>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
