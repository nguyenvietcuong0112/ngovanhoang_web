import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Ceiling from "./pages/Ceiling";
import Wall from "./pages/Wall";
import Repair from "./pages/Repair";
import Dismantle from "./pages/Dismantle";
import News from "./pages/News";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Gallery from "./pages/Gallery";
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
      <Route path="/gioi-thieu" element={<About />} />
      <Route path="/tran-thach-cao" element={<Ceiling />} />
      <Route path="/vach-thach-cao" element={<Wall />} />
      <Route path="/sua-chua-thach-cao" element={<Repair />} />
      <Route path="/thao-do-thach-cao" element={<Dismantle />} />
      <Route path="/pha-do-nha" element={<Navigate to="/bai-viet/pha-do-nha-cu-tai-ha-noi" replace />} />
      <Route path="/tin-tuc" element={<News />} />
      <Route path="/lien-he" element={<Contact />} />
      <Route path="/dich-vu" element={<Services />} />
      <Route path="/bao-gia" element={<Pricing />} />
      <Route path="/cong-trinh" element={<Gallery />} />
      <Route path="/bai-viet" element={<Navigate to="/tin-tuc" replace />} />
      <Route path="/bai-viet/:slug" element={<ArticleDetail />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
