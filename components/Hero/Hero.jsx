import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className={`container  ${styles.wrapper}`}>
        <div className={styles.heroName}>
          <div className={styles.helloWrap}>
            <hr className={styles.helloHR}/>
            <span className={styles.hello}>Hello</span>
          </div>
          <h1 className={styles.name}>I'M JYOTIPRAKASH GHORAI</h1>
          <span>A FULL STACK WEB DEVELOPER</span>
          <div className={styles.buttonWrap}>
            <button className={styles.hireMe}>Hire Me</button>
            <div>
              <a href="#">Download CV</a>
              <i class="fad fa-download"></i>
            </div>
          </div>
        </div>
        <div className={styles.heroImg}></div>
      </div>
    </div>
  );
};

export default Hero;
