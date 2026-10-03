import { useRef } from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "KICKLAB",
    category: "FULL STACK E-COMMERCE",
    description:
      "A modern sneaker shopping platform with dynamic products, product details and a MongoDB-powered backend.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/media/images/cortez.jpg",
    video: "/media/videos/kicklab.mp4",
    github: "#",
    live: null,
  },

  {
    number: "02",
    title: "WANDERLUST",
    category: "FULL STACK",
    description:
      "A full-stack travel listing platform where users can explore, create and manage property listings with authentication, reviews and database integration.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS"],
    image: "/media/images/wanderlust.jpg",
    video: "/media/videos/wanderlust.mp4",
    github: "https://github.com/rohitkarnawal/WanderLust",
    live: null,
  },

  {
    number: "03",
    title: "ZERODHA CLONE",
    category: "FULL STACK / FINTECH",
    description:
      "A self-built Zerodha-inspired trading platform clone created to practice full-stack development, UI design, APIs and database-driven applications.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/media/images/zerodha.jpg",
    video: "/media/videos/zerodha.mp4",
    github: "#",
    live: null,
  },

  {
    number: "04",
    title: "CRUNCHYROLL",
    category: "FRONTEND",
    description:
      "A Crunchyroll-inspired landing page focused on recreating the visual experience, responsive layout and polished frontend interactions.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/media/images/crunchyroll.jpg",
    video: "/media/videos/crunchyroll.mp4",
    github: "#",
    live: null,
  },
];

function ProjectPreview({ project }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;

      videoRef.current
        .play()
        .catch(() => {
          // Browser autoplay restriction
        });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="project-image-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image">

        {/* Default Project Image */}
        <img
          src={project.image}
          alt={`${project.title} project preview`}
        />

        {/* Hover Video */}
        {project.video && (
          <video
            ref={videoRef}
            className="project-video"
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
        )}

      </div>

      <div className="project-overlay">
        <span>HOVER TO PREVIEW</span>

        <span className="project-overlay-arrow">
          ↗
        </span>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">

      <div className="projects-container">

        {/* ================= HEADING ================= */}

        <motion.div
          className="projects-heading"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div>

            <span>
              03 — SELECTED WORK
            </span>

            <h2>
              Things I've
              <br />
              <em>built.</em>
            </h2>

          </div>

          <p>
            A collection of projects built while learning,
            experimenting and turning ideas into working
            digital experiences.
          </p>
        </motion.div>


        {/* ================= PROJECT LIST ================= */}

        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className="project-card"
              key={project.number}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.15,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >

              {/* PROJECT PREVIEW */}

              <ProjectPreview
                project={project}
              />


              {/* PROJECT CONTENT */}

              <div className="project-content">

                <div className="project-meta">

                  <span>
                    {project.number}
                  </span>

                  <span>
                    {project.category}
                  </span>

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="project-tech">

                  {project.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    )
                  )}

                </div>


                {/* PROJECT LINKS */}

                <div className="project-links">

                  {project.github !== "#" ? (

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>

                  ) : (

                    <span className="coming-soon">
                      GitHub Coming Soon
                    </span>

                  )}


                  {project.live && (

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>

                  )}

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* ================= BOTTOM ================= */}

        <motion.div
          className="projects-bottom"

          initial={{
            opacity: 0,
          }}

          whileInView={{
            opacity: 1,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <span>
            MORE PROJECTS COMING SOON
          </span>

          <div className="projects-line"></div>

          <span>
            ROHIT.DEV
          </span>

        </motion.div>

      </div>

    </section>
  );
}

export default Projects;