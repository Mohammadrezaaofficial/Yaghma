import "../styles/product.css";

import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";

const products = [
  {
    id: 1,
    name: "چهارچوب طرح فرانسه UPVC (پلیمری)",
    image: product1,
    description:
      "پروفیل چهارچوب طرح فرانسه از جنس یو پی وی سی در دو مدل گسگت‌خور و ساده و در رنگ‌های سفید و طوسی عرضه می‌شود. هنگام انتخاب، مدل موردنیاز و رنگ مناسب پروژه را با واحد فروش بررسی کنید.",
  },
  {
    id: 2,
    name: "چهارچوب روکوب‌دار UPVC (پلیمری)",
    image: product2,
    description:
      "چهارچوب روکوب‌دار از جنس یو پی وی سی در رنگ‌های سفید و طوسی عرضه می‌شود. این مدل برای پروژه‌هایی مناسب است که استفاده از چهارچوب همراه با روکوب مدنظر باشد؛ جزئیات اجرا و ابعاد را پیش از سفارش هماهنگ کنید.",
  },
  {
    id: 3,
    name: "چهارچوب پروازدار و درب ضدآب PVC (پلیمری)",
    image: product3,
    description:
      "این چهارچوب از محصولات پلیمری مجموعه است و به‌عنوان گزینه‌ای مشابه مدل‌های پروازدار موجود در بازار معرفی می‌شود. برای اطلاع از مشخصات فنی، ابعاد قابل سفارش و سازگاری با پروژه، با مجموعه تماس بگیرید.",
  },
  {
    id: 4,
    name: "صفحه کابینت و درب ضدآب PVC",
    image: product4,
    description:
      "این محصول از جنس PVC سخت معرفی شده و می‌تواند برای کاربردهای مرتبط با صفحه کابینت یا درب ضدآب بررسی شود. شرایط نصب و کاربرد مناسب را متناسب با نیاز پروژه استعلام کنید.",
  },
];

const faqs = [
  {
    question: "چهارچوب UPVC و چهارچوب پی وی سی چه تفاوتی دارند؟",
    answer:
      "UPVC به نوعی PVC سخت‌شده و بدون نرم‌کننده‌های رایج اشاره دارد. در زمان خرید، فقط به نام محصول اکتفا نکنید و جنس دقیق، مشخصات فنی و کاربرد پیشنهادی همان مدل را از تولیدکننده بپرسید.",
  },
  {
    question: "چهارچوب طرح فرانسه UPVC در چه مدل‌هایی عرضه می‌شود؟",
    answer:
      "چهارچوب طرح فرانسه یغما در مدل‌های گسگت‌خور و ساده معرفی شده است. رنگ‌های اعلام‌شده برای این محصول سفید و طوسی هستند؛ موجودی و مشخصات سفارش را پیش از خرید تأیید کنید.",
  },
  {
    question: "منظور از چارچوب پلیمری چیست؟",
    answer:
      "چارچوب پلیمری عنوانی کلی برای چهارچوب‌هایی با مواد پایه پلیمری است. برای مقایسه درست محصولات، جنس دقیق پروفیل، طراحی مقطع، ابعاد و شرایط نصب را بررسی کنید.",
  },
  {
    question: "برای سفارش چهارچوب یو پی وی سی چه اطلاعاتی لازم است؟",
    answer:
      "مدل چهارچوب، ابعاد موردنیاز، رنگ و نوع اجرا را مشخص کنید. سپس جزئیات فنی، موجودی، شرایط تولید و ارسال را مستقیماً از واحد فروش یغما استعلام بگیرید.",
  },
];

function Products() {
  return (
    <section className="products-page-section" dir="rtl">
      <div className="products-container">
        <header className="products-intro">
          <h1>تولید و عرضه چهارچوب یو پی وی سی، UPVC و PVC</h1>
          <p>
            یغما صنعت آرتا پروفیل تولیدکننده پروفیل چهارچوب‌های پلیمری برای کاربردهای
            ساختمانی است. در این صفحه می‌توانید مدل‌های چهارچوب طرح فرانسه UPVC،
            چهارچوب روکوب‌دار و دیگر محصولات PVC را بررسی کنید. عبارت‌های چهارچوب
            یو پی وی سی، چهارچوب UPVC و چهارچوب پی وی سی در بازار گاهی به‌جای یکدیگر
            جست‌وجو می‌شوند؛ برای انتخاب دقیق، جنس و مشخصات فنی همان محصول را بررسی کنید.
          </p>
        </header>

        <div className="products-list">
          {products.map((product) => (
            <article className="product-row" key={product.id}>
              <div className="product-image-card">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>

              <div className="product-content">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="product-extra">
          درباره موجودی، رنگ، روکش و مشخصات هر محصول، پیش از ثبت سفارش استعلام بگیرید.
        </p>

        <section className="products-faq" aria-labelledby="products-faq-title">
          <h2 id="products-faq-title">سوالات متداول درباره چهارچوب UPVC و پلیمری</h2>
          {faqs.map((faq) => (
            <article className="products-faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Products;
