import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Trang Chủ", to: "/" },
    { name: "Dịch Vụ", to: "/dich-vu" },
    { name: "Bảng Giá", to: "/bao-gia" },
    { name: "Công Trình", to: "/cong-trinh" },
    { name: "Bài Viết", to: "/bai-viet" },
    { name: "Liên Hệ", to: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Logo Sửa nhà Hà Nội" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
            <span className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform">Sửa nhà Hà Nội</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.to
                  ? "text-primary"
                  : "text-muted-foreground"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-accent focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors hover:text-primary ${location.pathname === item.to
                ? "text-primary"
                : "text-muted-foreground"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
