import "../styles/certificate.css"

import certificateOne from "../assets/certificate1.webp";
import certificateTwo from "../assets/certificate2.webp";

function Certificate() {
  return (
    <section className="certificate-section">
      <div className="certificate-container">
        
        <div className="certificate-list">
          <div className="certificate-card">
            <img src={certificateOne} alt="گواهینامه اول یغما" />
          </div>

          <div className="certificate-card">
            <img src={certificateTwo} alt="گواهینامه دوم یغما" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
