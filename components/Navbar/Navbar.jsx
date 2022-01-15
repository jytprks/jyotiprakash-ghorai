import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <div className={`container ${styles.nav}`}>
        <div className="logo">
          <h4 className={styles.name}>JYOTIPRAKASH GHORAI</h4>
        </div>
        <div className={styles.link}>
          <Link href="/">
            <span className={` ${true ? styles.selected : styles.linkText}`}>
              Home
            </span>
          </Link>

          <Link href="/about-me">
            <span className={styles.linkText}>About Us</span>
          </Link>

          <Link href="/services">
            <span className={styles.linkText}>Services</span>
          </Link>

          <Link href="/portfolio">
            <span className={styles.linkText}>Portfolio</span>
          </Link>

          <Link href="/contact-me">
            <span className={styles.linkText}>Contact Me</span>
          </Link>
        </div>
        <div className={styles.phone}>
          <i className={`fas fa-phone-alt ${styles.phoneImg}`}></i>
          <span className={styles.number}>8904569620</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
