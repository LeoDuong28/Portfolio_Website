"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCplusplus,
  SiC,
  SiLatex,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiDocker,
  SiGithub,
  SiEclipseide,
  SiPostgresql,
  SiMysql,
} from "react-icons/si";
import { FaTools, FaJava, FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsFill } from "react-icons/ri";
import styles from "./page.module.css";
import { GitHubCalendar } from "react-github-calendar";
const GITHUB_USERNAME = "LeoDuong28";

export default function AboutPage() {
  const calendarRef = useRef<HTMLDivElement | null>(null);
  const [blockSize, setBlockSize] = useState<number>(12);
  const [blockMargin, setBlockMargin] = useState<number>(4);

  useEffect(() => {
    if (!calendarRef.current) return;
    const container = calendarRef.current;
    const computeSizes = (width: number) => {
      const weeks = 53;
      const margin = Math.max(2, Math.min(8, Math.floor((width / 800) * 4)));

      const available = width - (weeks - 1) * margin - 32;
      const rawBlock = Math.floor(available / weeks);

      const minBlock = 6;
      const maxBlock = 22;
      const finalBlock = Math.max(minBlock, Math.min(maxBlock, rawBlock));

      return { finalBlock, margin };
    };

    const { finalBlock, margin } = computeSizes(container.clientWidth);
    setBlockSize(finalBlock);
    setBlockMargin(margin);

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
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <aside className={styles.left}>
          <div className={styles.quick}>
            <h3 className={styles.quickTitle}>Quick Facts</h3>
            <ul className={styles.facts}>
              <li>
                <strong>Email:</strong>{" "}
                <span className={styles.keyword}>
                  duongtrongnghia287@gmail.com
                </span>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <span className={styles.keyword}>+1(424)-397-4074</span>
              </li>
              <li>
                <strong>Location:</strong>{" "}
                <span className={styles.keyword}>Torrance, California</span>
              </li>
              <li>
                <strong>Degree:</strong> B.S. in{" "}
                <span className={styles.keyword}>
                  Mathematics and Computer Science
                </span>{" "}
                from <span className={styles.keyword}>UC San Diego</span>
              </li>
              <li>
                <strong>Strengths:</strong>{" "}
                <span className={styles.keyword}>Hard Worker</span>,{" "}
                <span className={styles.keyword}>Problem Solver</span>,{" "}
                <span className={styles.keyword}>Team Player</span>
              </li>
              <li>
                <strong>Availability:</strong>{" "}
                <span className={styles.keyword}>
                  Any shifts, any time for emergency
                </span>
              </li>
              <li>
                <strong>Travel:</strong> Willing to{" "}
                <span className={styles.keyword}>travel for work</span>
              </li>
              <li>
                <strong>Languages:</strong> Fluent in{" "}
                <span className={styles.keyword}>Vietnamese</span>
              </li>
            </ul>
          </div>

          <div className={styles.hobbies}>
            <h3 className={styles.quickTitle}>Outside Coding</h3>
            <ul>
              <li>Playing video games 🎮</li>
              <li>Traveling & trying new cuisine 🌎</li>
              <li>Break dancing 🕺</li>
            </ul>
          </div>
        </aside>

        <div className={styles.right}>
          <h2 className={styles.title}>
            About <span className={styles.pulse}>Me</span>
          </h2>

          <div className={styles.introCard}>
            <p>
              Hello, I'm <strong className={styles.name}>Leo Duong</strong>. I
              studied <span className={styles.highlight}>Mathematics</span> and{" "}
              <span className={styles.highlight}>Computer Science</span> at UC
              San Diego. I thrive in collaborative teams, enjoy solving tricky
              problems, and adapt quickly across stacks. I&apos;m available for
              immediate start, open to any work shifts and travels.
            </p>

            <p className={styles.smallMuted}>
              I focus on clean, testable code and fast iteration. I pick tools
              for the job and value readable systems.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>
              <FaTools /> Skillset
            </h4>

            <div className={styles.skillsGrid}>
              <div className={styles.skillGroup}>
                <div className={styles.groupTitle}>Languages</div>
                <div className={styles.chips}>
                  <span className={styles.chip}>
                    <span className={styles.iconTS}>
                      <SiTypescript />
                    </span>
                    TypeScript
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconJS}>
                      <SiJavascript />
                    </span>
                    JavaScript
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconHtml}>
                      <SiHtml5 />
                    </span>
                    HTML
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconCss}>
                      <SiCss3 />
                    </span>
                    CSS
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconPy}>
                      <SiPython />
                    </span>
                    Python
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconJava}>
                      <FaJava />
                    </span>
                    Java
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconCPlusPlus}>
                      <SiCplusplus />
                    </span>
                    C++
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconC}>
                      <SiC />
                    </span>
                    C
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconLatex}>
                      <SiLatex />
                    </span>
                    Latex
                  </span>
                </div>
              </div>

              <div className={styles.skillGroup}>
                <div className={styles.groupTitle}>Frameworks & Platforms</div>
                <div className={styles.chips}>
                  <span className={styles.chip}>
                    <span className={styles.iconReact}>
                      <SiReact />
                    </span>
                    React
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconNext}>
                      <RiNextjsFill />
                    </span>
                    Next.js
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconNode}>
                      <SiNodedotjs />
                    </span>
                    Node.js
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconTailwind}>
                      <SiTailwindcss />
                    </span>
                    TailwindCSS
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconBootstrap}>
                      <SiBootstrap />
                    </span>
                    Bootstrap
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconMysql}>
                      <SiMysql />
                    </span>
                    MySQL
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconMongodb}>
                      <SiMongodb />
                    </span>
                    MongoDB
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconPostgre}>
                      <SiPostgresql />
                    </span>
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div className={styles.skillGroup}>
                <div className={styles.groupTitle}>Tools</div>
                <div className={styles.chips}>
                  <span className={styles.chip}>
                    <span className={styles.iconAws}>
                      <FaAws />
                    </span>
                    AWS
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconDocker}>
                      <SiDocker />
                    </span>
                    Docker
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconGit}>
                      <SiGithub />
                    </span>
                    Git & Github
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconVscode}>
                      <VscVscode />
                    </span>
                    VsCode
                  </span>
                  <span className={styles.chip}>
                    <span className={styles.iconEclipse}>
                      <SiEclipseide />
                    </span>
                    Eclipse
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Coding Activity (this year)</h4>

            <div className={styles.calendarWrap}>
              <div ref={calendarRef} className={styles.calendarCard}>
                <div className={styles.reactGithubCalendar}>
                  <GitHubCalendar
                    username={GITHUB_USERNAME}
                    blockSize={blockSize}
                    blockMargin={blockMargin}
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
