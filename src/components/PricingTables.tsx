import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, PHONE_TEL } from "@/constants/contact";

export type PricingSection = "thi-cong" | "sua-chua" | "thao-do";
export type ThiCongTable = "tran-phang" | "tran-tam-tha" | "vach-1-mat" | "vach-2-mat";

const ALL_SECTIONS: PricingSection[] = ["thi-cong", "sua-chua", "thao-do"];
const ALL_THI_CONG: ThiCongTable[] = ["tran-phang", "tran-tam-tha", "vach-1-mat", "vach-2-mat"];

type PricingTablesProps = {
  sections?: PricingSection[];
  thiCongTables?: ThiCongTable[];
  showHeader?: boolean;
  showNav?: boolean;
  showCta?: boolean;
  headerTitle?: string;
  headerSubtitle?: string;
};

const PricingTables = ({
  sections = ALL_SECTIONS,
  thiCongTables = ALL_THI_CONG,
  showHeader = true,
  showNav = true,
  showCta = true,
  headerTitle = "Bảng giá thi công trần thạch cao trọn gói",
  headerSubtitle = "Tổng hợp bảng giá thi công trần thạch cao, vách thạch cao, sửa chữa và tháo dỡ thạch cao. Đơn giá có thể thay đổi theo diện tích, hiện trạng công trình, vị trí thi công và loại vật tư sử dụng.",
}: PricingTablesProps = {}) => {
  const showThiCong = sections.includes("thi-cong");
  const showSuaChua = sections.includes("sua-chua");
  const showThaoDo = sections.includes("thao-do");

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm max-w-5xl mx-auto">
      {showHeader && (
      <div className="p-8 text-center bg-gradient-to-br from-primary/5 via-primary/10 to-white border-b border-primary/20">
        <span className="inline-block mb-3 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
          Báo giá tham khảo
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{headerTitle}</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">{headerSubtitle}</p>
        <div className="mt-6 text-lg font-bold text-gray-900 flex items-center justify-center gap-2">
          Hotline tư vấn báo giá: <a href={`tel:${PHONE_TEL}`} className="text-red-600 hover:underline flex items-center gap-1"><Phone className="w-5 h-5"/> {PHONE}</a>
        </div>
      </div>
      )}

      {showNav && (
      <div className="flex flex-wrap gap-2 justify-center p-4 bg-primary/5 border-b border-gray-200">
        <a href="#bao-gia-thi-cong" className="px-4 py-2 border border-primary bg-white text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded">Bảng giá thi công</a>
        <a href="#bao-gia-sua-chua" className="px-4 py-2 border border-primary bg-white text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded">Bảng giá sửa chữa</a>
        <a href="#bao-gia-thao-do" className="px-4 py-2 border border-primary bg-white text-primary font-bold text-sm hover:bg-primary hover:text-primary-foreground transition-colors rounded">Bảng giá tháo dỡ</a>
      </div>
      )}

      <div className="p-6 md:p-8 space-y-12">
        
        {showThiCong && (
        <div id="bao-gia-thi-cong" className="space-y-8 scroll-mt-24">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Bảng giá thi công trần vách thạch cao</h3>
            <p className="text-gray-600">Bảng giá dưới đây được chia theo hạng mục, loại tấm, diện tích thi công và loại khung xương. Mức giá chỉ mang tính tham khảo.</p>
          </div>

          {thiCongTables.includes("tran-phang") && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">Trần thạch cao phẳng – giật cấp</h4>
            <div className="overflow-x-auto rounded-lg border border-primary/20">
              <table className="w-full min-w-[800px] text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 border border-white/20 text-center font-bold">Loại tấm</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">Trên 150m²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Thông thường</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">130.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">140.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">120.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">130.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                  <tr className="bg-primary/5 border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Chống ẩm</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">150.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">165.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">140.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">155.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          )}

          {thiCongTables.includes("tran-tam-tha") && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">Trần thạch cao tấm thả</h4>
            <div className="overflow-x-auto rounded-lg border border-primary/20">
              <table className="w-full min-w-[800px] text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 border border-white/20 text-center font-bold">Loại tấm</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">Trên 150m²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Phủ nhựa trắng 60x60</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">125.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">140.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">115.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">130.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                  <tr className="bg-primary/5 border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Chịu nước 4mm 60x60</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">145.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">160.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">135.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">150.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          )}

          {thiCongTables.includes("vach-1-mat") && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">Vách thạch cao 1 mặt</h4>
            <div className="overflow-x-auto rounded-lg border border-primary/20">
              <table className="w-full min-w-[800px] text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 border border-white/20 text-center font-bold">Loại tấm</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">Trên 150m²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Thông thường</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">140.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">150.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">130.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">140.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                  <tr className="bg-primary/5 border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Chống ẩm</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">170.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">180.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">160.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">170.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          )}

          {thiCongTables.includes("vach-2-mat") && (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">Vách thạch cao 2 mặt</h4>
            <div className="overflow-x-auto rounded-lg border border-primary/20">
              <table className="w-full min-w-[800px] text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 border border-white/20 text-center font-bold">Loại tấm</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">30 - 50m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung HN</th>
                    <th className="p-3 border border-white/20 text-center font-bold">50 - 150m² Khung VT</th>
                    <th className="p-3 border border-white/20 text-center font-bold">Trên 150m²</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Thông thường</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">175.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">200.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">165.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">190.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                  <tr className="bg-primary/5 border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Chống ẩm</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">200.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">230.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">190.000đ/m²</span></td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">220.000đ/m²</span></td>
                    <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded">Thương lượng</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          )}

        </div>
        )}

        {showSuaChua && (
        <div id="bao-gia-sua-chua" className="space-y-8 scroll-mt-24 pt-8 border-t border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Bảng giá sửa chữa trần vách thạch cao</h3>
            <p className="text-gray-600">Bảng giá dưới đây là đơn giá tham khảo cho dịch vụ sửa chữa theo mét vuông. Diện tích nhỏ có thể tính theo gói tối thiểu.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sửa chữa trần */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">Sửa chữa trần thạch cao</h4>
              <div className="overflow-x-auto rounded-lg border border-primary/20">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-3 border border-white/20 font-bold w-12 text-center">STT</th>
                      <th className="p-3 border border-white/20 font-bold">Hạng mục sửa chữa</th>
                      <th className="p-3 border border-white/20 font-bold text-center w-40">Đơn giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Xử lý trần thạch cao bị nứt nhẹ", "70k - 120k"],
                      ["Xử lý bong tróc, hở mối nối", "80k - 140k"],
                      ["Bả vá, sơn dặm khu vực lỗi", "60k - 100k"],
                      ["Xử lý ố vàng, mốc nhẹ", "90k - 150k"],
                      ["Sửa trần bị thủng, vỡ cục bộ", "120k - 200k"],
                      ["Thay tấm hư hỏng cục bộ", "150k - 250k"],
                      ["Sửa trần bị thấm nước", "160k - 280k"],
                      ["Gia cố võng, xệ nhẹ", "180k - 300k"],
                      ["Tháo sửa làm lại một phần", "220k - 350k"]
                    ].map((item, idx) => (
                      <tr key={idx} className={`${idx % 2 === 1 ? 'bg-primary/5' : 'bg-white'} border-b border-[#e2e2e2]`}>
                        <td className="p-3 border-r border-[#e2e2e2] text-center text-gray-500">{idx + 1}</td>
                        <td className="p-3 border-r border-[#e2e2e2] font-medium">{item[0]}</td>
                        <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded block">{item[1]}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sửa chữa vách */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-primary border-l-4 border-primary pl-3">Sửa chữa vách thạch cao</h4>
              <div className="overflow-x-auto rounded-lg border border-primary/20">
                <table className="w-full text-left border-collapse bg-white">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="p-3 border border-white/20 font-bold w-12 text-center">STT</th>
                      <th className="p-3 border border-white/20 font-bold">Hạng mục sửa chữa</th>
                      <th className="p-3 border border-white/20 font-bold text-center w-40">Đơn giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Xử lý vách bị nứt nhẹ", "70k - 120k"],
                      ["Xử lý bong tróc, hở mối nối", "80k - 140k"],
                      ["Bả vá, sơn dặm", "60k - 100k"],
                      ["Sửa vách bị thủng, móp nhẹ", "100k - 180k"],
                      ["Xử lý ẩm mốc, ố vàng", "100k - 180k"],
                      ["Thay tấm 1 mặt cục bộ", "140k - 240k"],
                      ["Thay tấm 2 mặt cục bộ", "180k - 300k"],
                      ["Gia cố khung vách yếu", "180k - 320k"],
                      ["Sửa vách chống ẩm", "180k - 320k"]
                    ].map((item, idx) => (
                      <tr key={idx} className={`${idx % 2 === 1 ? 'bg-primary/5' : 'bg-white'} border-b border-[#e2e2e2]`}>
                        <td className="p-3 border-r border-[#e2e2e2] text-center text-gray-500">{idx + 1}</td>
                        <td className="p-3 border-r border-[#e2e2e2] font-medium">{item[0]}</td>
                        <td className="p-3 text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded block">{item[1]}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        )}

        {showThaoDo && (
        <div id="bao-gia-thao-do" className="space-y-8 scroll-mt-24 pt-8 border-t border-gray-200">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary mb-2">Bảng giá tháo dỡ thạch cao tham khảo</h3>
            <p className="text-gray-600">Đơn giá có thể thay đổi tùy theo diện tích, độ cao thi công, vị trí công trình và điều kiện tháo dỡ thực tế.</p>
            
            <div className="overflow-x-auto rounded-lg border border-primary/20">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="p-3 border border-white/20 font-bold w-12 text-center">STT</th>
                    <th className="p-3 border border-white/20 font-bold">Diện tích tháo dỡ</th>
                    <th className="p-3 border border-white/20 font-bold text-center w-40">Đơn giá</th>
                    <th className="p-3 border border-white/20 font-bold">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] text-center text-gray-500">1</td>
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Trên 100m²</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded block">40.000đ/m²</span></td>
                    <td className="p-3">Áp dụng cho công trình diện tích lớn, mặt bằng thuận lợi</td>
                  </tr>
                  <tr className="bg-primary/5 border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] text-center text-gray-500">2</td>
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Từ 50m² đến dưới 100m²</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded block">50.000đ/m²</span></td>
                    <td className="p-3">Tính theo diện tích tháo dỡ thực tế</td>
                  </tr>
                  <tr className="border-b border-[#e2e2e2]">
                    <td className="p-3 border-r border-[#e2e2e2] text-center text-gray-500">3</td>
                    <td className="p-3 border-r border-[#e2e2e2] font-medium">Dưới 50m²</td>
                    <td className="p-3 border-r border-[#e2e2e2] text-center"><span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded block">Thỏa thuận</span></td>
                    <td className="p-3">Báo giá theo điều kiện thực tế của công trình</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        )}

        <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg border-y border-r border-y-primary/20 border-r-primary/20">
          <p className="text-gray-800 leading-relaxed">
            <strong className="text-primary font-bold mr-1">Lưu ý:</strong> 
            Toàn bộ bảng giá trên chỉ mang tính tham khảo. Chi phí thực tế phụ thuộc vào diện tích, độ khó công trình, độ cao thi công, vị trí công trình, loại vật tư, mức độ hư hỏng và yêu cầu hoàn thiện. Với công trình nhỏ hoặc sửa chữa cục bộ, chi phí có thể tính theo gói tối thiểu. Liên hệ <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold hover:underline">{PHONE}</a> để được khảo sát và báo giá chính xác.
          </p>
        </div>

      </div>
      
      {showCta && (
      <div className="p-6 bg-primary/5 border-t border-[#e5e5e5] text-center">
        <Button asChild size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <a href={`tel:${PHONE_TEL}`}>Gọi ngay: {PHONE}</a>
        </Button>
      </div>
      )}
    </div>
  );
};

export default PricingTables;
