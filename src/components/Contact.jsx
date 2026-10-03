import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>06 — CONTACT</span>

          <h2>
            Let's build
            <br />
            something <em>great.</em>
          </h2>

          <p>
            Have a project, opportunity or just want to
            connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="contact-grid">

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <a
              href="mailto:rohitkarnawal.dev@gmail.com"
              className="contact-email"
            >
              rohitkarnawal.dev@gmail.com
              <span>↗</span>
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/rohitkarnawal"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/rohitdev3315/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onSubmit={handleSubmit}
          >
            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="94ecad90-e9ca-4007-9813-d4f6ea852f0c"
            />

            <input
              type="hidden"
              name="to"
              value="rohitkarnawal.dev@gmail.com"
            />

            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Let's work together"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <span>↗</span>
            </button>

            {status && (
              <p className="form-status">
                {status}
              </p>
            )}
          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;