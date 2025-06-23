import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.copyright}>
        © 2021 - 2025 Abhishek Katiyar. All rights reserved.
      </div>

      <div className={styles.lower}>
        <nav className={styles.ImportantLinks} aria-label="Important Links">
          <h4>Important Links</h4>
          <Link to="/">Home</Link>
          <Link to="/Project">My Projects</Link>
          <Link to="/Contact">Contact</Link>
        </nav>

        <nav className={styles.social} aria-label="Social Media Links">
          <h4>Social</h4>
          <a href="https://github.com/abhishekkatiyar12/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://instagram.com/__abhishekkatiyar__" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
        </nav>

        <nav className={styles.other} aria-label="Other Links">
          <h4>Other</h4>
          <Link to="/tools">What I Use</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/photography">Photography</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
