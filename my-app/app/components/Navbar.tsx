"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";
import { CgGitFork } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home", icon: <AiOutlineHome /> },
  { label: "About", href: "#about", icon: <AiOutlineUser /> },
  {
    label: "Projects",
    href: "#projects",
    icon: <AiOutlineFundProjectionScreen />,
  },
  { label: "Resume", href: "#resume", icon: <CgFileDocument /> },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeHash, setActiveHash] = useState<string>("#home");

  const isProgrammaticScrollRef = useRef(false);
  const programmaticTimerRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));

    setActiveHash("#home");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const preferred =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    document.documentElement.setAttribute("data-theme", preferred);
    setTheme(preferred);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ids = navItems.map((n) => n.href.slice(1));

    const getNavHeight = () => {
      const navEl = document.querySelector(
        `.${styles.navbar}`
      ) as HTMLElement | null;
      return navEl?.offsetHeight ?? 0;
    };

    const updateActive = () => {
      if (isProgrammaticScrollRef.current) return;

      const navH = getNavHeight();
      const offsetLine = navH + 16;

      let current = "#home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top <= offsetLine) current = `#${id}`;
      }

      setActiveHash((prev) => (prev === current ? prev : current));
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateActive();
        ticking = false;
      });
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
    setTheme(next);
  };

  const scrollToHash = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const navEl = document.querySelector(
      `.${styles.navbar}`
    ) as HTMLElement | null;
    const navH = navEl?.offsetHeight ?? 0;

    const y = el.getBoundingClientRect().top + window.scrollY - navH - 12;

    setActiveHash(hash);
    window.history.pushState(null, "", hash);

    isProgrammaticScrollRef.current = true;
    if (programmaticTimerRef.current)
      window.clearTimeout(programmaticTimerRef.current);
    programmaticTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 350);

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <a
          href="/"
          className={styles.logo}
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}>
          <Image
            src={theme === "light" ? "/logo_black1.png" : "/logo_black2.png"}
            alt="Leo Duong Logo"
            width={80}
            height={80}
            priority
            className={styles.logoImage}
          />
        </a>
      </div>

      <nav className={styles.center}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={scrollToHash(item.href)}
            className={`${styles.navLink} ${
              activeHash === item.href ? styles.active : ""
            }`}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </a>
        ))}
      </nav>

      <div className={styles.right}>
        <button
          type="button"
          onClick={toggleTheme}
          className={styles.themeToggle}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <a
          href="https://github.com/your-username/your-portfolio-repo"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.forkButton}>
          <CgGitFork />
        </a>
      </div>
    </header>
  );
}
