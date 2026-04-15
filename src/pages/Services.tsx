import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Hammer, Layout, Paintbrush } from "lucide-react";

const services = [
  {
    title: "Thi cong tran vach thach cao",
    icon: Layout,
    items: ["Tran giat cap, tran phang", "Vach ngan cach am", "Tran tha tam nhua"],
    description: "Giai phap tham my va ben bi cho nha o, chung cu va van phong."
  },
  {
    title: "Son ba tuong chuyen sau",
    icon: Hammer,
    items: ["Ba matit min dep", "Xu ly be mat tuong cu", "Lam phang triet de"],
    description: "Giup be mat tuong min, tang do ben va do bam lop son."
  },
  {
    title: "Son nha va chong tham",
    icon: Paintbrush,
    items: ["Son noi ngoai that", "Xu ly chong tham nguoc", "Tu van phoi mau"],
    description: "Bao ve ngoi nha khoi am moc va nang tam tham my tong the."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Dich Vu Thi Cong</h1>
            <p className="text-muted-foreground">
              Tap trung vao cac hang muc co nhu cau cao nhat de toi uu tien do va chi phi.
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
              <Link to="/lien-he">Nhan tu van dich vu</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
