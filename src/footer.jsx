import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <hr></hr>
        <div className={styles.copyright}>
          Copyright © 2021 - 2025 Abhishek katiyar
        </div>
        <div className={styles.lower}>
          <div>
            <h4>Important Links</h4>
            <p>Home</p>
            <p>My Work</p>
            <p>Blog</p>
          </div>
          <div>
            <h4>Social</h4>
            <p>Github</p>
            <p>Instagram</p>
            <p>Discord</p>
          </div>
          <div>
            <h4>Other</h4>
            <p>What i use</p>
            <p>Contact</p>
            <p>Photography</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
