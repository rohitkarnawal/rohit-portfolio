import "./WhatsAppButton.css";

function WhatsAppButton() {
  const whatsappNumber = "919779171761";

  const message = encodeURIComponent(
    "Hi Rohit, I'm interested in working with you."
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      className="whatsapp-button"
      target="_blank"
      rel="noreferrer"
      aria-label="Contact me on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>

      <span className="whatsapp-tooltip">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export default WhatsAppButton;