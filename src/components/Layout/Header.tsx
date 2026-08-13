import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Trang chủ", to: "/" },
    { name: "Giới thiệu", to: "/gioi-thieu" },
    { name: "Trần thạch cao", to: "/tran-thach-cao" },
    { name: "Vách thạch cao", to: "/vach-thach-cao" },
    { name: "Sửa chữa thạch cao", to: "/sua-chua-thach-cao" },
    { name: "Tháo dỡ thạch cao", to: "/thao-do-thach-cao" },
    { name: "Phá dỡ nhà", to: "/bai-viet/pha-do-nha-cu-tai-ha-noi" },
    { name: "Tin tức", to: "/tin-tuc" },
    { name: "Liên hệ", to: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Logo Sửa nhà Hà Nội" 
              className="h-12 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-all duration-300" 
            />
            <div className="flex flex-col">
              <span className="text-lg xl:text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity leading-tight">
                SỬA NHÀ HÀ NỘI
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 hidden sm:block">
                Thi công thạch cao & Sơn nhà
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-x-4 xl:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className={`text-xs xl:text-sm font-medium whitespace-nowrap transition-colors hover:text-primary ${location.pathname === item.to
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
              className="lg:hidden p-2 rounded-md hover:bg-accent focus:outline-none"
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
        <div className="lg:hidden border-t border-border bg-background px-4 py-4 space-y-4">
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
