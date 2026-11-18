import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { createServer } from "vite";

const siteUrl = "https://yaghmacompany.ir";

const routes = [
  {
    path: "/",
    output: ".",
    title: "تولیدکننده چهارچوب UPVC و PVC | یغما صنعت آرتا پروفیل",
    description:
      "یغما صنعت آرتا پروفیل؛ تولیدکننده پروفیل چهارچوب UPVC و PVC، چهارچوب طرح فرانسه و محصولات پلیمری ساختمانی در تبریز.",
    component: "Home",
  },
  {
    path: "/products",
    output: "products",
    title: "خرید چهارچوب UPVC و PVC | چهارچوب طرح فرانسه و پلیمری یغما",
    description:
      "مشاهده مدل‌های چهارچوب UPVC، چهارچوب PVC، چهارچوب طرح فرانسه و چهارچوب پلیمری یغما. دریافت مشخصات، ابعاد و قیمت روز از کارخانه و ارسال به سراسر ایران.",
    component: "Products",
  },
  {
    path: "/about",
    output: "about",
    title: "درباره یغما صنعت آرتا پروفیل | تولید پروفیل UPVC",
    description:
      "با یغما صنعت آرتا پروفیل، فعالیت‌ها و محصولات این مجموعه در زمینه تولید پروفیل‌های تخصصی UPVC و چهارچوب‌های پلیمری آشنا شوید.",
    component: "About",
  },
  {
    path: "/contact",
    output: "contact",
    title: "تماس با یغما صنعت آرتا پروفیل | تبریز",
    description:
      "اطلاعات تماس و نشانی کارخانه یغما صنعت آرتا پروفیل در شهرک سلیمی تبریز برای ارتباط درباره چهارچوب PVC، UPVC و محصولات پلیمری.",
    component: "Contact",
  },
  {
    path: "/certificate",
    output: "certificate",
    title: "گواهینامه‌ها و مدارک | یغما صنعت آرتا پروفیل",
    description:
      "مشاهده گواهینامه‌ها و مدارک منتشرشده شرکت یغما صنعت آرتا پروفیل.",
    component: "Certificate",
  },
  {
    path: "/sale",
    output: "sale",
    title: "نمایندگی فروش | یغما صنعت آرتا پروفیل",
    description:
      "اطلاعات نمایندگی‌های فروش محصولات یغما صنعت آرتا پروفیل و راه‌های ارتباط با مجموعه.",
    component: "Sale",
  },
];

const vite = await createServer({
  configFile: "vite.config.js",
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "error",
});

try {
  const modules = await Promise.all([
    vite.ssrLoadModule("/src/SeoManager.jsx"),
    vite.ssrLoadModule("/src/pages/home.jsx"),
    vite.ssrLoadModule("/src/pages/products.jsx"),
    vite.ssrLoadModule("/src/pages/about.jsx"),
    vite.ssrLoadModule("/src/pages/contact.jsx"),
    vite.ssrLoadModule("/src/pages/certificate.jsx"),
    vite.ssrLoadModule("/src/pages/sale.jsx"),
    vite.ssrLoadModule("/src/pages/nav.jsx"),
    vite.ssrLoadModule("/src/pages/notfound.jsx"),
  ]);

  const [
    { default: SeoManager },
    { default: Home },
    { default: Products },
    { default: About },
    { default: Contact },
    { default: Certificate },
    { default: Sale },
    { default: Nav },
    { default: NotFound },
  ] = modules;

  const components = {
    Home,
    Products,
    About,
    Contact,
    Certificate,
    Sale,
  };

  const template = await readFile("dist/index.html", "utf8");
  const manifest = JSON.parse(
    await readFile("dist/.vite/manifest.json", "utf8"),
  );

  const assetUrls = Object.entries(manifest)
    .filter(([source]) => source.startsWith("src/assets/"))
    .map(([source, entry]) => [
      `/src/assets/${source.slice("src/assets/".length)}`,
      `/${entry.file}`,
    ]);

  function replaceOne(html, pattern, replacement, label) {
    if (!pattern.test(html)) {
      throw new Error(`Could not find ${label} in generated HTML`);
    }
    return html.replace(pattern, replacement);
  }

  function addStructuredData(html, route) {
    if (route.path !== "/products") return html;

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "خانه",
          item: `${siteUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "محصولات",
          item: `${siteUrl}/products/`,
        },
      ],
    };

    const script = `<script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>`;
    return html.replace("</head>", `${script}\n</head>`);
  }

  for (const route of routes) {
    const routeElements = routes.map((item) =>
      React.createElement(Route, {
        key: item.path,
        path: item.path,
        element: React.createElement(components[item.component]),
      }),
    );
    routeElements.push(
      React.createElement(Route, {
        key: "not-found",
        path: "*",
        element: React.createElement(NotFound),
      }),
    );

    const app = React.createElement(
      MemoryRouter,
      { initialEntries: [route.path] },
      React.createElement(
        React.Fragment,
        null,
        React.createElement(SeoManager),
        React.createElement(
          "div",
          { style: { marginBottom: "100px", width: "100%" } },
          React.createElement(Nav),
        ),
        React.createElement(Routes, null, ...routeElements),
      ),
    );

    let html = template;
    const markup = renderToString(app);
    html = replaceOne(
      html,
      /<div id="root"><\/div>/,
      `<div id="root">${markup}</div>`,
      "root element",
    );

    const canonical =
      route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}/`;

    html = replaceOne(
      html,
      /<title>[^<]*<\/title>/,
      `<title>${route.title}</title>`,
      "title",
    );
    html = replaceOne(
      html,
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${route.description}" />`,
      "description",
    );
    html = replaceOne(
      html,
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
      "canonical",
    );
    html = replaceOne(
      html,
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${route.title}" />`,
      "Open Graph title",
    );
    html = replaceOne(
      html,
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${route.description}" />`,
      "Open Graph description",
    );
    html = replaceOne(
      html,
      /<meta property="og:url" content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
      "Open Graph URL",
    );

    for (const [source, built] of assetUrls) {
      html = html.replaceAll(source, built);
    }

    html = addStructuredData(html, route);

    const outputDir = join("dist", route.output);
    await mkdir(outputDir, { recursive: true });
    await writeFile(join(outputDir, "index.html"), html);
    console.log(`Prerendered ${route.path} with page content and SEO metadata`);
  }
} finally {
  await vite.close();
}
