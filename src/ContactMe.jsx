import React, { useState } from "react";
import styles from "./ContactMe.module.css";

function ContactMe() {
  const [message, setMessage] = useState("");

  return (
    <>
    <div className={styles.ContactMe}>
      <h1>Contact Me</h1>
      <p>
        I'm always eager to explore new opportunities and take on exciting projects.
        If you have something in mind, or just want to say hi, feel free to send me a message.
      </p>
      <form>
        <div className={styles.outer}>
          <div className={styles.upper}>
            <div className={styles.upperLeft}>
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Your Name"  required/>
            </div>
            <div className={styles.upperRight}>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="johndoe@doe.com" required/>
            </div>
          </div>

          <div className={styles.lower}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Hello there,I would like to ask you about"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500} required
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
    <div>
  <p>or Connect with me on</p>
  <div>
    
  </div>
    </div>
    </>
  );
}

export default ContactMe;
