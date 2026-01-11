"use client";

import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed, SiGmail } from "react-icons/si";
import Type from "../components/Type";
import Codeblock from "../components/Codeblock";
import styles from "./home.module.css";
import { asset } from "@/app/lib/asset";

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.codeSection}>
        <div className={styles.codeHeader}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.filename}>portfolio.tsx</span>
        </div>

        <pre className={styles.codeBlock}>
          <Codeblock />
        </pre>
      </section>

      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <div className={styles.introLeft}>
            <h1 className={styles.heading} style={{ paddingBottom: 15 }}>
              Hello!{" "}
              <span className={styles.wave} role="img" aria-label="waving hand">
                👋🏻
              </span>
            </h1>

            <h1 className={styles.headingName}>
              I&apos;m <strong className={styles.mainName}>Leo Duong</strong>
            </h1>

            <div className={styles.typeWrapper}>
              <Type />
            </div>
          </div>

          <div className={styles.introRight}>
            <div className={styles.flipCard}>
              <div className={styles.flipInner}>
                <Image
                  src={asset("avatar.png")}
                  alt="avatar"
                  width={400}
                  height={400}
                  className={styles.avatarImage}
                />

                <Image
                  src={asset("avatar2.png")}
                  alt="leo-photo"
                  width={400}
                  height={400}
                  className={`${styles.avatarImage} ${styles.backImage}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.homeSocialContainer}>
        <div className={styles.homeSocialInner}>
          <h1 className={styles.socialHeading}>
            <span className={styles.purple}>Connect</span> With Me On
          </h1>

          <ul className={styles.homeAboutSocialLinks}>
            <li className={styles.socialIcons}>
              <a
                href="https://github.com/LeoDuong28"
                target="_blank"
                rel="noreferrer"
                className={styles.homeSocialIcons}>
                <AiFillGithub />
              </a>
            </li>

            <li className={styles.socialIcons}>
              <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noreferrer"
                className={styles.homeSocialIcons}>
                <FaLinkedinIn />
              </a>
            </li>

            <li className={styles.socialIcons}>
              <a
                href="https://profile.indeed.com/p/leod-wp087hl"
                target="_blank"
                rel="noreferrer"
                className={styles.homeSocialIcons}>
                <SiIndeed />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
