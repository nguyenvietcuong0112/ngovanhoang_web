import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import FloatingContact from "./components/Layout/FloatingContact";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <FloatingContact />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/dich-vu" element={<Services />} />
      <Route path="/bao-gia" element={<Pricing />} />
      <Route path="/cong-trinh" element={<Gallery />} />
      <Route path="/bai-viet" element={<Articles />} />
      <Route path="/bai-viet/:slug" element={<ArticleDetail />} />
      <Route path="/lien-he" element={<Contact />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
