import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>Abhishek</div>
      <div className={styles.links}>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/Project">My Projects</Link>
        <Link className={styles.link} to="/Blog">Blog</Link>
        <Link className={styles.link} to="/Contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
