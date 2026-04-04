import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Phone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Star,
  MapPin,
  Mail,
  Home,
  Hammer,
  Paintbrush,
  Layout
} from "lucide-react";

// ================= ASSETS =================
import hero_ceiling from "/src/assets/hero-ceiling.png";
import hero_painting from "/src/assets/hero-painting.png";
import hero_renovation from "/src/assets/hero-renovation.png";
import feat_ceiling from "/src/assets/feat-ceiling.png";
import feat_painting from "/src/assets/feat-painting.png";
import about_img from "/src/assets/about-home.png";

const slides = [
  {
    title: "Thi công trần thạch cao – Sơn bả – Sơn tường chuyên nghiệp",
    subTitle: "Đẹp – Bền – Giá hợp lý – Thi công nhanh",
    description: "Chúng tôi chuyên thi công trần thạch cao, sơn bả tường và sơn tường nhà ở, chung cư, văn phòng với đội ngũ thợ nhiều năm kinh nghiệm.",
    image: hero_ceiling,
  },
  {
    title: "Hoàn thiện nội thất cơ bản với chất lượng vượt trội",
    subTitle: "Tận tâm trong từng chi tiết công trình",
    description: "Dịch vụ trọn gói từ khâu khảo sát đến thi công hoàn thiện, đảm bảo thẩm mỹ và độ bền cao nhất cho ngôi nhà của bạn.",
    image: hero_painting,
  },
  {
    title: "Mang phong thái hiện đại vào không gian sống của bạn",
    subTitle: "Sửa nhà Hà Nội – Uy tín tạo niềm tin",
    description: "Sử dụng vật liệu chính hãng, quy trình thi công đạt chuẩn, bảo hành dài hạn cho mọi công trình.",
    image: hero_renovation,
  }
];

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState("all");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const advantages = [
    { title: "Thi công nhanh chóng", icon: <Zap className="w-6 h-6 text-primary" /> },
    { title: "Giá cả cạnh tranh", icon: <CheckCircle2 className="w-6 h-6 text-primary" /> },
    { title: "Vật liệu chất lượng", icon: <ShieldCheck className="w-6 h-6 text-primary" /> },
    { title: "Bảo hành công trình", icon: <Star className="w-6 h-6 text-primary" /> },
  ];

  const galleryItems = [
    { title: "Trần thạch cao phòng khách", category: "nha-o", image: hero_ceiling },
    { title: "Hệ thống trần giật cấp hiện đại", category: "chung-cu", image: feat_ceiling },
    { title: "Phòng ngủ ấm cúng với trần phẳng", category: "nha-o", image: hero_renovation },
    { title: "Văn phòng làm việc sang trọng", category: "van-phong", image: feat_painting },
    { title: "Sơn bả mịn màng cho căn hộ", category: "chung-cu", image: about_img },
    { title: "Hoàn thiện tường nhà phố", category: "nha-o", image: hero_painting },
  ];

  const filteredGallery = galleryFilter === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === galleryFilter);

  return (
    <div className="min-h-screen bg-background text-foreground scroll-smoothSelection">
      <Header />

      <main>
        {/* ================= HERO SECTION ================= */}
        <section id="hero" className="relative h-screen flex items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src={slides[activeSlide].image}
                alt="Construction Banner"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <div className="container relative z-20 mx-auto px-4 lg:px-8">
            <div className="max-w-3xl space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                {slides[activeSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-white/90 font-medium border-l-4 border-primary pl-4"
              >
                {slides[activeSlide].subTitle}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-lg text-white/80 max-w-xl"
              >
                {slides[activeSlide].description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary-hover text-white px-8 h-12 text-base">
                  <a href="#pricing">Xem báo giá</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-white text-white hover:bg-white hover:text-primary-hover px-8 h-12 text-base backdrop-blur-sm bg-black/10">
                  <a href="#contact">Liên hệ tư vấn</a>
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`w-3 h-3 rounded-full transition-all ${activeSlide === idx ? "bg-primary w-8" : "bg-white/50 hover:bg-white"}`}
              />
            ))}
          </div>
        </section>

        {/* ================= ABOUT US ================= */}
        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 -z-10 rounded-lg" />
                <img
                  src={about_img}
                  alt="Đội ngũ Sửa nhà Hà Nội"
                  className="rounded-2xl shadow-premium border-8 border-secondary object-cover w-full h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-secondary hidden md:block">
                  <p className="text-4xl font-bold text-primary">10+</p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Năm kinh nghiệm</p>
                </div>
              </motion.div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">GIỚI THIỆU VỀ CHÚNG TÔI</h2>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                    Chuyên gia hoàn thiện nội thất và thi công trần thạch cao
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Sửa nhà Hà Nội là đơn vị hàng đầu trong lĩnh vực thi công trần thạch cao, sơn bả và sơn tường tại Hà Nội. Với đội ngũ thợ lành nghề, chúng tôi cam kết mang đến những không gian sống hiện đại, bền đẹp và sang trọng bậc nhất.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {advantages.map((adv, idx) => (
                    <Card key={idx} className="border-none bg-secondary shadow-none hover:bg-neutral-100 transition-colors">
                      <CardContent className="p-4 flex items-center gap-4">
                        {adv.icon}
                        <span className="font-semibold text-charcoal">{adv.title}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <p className="text-muted-foreground italic border-l-4 border-primary pl-4">
                  "Chúng tôi không chỉ xây dựng những bức tường, chúng tôi kiến tạo không gian sống mơ ước cho mỗi gia đình Việt."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section id="services" className="py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">DỊCH VỤ CỦA CHÚNG TÔI</h2>
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">Giải pháp hoàn thiện ngôi nhà trọn gói</h3>
              <p className="text-lg text-muted-foreground">
                Mỗi dịch vụ tại Sửa nhà Hà Nội đều được kiểm soát chất lượng nghiêm ngặt, từ khâu chọn vật liệu đến kỹ thuật thi công.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-2xl shadow-soft premium-card border-b-4 border-transparent hover:border-primary"
              >
                <div className="w-14 h-14 bg-accent flex items-center justify-center rounded-xl mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Layout className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Thi công trần thạch cao</h4>
                <p className="text-muted-foreground mb-6">Trần thạch cao không chỉ thẩm mỹ mà còn chống nóng, cách âm tốt. Phù hợp cho phòng khách, phòng ngủ và văn phòng.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Trần thạch cao giật cấp</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Trần thả tiêu chuẩn</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Trần phẳng hiện đại</li>
                </ul>

              </motion.div>

              {/* Service 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-2xl shadow-soft premium-card border-b-4 border-transparent hover:border-primary"
              >
                <div className="w-14 h-14 bg-accent flex items-center justify-center rounded-xl mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Hammer className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Sơn bả tường chuyên sâu</h4>
                <p className="text-muted-foreground mb-6">Giúp bề mặt tường siêu mịn, phẳng và tăng tuổi thọ cho lớp sơn nước cao cấp. Công nghệ bả matit tiên tiến.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Bả matit bám dính tốt</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Xử lý bề mặt tường cũ</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Làm phẳng triệt để</li>
                </ul>

              </motion.div>

              {/* Service 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="group p-8 bg-white rounded-2xl shadow-soft premium-card border-b-4 border-transparent hover:border-primary"
              >
                <div className="w-14 h-14 bg-accent flex items-center justify-center rounded-xl mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Paintbrush className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Sơn tường nhà trọn gói</h4>
                <p className="text-muted-foreground mb-6">Sơn nội thất, ngoại thất chất lượng cao bảo vệ ngôi nhà khỏi ẩm mốc và mang lại vẻ đẹp đẳng cấp.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Sơn nội/ngoại thất cao cấp</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Sơn chống thấm tường</li>
                  <li className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 className="w-4 h-4 text-primary" /> Phối màu sơn chuẩn</li>
                </ul>

              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= PRICING TABLES ================= */}
        <section id="pricing" className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">BẢNG GIÁ THAM KHẢO</h2>
              <h3 className="text-3xl md:text-5xl font-bold">Chi phí minh bạch & Hợp lý</h3>
              <p className="text-lg text-muted-foreground underline underline-offset-8 decoration-primary decoration-2">
                Giá có thể thay đổi tùy theo diện tích và hiện trạng công trình.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Price Table 1 */}
              <Card className="border shadow-none rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-primary p-6 text-center">
                  <h5 className="text-white text-xl font-bold uppercase tracking-widest">Trần Thạch Cao</h5>
                </div>
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Trần phẳng</td>
                        <td className="p-4 text-right font-bold text-primary italic">150k - 180k/m2</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Trần giật cấp</td>
                        <td className="p-4 text-right font-bold text-primary italic">200k - 320k/m2</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Trần thả nội thất</td>
                        <td className="p-4 text-right font-bold text-primary italic">160k - 190k/m2</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Price Table 2 */}
              <Card className="border shadow-none rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-primary p-6 text-center">
                  <h5 className="text-white text-xl font-bold uppercase tracking-widest">Sơn Bả Matit</h5>
                </div>
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Bả matit mịn</td>
                        <td className="p-4 text-right font-bold text-primary italic">25k - 35k/m2</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Sơn lót tường</td>
                        <td className="p-4 text-right font-bold text-primary italic">10k - 15k/m2</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Dặm vá tường cũ</td>
                        <td className="p-4 text-right font-bold text-primary italic">Liên hệ</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>

              {/* Price Table 3 */}
              <Card className="border shadow-none rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                <div className="bg-primary p-6 text-center">
                  <h5 className="text-white text-xl font-bold uppercase tracking-widest">Sơn Nước</h5>
                </div>
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody className="divide-y">
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Sơn nội thất</td>
                        <td className="p-4 text-right font-bold text-primary italic">30k - 50k/m2</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Sơn ngoại thất</td>
                        <td className="p-4 text-right font-bold text-primary italic">40k - 60k/m2</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-sm font-medium text-muted-foreground">Sơn chống thấm</td>
                        <td className="p-4 text-right font-bold text-primary italic">Giá tốt nhất</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ================= GALLERY ================= */}
        <section id="gallery" className="py-24 bg-neutral-50 overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="space-y-4">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">HÌNH ẢNH DỰ ÁN</h2>
                <h3 className="text-3xl md:text-5xl font-bold">Các công trình đã thi công</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "Tất cả" },
                  { id: "nha-o", label: "Nhà ở" },
                  { id: "chung-cu", label: "Chung cư" },
                  { id: "van-phong", label: "Văn phòng" }
                ].map(filter => (
                  <Button
                    key={filter.id}
                    variant={galleryFilter === filter.id ? "default" : "outline"}
                    onClick={() => setGalleryFilter(filter.id)}
                    className="rounded-full px-6"
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredGallery.map((item, idx) => (
                  <motion.div
                    layout
                    key={`${item.category}-${idx}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl h-[300px]"
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">
                        {item.category === "nha-o" ? "Nhà ở" : item.category === "chung-cu" ? "Chung cư" : "Văn phòng"}
                      </p>
                      <h5 className="text-white text-xl font-bold">{item.title}</h5>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em]">LIÊN HỆ TƯ VẤN</h2>
                  <h3 className="text-3xl md:text-5xl font-bold leading-tight">Gửi yêu cầu & Nhận báo giá nhanh</h3>
                  <p className="text-lg text-muted-foreground">Đừng ngần ngại liên hệ với chúng tôi để được khảo sát và tư vấn mẫu thiết kế miễn phí tận nơi.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Điện thoại / Zalo</p>
                      <p className="text-xl font-bold tracking-tight">0388.423.600</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Email hỗ trợ</p>
                      <p className="text-xl font-bold tracking-tight">suanhataihanoi368@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">VP Đại diện</p>
                      <p className="text-xl font-bold tracking-tight">Vân Nội, Phúc Thịnh, Hà Nội</p>
                    </div>
                  </div>
                </div>

                <div className="h-[200px] rounded-2xl overflow-hidden shadow-soft border grayscale hover:grayscale-0 transition-all">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14894.27643574514!2d105.79444391782226!3d21.0505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab226a7d6745%3A0x2f5d35362df5102e!2zVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <Card className="p-8 md:p-12 border-none shadow-gold bg-white h-fit">
                {(() => {
                  const [status, setStatus] = useState<"idle" | "success">("idle");
                  
                  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    
                    const formData = new FormData(e.currentTarget);
                    const fullname = formData.get("fullname") as string;
                    const phone = formData.get("phone") as string;
                    const address = formData.get("address") as string;
                    const message = formData.get("message") as string;
                    
                    const subject = encodeURIComponent(`Yêu cầu tư vấn: ${fullname}`);
                    const body = encodeURIComponent(
                      `Thông tin yêu cầu hỗ trợ từ website:\n\n` +
                      `- Họ tên: ${fullname}\n` +
                      `- Số điện thoại: ${phone}\n` +
                      `- Địa chỉ công trình: ${address}\n` +
                      `- Nội dung yêu cầu: ${message}`
                    );
                    
                    window.location.href = `mailto:suanhataihanoi368@gmail.com?subject=${subject}&body=${body}`;
                    
                    setStatus("success");
                    e.currentTarget.reset();
                  };

                  if (status === "success") {
                    return (
                      <div className="p-8 md:p-12 text-center space-y-6 flex flex-col items-center justify-center h-full">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-2">
                          <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h4 className="text-2xl font-bold">Yêu cầu đã được khởi tạo!</h4>
                        <p className="text-muted-foreground italic">Vui lòng kiểm tra và nhấn nút "Gửi" trong ứng dụng Gmail/Outlook của bạn để hoàn tất.</p>
                        <Button variant="outline" onClick={() => setStatus("idle")} className="rounded-xl px-8">Gửi yêu cầu khác</Button>
                      </div>
                    );
                  }

                  return (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest">Họ tên</label>
                          <input 
                            name="fullname"
                            required
                            type="text" 
                            className="w-full bg-secondary border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                            placeholder="Nguyễn Văn A" 
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest">Số điện thoại</label>
                          <input 
                            name="phone"
                            required
                            type="tel" 
                            className="w-full bg-secondary border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                            placeholder="0xxx.xxx.xxx" 
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Địa chỉ công trình</label>
                        <input 
                          name="address"
                          required
                          type="text" 
                          className="w-full bg-secondary border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all" 
                          placeholder="Vinhomes Smart City, Cầu Giấy..." 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest">Nội dung yêu cầu</label>
                        <textarea 
                          name="message"
                          required
                          rows={4} 
                          className="w-full bg-secondary border-none rounded-lg p-4 focus:ring-2 focus:ring-primary outline-none transition-all resize-none" 
                          placeholder="Ví dụ: Thi công trần thạch cao 50m2 phòng khách..." 
                        />
                      </div>
                      <Button 
                        className="w-full h-14 text-white text-base font-bold bg-primary hover:bg-primary-hover rounded-xl shadow-lg transition-all"
                      >
                        Gửi yêu cầu ngay <Zap className="ml-2 w-5 h-5" />
                      </Button>
                      <p className="text-center text-sm text-muted-foreground pt-4 flex items-center justify-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-primary" /> Thông tin của bạn được cam kết bảo mật.
                      </p>
                    </form>
                  );
                })()}
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* ================= FLOATING ACTION BUTTONS ================= */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://zalo.me/0388423600"
          className="w-14 h-14 bg-[#0068ff] text-white flex items-center justify-center rounded-full shadow-lg"
          target="_blank"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg" alt="Zalo" className="w-8 h-8 rounded-lg" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:0388423600"
          className="w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full shadow-lg relative"
        >
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
          <Phone className="w-7 h-7" />
        </motion.a>

      </div>
    </div>
  );
};

export default Index;
