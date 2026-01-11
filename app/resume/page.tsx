"use client";

import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import styles from "./page.module.css";
import { asset } from "@/app/lib/asset";

const RESUME_FILE = "leo_duong_resume.pdf";

export default function ResumePage() {
  // With your new asset.ts, this becomes "./leo_duong_resume.pdf"
  const resumeUrl = asset(RESUME_FILE);

  return (
    <main id="resume" className={styles.resumePage}>
      <section className={styles.resumeContainer}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.subtitle}>
          Please view my resume below and consider me a chance :)
        </p>

        <div className={styles.downloadWrapper}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className={styles.downloadButton}
            aria-label="Open resume PDF">
            <FaRegFilePdf className={styles.downloadIcon} />
            Open Resume (PDF)
          </a>
        </div>

        <div className={styles.viewerWrapper}>
          <iframe
            src={resumeUrl}
            className={styles.viewer}
            title="Leo Duong Resume"
          />
        </div>
      </section>
    </main>
  );
}
