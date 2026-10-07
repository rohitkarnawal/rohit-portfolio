import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar({ onResumeClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResumeClick = () => {
    closeMenu();
    onResumeClick();
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          ROHIT<span>.</span>
        </a>

        {/* Navigation */}
        <nav className={`nav-links ${isOpen ? "open" : ""}`}>

          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>02</span>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            <span>03</span>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            <span>04</span>
            Projects
          </a>

          <a href="#services" onClick={closeMenu}>
            <span>05</span>
            Services
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>06</span>
            Contact
          </a>

        </nav>

        {/* Resume */}
        <button
          type="button"
          className="resume-btn"
          onClick={handleResumeClick}
        >
          Resume
          <span>↗</span>
        </button>

        {/* Mobile Menu */}
        <button
          type="button"
          className={`menu-button ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Animated Bottom Line */}
      <div className="navbar-line"></div>
    </header>
  );
}

export default Navbar;