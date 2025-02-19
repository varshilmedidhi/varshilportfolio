import { motion } from "framer-motion";

const skillsData = {
  primary: [
    {
      title: "Languages",
      skills: ["Python", "TypeScript", "JavaScript", "C++", "C"],
      gradient: "from-blue-500/20 to-cyan-500/20",
      icon: "🎯",
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Three.js", "Tailwind", "HTML/CSS"],
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: "✨",
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Flask",
        "REST API",
        "WebRTC",
        "Socket.io",
        "MongoDB",
      ],
      gradient: "from-amber-500/20 to-orange-500/20",
      icon: "⚡",
    },
    {
      title: "Data",
      skills: ["PostgreSQL", "Pandas", "NumPy", "PowerBI"],
      gradient: "from-emerald-500/20 to-teal-500/20",
      icon: "🔮",
    },
  ],
  tools: [
    "Git",
    "Postman",
    "Docker",
    "Chart.js",
    "Bootstrap",
    "jQuery",
    "Matplotlib",
    "Tkinter",
    "MS Office",
  ],
};

interface SkillsProps {
  id?: string;
}

const Skills = ({ id }: SkillsProps) => {
  return (
    <section id={id} className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Technical Expertise
          </h2>
          <p className="text-secondary-foreground/60 max-w-2xl mx-auto">
            A curated collection of technologies I work with to build modern
            digital solutions
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {skillsData.primary.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.gradient} blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60`}
              />
              <div className="relative p-6 rounded-3xl bg-secondary/10 backdrop-blur-sm border border-secondary/10 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: (idx + skillIdx) * 0.1 }}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50" />
            <div className="relative p-8 rounded-3xl bg-secondary/10 backdrop-blur-sm border border-secondary/10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <span className="text-2xl">🛠️</span>
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((tool, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
