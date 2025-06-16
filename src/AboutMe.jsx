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
    </div>
  );
}

export default AboutMe;
