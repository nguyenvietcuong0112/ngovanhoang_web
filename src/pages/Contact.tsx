import { useState } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, MapPin, Phone, ShieldCheck, Zap } from "lucide-react";
import { trackAdsConversion } from "@/utils/gtag";
import { BRAND_NAME, EMAIL, PHONE, PHONE_DISPLAY, PHONE_TEL } from "@/constants/contact";

const Contact = () => {
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
      `Thông tin yêu cầu hỗ trợ:\n\n- Họ tên: ${fullname}\n- Số điện thoại: ${phone}\n- Địa chỉ công trình: ${address}\n- Nội dung yêu cầu: ${message}`
    );

    trackAdsConversion({ sendTo: "AW-18069945204/TCWqCKS7nKocEPT2tahD" });
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title={`Liên hệ ${BRAND_NAME} - Tư vấn thi công thạch cao Hà Nội`}
        description="Liên hệ để được tư vấn, khảo sát thực tế và báo giá rõ ràng cho thi công, sửa chữa hoặc tháo dỡ trần vách thạch cao tại Hà Nội."
        keywords="liên hệ thi công thạch cao hà nội, hotline sửa nhà hà nội"
      />
      <Header />
      <main className="py-20">
        <section className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h1 className="text-3xl md:text-5xl font-bold">Liên hệ {BRAND_NAME}</h1>
              <p className="text-muted-foreground">
                Quý khách cần thi công, sửa chữa hoặc tháo rỡ trần vách thạch cao tại Hà Nội, vui lòng liên hệ để được tư vấn, khảo sát thực tế và báo giá rõ ràng theo từng hạng mục.
              </p>
              <p className="text-sm text-muted-foreground">
                Báo giá chính xác sau khi khảo sát diện tích, hiện trạng công trình, vật tư sử dụng và yêu cầu hoàn thiện.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Gọi ngay: {PHONE}
                </a>
              </Button>
              <div className="space-y-4 text-sm">
                <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> {PHONE_DISPLAY}</p>
                <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> {EMAIL}</p>
                <p className="flex items-center gap-3"><MapPin className="w-4 h-4 text-primary" /> Khu vực phục vụ: Hà Nội</p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <div className="space-y-1">
                    <p>107 Ngọc Hồi, Hoàng Liệt, Hoàng Mai.</p>
                    <p>02/103 Phạm Ngọc Thạch, Đống Đa.</p>
                    <p>26 Mễ Trì Hạ, Từ Liêm.</p>
                    <p>196 Hồ Tùng Mậu, Phú Diễn, Bắc Từ Liêm.</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8">
              {status === "success" ? (
                <div className="text-center space-y-4 py-10">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                  <h2 className="text-2xl font-bold">Yêu cầu đã được khởi tạo</h2>
                  <p className="text-muted-foreground">Vui lòng bấm Gửi trong ứng dụng email của bạn để hoàn tất.</p>
                  <Button variant="outline" onClick={() => setStatus("idle")}>Gửi yêu cầu khác</Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input name="fullname" required className="w-full bg-secondary rounded-lg p-4" placeholder="Họ tên" />
                  <input name="phone" required className="w-full bg-secondary rounded-lg p-4" placeholder="Số điện thoại" />
                  <input name="address" required className="w-full bg-secondary rounded-lg p-4" placeholder="Địa chỉ công trình" />
                  <textarea name="message" required rows={4} className="w-full bg-secondary rounded-lg p-4 resize-none" placeholder="Nội dung yêu cầu" />
                  <Button className="w-full">
                    Gửi yêu cầu <Zap className="w-4 h-4 ml-1" />
                  </Button>
                  <p className="text-xs text-muted-foreground flex items-center justify-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-primary" /> Thông tin của bạn được bảo mật.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
