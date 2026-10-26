import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://yaghmacompany.ir";

const pageMetadata = {
  "/": {
    title: "چهارچوب یو پی وی سی و UPVC | یغما صنعت آرتا پروفیل",
    description: "یغما صنعت آرتا پروفیل؛ تولیدکننده پروفیل چهارچوب یو پی وی سی، چهارچوب UPVC و PVC، چهارچوب طرح فرانسه و محصولات پلیمری ساختمانی.",
  },
  "/about": {
    title: "درباره یغما صنعت آرتا پروفیل | تولید پروفیل UPVC",
    description: "با یغما صنعت آرتا پروفیل، فعالیت‌ها و محصولات این مجموعه در زمینه تولید پروفیل‌های تخصصی UPVC و چهارچوب‌های پلیمری آشنا شوید.",
  },
  "/products": {
    title: "چهارچوب یو پی وی سی و طرح فرانسه | محصولات یغما",
    description: "مشاهده و مقایسه چهارچوب یو پی وی سی، چهارچوب UPVC، چهارچوب طرح فرانسه UPVC، چهارچوب پی وی سی و چارچوب پلیمری تولید یغما.",
  },
  "/contact": {
    title: "تماس با یغما صنعت آرتا پروفیل | تبریز",
    description: "اطلاعات تماس و نشانی کارخانه یغما صنعت آرتا پروفیل در شهرک سلیمی تبریز برای ارتباط درباره چهارچوب PVC، UPVC و محصولات پلیمری.",
  },
  "/certificate": {
    title: "گواهینامه‌ها و مدارک | یغما صنعت آرتا پروفیل",
    description: "مشاهده گواهینامه‌ها و مدارک منتشرشده شرکت یغما صنعت آرتا پروفیل.",
  },
  "/sale": {
    title: "نمایندگی فروش | یغما صنعت آرتا پروفیل",
    description: "اطلاعات نمایندگی‌های فروش محصولات یغما صنعت آرتا پروفیل و راه‌های ارتباط با مجموعه.",
  },
};

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, "") || "/";
    const metadata = pageMetadata[path] || {
      title: "صفحه پیدا نشد | یغما صنعت آرتا پروفیل",
      description: "صفحه موردنظر در وب‌سایت یغما صنعت آرتا پروفیل پیدا نشد.",
    };
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;

    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = metadata.title;

    setMeta("name", "description", metadata.description);
    setMeta("name", "robots", path in pageMetadata ? "index, follow, max-image-preview:large" : "noindex, follow");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [location.pathname]);

  return null;
}
