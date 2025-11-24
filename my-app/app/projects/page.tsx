"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./page.module.css";

const THUMBNAIL = "/mnt/data/A_digital_photograph_features_a_close-up_portrait_.png";

type Project = {
  id: string;
  title: string;
  short: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "E-Commerce Website",
    short: "Mission design & analysis tools for detecting methane plumes on Titan.",
    description:
      "Full-stack mission planning portal with visualization of instrument footprints, simulated data ingestion and a lightweight analysis pipeline. Includes automated report generation and interactive maps.",
    tech: ["TypeScript", "React", "Node.js", "Next.js", "HTML", "CSS"],
    repo: "https://github.com/your-username/stinkbug",
    demo: "https://stinkbug-demo.example.com",
    image: "/project1.png",
    featured: true,
  },
  {
    id: "p2",
    title: "Huffman Compression CLI",
    short: "High-performance file compression.",
    description:
      "C++ implementation of Huffman coding with compact header format, streaming IO, and unit tests.",
    tech: ["C++", "Algorithms"],
    repo: "https://github.com/your-username/huffman-cli",
    image: THUMBNAIL,
  },
  {
    id: "p3",
    title: "Portfolio Website",
    short: "This portfolio site — Next.js + TypeScript.",
    description:
      "Modern responsive portfolio with theme switcher, project showcase, interactive code hero, and deployment workflow.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.example.com",
    image: THUMBNAIL,
  },
  
];

export default function ProjectsPage(): JSX.Element {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              Selected work — click a card for more details. Each project links to source and a live demo when available.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <a className={styles.primaryBtn} href="https://github.com/LeoDuong28?tab=repositories" target="_blank" rel="noreferrer">
              <FaGithub /> View All on GitHub
            </a>
          </div>
        </div>

        
      </header>

      <section className={styles.gridWrap}>
        <div className={styles.grid}>
          {projects.map((p) => (
            <article
              key={p.id}
              className={styles.card}
              tabIndex={0}
              onClick={() => setActive(p)}
              onKeyDown={(e) => e.key === "Enter" && setActive(p)}
            >
              <div className={styles.thumb}>
                <Image src={p.image || THUMBNAIL} alt={p.title} width={640} height={360} className={styles.thumbImg} />
              </div>

              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{p.title}</h4>
                <p className={styles.cardShort}>{p.short}</p>

                <div className={styles.tagRow}>
                  {p.tech.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.cardActions}>
                  {p.repo && (
                    <a
                      className={styles.ghostBtn}
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> Source
                    </a>
                  )}

                  {p.demo && (
                    <a
                      className={styles.primaryBtn}
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {active && (
        <div className={styles.drawer} role="dialog" aria-modal="true" aria-label={`${active.title} details`}>
          <div className={styles.drawerInner}>
            <button className={styles.closeBtn} onClick={() => setActive(null)} aria-label="Close">×</button>
            <div className={styles.drawerContent}>
              <div className={styles.drawerLeft}>
                <Image src={active.image || THUMBNAIL} alt={active.title} width={720} height={420} className={styles.drawerImage} />
              </div>

              <div className={styles.drawerRight}>
                <h2 className={styles.drawerTitle}>{active.title}</h2>
                <p className={styles.drawerDesc}>{active.description}</p>

                <div className={styles.tagRowLarge}>
                  {active.tech.map((t) => (
                    <span key={t} className={styles.tagLarge}>{t}</span>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  {active.repo && <a className={styles.ghostBtn} href={active.repo} target="_blank" rel="noreferrer"><FaGithub /> View Source</a>}
                  {active.demo && <a className={styles.primaryBtn} href={active.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Open Demo</a>}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.drawerBackdrop} onClick={() => setActive(null)} />
        </div>
      )}
    </main>
  );
}





