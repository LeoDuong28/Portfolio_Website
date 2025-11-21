"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
    { label: "Home", href: "/", icon: <AiOutlineHome /> },
    { label: "About", href: "/about", icon: <AiOutlineUser /> },
    { label: "Projects", href: "/projects", icon: <AiOutlineFundProjectionScreen /> },
    { label: "Resume", href: "/resume", icon: <CgFileDocument /> },
];

export default function Navbar() {
    const pathname = usePathname();
    const [theme, setTheme] = useState<"light" | "dark">("light");

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

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        window.localStorage.setItem("theme", next);
        setTheme(next);
    };

    return (
        <header className={styles.navbar}>

            <div className={styles.left}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src={theme === "light" ? "/logo_black.png" : "/logo2.png"} 
                        alt="Leo Duong Logo"
                        width={80}
                        height={80}
                        priority
                        className={styles.logoImage}
                    />
                    
                    
                </Link>
            </div>

            <nav className={styles.center}>
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`${styles.navLink} ${
                            pathname === item.href ? styles.active : ""
                        }`}
                    >
                        <span className={styles.icon}>{item.icon}</span>
                        <span className={styles.label}>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className={styles.right}>
                <button
                    type="button"
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>

                <a
                    href="https://github.com/your-username/your-portfolio-repo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.forkButton}
                >
                    <CgGitFork />
                    Fork
                </a>
            </div>
        </header>
    );
}




