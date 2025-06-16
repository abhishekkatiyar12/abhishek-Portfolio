import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <button>
          <a href="#">Home</a>{" "}
        </button>
        <button>
          <a href="#">My Work</a>
        </button>
        <button>
          <a href="#">Blog</a>
        </button>
        <button>
          <a href="#">More </a>
        </button>
      </nav>
    </>
  );
}

export default Navbar;
