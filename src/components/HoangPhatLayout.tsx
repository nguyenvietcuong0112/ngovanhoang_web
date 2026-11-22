import type { ReactNode } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

type HoangPhatLayoutProps = {
  children: ReactNode;
};

const HoangPhatLayout = ({ children }: HoangPhatLayoutProps) => (
  <div className="hp-site">
    <Header />
    {children}
    <Footer />
  </div>
);

export default HoangPhatLayout;
