import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <motion.div
          className="footer-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="#home" className="footer-logo">
            ROHIT<span>.</span>
          </a>

          <p>
            Full Stack Web Developer
            <br />
            building for the web.
          </p>

          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </motion.div>

        <div className="footer-line"></div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Rohit</span>
          <span>Designed & Built with React</span>
          <span>INDIA</span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;