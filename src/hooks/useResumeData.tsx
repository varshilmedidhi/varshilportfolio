import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    live: string;
  };
}

interface WorkExperience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface ResumeData {
  projects: Project[];
  workExperiences: WorkExperience[];
}

const BASE_URL = "https://backend-resume-production.up.railway.app/api";

const useResumeData = () => {
  const [data, setData] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch both projects and work experience in parallel
        const [projectsResponse, workResponse] = await Promise.all([
          fetch(`${BASE_URL}/projects`),
          fetch(`${BASE_URL}/work-experience`),
        ]);

        if (!projectsResponse.ok || !workResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const [projects, workExperiences] = await Promise.all([
          projectsResponse.json(),
          workResponse.json(),
        ]);

        setData({
          projects,
          workExperiences,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching resume data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useResumeData;
