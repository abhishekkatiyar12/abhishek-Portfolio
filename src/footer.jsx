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
          <div className={styles.ImportantLinks}>
            <h4>Important Links</h4>
            <a href="#">Home</a>
            <a href="#">My Work</a>
            <a href="#">Blog</a>
          </div>
          <div className={styles.social}>
            <h4 >Social</h4>
            <a href="#">Github</a>
            <a href="#">Instagram</a>
            <a href="#">Discord</a>
          </div>
          <div className={styles.other}>
            <h4>Other</h4>
            <a href="#">What i use</a>
            <a href="#">Contact</a>
            <a href="#">Photography</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
