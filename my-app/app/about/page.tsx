"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiVim,
  SiPostgresql,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";
import styles from "./page.module.css";
import { GitHubCalendar } from "react-github-calendar";

/**
 * NOTE: Using the uploaded local file path you provided earlier.
 * The build/deployment layer will transform this path to a usable URL.
 * Path: /mnt/data/A_digital_photograph_features_a_close-up_portrait_.png
 */
const AVATAR_PUBLIC = "/mnt/data/A_digital_photograph_features_a_close-up_portrait_.png";
const GITHUB_USERNAME = "LeoDuong28";

export default function AboutPage(): JSX.Element {
  // ref to calendar container
  const calendarRef = useRef<HTMLDivElement | null>(null);
  // blockSize determined by container width
  const [blockSize, setBlockSize] = useState<number>(12);
  const [blockMargin, setBlockMargin] = useState<number>(4);

  useEffect(() => {
    if (!calendarRef.current) return;

    const container = calendarRef.current;

    // compute block size based on width
    const computeSizes = (width: number) => {
      // GitHub calendar displays about 53 columns (weeks in a year)
      const weeks = 53;
      // choose a margin (gap) that scales slightly with size
      // we limit blockMargin between 2 and 8
      const margin = Math.max(2, Math.min(8, Math.floor(width / 800 * 4)));
      // compute block size to fit weeks and margins into width
      const available = width - (weeks - 1) * margin - 32; // 32 px padding buffer
      const rawBlock = Math.floor(available / weeks);

      // clamp block size to reasonable bounds
      const minBlock = 6;
      const maxBlock = 22;
      const finalBlock = Math.max(minBlock, Math.min(maxBlock, rawBlock));

      return { finalBlock, margin };
    };

    // initial compute
    const { finalBlock, margin } = computeSizes(container.clientWidth);
    setBlockSize(finalBlock);
    setBlockMargin(margin);

    // observe resize
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const { finalBlock: b, margin: m } = computeSizes(w);
        setBlockSize((prev) => (prev !== b ? b : prev));
        setBlockMargin((prev) => (prev !== m ? m : prev));
      }
    });

    ro.observe(container);

    return () => ro.disconnect();
  }, [calendarRef]);

  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* LEFT: Avatar + quick facts */}
        <aside className={styles.left}>
          

          <div className={styles.quick}>
            <h3 className={styles.quickTitle}>Quick Facts</h3>
            <ul className={styles.facts}>
                <li><strong>Email:</strong> <span className={styles.keyword}>duongtrongnghia287@gmail.com</span></li>
                <li><strong>Phone:</strong> <span className={styles.keyword}>+1(424)-397-4074</span></li>
              <li><strong>Location:</strong> <span className={styles.keyword}>Torrance, California</span></li>
              <li><strong>Degree:</strong> B.S. in <span className={styles.keyword}>Mathematics and Computer Science</span> from <span className={styles.keyword}>UC San Diego</span></li>
              <li><strong>Strengths:</strong> <span className={styles.keyword}>Hard Worker</span>, <span className={styles.keyword}>Problem Solver</span>, <span className={styles.keyword}>Team Player</span></li>
              <li><strong>Availability:</strong> <span className={styles.keyword}>Any shifts, any time for emergency</span></li>
              <li><strong>Travel:</strong> Willing to <span className={styles.keyword}>travel for work</span></li>
              <li><strong>Languages:</strong> Fluent in <span className={styles.keyword}>Vietnamese</span></li>
            </ul>
          </div>

          <div className={styles.hobbies}>
            <h3 className={styles.quickTitle}>Outside Coding</h3>
            <ul>
              <li>🎮 Playing video games</li>
              <li>✈️ Traveling & trying new cuisine</li>
              <li>🕺 Break dancing</li>
            </ul>
          </div>
        </aside>

        {/* RIGHT: Intro, Skills, Tools, GitHub calendar */}
        <div className={styles.right}>
          <h2 className={styles.title}>About <span className={styles.pulse}>Me</span></h2>

          <div className={styles.introCard}>
            <p>
              Hello, I'm <strong className={styles.name}>Leo Duong</strong>. I studied{" "}
              <span className={styles.highlight}>Mathematics</span> and{" "}
              <span className={styles.highlight}>Computer Science</span> at UC San Diego.
              I thrive in collaborative teams, enjoy solving tricky problems, and adapt quickly across
              stacks. I&apos;m available for immediate start, open to shift work and travel.
            </p>

            <p className={styles.smallMuted}>
              I focus on clean, testable code and fast iteration. I pick tools for the job and value readable systems.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}><FaTools /> Skillset</h4>

            <div className={styles.skillsGrid}>
              <div className={styles.skillGroup}>
                <div className={styles.groupTitle}>Languages</div>
                <div className={styles.chips}>
                  <span className={styles.chip}><SiTypescript className={styles.iconTS}/> TypeScript</span>
                  <span className={styles.chip}><SiJavascript className={styles.iconJS}/> JavaScript</span>
                  <span className={styles.chip}><SiPython className={styles.iconPy}/> Python</span>
                  <span className={styles.chip}><SiCplusplus className={styles.iconC}/> C++</span>
                </div>
              </div>

              <div className={styles.skillGroup}>
                <div className={styles.groupTitle}>Frameworks & Platforms</div>
                <div className={styles.chips}>
                  <span className={styles.chip}><SiReact className={styles.iconReact}/> React</span>
                  <span className={styles.chip}><SiNodedotjs className={styles.iconNode}/> Node.js</span>
                  <span className={styles.chip}><SiPostgresql className={styles.iconDB}/> PostgreSQL</span>
                </div>
              </div>

              <div className={styles.skillGroup}>
                <div className={styles.groupTitle}>Tools</div>
                <div className={styles.chips}>
                  <span className={styles.chip}><SiDocker className={styles.iconDocker}/> Docker</span>
                  <span className={styles.chip}><SiGithub className={styles.iconGit}/> Git & GitHub</span>
                  <span className={styles.chip}><SiVim className={styles.iconVim}/> CLI tooling</span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub contributions - responsive */}
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Coding Activity (this year)</h4>

            <div className={styles.calendarWrap}>
              <div ref={calendarRef} className={styles.calendarCard}>
                <div className={styles.reactGithubCalendar}>
                  <GitHubCalendar
                    username={GITHUB_USERNAME}
                    blockSize={blockSize}
                    blockMargin={blockMargin}
                    color={getComputedStyle(document.documentElement).getPropertyValue("--accent") || "#0969da"}
                    fontSize={14}
                  />
                </div>

                
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}






















