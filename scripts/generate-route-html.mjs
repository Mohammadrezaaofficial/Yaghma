import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const siteUrl = "https://yaghmacompany.ir";
const routes = {
  products: {
    title: "چهارچوب یو پی وی سی و طرح فرانسه | محصولات یغما",
    description: "مشاهده و مقایسه چهارچوب یو پی وی سی، چهارچوب UPVC، چهارچوب طرح فرانسه UPVC، چهارچوب پی وی سی و چارچوب پلیمری تولید یغما.",
  },
  about: {
    title: "درباره یغما صنعت آرتا پروفیل | تولید پروفیل UPVC",
    description: "با یغما صنعت آرتا پروفیل، فعالیت‌ها و محصولات این مجموعه در زمینه تولید پروفیل‌های تخصصی UPVC و چهارچوب‌های پلیمری آشنا شوید.",
  },
  contact: {
    title: "تماس با یغما صنعت آرتا پروفیل | تبریز",
    description: "اطلاعات تماس و نشانی کارخانه یغما صنعت آرتا پروفیل در شهرک سلیمی تبریز برای ارتباط درباره چهارچوب PVC، UPVC و محصولات پلیمری.",
  },
  certificate: {
    title: "گواهینامه‌ها و مدارک | یغما صنعت آرتا پروفیل",
    description: "مشاهده گواهینامه‌ها و مدارک منتشرشده شرکت یغما صنعت آرتا پروفیل.",
  },
  sale: {
    title: "نمایندگی فروش | یغما صنعت آرتا پروفیل",
    description: "اطلاعات نمایندگی‌های فروش محصولات یغما صنعت آرتا پروفیل و راه‌های ارتباط با مجموعه.",
  },
};

const template = await readFile("dist/index.html", "utf8");

function replaceOne(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`Could not find ${label} in dist/index.html`);
  return html.replace(pattern, replacement);
}

for (const [route, metadata] of Object.entries(routes)) {
  const canonical = `${siteUrl}/${route}/`;
  let html = template;
  html = replaceOne(html, /<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`, "title");
  html = replaceOne(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${metadata.description}" />`, "description");
  html = replaceOne(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`, "canonical");
  html = replaceOne(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${metadata.title}" />`, "Open Graph title");
  html = replaceOne(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${metadata.description}" />`, "Open Graph description");
  html = replaceOne(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${canonical}" />`, "Open Graph URL");

  const outputDir = join("dist", route);
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, "index.html"), html);
  console.log(`Generated static SEO entry: /${route}/`);
}
