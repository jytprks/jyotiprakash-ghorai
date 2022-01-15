import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className={`${styles.wrapper}`}>
        <div className={styles.heroName}>
          <div className={styles.helloWrap}>
            <hr className={styles.helloHR} />
            <span className={styles.hello}>Hello</span>
          </div>
          <h1 className={styles.name}>I'M JYOTIPRAKASH GHORAI</h1>
          <span className={styles.heroSubTitle}>
            A FULL STACK WEB DEVELOPER
          </span>
          <div className={styles.buttonWrap}>
            <button className={styles.hireMeBtn}>Hire Me</button>
            <div>
            <div className={styles.downloadWrapper}>
              <a className={styles.downloadLink} href="#">
                Download CV
              </a>
              <i className={`fas fa-download ${styles.downloadPng}` }></i> 
            </div>
            <hr className={styles.downloadBTNUnderLine}/>
            </div>
            
          </div>
        </div>
        <div className={styles.heroImg}>
          <img className={styles.img} src="/images/jyoti.jpg"/>
        </div>
        <div className={styles.socialLink}>
        <i className={`fab fa-instagram fa-lg ${styles.socialItems}`}></i>
        <i className={`fab fa-facebook-f fa-lg ${styles.socialItems}`}></i>
        <i className={`fab fa-github fa-lg ${styles.socialItems}`}></i>
        <i className={`fab fa-linkedin-in fa-lg ${styles.socialItems}`}></i>
        <i className={`fab fa-twitter fa-lg ${styles.socialItems}`}></i>
        <span className={styles.socialFollowMe}>Follow-</span>
        </div>
        <div className={styles.circles}>
        <div className={styles.animatedWrap}>
        <span ></span>
        <span ></span>
        <span ></span>
        </div>

        <div className={styles.animatedWrap1}>
        <span ></span>
        <span ></span>
        <span ></span>
        </div>


        <div className={styles.animatedWrap2}>
        <span ></span>
        <span ></span>
        <span ></span>
        </div>

        <div className={styles.animatedWrap3}>
        <span ></span>
        <span ></span>
        <span ></span>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
