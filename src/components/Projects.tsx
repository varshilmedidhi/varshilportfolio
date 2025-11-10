import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import useResumeData from "../hooks/useResumeData";

const Projects = () => {
  const { data } = useResumeData();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-12">Project Album</h2>
        {data?.projects && data.projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-xl bg-secondary/10 backdrop-blur-sm border border-secondary/10 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer h-full flex flex-col">
                  <div className="space-y-4 flex-grow">
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-secondary/20">
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                      >
                        <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm">View Code</span>
                      </a>
                      {project.links.live &&
                        project.links.live !== project.links.github && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group/link"
                          >
                            <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                            <span className="text-sm">Live Demo</span>
                          </a>
                        )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            Projects will be displayed here
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
