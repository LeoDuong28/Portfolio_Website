"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./page.module.css";

const THUMBNAIL = "/project-thumb.png";

type Project = {
  id: string;
  title: string;
  short: string;
  description: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    short:
      "Designed and built a responsive React portfolio to showcase projects, skills, and professional experience.",
    description: [
      "Showcased professional work by building a responsive React portfolio, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn APIs to dynamically display projects and credentials, enhancing user experience.",
    ],
    tech: ["TypeScript", "React", "Node.js", "Next.js", "HTML", "CSS"],
    repo: "https://github.com/your-username/stinkbug",
    demo: "https://stinkbug-demo.example.com",
    image: "/Porfolio_Website_Project_Picture.png",
    featured: true,
  },
  {
    id: "p2",
    title: "E-Commerce Website",
    short:
      "Developed a full-stack shopping platform with secure authentication, payments, and scalable backend services.",
    description: [
      "Showcased professional work by building a responsive React portfolio, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn APIs to dynamically display projects and credentials, enhancing user experience.",
    ],
    tech: ["C++", "Algorithms"],
    repo: "https://github.com/your-username/huffman-cli",
    image: "/project1.png",
  },
  {
    id: "p3",
    title: "Blue-Green Deployment CI/CD Pipeline",
    short:
      "Implemented a zero-downtime CI/CD pipeline using cloud infrastructure automation and containerized deployments.",
    description: [
      "Showcased professional work by building a responsive React portfolio, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn APIs to dynamically display projects and credentials, enhancing user experience.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.example.com",
    image: THUMBNAIL,
  },
  {
    id: "p4",
    title: "Real-Time Chat Application",
    short:
      "Built a secure, real-time messaging application using WebSockets with persistent data storage and authentication.",
    description: [
      "Showcased professional work by building a responsive React portfolio, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn APIs to dynamically display projects and credentials, enhancing user experience.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.example.com",
    image: THUMBNAIL,
  },
  {
    id: "p5",
    title: "Nexflix Clone",
    short:
      "Created a full-stack streaming platform clone with optimized APIs, dynamic content loading, and cloud deployment.",
    description: [
      "Showcased professional work by building a responsive React portfolio, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn APIs to dynamically display projects and credentials, enhancing user experience.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.example.com",
    image: THUMBNAIL,
  },
  {
    id: "p6",
    title: "Movie Recommender System",
    short:
      "Developed a recommendation engine using collaborative and content-based filtering to deliver personalized movie suggestions.",
    description: [
      "Showcased professional work by building a responsive React portfolio, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn APIs to dynamically display projects and credentials, enhancing user experience.",
    ],
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    repo: "https://github.com/your-username/portfolio",
    demo: "https://your-portfolio.example.com",
    image: THUMBNAIL,
  },
];

export default function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <main id="projects" className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              Selected work — click a card for more details. Each project links
              to source and a live demo when available.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <a
              className={styles.primaryBtn}
              href="https://github.com/LeoDuong28?tab=repositories"
              target="_blank"
              rel="noreferrer">
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
              onKeyDown={(e) => e.key === "Enter" && setActive(p)}>
              <div className={styles.thumb}>
                <Image
                  src={p.image || THUMBNAIL}
                  alt={p.title}
                  width={640}
                  height={360}
                  className={styles.thumbImg}
                />
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
                      onClick={(e) => e.stopPropagation()}>
                      <FaGithub /> Source
                    </a>
                  )}

                  {p.demo && (
                    <a
                      className={styles.primaryBtn}
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}>
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
        <div
          className={styles.drawer}
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} details`}>
          <div className={styles.drawerInner}>
            <button
              className={styles.closeBtn}
              onClick={() => setActive(null)}
              aria-label="Close">
              ×
            </button>
            <div className={styles.drawerContent}>
              <div className={styles.drawerLeft}>
                <Image
                  src={active.image || THUMBNAIL}
                  alt={active.title}
                  width={720}
                  height={420}
                  className={styles.drawerImage}
                />
              </div>

              <div className={styles.drawerRight}>
                <h2 className={styles.drawerTitle}>{active.title}</h2>
                <ul className={styles.drawerDesc}>
                  {active.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                <div className={styles.tagRowLarge}>
                  {active.tech.map((t) => (
                    <span key={t} className={styles.tagLarge}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  {active.repo && (
                    <a
                      className={styles.ghostBtn}
                      href={active.repo}
                      target="_blank"
                      rel="noreferrer">
                      <FaGithub /> View Source
                    </a>
                  )}
                  {active.demo && (
                    <a
                      className={styles.primaryBtn}
                      href={active.demo}
                      target="_blank"
                      rel="noreferrer">
                      <FaExternalLinkAlt /> Open Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.drawerBackdrop}
            onClick={() => setActive(null)}
          />
        </div>
      )}
    </main>
  );
}
