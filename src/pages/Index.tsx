import Navigation from "../components/Navigation";
import ThreeBackground from "../components/ThreeBackground";
import CustomCursor from "../components/CustomCursor";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Download,
  ChevronDown,
  Code,
  Code2,
} from "lucide-react";
import { motion, useScroll } from "framer-motion";
import Tilt from "react-parallax-tilt";
import confetti from "canvas-confetti";
import ResumeButton from "@/components/ResumeButton";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scroll = window.scrollY;
        const newOpacity = 1 - (scroll / window.innerHeight) * 1.5;
        setOpacity(Math.max(0, Math.min(1, newOpacity)));
        heroRef.current.style.transform = `translateY(${scroll * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const launchConfetti = async () => {
    if (isDownloading) return;

    try {
      setIsDownloading(true);

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (error) {
      console.error("Error downloading resume:", error);
      alert(
        "Sorry, there was an error downloading the resume. Please try again."
      );
    } finally {
      setIsDownloading(false);
    }
  };

  const workExperiences = [
    {
      company: "MSU-Information Technology",
      role: "I.T Engineer",
      period: "September 2024 – Present",
      description:
        "Orchestrated the upgrade and deployment of over 250 hardware devices and software systems, slashing system downtime by 60% and enhancing operational efficiency across campus departments.",
      technologies: ["Hardware", "Software", "IT Support"],
      achievements: [
        "Automated preventative maintenance workflows and IT support processes, increasing team productivity by 70% and reducing issue resolution times by 50%.",
        "Overhauled the center's digital presence, driving a 75% boost in online engagement through strategic website enhancements and streamlined social media content delivery.",
      ],
    },
    {
      company: "Apex Aesthetics Empire",
      role: "Web Developer Intern",
      period: "December 2024 – January 2025",
      description:
        "Architected a luxury aesthetic services platform with React that processed $50K+ in bookings through Stripe integration while maintaining 99.9% uptime and sub-2 second load times.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      achievements: [
        "Revolutionized client scheduling by implementing a dual-booking system handling both service appointments and professional tutorials, resulting in 200% increase in booking efficiency.",
        "Engineered a premium UI/UX with custom animations and metallic gradients that increased user engagement by 150% and reduced bounce rates to under 20%.",
      ],
    },
    {
      company: "Michigan State Unviersity",
      role: "Undergraduate Learning Assistant",
      period: "May 2024 - August 2024 ",
      description:
        "Provided one-on-one tutoring and debugging assistance to 30+ students weekly, clarifying Python fundamentals like data structures and object-oriented principles. Increased average student exam performance by 15% and boosted overall retention rates.",
      technologies: ["Python", "MS office", "Matplotlib", "Numpy", "Pandas"],
      achievements: [
        "Assisted the lead instructor in creating lab exercises, assignments, and real-world coding demonstrations that bridged theory and practice. Streamlined grading operations by 25%, ensuring timely, detailed feedback for all coursework.",
        "Coordinated with faculty on course materials, exam reviews, and classroom discussions, promoting active learning and collaborative problem-solving. Helped maintain a positive learning environment through consistent mentoring and clear, concise communication.",
      ],
    },
    {
      company: "Michigan State University",
      role: "Special Operations Supervisor II",
      period: "Sep 2023 - Apr 2024",
      description:
        "Supervised Neighborhood Administrative Coordinators and managed residence hall security, event setups, and check-out processes.",
      technologies: ["Excel", "Word", "Google Docs", "MS office", "Sheets"], // No specific technologies mentioned
      achievements: [
        "Conducted thorough security checks on exterior doors and event spaces to ensure preparedness.",
        "Trained and mentored new hires, assessed staff performances, and coordinated mid-semester room changes.",
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/varshilmedidhi",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/varshilmedidhi/",
    },
    {
      icon: <Code className="w-6 h-6" />,
      url: "https://leetcode.com/u/varshilmedidhi/",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <ThreeBackground />
      <Navigation />

      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6 relative"
        style={{ opacity }}
      >
        <Tilt
          className="w-full max-w-4xl"
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          scale={1.02}
          transitionSpeed={2000}
        >
          <div className="text-center p-8 rounded-xl backdrop-blur-sm bg-secondary/10">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center items-center">
                <Code className="w-12 h-12" />
                <h1 className="text-4xl font-bold">(/)</h1>
              </div>
            </motion.h1>

            {/* Personal Introduction */}
            <motion.div
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
                Hi, I'm{" "}
                <span className="text-primary font-semibold">
                  Varshil Medidhi
                </span>
                , a CS major @ Michigan State University (MSU).
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {" "}
              </p>
            </motion.div>

            {/* Animated Tags */}
            <motion.div
              className="flex flex-wrap justify-center gap-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {["React", "Node.js", "TypeScript", "Python", "JavaScript"].map(
                (tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                onClick={launchConfetti}
                disabled={isDownloading}
                className={`px-6 py-3  text-white rounded-lg
                          transition-all duration-300 flex items-center gap-2 group relative
                          ${
                            isDownloading ? "opacity-75 cursor-wait" : "hover:"
                          }`}
                whileHover={isDownloading ? {} : { scale: 1.05 }}
                whileTap={isDownloading ? {} : { scale: 0.95 }}
              >
                {isDownloading ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <span>Downloading...</span>
                  </>
                ) : (
                  <>
                    <ResumeButton />
                    {/* <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" /> */}
                    {/* <span>Download Resume</span> */}

                    <span
                      className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 
                                  text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      PDF • 100KB
                    </span>
                  </>
                )}
              </motion.button>

              <motion.a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary rounded-lg
                         hover:bg-primary/10 transition-all duration-300 flex items-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Let's Talk
              </motion.a>
            </motion.div>

            {/* Social Links with hover effects */}
            <motion.div
              className="flex justify-center gap-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/30 rounded-full hover:bg-secondary/50 
                           transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </Tilt>

        {/* Scroll Indicator */}
        <motion.div
          className="fixed bottom-8 left-[calc(50%-60px)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted-foreground cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              const skillsSection = document.querySelector("#skills");
              skillsSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Section */}
      <Skills id="skills" />

      {/* Work Experience Section */}
      <section className="min-h-screen py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <h2 className="section-title">Work Experience</h2>
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-primary/20 transform -translate-x-1/2" />
            <div className="space-y-12">
              {workExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {/* Progress Dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                  </motion.div>

                  {/* Experience Card */}
                  <div
                    className={`relative ml-8 md:ml-0 ${
                      index % 2 === 0
                        ? "md:mr-[50%] md:pr-12"
                        : "md:ml-[50%] md:pl-12"
                    }`}
                  >
                    <motion.div
                      className="bg-card p-8 rounded-lg card-hover backdrop-blur-sm shadow-lg"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">
                            {experience.company}
                          </h3>
                          <p className="text-xl text-foreground/90">
                            {experience.role}
                          </p>
                        </div>
                        <span className="text-muted-foreground">
                          {experience.period}
                        </span>
                      </div>
                      <p className="text-foreground/80 mb-4">
                        {experience.description}
                      </p>
                      <ul className="list-disc list-inside mb-4 text-foreground/80">
                        {experience.achievements.map(
                          (achievement, achievementIndex) => (
                            <li key={achievementIndex} className="mb-2">
                              {achievement}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-20 px-6 flex items-center justify-center"
      >
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get in Touch</h2>
          <div className="max-w-xl mx-auto">
            <a
              href="mailto:varshil.py@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-lg group"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              Send me an email
            </a>
            <p className="mt-4 text-muted-foreground">
              I'm open to discussing new projects , opportunities and
              INTERNSHIPS.
            </p>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen py-20 px-6 flex items-center justify-center"
      >
        <motion.div
          className="container mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-4xl font-bold mb-6">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src="myimage.jpeg" // Replace with your animated avatar URL
                alt="Varshil Medidhi"
                className="rounded-full w-48 h-48 mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-left">
              <p className="mt-4 text-lg leading-relaxed">
                Hi there! I'm{" "}
                <span className="font-semibold">Varshil Medidhi</span>, a CS
                major at Michigan State University. I have a Keen Passion for
                technology and I've been on a journey to explore the endless
                possibilities of the digital world.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                I love transforming ideas into reality through innovative
                solutions. Whether it's crafting responsive web applications or
                diving into the world of AI, I am always eager to learn and
                grow.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
