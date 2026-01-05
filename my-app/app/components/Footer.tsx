"use client";

import Image from "next/image";
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        Developed and Designed by <span className={styles.name}>Leo Duong</span>
      </p>

      <p className={styles.copy}>Copyright © {year} LD</p>

      <div className={styles.socials}>
        <a
          href="https://github.com/LeoDuong28"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className={styles.iconButton}>
          <FaGithub />
        </a>

        <a
          href="www.linkedin.com/in/leo-duong-836334280"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.iconButton}>
          <FaLinkedin />
        </a>

        <a
          href="https://profile.indeed.com/p/leod-wp087hl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="indeed"
          className={styles.iconButton}>
          <SiIndeed />
        </a>
      </div>
    </footer>
  );
}
