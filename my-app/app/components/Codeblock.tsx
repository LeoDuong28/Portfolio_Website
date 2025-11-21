"use client";

import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai, atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";






const Codeblock: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        if (typeof document === "undefined") return;

        const getTheme = () => document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";

        setTheme(getTheme());

        const observer = new MutationObserver(() => {
            setTheme(getTheme());
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["data-theme"],
        });

        return () => observer.disconnect();
    }, []);

    const myCode = `    const software_engineer = {
        name: 'Leo Duong',
        skills: ['React', 'Next.js', 'MySQL', 'Docker', 'AWS'],
        hardWorker: true,
        quickLeaner: true,
        problemsSolver: true,
        hireAble: function(requiredSkills) {
            const matchCount = requiredSkills.filter(skill => this.skills.includes(skill)).length;
            return (
                this.hardWorker &&
                this.quickLeaner &&
                this.problemsSolver &&
                matchCount / requiredSkills.length >= 0.7
            );
        }
    };
    `;

    return (
        <SyntaxHighlighter
            language="javascript"
            style={theme === "dark" ? monokai: atomOneLight}
            customStyle={{
                background: "transparent",
                margin: 0,
                padding: "1rem",
                borderRadius: "0.75rem",
                fontSize: "0.85rem",
            }}
            showLineNumbers
        >
            {myCode}
        </SyntaxHighlighter>
    );
};



export default Codeblock;































