import { Link } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-4 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold">Bảng Giá Thi Công</h1>
            <p className="text-muted-foreground">
              Giá tham khảo minh bạch cho từng hạng mục, dễ so sánh và dễ lập ngân sách.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border shadow-none rounded-2xl overflow-hidden">
              <div className="bg-primary p-6 text-center">
                <h3 className="text-white text-xl font-bold uppercase tracking-widest">Trần Thạch Cao</h3>
              </div>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr><td className="p-4 text-sm">Trần phẳng</td><td className="p-4 text-right font-bold text-primary">150k - 180k/m2</td></tr>
                    <tr><td className="p-4 text-sm">Trần giật cấp</td><td className="p-4 text-right font-bold text-primary">200k - 320k/m2</td></tr>
                    <tr><td className="p-4 text-sm">Trần thả</td><td className="p-4 text-right font-bold text-primary">160k - 190k/m2</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className="border shadow-none rounded-2xl overflow-hidden">
              <div className="bg-primary p-6 text-center">
                <h3 className="text-white text-xl font-bold uppercase tracking-widest">Sơn Bả Matit</h3>
              </div>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr><td className="p-4 text-sm">Bả matit mịn</td><td className="p-4 text-right font-bold text-primary">25k - 35k/m2</td></tr>
                    <tr><td className="p-4 text-sm">Sơn lót tường</td><td className="p-4 text-right font-bold text-primary">10k - 15k/m2</td></tr>
                    <tr><td className="p-4 text-sm">Dặm vá tường cũ</td><td className="p-4 text-right font-bold text-primary">Liên hệ</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <Card className="border shadow-none rounded-2xl overflow-hidden">
              <div className="bg-primary p-6 text-center">
                <h3 className="text-white text-xl font-bold uppercase tracking-widest">Sơn Nước</h3>
              </div>
              <CardContent className="p-0">
                <table className="w-full">
                  <tbody className="divide-y">
                    <tr><td className="p-4 text-sm">Sơn nội thất</td><td className="p-4 text-right font-bold text-primary">30k - 50k/m2</td></tr>
                    <tr><td className="p-4 text-sm">Sơn ngoại thất</td><td className="p-4 text-right font-bold text-primary">40k - 60k/m2</td></tr>
                    <tr><td className="p-4 text-sm">Sơn chống thấm</td><td className="p-4 text-right font-bold text-primary">Giá tốt nhất</td></tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/lien-he">Nhận báo giá chi tiết</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
