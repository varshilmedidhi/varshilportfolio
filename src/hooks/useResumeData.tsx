import { useState } from "react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    live: string;
  };
}

export interface WorkExperience {
  _id?: string;
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface ResumeData {
  projects: Project[];
  workExperiences: WorkExperience[];
}

const useResumeData = () => {
  const [data] = useState<ResumeData>({
    projects: [
      {
        title: "LingoBridge",
        description:
          "Designed and built a full-stack MERN language-exchange platform that matches users by language tags and supports real-time one-on-one video, audio, and chat. Integrated WebRTC + Socket.io to maintain <200 ms latency for 200+ concurrent callers.",
        tech: [
          "React",
          "Express",
          "MongoDB",
          "Node.js",
          "Stream",
          "Socket.io",
          "WebRTC",
        ],
        links: {
          github: "https://github.com/varshilmedidhi",
          live: "https://github.com/varshilmedidhi",
        },
      },
      {
        title: "Repsense.ai",
        description:
          "Designed and shipped an AI-driven fitness assistant that uses VAPI for two-way speech, collects user biometrics on the fly, pipes them to Google Gemini, and returns a fully personalized diet & workout plan in < 1 s round-trip. All plans versioned and stored in Convex DB for instant profile refreshes.",
        tech: ["React.js", "Next.js", "Gemini API", "Convex", "VAPI"],
        links: {
          github: "https://github.com/varshilmedidhi",
          live: "https://github.com/varshilmedidhi",
        },
      },
      {
        title: "Premier League Match Outcome Predictor",
        description:
          "Built a machine learning pipeline to predict EPL match outcomes using Random Forests, engineered 30+ features including rolling averages, and achieved 61% win prediction precision. Preprocessed and analyzed 1,300+ matches across two seasons, significantly boosting model accuracy with temporal and performance-based insights.",
        tech: [
          "Python",
          "Pandas",
          "NumPy",
          "scikit-learn",
          "Machine Learning",
          "Random Forest",
        ],
        links: {
          github: "https://github.com/varshilmedidhi",
          live: "https://github.com/varshilmedidhi",
        },
      },
    ],
    workExperiences: [
      {
        company: "Telus Communications",
        role: "Software Engineering Intern",
        period: "May 2025 - August 2025",
        description:
          "Automated incident management and reduced triage time through intelligent diagnostic systems and standardized remediation workflows.",
        technologies: [
          "Python",
          "SQL",
          "Regex",
          "Automation",
          "Incident Management",
          "System Diagnostics",
        ],
        achievements: [
          "Automated 80% of recurring incidents by designing diagnostic engine runbooks that parsed ticket content via regex, classified alarm types, and executed SQL-based device health checks to validate system status and close tickets automatically.",
          "Reduced triage time by 40% by developing standardized remediation workflows with predefined resolution steps, accelerating response to common alarms and increasing first-time resolution accuracy by 30%.",
          "Improved operational efficiency by identifying and encoding repeatable alert patterns into runbook logic, cutting manual intervention by 50% and enabling consistent incident handling across teams.",
        ],
      },
      {
        company: "MSK Infinitum Solutions",
        role: "Software Development Intern",
        period: "May 2024 – August 2024",
        description:
          "Built and deployed a full-stack booking platform using the PERN stack, implementing secure authentication and payment processing.",
        technologies: [
          "MERN Stack",
          "Google OAuth",
          "JWT",
          "Stripe",
          "React",
          "MongoDB",
          "UI/UX",
          "Agile Development",
        ],
        achievements: [
          "Built and deployed a full-stack booking platform using the PERN stack (PostgreSQL, Express.js, React, Node.js), implementing Google OAuth 2.0 and JWT for secure, scalable authentication and session management.",
          "Integrated Stripe payment gateway, enabling secure and seamless transactions for service bookings and course enrollments, resulting in over $50,000 in revenue generated directly through the platform.",
          "Engineered an intelligent scheduling system that calculates availability based on service duration, staff limits, and course hours, eliminating double-bookings and improving resource utilization by 90%.",
          "Designed a responsive and user-friendly UI for service selection, booking management, and course registration, increasing appointment booking efficiency by 35% and reducing manual scheduling workload by 20+ hours per week.",
        ],
      },
      {
        company: "Michigan State University",
        role: "Undergraduate Learning Assistant - CSE 231",
        period: "August 2023 – April 2024",
        description:
          "Mentored 100+ students as an Undergraduate Learning Assistant for CSE 231: Introduction to Python at Michigan State University.",
        technologies: [
          "Python",
          "Teaching",
          "Mentorship",
          "Communication",
          "Leadership",
          "Data Structures",
        ],
        achievements: [
          "Mentored 100+ students by teaching Python fundamentals, assisting with assignments and projects, conducting weekly help rooms, and grading coursework to support student success and academic performance.",
        ],
      },
      {
        company: "Imagine Software Club",
        role: "Project Lead",
        period: "August 2023 – Present",
        description:
          "Leading a team of 5 to build real-time applications using Java and Spring Boot, implementing REST APIs, WebSocket messaging, and database management.",
        technologies: [
          "Java",
          "Spring Boot",
          "REST APIs",
          "WebSocket",
          "Spring Security",
          "Spring Data JPA",
          "PostgreSQL",
          "JUnit",
          "Git",
          "Swagger",
        ],
        achievements: [
          "Worked with a team of 5 to build a real-time chat app backend using Java and Spring Boot. Implemented REST endpoints and WebSocket messaging, user auth, and message storage in PostgreSQL. Tested with JUnit and used Git for collaboration; supported ~100 users in class/project demos.",
          "Built the backend for a habit-tracking app with Spring Boot REST APIs. Added login, goal CRUD, daily streak logic, and simple scheduled tasks for rollovers; data stored in PostgreSQL and documented with OpenAPI/Swagger.",
        ],
      },
    ],
  });
  const loading = false;
  const error = null;

  return { data, loading, error };
};

export default useResumeData;
