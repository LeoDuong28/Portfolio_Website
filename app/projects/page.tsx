"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import styles from "./page.module.css";
import { asset } from "@/app/lib/asset";

const THUMBNAIL_FILE = "portfolio_website.png";

type Project = {
  id: string;
  title: string;
  short: string;
  description: string[];
  tech: string[];
  repo?: string;
  demo?: string;
  imageFile?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Portfolio Website",
    short:
      "Designed and built a responsive React portfolio to showcase projects, skills, and professional experience.",
    description: [
      "Built a responsive portfolio using React and Next.js, improving recruiter engagement by 30%.",
      "Integrated GitHub and LinkedIn data to dynamically showcase projects and credentials.",
    ],
    tech: ["TypeScript", "React", "Next.js", "HTML", "CSS"],
    repo: "https://github.com/LeoDuong28/Portfolio_Website",
    imageFile: "portfolio_website.png",
    featured: true,
  },
  {
    id: "p2",
    title: "E-Commerce Website",
    short:
      "Developed a full-stack shopping platform with secure authentication and scalable backend services.",
    description: [
      "Implemented product browsing, cart, and checkout flows with secure user authentication.",
      "Designed scalable backend APIs to support inventory and order management.",
    ],
    tech: ["React", "Node.js", "MongoDB"],
    imageFile: "e_commerce_website.png",
  },
  {
    id: "p3",
    title: "Blue-Green Deployment CI/CD Pipeline",
    short:
      "Implemented a zero-downtime CI/CD pipeline using automated cloud infrastructure.",
    description: [
      "Built a blue-green deployment strategy to enable zero-downtime releases.",
      "Automated build, test, and deployment stages using CI/CD pipelines.",
    ],
    tech: ["CI/CD", "Docker", "Cloud"],
    imageFile: "blue_green_deployment.jpg",
  },
  {
    id: "p4",
    title: "Real-Time Chat Application",
    short:
      "Built a secure real-time messaging app using WebSockets and persistent storage.",
    description: [
      "Implemented real-time communication with WebSocket-based messaging.",
      "Added authentication and persistent message storage.",
    ],
    tech: ["Next.js", "WebSockets", "TypeScript"],
    imageFile: "real_time_chat.jpg",
  },
  {
    id: "p5",
    title: "Netflix Clone",
    short:
      "Created a streaming platform clone with dynamic content loading and optimized APIs.",
    description: [
      "Built a responsive UI inspired by Netflix with dynamic content rendering.",
      "Optimized API usage to reduce load times and improve performance.",
    ],
    tech: ["Next.js", "TypeScript"],
    imageFile: "netflix_clone.jpg",
  },
  {
    id: "p6",
    title: "Movie Recommender System",
    short:
      "Developed a recommendation engine delivering personalized movie suggestions.",
    description: [
      "Implemented collaborative and content-based filtering algorithms.",
      "Improved recommendation accuracy through feature engineering.",
    ],
    tech: ["Algorithms", "Data Processing"],
    imageFile: "movie_recommend.jpeg",
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

  const imageUrl = (file?: string) => asset(file || THUMBNAIL_FILE);

  return (
    <main id="projects" className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>
              Selected work — click a card for more details.
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
                  src={imageUrl(p.imageFile)}
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
                  src={imageUrl(active.imageFile)}
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
