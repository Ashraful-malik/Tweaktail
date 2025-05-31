"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const target = e.target;
      if (isOpen && !target.closest(".mobile-menu-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const logoImage =
    theme === "dark"
      ? "assets/images/logo-white.svg"
      : "assets/images/logo.svg";
  return (
    <header
      className={`fixed w-full z-50 transition-all
         ${scrolled ? "bg-surface  py-2 border-none" : "bg-bg  backdrop-blur-sm py-4 border-b border-border"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={logoImage}
              width={30}
              height={30}
              alt="TweakTail Logo"
            />

            <span className="text-xl font-bold text-text-primary group-hover:text-blue-500 transition-colors">
              TweakTail
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              <Link
                href="/#how-it-works"
                className="text-text-secondary hover:text-text-accent text-sm font-medium transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#features"
                className="text-text-secondary hover:text-text-accent text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/now"
                className="text-text-secondary hover:text-text-accent text-sm font-medium transition-colors"
              >
                What’s New
              </Link>
            </div>

            <div className="h-6 w-px bg-gray-200 dark:bg-neutral-500 mx-2"></div>
            <div className="flex items-center gap-4">
              {/* Theme switcher */}
              {themeSwitcher(theme, setTheme)}

              <Link
                href="/editor/button"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all"
              >
                Launch Editor
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {themeSwitcher(theme, setTheme)}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu-container md:hidden mt-8 pb-8 space-y-4">
            <div className="flex flex-col gap-6">
              <Link
                href="/#how-it-works"
                className="text-text-secondary hover:text-text-accent text-sm font-medium transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/#features"
                className="text-text-secondary hover:text-text-accent text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/now"
                className="text-text-secondary hover:text-text-accent text-sm font-medium transition-colors"
              >
                What’s New
              </Link>
            </div>
            <div className="w-full ">
              <Link
                href="/editor/button"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-all"
              >
                Launch Editor
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function themeSwitcher(theme, setTheme) {
  return theme === "dark" ? (
    <button className="auto " onClick={() => setTheme("light")}>
      <Sun className="text-text-secondary" />
    </button>
  ) : (
    <button className="auto " onClick={() => setTheme("dark")}>
      <Moon className="text-text-secondary" />
    </button>
  );
}
