import { Link, useLocation } from "react-router-dom";
import { TelLink } from "@/components/HoangPhatLinks";
import { PHONE_DISPLAY } from "@/constants/contact";

const NAV_ITEMS = [
  { label: "Trang chủ", to: "/" },
  { label: "Trần chìm & thả", to: "/tran-thach-cao" },
  { label: "Vách thạch cao", to: "/vach-thach-cao" },
  { label: "Sửa chữa thạch cao", to: "/sua-chua-thach-cao" },
  { label: "Phá dỡ thạch cao", to: "/thao-do-thach-cao" },
  { label: "Sơn lại nhà", to: "/son-lai-nha" },
  { label: "Bảng giá", to: "/bao-gia" },
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="hp-top">
        <Link className="brand" to="/" aria-label="Sửa Nhà Hoàng Phát">
          <img
            src="/images/hoangphat/img-00.webp"
            alt="Logo Sửa Nhà Hoàng Phát - thạch cao, sơn nhà Hà Nội"
            width={600}
            height={143}
          />
        </Link>
        <div className="hp-top-right">
          <span className="hp-top-note">Khảo sát &amp; báo giá miễn phí 24/7</span>
          <TelLink className="hp-top-tel">📞 {PHONE_DISPLAY}</TelLink>
        </div>
      </div>
      <nav className="hp-nav" aria-label="Điều hướng chính">
        <div className="hp-nav-in">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={pathname === item.to ? "active" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
