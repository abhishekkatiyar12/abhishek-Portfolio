import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>ABOUT ME</h1>
      <div className={styles.subcontainer}>
        <div className={styles.left}>
          <div className={styles.left1}>
            <h1 className={styles.intro}>Hey, I'm Abhishek 👋</h1>
            <p className={styles.left11}>
              Passionate FullStack Web Developer from Kanpur, pushing the boundaries of web technology to create immersive digital experiences.
            </p>
          </div>
          <div className={styles.left2}>
            <strong>My Mission:</strong> Bridging the Gap Between Design and Development — where creativity meets functionality, and innovation drives progress. Keep moving, don't settle. 🚀
          </div>
        </div>
      </div>

      <div className={styles.github}>
        <a href="https://github.com/abhishekkatiyar12" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://github.com/abhishekkatiyar12?tab=overview" target="_blank" rel="noopener noreferrer">Commits</a>
        <a href="https://github.com/abhishekkatiyar12?tab=repositories" target="_blank" rel="noopener noreferrer">Repositories</a>
        <a href="https://github.com/abhishekkatiyar12?tab=followers" target="_blank" rel="noopener noreferrer">Followers</a>
      </div>

      <div className={styles.aboutcontainer}>
        <div className={styles.l}>
          <h2>About Me</h2>
          <p>I started my coding journey in 2020, beginning with HTML, CSS, and JavaScript to create basic web pages.</p>
          <p>My first project was a static website using only vanilla technologies, which laid the foundation for deeper exploration.</p>
          <p>Over time, I mastered modern frameworks like React.js and Next.js. I now specialize in building SaaS platforms, portfolios, and dynamic web tools.</p>
        </div>

        <div className={styles.r}>
          <div className={styles.studiocontainer}>
            <h3 className={styles.mystudioheading}>MY STUDIO</h3>
            <p>Namaste! 🙏 abhishek.dev isn't just a portfolio; it’s a creative space where passion meets purpose. Dive in and explore my digital world.</p>
            <div className={styles.downloadcv}>
              <a href="/Abhishek_Katiyar_Resume.pdf" download>
                <button className={styles.cvbutton}>Download CV</button>
              </a>
            </div>
            <div className={styles.studioblock}>
              <div className={styles.studioLeft}>
                <h4>Web Development</h4>
                <p>Building fast, scalable, and accessible websites with clean code and solid SEO.</p>
              </div>
              <div className={styles.studioRight}>
                <h4>UI/UX Design</h4>
                <p>Designing modern, user-centric interfaces that enhance usability and engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
