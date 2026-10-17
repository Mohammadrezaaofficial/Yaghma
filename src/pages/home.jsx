import { useEffect, useRef, useState } from "react";
import "../styles/home.css";

import Wallpaper1 from "../assets/walpaper1.webp";
import Wallpaper2 from "../assets/walpaper2.webp";
import Wallpaper3 from "../assets/walpaper3.webp";
import Wallpaper4 from "../assets/walpaper4.webp";
import Wallpaper5 from "../assets/walpaper5.webp";

import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";

import telegram from "../assets/telegram.webp";
import instagram from "../assets/instagram.webp";
import whatsapp from "../assets/whatsapp.webp";

const slides = [
  {
    title: "یغما، استانداردی برای فردا",
    text: "چهارچوب یو پی وی سی یغما، تلفیقی از طراحی نوآورانه و محصول ایرانی برای نسل جدید چهارچوب‌ها",
    image: Wallpaper1,
  },
  {
    title: "نوآوری در ساخت، انتخابی قابل اعتماد",
    text: "کیفیتی ماندگار",
    image: Wallpaper2,
  },
  {
    title: "فراتر از یک پرووفیل",
    text: "اعتبار ما اطمینان شماست",
    image: Wallpaper3,
  },
  {
    title: "قدرت در ساخت‌، دقت در جزئیات",
    text: "با افتخار ایرانی، با استاندارد جهانی",
    image: Wallpaper4,
  },
  {
    title: "محصولی از ایران برای فردای جهان",
    text: "کیفیتی در تراز جهان و محصولی بین المللی",
    image: Wallpaper5,
  },
];

const products = [
  {
    image: product1,
    alt: "چهارچوب طرح فرانسه پی وی سی",
    title: "#چهارچوب طرح فرانسه پی وی سی (پلیمری)",
  },
  {
    image: product2,
    alt: "چهارچوب روکوب دار پی وی سی",
    title: "#چهارچوب روکوب دار پی وی سی (پلیمری)",
  },
  {
    image: product3,
    alt: "چهارچوب پرواز دار و درب ضد آب پی وی سی",
    title: "#چهارچوب پرواز دار و درب ضد آب پی وی سی (پلیمری)",
  },
  {
    image: product4,
    alt: "صفحه کابینت و درب ضد آب پی وی سی",
    title: "#صفحه کابینت و درب ضد آب پی وی سی",
  },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [areProductsVisible, setAreProductsVisible] = useState(false);

  const textRef = useRef(null);
  const productsRef = useRef(null);
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  const previousSlide = () => {
    setActiveSlide((current) =>
      current === 0 ? slides.length - 1 : current - 1,
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const swipeDistance = touchStartX.current - touchEndX;

    if (swipeDistance > 50) nextSlide();
    if (swipeDistance < -50) previousSlide();

    touchStartX.current = null;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current) {
            setIsTextVisible(entry.isIntersecting);
          }

          if (entry.target === productsRef.current) {
            setAreProductsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (textRef.current) observer.observe(textRef.current);
    if (productsRef.current) observer.observe(productsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main className="home">
      <section
        className="slider"
        aria-label="اسلایدر معرفی یغما"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={activeSlide}
          className="slider__image"
          src={slides[activeSlide].image}
          alt={slides[activeSlide].title}
        />

        <div className="slider__overlay" />

        <div key={`content-${activeSlide}`} className="slider__content">
          <h1>{slides[activeSlide].title}</h1>
          <p>{slides[activeSlide].text}</p>
        </div>

        <button
          className="slider__arrow slider__arrow--previous"
          type="button"
          onClick={previousSlide}
          aria-label="اسلاید قبلی"
        >
          &#10094;
        </button>

        <button
          className="slider__arrow slider__arrow--next"
          type="button"
          onClick={nextSlide}
          aria-label="اسلاید بعدی"
        >
          &#10095;
        </button>

        <div className="slider__dots">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`slider__dot ${
                activeSlide === index ? "slider__dot--active" : ""
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`نمایش اسلاید ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="intro-section" ref={textRef}>
        <div className={`persian-intro ${isTextVisible ? "is-visible" : ""}`}>
          <h2 className="yaghma-header">درباره یغما</h2>

          <p className="yaghma-explain">
            کارخانجات یغما، تحت مالکیت شرکت یغما صنعت آرتا پروفیل، با رویکردی
            نوآورانه در زمینه تولید پروفیل‌های چهارچوب، درب و صفحات UPVC فعالیت
            می‌کند.
            <br />
            این مجموعه فعالیت خود را از سال ۱۳۹۸ با تکیه بر ایده‌ای نوآورانه
            آغاز کرد و با توسعه مستمر دانش و فناوری، مسیر تولید تخصصی این
            محصولات را گسترش داد.
            <br />
            امروز یغما با تکیه بر توان تولید، دانش فنی و نگاه رو به آینده، در
            مسیر توسعه صنعت UPVC ایران و ارائه محصولاتی با کیفیت و قابل اعتماد
            گام برمی‌دارد.
          </p>
        </div>
      </section>

      <section
        className={`products-section ${areProductsVisible ? "is-visible" : ""}`}
        ref={productsRef}
      >
        <h2>محصولات ما</h2>

        <div className="products-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt={product.alt} />
              <h3>{product.title}</h3>
            </article>
          ))}
        </div>

        <p className="extra-info">
          خط بازویی درب و خط پروفیل آلومینیوم در آینده نزدیک اضافه خواهد شد.
        </p>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>یغما صنعت آرتا پروفیل</h3>
            <p>تبریز، شهرک سلیمی، خیابان صنعت ۱۴، پلاک ۱۳۶۲</p>

            <a href="tel:+989145766503">شماره تماس: ۰۹۱۴۵۷۶۶۵۰۳</a>

            <div className="footer-socials">
              <a
                href="https://wa.me/989145766503"
                target="_blank"
                rel="noreferrer"
                aria-label="واتساپ"
              >
                <img src={whatsapp} alt="واتساپ" />
              </a>

              <a
                href="https://www.instagram.com/yaghmairanco"
                target="_blank"
                rel="noreferrer"
                aria-label="اینستاگرام"
              >
                <img src={instagram} alt="اینستاگرام" />
              </a>

              <a
                href="https://t.me/Yaghmairanco"
                target="_blank"
                rel="noreferrer"
                aria-label="تلگرام"
              >
                <img src={telegram} alt="تلگرام" />
              </a>
            </div>
          </div>

          <div className="footer-form">
            <h3>فرم درخواست مشاوره</h3>

            <form
              className="consultation-form"
              action="https://formspree.io/f/maeqvgbj"
              method="POST"
            >
              <input
                name="fullName"
                type="text"
                placeholder="نام و نام خانوادگی *"
                required
              />

              <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="شماره تماس *"
                pattern="09[0-9]{9}"
                title="شماره موبایل باید با 09 شروع شود و 11 رقم باشد."
                required
              />

              <textarea
                name="message"
                rows="4"
                placeholder="توضیحات (اختیاری)"
              />

              <button type="submit">ارسال درخواست</button>
            </form>
          </div>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} یغما صنعت آرتا پروفیل. تمامی حقوق محفوظ
          است.
        </p>
      </footer>
    </main>
  );
}

export default Home;