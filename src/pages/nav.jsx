import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navs.css";

import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import call from "../assets/call.webp";
import telegram from "../assets/telegram.webp";
import instagram from "../assets/instagram.webp";
import whatsapp from "../assets/whatsapp.webp";
import logo from "../assets/logo.webp";

const navigationItems = [
  { to: "/", label: "خانه" },
  { to: "/about", label: "درباره ما" },
  { to: "/products", label: "محصولات" },
  { to: "/certificate", label: "گواهینامه" },
  { to: "/sale", label: "شبکه فروش" },
  { to: "/contact", label: "ارتباط با ما" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="منوی اصلی">
        <div className="nav-logo" >
          <img src={logo} alt="لوگوی یغما صنعت آرتا پروفیل" />
        </div>

        <div className="nav-brand">
          <p>یغما صنعت آرتا پروفیل</p>
        </div>

        <div className="button-container">
          {navigationItems.map((item) => (
            <Link className="nav-link" to={item.to} key={item.to}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-contact">
          <a href="tel:+989145766503" aria-label="تماس تلفنی">
            <img src={call} alt="" />
          </a>

          <a
            href="https://t.me/Yaghmairanco"
            target="_blank"
            rel="noreferrer"
            aria-label="تلگرام"
          >
            <img src={telegram} alt="" />
          </a>

          <a
            href="https://www.instagram.com/yaghmairanco"
            target="_blank"
            rel="noreferrer"
            aria-label="اینستاگرام"
          >
            <img src={instagram} alt="" />
          </a>

          <a
            href="https://wa.me/989145766503"
            target="_blank"
            rel="noreferrer"
            aria-label="واتساپ"
          >
            <img src={whatsapp} alt="" />
          </a>
        </div>

        <button
          className="toggle-btn"
          type="button"
          onClick={() => setIsMenuOpen((previous) => !previous)}
          aria-label={isMenuOpen ? "بستن منو" : "باز کردن منو"}
          aria-expanded={isMenuOpen}
        >
          <img src={isMenuOpen ? icon2 : icon1} alt="" />
        </button>

        <ul className={`dropdown-menu ${isMenuOpen ? "is-open" : ""}`}>
          {navigationItems.map((item) => (
            <li key={item.to}>
              <Link className="dropdown-link" to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;