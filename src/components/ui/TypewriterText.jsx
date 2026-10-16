"use client";
import { useState, useEffect } from "react";

const defaultTitles = [
  "FULL STACK DEVELOPER",
  "MERN STACK DEVELOPER",
  "FRONTEND SPECIALIST",
  "PROBLEM SOLVER",
];

export default function TypewriterText({
  titles = defaultTitles,
  className = "",
  cursorClassName = "text-[#6fc844]",
}) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState(titles[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentTitle = titles[titleIndex] || "";
    let timer;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 90);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, 50);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, titleIndex, isMounted, titles]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <span className={`font-bold animate-pulse ml-0.5 ${cursorClassName}`}>_</span>
    </span>
  );
}
