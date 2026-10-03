import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-noise"></div>

      <motion.div
        className="hero-spotlight"
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -40, 50, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* LEFT SIDE */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >

          <motion.div
            className="availability"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="availability-dot"></span>
            Open to work
          </motion.div>

          <motion.p
            className="hero-intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
            }}
          >
            Rohit<span>.</span>
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            Full Stack
            <br />
            <span>Web Developer</span>
          </motion.div>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          >
            I build modern, responsive and scalable web
            applications with the MERN stack — turning ideas
            into clean digital experiences.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#projects" className="hero-primary-btn">
              <span>View My Work</span>
              <span className="btn-arrow">↗</span>
            </a>

            <a href="#contact" className="hero-secondary-btn">
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            className="hero-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <span></span>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </motion.div>

        </motion.div>


        {/* RIGHT SIDE */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.85,
            x: 50,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 1,
            type: "spring",
            stiffness: 80,
          }}
        >

          <motion.div
            className="hero-ring ring-one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-ring ring-two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="developer-window"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            <div className="window-header">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="window-title">
                rohit.dev
              </div>

            </div>

            <div className="window-body">

              <div className="code-line">
                <span className="line-number">01</span>
                <span className="purple">const</span>{" "}
                <span className="blue">developer</span> =
                {" {"}
              </div>

              <div className="code-line indent">
                <span className="line-number">02</span>
                name:{" "}
                <span className="green">
                  "Rohit"
                </span>,
              </div>

              <div className="code-line indent">
                <span className="line-number">03</span>
                role:{" "}
                <span className="green">
                  "Full Stack Developer"
                </span>,
              </div>

              <div className="code-line indent">
                <span className="line-number">04</span>
                stack:{" "}
                <span className="green">
                  ["React", "Node", "MongoDB"]
                </span>,
              </div>

              <div className="code-line indent">
                <span className="line-number">05</span>
                passion:{" "}
                <span className="green">
                  "Building"
                </span>
              </div>

              <div className="code-line">
                <span className="line-number">06</span>
                {"};"}
              </div>

              <div className="terminal">
                <span>$</span> npm run build
              </div>

              <div className="success">
                ✓ Build successful
              </div>

            </div>

            <div className="window-footer">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

          </motion.div>

        </motion.div>

      </div>

      <motion.div
        className="scroll-text"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        SCROLL TO EXPLORE
        <span>↓</span>
      </motion.div>

    </section>
  );
}

export default Hero;