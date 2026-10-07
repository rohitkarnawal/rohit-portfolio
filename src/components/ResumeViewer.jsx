import "./ResumeViewer.css";

function ResumeViewer({ onClose }) {
  return (
    <div className="resume-overlay">
      <div className="resume-header">
        <div className="resume-brand">
          <span>ROHIT.</span>
          <small>RESUME</small>
        </div>

        <div className="resume-actions">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-open"
          >
            Open PDF ↗
          </a>

          <button onClick={onClose} className="resume-close">
            ×
          </button>
        </div>
      </div>

      <div className="resume-viewer">
        <iframe
          src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
          title="Rohit Resume"
        />
      </div>
    </div>
  );
}

export default ResumeViewer;