import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import SeoManager from "./SeoManager.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Products from "./pages/products.jsx";
import Nav from "./pages/nav.jsx";
import Certificate from "./pages/certificate.jsx";
import Sale from "./pages/sale.jsx";
import NotFound from "./pages/notfound.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <>
      <SeoManager />
      <div style={{ marginBottom: "100px", width: "100%" }}>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  </Router>,
);
