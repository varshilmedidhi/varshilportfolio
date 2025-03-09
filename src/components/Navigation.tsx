import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    if (isHomePage) {
      // Only scroll if we're on the home page
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on home page, navigate to home page with the section as hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
        >
          Portfolio
        </Link>
        <div className="flex gap-8">
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "about")}
          >
            About
          </a>
          <a
            href="#projects"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
          <Link to="/youtube" className="nav-link">
            Video Showcase
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
