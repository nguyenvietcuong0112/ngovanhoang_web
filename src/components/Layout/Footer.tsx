import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-100">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand + Social Media */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo Sửa nhà Hà Nội" className="w-10 h-10 object-contain" />
              <span className="text-2xl font-bold text-amber-400">Sửa nhà Hà Nội</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Kiến tạo không gian sống mơ ước. Chúng tôi chuyên thi công trần thạch cao, sơn bả tường và sơn tường nhà trọn gói với chất lượng và độ bền vượt trội.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400 transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-100">Dịch Vụ Chính</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/tran-thach-cao" className="text-slate-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full" /> Thi công trần thạch cao
                </Link>
              </li>
              <li>
                <Link to="/vach-thach-cao" className="text-slate-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full" /> Thi công vách thạch cao
                </Link>
              </li>
              <li>
                <Link to="/sua-chua-thach-cao" className="text-slate-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full" /> Sửa chữa thạch cao
                </Link>
              </li>
              <li>
                <Link to="/thao-do-thach-cao" className="text-slate-400 hover:text-amber-300 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-amber-400 rounded-full" /> Tháo dỡ thạch cao
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-100">Thông Tin Liên Hệ</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <span>📍</span>
                <div className="space-y-1">
                  <p><span className="font-medium text-slate-100">Địa chỉ:</span></p>
                  <p>107 Ngọc Hồi, Hoàng Liệt, Hoàng Mai.</p>
                  <p>02/103 Phạm Ngọc Thạch, Đống Đa.</p>
                  <p>26 Mễ Trì Hạ, Từ Liêm.</p>
                  <p>196 Hồ Tùng Mậu, Phú Diễn, Bắc Từ Liêm.</p>
                </div>
              </div>
              <p className="flex items-center gap-3">📞 <span className="font-medium text-slate-100">Hotline:</span> 0388.423.600</p>
              <p className="flex items-center gap-3">📧 <span className="font-medium text-slate-100">Email:</span> suanhataihanoi368@gmail.com</p>
              <p className="flex items-center gap-3">✨ <span className="font-medium text-slate-100">Làm việc:</span> 24/7 (Cả ngày lễ)</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © 2026 Sửa nhà Hà Nội – Chuyên gia thi công trần & sơn tường. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-400">
            <Link to="/bao-gia" className="hover:text-amber-300">Chính sách bảo hành</Link>
            <Link to="/dich-vu" className="hover:text-amber-300">Quy trình thi công</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
