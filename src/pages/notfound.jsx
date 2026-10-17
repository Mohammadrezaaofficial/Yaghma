import { Link } from "react-router-dom";
import "../styles/notfound.css";
import logo from "../assets/logo.webp";

function NotFound() {
  return (
    <main className="notfound-page" dir="rtl">
      <section className="notfound-card">
        <Link className="notfound-logo" to="/" aria-label="بازگشت به صفحه اصلی">
          <img src={logo} alt="لوگوی یغما صنعت آرتا پروفیل" />
        </Link>

        <p className="notfound-code">۴۰۴</p>

        <h1>صفحه مورد نظر پیدا نشد</h1>

        <p className="notfound-description">
          متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده
          است.
        </p>

        <Link className="notfound-button" to="/">
          بازگشت به صفحه اصلی
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
