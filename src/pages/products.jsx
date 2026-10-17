import "../styles/product.css";

import product1 from "../assets/product1.webp";
import product2 from "../assets/product2.webp";
import product3 from "../assets/product3.webp";
import product4 from "../assets/product4.webp";

const products = [
  {
    id: 1,
    name: "چهارچوب طرح فرانسه پی وی سی (پلیمری)",
    image: product1,
    description:
      "پروفیل طرح فرانسه از جنس یو پی وی سی در دو نوع گسگت‌خور و ساده و در رنگ‌های طوسی و سفید موجود است. رنگ طوسی به عنوان درجه دو و رنگ سفید به عنوان درجه یک عرضه می‌شود.",
  },
  {
    id: 2,
    name: "چهارچوب روکوب‌دار پی وی سی (پلیمری)",
    image: product2,
    description:
      "پروفیل روکوب‌دار از جنس یو پی وی سی در دو رنگ طوسی و سفید به بازار عرضه می‌شود.",
  },
  {
    id: 3,
    name: "چهارچوب پروازدار و درب ضد آب پی وی سی (پلیمری)",
    image: product3,
    description:
      "این چهارچوب، مشابه مدل‌های پلی‌وود موجود در بازار، در این مجموعه به‌صورت کامل از جنس یو پی وی سی عرضه می‌شود.",
  },
  {
    id: 4,
    name: "صفحه کابینت و درب ضد آب پی وی سی",
    image: product4,
    description:
      "این محصول از جنس پی وی سی سخت است و می‌توان از آن هم به عنوان صفحه ضد آب کابینت و هم به عنوان درب ضد آب استفاده کرد.",
  },
];

function Products() {
  return (
    <section className="products-section" dir="rtl">
      <div className="products-container">
        <div className="products-list">
          {products.map((product) => (
            <article className="product-row" key={product.id}>
              <div className="product-image-card">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="product-extra">
          تمامی محصولات به صورت خام، رنگ‌شده و روکش وکیوم (لمینت) موجود
          می‌باشند.
        </p>
      </div>
    </section>
  );
}

export default Products;