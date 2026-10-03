import { motion } from "framer-motion";
import "./Pricing.css";

const plans = [
  {
    number: "01",
    name: "LANDING PAGE",
    price: "₹2,999",
    description:
      "A clean, responsive landing page for portfolios, products, personal brands or small businesses.",
    features: [
      "Responsive design",
      "Modern UI",
      "Smooth animations",
      "Mobile friendly",
    ],
  },
  {
    number: "02",
    name: "BUSINESS WEBSITE",
    price: "₹4,999",
    description:
      "A professional multi-section website designed to give your business a strong online presence.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Modern animations",
    ],
    featured: true,
  },
  {
    number: "03",
    name: "FULL STACK",
    price: "₹9,999",
    description:
      "A complete web application with frontend, backend and database integration.",
    features: [
      "React frontend",
      "Node.js backend",
      "MongoDB database",
      "API integration",
    ],
  },
];

function Pricing() {
  return (
    <section className="pricing-section" id="services">
      <div className="pricing-container">

        <motion.div
          className="pricing-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span>04 — SERVICES & PRICING</span>

            <h2>
              Let's build
              <br />
              <em>something.</em>
            </h2>
          </div>

          <p>
            Simple fixed pricing for getting your idea online.
            Custom requirements can be discussed separately.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.article
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              key={plan.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="pricing-top">
                <span className="pricing-number">{plan.number}</span>

                {plan.featured && (
                  <span className="popular-badge">POPULAR</span>
                )}
              </div>

              <h3>{plan.name}</h3>

              <div className="pricing-price">
                <span>{plan.price}</span>
                <small>starting</small>
              </div>

              <p className="pricing-description">
                {plan.description}
              </p>

              <div className="pricing-divider"></div>

              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="pricing-button">
                Get Started <span>↗</span>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="pricing-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span>NEED SOMETHING CUSTOM?</span>
          <a href="#contact">LET'S TALK ↗</a>
        </motion.div>

      </div>
    </section>
  );
}

export default Pricing;