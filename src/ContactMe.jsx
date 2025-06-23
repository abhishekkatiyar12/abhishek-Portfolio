import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactMe.module.css";

function ContactMe() {
  const [message, setMessage] = useState("");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_8v6671n",
      "template_5lipqj6",
      formRef.current,
      "vLRmu9beeHruddK2m"
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current.reset();
      setMessage("");
    })
    .catch((error) => {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    });
  };

  return (
    <>
      <div className={styles.ContactMe}>
        <h1>Contact Me</h1>
        <p>
          I'm always eager to explore new opportunities and take on exciting projects.
          If you have something in mind, or just want to say hi, feel free to send me a message.
        </p>
        <form ref={formRef} onSubmit={sendEmail}>
          <div className={styles.outer}>
            <div className={styles.upper}>
              <div className={styles.upperLeft}>
                <label htmlFor="name">Name</label>
                <input id="name" name="from_name" placeholder="Your Name" required />
              </div>
              <div className={styles.upperRight}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="from_email" placeholder="johndoe@doe.com" required />
              </div>
            </div>

            <div className={styles.lower}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hello there, I would like to ask you about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={500}
                required
              />
              <div className={styles.charCount}>
                {message.length}/500 characters
              </div>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>

      <div className={styles.connectSection}>
        <p>or Connect with me on</p>
        <div className={styles.socialLinks}>
          <a href="https://www.linkedin.com/in/abhishekkatiyar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/abhishekkatiyar12" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:abhishekatiyarr@gmail.com">Email</a>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
