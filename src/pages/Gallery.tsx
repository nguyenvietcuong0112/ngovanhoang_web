import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import hero_ceiling from "/src/assets/hero-ceiling.png";
import hero_renovation from "/src/assets/hero-renovation.png";
import hero_construction from "/src/assets/hero-construction-modern.jpg";
import feat_ceiling from "/src/assets/feat-ceiling.png";

const projects = [
  { title: "Trần thạch cao phòng khách hiện đại", image: hero_ceiling },
  { title: "Hoàn thiện nội thất nhà phố", image: hero_construction },
  { title: "Phòng ngủ với trần phẳng tinh gọn", image: hero_renovation },
  { title: "Công trình chung cư cao cấp", image: feat_ceiling },
  { title: "Cải tạo căn hộ theo phong cách tối giản", image: hero_construction },
  { title: "Thi công trần và sơn hoàn thiện", image: hero_ceiling },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Công Trình Đã Thi Công</h1>
            <p className="text-muted-foreground">
              Hình ảnh thực tế các dự án hoàn thiện trần, vách và sơn nhà theo nhiều phong cách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
              <div key={item.title} className="group rounded-2xl overflow-hidden border bg-card">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
