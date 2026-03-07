import { Link } from "react-router-dom";
import { Flower, Instagram, Facebook, Twitter } from "lucide-react";
import logo from "@/assets/sammy-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand + Social Media */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">Ngo Hoang Home</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Kiến tạo không gian sống mơ ước. Chúng tôi chuyên thi công trần thạch cao, sơn bả tường và sơn tường nhà trọn gói với chất lượng và độ bền vượt trội.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Dịch Vụ Chính</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Thi công trần thạch cao
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Sơn bả matit chuyên nghiệp
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Sơn nội ngoại thất
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" /> Vách ngăn thạch cao
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">Thông Tin Liên Hệ</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-3">📍 <span className="font-medium text-foreground">Địa chỉ:</span> Vân Nội, Phúc Thịnh, Hà Nội</p>
              <p className="flex items-center gap-3">📞 <span className="font-medium text-foreground">Hotline:</span> 0388.423.600</p>
              <p className="flex items-center gap-3">📧 <span className="font-medium text-foreground">Email:</span> nhatnhi3344@gmail.com</p>
              <p className="flex items-center gap-3">✨ <span className="font-medium text-foreground">Làm việc:</span> 24/7 (Cả ngày lễ)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            © 2026 Ngo Hoang Home – Chuyên gia thi công trần & sơn tường. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Chính sách bảo hành</a>
            <a href="#" className="hover:text-primary">Quy trình thi công</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
