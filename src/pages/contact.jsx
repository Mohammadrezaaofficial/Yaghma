import "../styles/contact.css"

import call from "../assets/call.webp";
import telegram from "../assets/telegram.webp";
import instagram from "../assets/instagram.webp";
import whatsapp from "../assets/whatsapp.webp";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">تماس با ما</h2>

        <div className="contact-layout">
          {/* Right side */}
          <div className="contact-info">
            <div className="contact-item">
              <img className="contact-icon" src={call} alt="" />

              <div>
                <h3>شماره تماس</h3>
                <a href="tel:+989145766503">۰۹۱۴۵۷۶۶۵۰۳</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="address-sign">آدرس</div>

              <div>
                <h3>آدرس کارخانه</h3>
                <p>تبریز، شهرک سلیمی، خیابان صنعت ۱۴، پلاک ۱۳۶۲</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>شبکه‌های اجتماعی</h3>

              <div className="social-links">
                <a
                  href="https://instagram.com/yaghmairanco"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <img src={instagram} alt="" />
                </a>

                <a
                  href="https://t.me/Yaghmairanco"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                >
                  <img src={telegram} alt="" />
                </a>

                <a
                  href="https://wa.me/+989145766503"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <img src={whatsapp} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Left side */}
          <div className="map-card">
            <iframe
              title="موقعیت یغما"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5544.1738327471285!2d45.921963735014366!3d37.85566587843984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x401a647b61f14181%3A0x53eb26c1fa94b00!2sShaheed%20Salimi%20Mamaqan%20Town%2C%20East%20Azerbaijan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1792169514657!5m2!1sen!2s"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
