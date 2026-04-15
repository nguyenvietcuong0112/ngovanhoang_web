import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Hammer, Layout, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Thi công trần vách thạch cao",
    icon: Layout,
    items: ["Trần giật cấp, trần phẳng", "Vách ngăn cách âm", "Trần thả tấm nhựa"],
    description: "Giải pháp thẩm mỹ và bền bỉ cho nhà ở, chung cư và văn phòng."
  },
  {
    title: "Sơn bả tường chuyên sâu",
    icon: Hammer,
    items: ["Bả matit mịn đẹp", "Xử lý bề mặt tường cũ", "Làm phẳng triệt để"],
    description: "Giúp bề mặt tường mịn, tăng độ bền và độ bám lớp sơn."
  },
  {
    title: "Sơn nhà và chống thấm",
    icon: Paintbrush,
    items: ["Sơn nội ngoại thất", "Xử lý chống thấm ngược", "Tư vấn phối màu"],
    description: "Bảo vệ ngôi nhà khỏi ẩm mốc và nâng tầm thẩm mỹ tổng thể."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Dịch Vụ Thi Công</h1>
            <p className="text-muted-foreground">
              Tập trung vào các hạng mục có nhu cầu cao nhất để tối ưu tiến độ và chi phí.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="rounded-2xl border">
                <CardContent className="p-8 space-y-5">
                  <service.icon className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/lien-he">Nhận tư vấn dịch vụ</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
