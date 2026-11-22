import { TelLink } from "@/components/HoangPhatLinks";
import { EMAIL, PHONE_DISPLAY } from "@/constants/contact";

const Footer = () => {
  return (
    <footer className="hp-footer">
      <div className="ft">
        <div>
          <p>
            <b>SỬA NHÀ HOÀNG PHÁT</b>
          </p>
          <p>Thạch cao · Sơn nhà · Hà Nội</p>
          <p>Sửa nhà gọn đẹp · Thi công đúng hẹn · Bảo hành rõ ràng</p>
        </div>
        <div>
          <p>
            <b>📍 Địa chỉ</b>
          </p>
          <ul>
            <li>107 Ngọc Hồi, Hoàng Liệt, Hoàng Mai</li>
            <li>02/103 Phạm Ngọc Thạch, Đống Đa</li>
            <li>26 Mễ Trì Hạ, Từ Liêm</li>
            <li>196 Hồ Tùng Mậu, Phú Diễn, Bắc Từ Liêm</li>
          </ul>
        </div>
        <div>
          <p>
            <b>Liên hệ</b>
          </p>
          <p>
            📞 Hotline / Zalo: <TelLink>{PHONE_DISPLAY}</TelLink>
          </p>
          <p>
            📧 Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p>🕒 Phục vụ 24/7</p>
          <p>Khảo sát và báo giá miễn phí</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
