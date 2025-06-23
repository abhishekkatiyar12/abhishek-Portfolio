import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} to="/">Home</Link>
      <Link className={styles.link} to="/Work">My Work</Link>
      <Link className={styles.link} to="/Blog">Blog</Link>
      <Link className={styles.link} to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
