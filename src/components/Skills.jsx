import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  {
    number: "01",
    title: "Frontend",
    description: "Building responsive and interactive interfaces.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    number: "02",
    title: "Backend",
    description: "Creating APIs and server-side applications.",
    technologies: ["Node.js", "Express.js", "REST API"],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with structured and document databases.",
    technologies: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    number: "04",
    title: "Tools & More",
    description: "Tools and technologies I use to build projects.",
    technologies: ["Git", "GitHub", "C++", "DSA"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <motion.div
          className="section-heading skills-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>02 — SKILLS</span>

          <h2>
            Tools I use to
            <br />
            <em>build things.</em>
          </h2>
        </motion.div>

        <div className="skills-intro">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            A growing toolkit built through
            <span> practice, projects and curiosity.</span>
          </motion.p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >
              <div className="skill-card-top">
                <span className="skill-number">
                  {skill.number}
                </span>

                <span className="skill-arrow">
                  ↗
                </span>
              </div>

              <div className="skill-icon">
                {index === 0 && "</>"}
                {index === 1 && "API"}
                {index === 2 && "DB"}
                {index === 3 && "⌘"}
              </div>

              <h3>{skill.title}</h3>

              <p>{skill.description}</p>

              <div className="technology-list">
                {skill.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="skill-card-line"></div>
            </motion.div>
          ))}
        </div>

        {/* Tech strip */}

        <motion.div
          className="tech-strip"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>TECHNOLOGIES</span>

          <div className="tech-scroll">
            <p>REACT</p>
            <i>✦</i>
            <p>NODE.JS</p>
            <i>✦</i>
            <p>EXPRESS</p>
            <i>✦</i>
            <p>MONGODB</p>
            <i>✦</i>
            <p>JAVASCRIPT</p>
            <i>✦</i>
            <p>GIT</p>
            <i>✦</i>
            <p>C++</p>
            <i>✦</i>
            <p>DSA</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Skills;