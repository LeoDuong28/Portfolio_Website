"use client";

import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import styles from "./page.module.css";
const RESUME_PATH = "/Leo_Duong_Resume.pdf";

export default function ResumePage() {
  return (
    <main className={styles.resumePage}>
      <section className={styles.resumeContainer}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.subtitle}>
          View my resume below or download a copy using the buttons.
        </p>

        <div className={styles.downloadWrapper}>
          <a href={RESUME_PATH} download className={styles.downloadButton}>
            <FaRegFilePdf className={styles.downloadIcon} />
            Download Resume
          </a>
        </div>

        <div className={styles.viewerWrapper}>
          <iframe
            src={RESUME_PATH}
            className={styles.viewer}
            title="Leo Duong Resume"
          />
        </div>

        <div className={styles.downloadWrapper}>
          <a href={RESUME_PATH} download className={styles.downloadButton}>
            <FaRegFilePdf className={styles.downloadIcon} />
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}



















