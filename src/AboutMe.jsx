import styles from "./AboutMe.module.css";
function AboutMe() {
  return (
    <div className={styles.container}>
      <h1>ABOUT ME</h1>
      <div className={styles.subcontainer}>
        <div className={styles.left}>
          <div className={styles.left1}>
            <h1>hey, I'm Abhishek👋</h1>
            <div className={styles.left11}>
              Passionate FullStack Web Developer from Kanpur, pushing the
              boundaries of web technology to create immersive digital
              experiences.
            </div>
          </div>
          <div className={styles.left2}>
            My Mission Bridging the Gap Between Design and Development: Where
            creativity meets functionality, and innovation drives progress. Keep
            moving, don't settle. 🚀
          </div>
        </div>
        <div className={styles.right}>right</div>
      </div>
      <div className={styles.github}>
        <a href="github.com">github</a>
        <a href="github.com">commits</a>
        <a href="github.com">repositories forks</a>
        <a href="github.com">github followers</a>
      </div>
      <div className={styles.aboutcontainer}>
        <div className={styles.l}>
          <h1>About Me</h1>
          <p>
            I have been coding for over 5 years, beginning my journey in 2020.
            Initially, I learned HTML, CSS, and JavaScript to build websites.
          </p>
          <p>
            My first project was a simple website built with HTML, CSS, and
            JavaScript (~mid-2020).
          </p>
          <p>
            As I progressed, I focused heavily on React.js and Next.js. Now, I
            specialize in building SaaS applications with modern web
            technologies.
          </p>
        </div>
        <div className={styles.r}>
          <div className={styles.studiocontainer}>
          <div className={styles.mystudioheading}>MY STUDIO</div>
          <div>
            Namaste!🙏 suhaib.dev is more than a portfolio; it's a window into
            my world, where passion meets purpose. Discover my work.
          </div>
          <div className={styles.downloadcv}>
            <button className={styles.cvbutton}>Download cv</button>
          </div>
          <div className={styles.studioblock}>
            <div className={styles.studioLeft} >
              <h4>Web Development</h4>
              <p>
                Building high-performance websites with clean code and strong
                SEO fundamentals.
              </p>
            </div>
            <div className={styles.studioRight}>
              <h4>UI/UX Design</h4>
              <p>
                Crafting modern, intuitive user interfaces that engage and
                convert users.
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
