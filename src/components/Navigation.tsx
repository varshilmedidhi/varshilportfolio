import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
        >
          Portfolio
        </a>
        <div className="flex gap-8">
          <a
            href="#about"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
