import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section heading */}
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>01 — ABOUT ME</span>

          <h2>
            Building things
            <br />
            <em>with purpose.</em>
          </h2>
        </motion.div>

        <div className="about-grid">

          {/* Left */}
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-large">
              I'm <strong>Rohit</strong>, a BCA student and
              Full Stack Web Developer who enjoys turning ideas
              into functional and engaging digital experiences.
            </p>

            <p className="about-text">
              I work primarily with the MERN stack and I'm
              constantly improving my problem-solving skills
              through Data Structures and Algorithms.
            </p>

            <p className="about-text">
              I believe good development is not just about
              writing code — it's about creating products that
              are useful, intuitive and enjoyable to use.
            </p>

            <a href="#contact" className="about-link">
              Let's work together <span>↗</span>
            </a>
          </motion.div>

          {/* Right */}
          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >

            <div className="about-card">
              <span className="card-label">CURRENTLY</span>

              <h3>
                Learning,
                <br />
                building &
                <br />
                improving.
              </h3>

              <div className="card-line"></div>

              <div className="currently-list">
                <span>React.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>DSA / C++</span>
              </div>
            </div>

            <div className="stats-grid">

              <div className="stat-card">
                <strong>3+</strong>
                <span>Projects</span>
              </div>

              <div className="stat-card">
                <strong>MERN</strong>
                <span>Stack</span>
              </div>

              <div className="stat-card">
                <strong>DSA</strong>
                <span>In Progress</span>
              </div>

              <div className="stat-card">
                <strong>BCA</strong>
                <span>Student</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;