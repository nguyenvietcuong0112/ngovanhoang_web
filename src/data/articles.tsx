import type { ReactNode } from "react";

// Import images for production build
import heroCeiling from "@/assets/hero-ceiling.png";
import heroRenovation from "@/assets/hero-renovation.png";
import heroConstruction from "@/assets/hero-construction-modern.jpg";
import featCeiling from "@/assets/feat-ceiling.png";
import featPainting from "@/assets/feat-painting.png";
import ceilingDesign from "@/assets/modern-ceiling-design.png";
import repairTools from "@/assets/drywall-tools.png";
import beforeAfter from "@/assets/ceiling-before-after.png";
import phado1 from "@/assets/phado1.jpeg";
import phado2 from "@/assets/phado2.jpeg";
import sonnha1 from "@/assets/sonnha1.jpg";
import tranthachcao1 from "@/assets/tranthachcao1.jpeg";
import tranthachcao2 from "@/assets/tranthachcao2.jpeg";
import tranthachcao3 from "@/assets/tranthachcao3.jpeg";
import tranthachcao4 from "@/assets/tranthachcao4.jpeg";
import baogiatranthachcao from "@/assets/baogiatranthachcao.jpeg";
import vach1 from "@/assets/vach1.jpg";
import vach2 from "@/assets/vach2.jpg";
import vach3 from "@/assets/vach3.jpg";

export type Article = {
  title: string;
  description: string;
  date: string;
  category: string;
  slug: string;
  image: string;
  content: ReactNode;
};

export const articles: Article[] = [
  {
    title: "Phá Dỡ Nhà Cũ Tại Hà Nội: Bảng Giá, Quy Trình Và Những Điều Cần Biết Năm 2026",
    description: "Tổng hợp thông tin chi tiết về chi phí, bảng giá đục phá bê tông, quy trình an toàn và lưu ý quan trọng khi phá dỡ nhà cũ tại Hà Nội năm 2026.",
    date: "13/08/2026",
    category: "Phá dỡ công trình",
    slug: "pha-do-nha-cu-tai-ha-noi",
    image: "/images/phadonha1.jpg",
    content: (
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <p className="text-lg">
            Ngôi nhà xuống cấp, không còn phù hợp với nhu cầu sử dụng, hay đơn giản là bạn chuẩn bị xây mới? Trước khi khởi công, phá dỡ công trình cũ luôn là bước đầu tiên và cũng là bước tiềm ẩn nhiều rủi ro nếu không thực hiện đúng kỹ thuật. Bài viết dưới đây tổng hợp những thông tin cần thiết về chi phí, quy trình và lưu ý an toàn khi phá dỡ nhà tại Hà Nội.
          </p>
        </div>

        {/* Video thực tế */}
        <div className="space-y-3 bg-secondary/60 p-4 md:p-6 rounded-3xl border border-primary/10">
          <h3 className="text-xl font-bold text-charcoal flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
            Video Thực Tế Thi Công Phá Dỡ Công Trình Tại Hà Nội
          </h3>
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-video">
            <video
              controls
              preload="metadata"
              poster="/images/phadonha1.jpg"
              className="w-full h-full object-cover"
            >
              <source src="/video/video_phadonha.mp4" type="video/mp4" />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>
          </div>
          <p className="text-center text-xs italic text-muted-foreground">
            Video ghi nhận thực tế quá trình máy móc và đội ngũ thợ thi công phá dỡ công trình an toàn, chuyên nghiệp.
          </p>
        </div>

        {/* 1. Khi Nào Cần Phá Dỡ Nhà Cũ */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">1. Khi Nào Cần Phá Dỡ Nhà Cũ?</h3>
          <p>
            Không phải công trình xuống cấp nào cũng cần đập bỏ hoàn toàn. Việc quyết định phá dỡ hay cải tạo nên dựa trên khảo sát thực tế, thường rơi vào các trường hợp sau:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <li className="p-4 bg-secondary rounded-2xl border border-charcoal/5">
              <strong className="text-primary block mb-1">Kết cấu chịu lực đã suy yếu:</strong> Nhà nghiêng, lún móng, nứt dầm cột, ảnh hưởng nghiêm trọng đến an toàn sử dụng lâu dài.
            </li>
            <li className="p-4 bg-secondary rounded-2xl border border-charcoal/5">
              <strong className="text-primary block mb-1">Công trình quá cũ:</strong> Không còn đáp ứng tiêu chuẩn xây dựng hiện hành, không đảm bảo được độ bền và khả năng chịu lực.
            </li>
            <li className="p-4 bg-secondary rounded-2xl border border-charcoal/5">
              <strong className="text-primary block mb-1">Không phù hợp công năng:</strong> Diện tích chật hẹp, bố cục không đáp ứng nhu cầu sinh hoạt của gia đình.
            </li>
            <li className="p-4 bg-secondary rounded-2xl border border-charcoal/5">
              <strong className="text-primary block mb-1">Sửa chữa tốn kém:</strong> Chi phí gia cố, cải tạo gần bằng hoặc vượt chi phí phá dỡ để xây mới.
            </li>
            <li className="p-4 bg-secondary rounded-2xl border border-charcoal/5 md:col-span-2">
              <strong className="text-primary block mb-1">Hư hỏng do tác động bên ngoài:</strong> Tác động do thiên tai, hỏa hoạn, sụt lún nền đất xung quanh công trình.
            </li>
          </ul>
        </div>

        {/* 2. Yếu Tố Ảnh Hưởng Chi Phí */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">2. Các Yếu Tố Ảnh Hưởng Đến Chi Phí Phá Dỡ</h3>
          <p>Giá phá dỡ nhà không cố định mà phụ thuộc vào nhiều yếu tố thực tế tại công trình:</p>
          <div className="bg-secondary p-6 rounded-2xl border-l-4 border-primary space-y-3 text-sm">
            <p>• <strong>Kết cấu công trình:</strong> Nhà cấp 4, nhà khung bê tông cốt thép hay nhà có tường chịu lực sẽ có mức giá khác nhau.</p>
            <p>• <strong>Diện tích và số tầng:</strong> Công trình càng lớn, càng cao thì chi phí nhân công, máy móc càng tăng.</p>
            <p>• <strong>Vị trí thi công:</strong> Nhà trong ngõ nhỏ, khó vận chuyển phế thải thường phát sinh thêm chi phí so với mặt đường lớn.</p>
            <p>• <strong>Phương pháp phá dỡ:</strong> Phá thủ công, dùng máy móc cơ giới, hay kết hợp cả hai tùy vào điều kiện mặt bằng.</p>
            <p>• <strong>Khối lượng phế thải:</strong> Khối lượng phế thải cần vận chuyển và quy định xử lý rác thải xây dựng tại từng khu vực.</p>
          </div>
        </div>

        {/* Bộ hình ảnh thi công thực tế 1 */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-charcoal">Hình Ảnh Thi Công Phá Dỡ Thực Tế</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-100 group">
              <img
                src="/images/phadonha1.jpg"
                alt="Thi công phá dỡ nhà cũ chuyên nghiệp"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <p className="p-3 text-xs text-center bg-neutral-100 italic">Hình 1: Đội ngũ thi công phá dỡ công trình nhà cũ an toàn</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-100 group">
              <img
                src="/images/phadonha2.jpg"
                alt="Sử dụng thiết bị chuyên dụng phá dỡ bê tông"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <p className="p-3 text-xs text-center bg-neutral-100 italic">Hình 2: Phá dỡ tường và kết cấu bê tông bằng thiết bị hiện đại</p>
            </div>
          </div>
        </div>

        {/* 3. Bảng Giá Tham Khảo */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">3. Bảng Giá Tham Khảo Phá Dỡ Nhà Tại Hà Nội</h3>
          <div className="bg-secondary p-6 rounded-2xl border-t-4 border-primary overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-primary font-bold border-b border-primary/20">
                <tr>
                  <th className="pb-3 min-w-[200px]">Hạng mục</th>
                  <th className="pb-3 text-center min-w-[90px]">Đơn vị tính</th>
                  <th className="pb-3 text-right min-w-[180px]">Đơn giá tham khảo (VNĐ)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal/5">
                <tr>
                  <td className="py-3 font-medium text-charcoal">Phá dỡ nhà khung cột, tường 110 (BTCT)</td>
                  <td className="py-3 text-center">m²</td>
                  <td className="py-3 text-right font-bold text-primary">100.000 – 280.000</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-charcoal">Phá dỡ nhà có tường chịu lực</td>
                  <td className="py-3 text-center">m²</td>
                  <td className="py-3 text-right font-bold text-primary">150.000 – 350.000</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-charcoal">Đào móng, xử lý nền cũ</td>
                  <td className="py-3 text-center">m³</td>
                  <td className="py-3 text-right font-bold text-primary">170.000 – 350.000</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-charcoal">Đục phá nền nhà + vận chuyển</td>
                  <td className="py-3 text-center">m²</td>
                  <td className="py-3 text-right font-bold text-primary">90.000 – 120.000</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-charcoal">Phá dỡ tường ngăn cũ + vận chuyển</td>
                  <td className="py-3 text-center">m²</td>
                  <td className="py-3 text-right font-bold text-primary">80.000 – 100.000</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-charcoal">Phá dỡ sàn bê tông cốt thép</td>
                  <td className="py-3 text-center">m²</td>
                  <td className="py-3 text-right font-bold text-primary">350.000 – 450.000</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-charcoal">Phá dỡ nhà xưởng, công trình công nghiệp</td>
                  <td className="py-3 text-center">m²</td>
                  <td className="py-3 text-right font-bold text-primary">Liên hệ khảo sát</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs italic text-muted-foreground">
            * Bảng giá chỉ mang tính tham khảo, chi phí thực tế sẽ được báo chính xác sau khi khảo sát công trình.
          </p>
        </div>

        {/* 4. Quy Trình Phá Dỡ */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">4. Quy Trình Phá Dỡ Nhà An Toàn, Chuyên Nghiệp</h3>
          <p>Một đơn vị thi công uy tín thường triển khai theo 6 bước sau để đảm bảo tiến độ và an toàn:</p>
          <div className="space-y-3">
            {[
              { step: "1", title: "Tiếp nhận thông tin & tư vấn sơ bộ", desc: "Tư vấn qua điện thoại, Zalo hoặc đặt lịch hẹn khảo sát trực tiếp công trình." },
              { step: "2", title: "Khảo sát hiện trạng công trình", desc: "Đánh giá kết cấu, mặt bằng thi công, lối vận chuyển và các công trình liền kề." },
              { step: "3", title: "Lập phương án & báo giá chi tiết", desc: "Báo giá theo từng hạng mục rõ ràng, minh bạch với khách hàng trước khi thi công." },
              { step: "4", title: "Ký hợp đồng thi công", desc: "Quy định rõ tiến độ, chi phí trọn gói và trách nhiệm an toàn lao động các bên." },
              { step: "5", title: "Thi công phá dỡ an toàn", desc: "Tuân thủ nguyên tắc phá từ trên xuống, từ ngoài vào trong; che chắn, phun nước hạn chế bụi; thu gom và vận chuyển phế thải đúng nơi quy định." },
              { step: "6", title: "Nghiệm thu & bàn giao mặt bằng", desc: "Nghiệm thu sau khi hoàn tất, dọn dẹp sạch sẽ mặt bằng và thanh toán theo thỏa thuận." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4 p-4 bg-secondary/60 rounded-2xl border border-charcoal/5 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h4 className="font-bold text-charcoal">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bộ hình ảnh thi công thực tế 2 */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-100 group">
              <img
                src="/images/phadonha3.jpg"
                alt="Thu gom xà bần phế thải công trình"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <p className="p-3 text-xs text-center bg-neutral-100 italic">Hình 3: Vận chuyển phế thải xây dựng nhanh gọn, đúng quy định</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-100 group">
              <img
                src="/images/phadonha4.jpg"
                alt="Hoàn tất phá dỡ bàn giao mặt bằng"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <p className="p-3 text-xs text-center bg-neutral-100 italic">Hình 4: Mặt bằng sạch sẽ được bàn giao sau khi phá dỡ hoàn tất</p>
            </div>
          </div>
        </div>

        {/* 5. Lưu Ý Quan Trọng */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">5. Lưu Ý Quan Trọng Khi Phá Dỡ Nhà Trong Khu Dân Cư</h3>
          <p>Phá dỡ nhà tại các khu vực đông dân cư, ngõ nhỏ cần đặc biệt cẩn trọng:</p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>Che chắn công trình bằng bạt, lưới an toàn để hạn chế bụi và tiếng ồn ảnh hưởng nhà xung quanh.</li>
            <li>Phun nước làm ẩm bề mặt trước khi phá để giảm phát tán bụi.</li>
            <li>Sử dụng thiết bị phù hợp với mặt bằng: máy cắt cầm tay, búa phá cho khu vực chật hẹp; máy xúc, máy phá cỡ lớn cho mặt bằng rộng.</li>
            <li>Có phương án gia cố, bảo vệ nhà liền kề trước khi thi công, tránh rung chấn gây nứt lún.</li>
            <li>Vận chuyển phế thải đúng giờ quy định, đúng nơi tập kết theo yêu cầu của địa phương.</li>
          </ul>
        </div>

        {/* 6. Vì Sao Nên Chọn Đơn Vị Chuyên Nghiệp */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">6. Vì Sao Nên Chọn Đơn Vị Phá Dỡ Chuyên Nghiệp?</h3>
          <p>
            Tự ý thuê thợ tự do để tiết kiệm chi phí có thể tiềm ẩn rủi ro về an toàn lao động, ảnh hưởng công trình lân cận và phát sinh chi phí ngoài dự kiến. Một đơn vị thi công chuyên nghiệp sẽ mang lại:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <h4 className="font-bold text-charcoal mb-1">Báo giá rõ ràng</h4>
              <p>Khảo sát và báo giá minh bạch, hạn chế phát sinh trong quá trình thi công.</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <h4 className="font-bold text-charcoal mb-1">Máy móc hiện đại</h4>
              <p>Đội ngũ có kinh nghiệm, máy móc phù hợp với từng loại công trình.</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <h4 className="font-bold text-charcoal mb-1">Cam kết an toàn</h4>
              <p>Đảm bảo an toàn tuyệt đối cho công trình và khu vực xung quanh.</p>
            </div>
            <div className="p-4 bg-primary/5 rounded-2xl border-l-4 border-primary">
              <h4 className="font-bold text-charcoal mb-1">Xử lý phế thải sạch</h4>
              <p>Xử lý phế thải đúng quy định, dọn dẹp mặt bằng sạch sẽ sau khi hoàn thành.</p>
            </div>
          </div>
        </div>

        {/* Thông tin liên hệ */}
        <div className="p-6 md:p-8 bg-charcoal text-white rounded-3xl text-center space-y-4 shadow-xl">
          <h4 className="text-2xl font-bold text-primary-foreground">Sửa Nhà Hà Nội</h4>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Chuyên phá dỡ nhà cũ, đào móng, đục phá bê tông và thi công cải tạo nhà tại Hà Nội.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:0388423600"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-md text-sm"
            >
              📞 Hotline: 0388.423.600
            </a>
            <a
              href="https://zalo.me/0388423600"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal font-bold rounded-full hover:bg-neutral-100 transition-all shadow-md text-sm"
            >
              💬 Chat Zalo tư vấn
            </a>
          </div>
          <p className="text-xs text-neutral-400 italic">
            * Liên hệ ngay để được khảo sát và báo giá miễn phí!
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Báo Giá Chi Tiết Thi Công Trần Và Vách Thạch Cao 2026",
    description: "Tổng hợp đơn giá thi công trần phẳng, trần giật cấp và vách ngăn thạch cao 1-2 mặt sử dụng khung xương Vĩnh Tường, Hà Nội.",
    date: "16/04/2026",
    category: "Giá thi công",
    slug: "bao-gia-tran-vach-thach-cao-2026",
    image: tranthachcao1,
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Bảng báo giá trần thạch cao Vĩnh Tường mới nhất 2026</h3>
          <p>Trần thạch cao Vĩnh Tường từ lâu đã là tiêu chuẩn vàng trong ngành xây dựng tại Việt Nam nhờ hệ khung xương vững chắc và tấm Gyproc nhập khẩu chất lượng cao. Chúng tôi xin gửi tới quý khách hàng bảng giá thi công trọn gói cạnh tranh nhất.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl border-t-4 border-primary overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-primary font-bold border-b border-primary/20">
              <tr>
                <th className="pb-3">Hạng mục</th>
                <th className="pb-3">Vật tư sử dụng</th>
                <th className="pb-3 text-right">Đơn giá (đ/m2)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              <tr>
                <td className="py-3">Trần phẳng</td>
                <td className="py-3">Khung xương Basi + Tấm Gyproc 9mm</td>
                <td className="py-3 text-right font-bold">165.000</td>
              </tr>
              <tr>
                <td className="py-3">Trần giật cấp</td>
                <td className="py-3">Khung xương Basi + Tấm Gyproc 9mm</td>
                <td className="py-3 text-right font-bold">175.000</td>
              </tr>
              <tr>
                <td className="py-3">Trần thả (60x60)</td>
                <td className="py-3">Khung xương FineLine + Tấm phủ PVC</td>
                <td className="py-3 text-right font-bold">150.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-charcoal">Bảng báo giá vách thạch cao chi tiết</h3>
          <img src={vach1} alt="Bảng báo giá vách thạch cao 1 mặt và 2 mặt" className="w-full rounded-2xl shadow-sm border border-neutral-100" />
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-charcoal">Bảng báo giá trần thạch cao (Hình ảnh)</h3>
          <img src={baogiatranthachcao} alt="Bảng báo giá trần thạch cao chi tiết" className="w-full rounded-2xl shadow-sm border border-neutral-100" />
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-charcoal">Một số hình ảnh thi công trần thạch cao thực tế</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <img src={tranthachcao1} alt="Mẫu trần thạch cao thi công thực tế 1" className="w-full h-full rounded-xl shadow-sm object-cover aspect-video hover:scale-[1.02] transition-transform duration-300" />
            <img src={tranthachcao2} alt="Mẫu trần thạch cao thi công thực tế 2" className="w-full h-full rounded-xl shadow-sm object-cover aspect-video hover:scale-[1.02] transition-transform duration-300" />
            <img src={tranthachcao3} alt="Mẫu trần thạch cao thi công thực tế 3" className="w-full h-full rounded-xl shadow-sm object-cover aspect-video hover:scale-[1.02] transition-transform duration-300" />
            <img src={tranthachcao4} alt="Mẫu trần thạch cao thi công thực tế 4" className="w-full h-full rounded-xl shadow-sm object-cover aspect-video hover:scale-[1.02] transition-transform duration-300" />
          </div>
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-charcoal">Tại sao nên dùng khung xương Vĩnh Tường Basi?</h3>
          <p>Khung xương Basi có độ dày tiêu chuẩn, bề mặt mạ kẽm chống rỉ sét tuyệt đối, giúp hệ trần không bị võng xệ sau 10-20 năm sử dụng. Kết hợp với tấm thạch cao Gyproc tiêu chuẩn Pháp, công trình của bạn sẽ có độ bền và tính thẩm mỹ vượt trội.</p>
          <img src={ceilingDesign} alt="Mẫu trần thạch cao Vĩnh Tường đẹp" className="rounded-2xl shadow-sm border border-neutral-100 hover:scale-[1.01] transition-transform duration-300" />
        </div>
      </div>
    )
  },
  {
    title: "Giải Pháp Phá Dỡ Trần Vách Thạch Cao An Toàn, Nhanh Gọn",
    description: "Hướng dẫn phá dỡ trần vách thạch cao đúng kỹ thuật, hạn chế bụi bẩn, đảm bảo an toàn và tối ưu chi phí tại Hà Nội.",
    date: "16/04/2026",
    category: "Cải tạo nhà",
    slug: "giai-phap-sua-chua-nang-cap-nha",
    image: vach2,
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img src={vach2} alt="Phá dỡ trần vách thạch cao tại công trình" className="w-full object-cover aspect-video" />
          <p className="text-center text-xs italic py-2 bg-neutral-100">Tháo dỡ vách thạch cao an toàn, đúng quy trình kỹ thuật</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Khi nào cần phá dỡ trần vách thạch cao?</h3>
          <p>
            Sau thời gian dài sử dụng, trần hoặc vách thạch cao có thể bị thấm nước, nứt mối nối, võng xệ hoặc không còn phù hợp với nhu cầu bố trí mới.
            Việc tháo dỡ đúng kỹ thuật giúp bạn cải tạo không gian nhanh, hạn chế phát sinh và chuẩn bị mặt bằng tốt cho hạng mục thi công mới.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl shadow-sm border-t-4 border-primary">
          <h4 className="font-bold text-primary mb-4 italic underline text-center">Các trường hợp thường cần tháo dỡ:</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><span>•</span> <span>Thay đổi công năng phòng, cần mở rộng hoặc tạo không gian mở.</span></li>
            <li className="flex gap-2"><span>•</span> <span>Trần/vách bị thấm nước, mốc, nứt và cần thay mới toàn bộ hệ khung.</span></li>
            <li className="flex gap-2"><span>•</span> <span>Cần đi lại hệ điện nước, điều hòa âm trần hoặc thông gió.</span></li>
            <li className="flex gap-2"><span>•</span> <span>Hoàn trả mặt bằng nhà phố, văn phòng, cửa hàng trước khi bàn giao.</span></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary p-6 rounded-2xl shadow-sm border-t-4 border-primary">
            <h4 className="font-bold text-primary mb-4 italic underline text-center">Quy trình phá dỡ an toàn:</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">01</span>
                <span>Khảo sát hiện trạng, xác định rủi ro và phương án thi công.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">02</span>
                <span>Che chắn kỹ khu vực thi công, quây bạt và phun sương giảm bụi.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">03</span>
                <span>Ngắt điện nước liên quan, tháo dỡ theo từng mảng từ trên xuống dưới.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">04</span>
                <span>Đóng bao, vận chuyển xà bần đúng quy định và vệ sinh sạch sẽ.</span>
              </li>
            </ul>
          </div>
          <div className="bg-secondary p-6 rounded-2xl shadow-sm border-t-4 border-primary">
            <h4 className="font-bold text-primary mb-4 italic underline text-center">Bảng giá tham khảo phá dỡ:</h4>
            <ul className="space-y-3 text-sm">
              <li>• Từ 100m2 trở lên: khoảng <strong>60.000đ/m2</strong>.</li>
              <li>• Từ 50m2 - dưới 100m2: khoảng <strong>100.000đ/m2</strong>.</li>
              <li>• Dưới 50m2 hoặc mặt bằng khó: khảo sát và báo giá theo thực tế.</li>
              <li>• Đơn giá có thể thay đổi theo độ cao, mức độ che chắn và vị trí đổ thải.</li>
              <li>• Nên yêu cầu báo giá trọn gói gồm tháo dỡ, dọn dẹp và vận chuyển xà bần.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg my-8">
          <img src={phado2} alt="Đóng bao và vận chuyển xà bần sau phá dỡ vách thạch cao" className="w-full object-cover aspect-video" />
          <p className="text-center text-xs italic py-2 bg-neutral-100">Khâu thu gom, đóng bao và vận chuyển vật liệu sau phá dỡ</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Vì sao nên thuê đội thợ chuyên nghiệp?</h3>
          <p>Phá dỡ tưởng đơn giản nhưng nếu làm sai kỹ thuật sẽ rất dễ phát sinh bụi bẩn, rơi vỡ và ảnh hưởng kết cấu xung quanh. Đội thợ chuyên nghiệp giúp bạn:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>An toàn lao động:</strong> Trang bị bảo hộ đầy đủ, có phương án thi công rõ ràng.</li>
            <li><strong>Giảm bụi và tiếng ồn:</strong> Che chắn đúng cách, tháo dỡ theo trình tự, hạn chế ảnh hưởng khu dân cư.</li>
            <li><strong>Tiến độ nhanh:</strong> Chia tổ thi công theo khu vực để rút ngắn thời gian bàn giao.</li>
            <li><strong>Chi phí minh bạch:</strong> Báo giá theo hiện trạng, hạn chế tối đa phát sinh ngoài hợp đồng.</li>
          </ul>
        </div>

        <p className="font-bold text-center text-primary text-xl">
          Cần khảo sát phá dỡ trần vách thạch cao? Gọi ngay: 0388.423.600 (Hỗ trợ 24/7)
        </p>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Làm Vách Thạch Cao 1 Mặt Và 2 Mặt",
    description: "Giải pháp làm vách ngăn phòng ngủ, văn phòng, shop kinh doanh với chi phí hợp lý.",
    date: "12/03/2026",
    category: "Vách ngăn",
    slug: "bao-gia-vach-thach-cao-1-mat-2-mat",
    image: vach3,
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img src={vach3} alt="Vách ngăn thạch cao phòng khách hiện đại" className="w-full object-cover aspect-video" />
          <p className="text-center text-xs italic py-2 bg-neutral-100">Mẫu vách ngăn thạch cao 1 mặt và 2 mặt thẩm mỹ</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Giải pháp ngăn phòng tối ưu với vách thạch cao</h3>
          <p>Vách ngăn thạch cao là giải pháp thay thế tường gạch truyền thống một cách hoàn hảo. Với trọng lượng chỉ bằng 1/10 tường gạch, vách thạch cao giúp giảm tải trọng cho móng và cho phép thay đổi thiết kế linh hoạt sau này.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl">
          <h4 className="font-bold text-charcoal mb-4">Phân loại vách thạch cao:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="font-bold text-primary underline">Vách 1 mặt:</p>
              <p className="text-sm">Thường dùng để ốp trực tiếp vào tường gạch cũ để tiêu âm, chống nóng hoặc che hệ thống điện nước, trang trí tạo điểm nhấn cho phòng khách, phòng thờ.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-primary underline">Vách 2 mặt:</p>
              <p className="text-sm">Dùng để ngăn chia không gian độc lập như chia thêm phòng ngủ, phòng làm việc. Hai mặt tấm thạch cao cho bề mặt nhẵn bóng như tường thật.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Tăng cường khả năng cách âm</h3>
          <p>Nếu bạn cần không gian yên tĩnh tuyệt đối cho phòng ngủ hoặc phòng học, chúng tôi cung cấp giải pháp vách thạch cao cách âm chuyên sâu:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Sử dụng <strong>bông khoáng (Rockwool)</strong> hoặc bông thủy tinh bên trong khung xương để triệt tiêu âm thanh.</li>
            <li>Ốp 2 lớp tấm thạch cao mỗi mặt để tăng độ dày và khả năng cản âm.</li>
            <li>Kết hợp tấm thạch cao tiêu âm chuyên dụng cho phòng Karaoke hoặc phòng thu âm.</li>
          </ul>
        </div>

        <p className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">Chúng tôi cam kết thi công nhanh gọn, sạch sẽ, không ảnh hưởng đến sinh hoạt của gia đình. Có thể hoàn thiện xong trong vòng 1-2 ngày.</p>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Làm Trần Nhựa Giả Gỗ Nano PVC 2026",
    description: "Báo giá trần nhựa nano chống ẩm, chống mối mọt, mẫu vân gỗ và vân đá hiện đại cho nhà ở.",
    date: "08/03/2026",
    category: "Trần nhựa",
    slug: "bao-gia-tran-nhua-nano-pvc-2026",
    image: heroConstruction,
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Trần nhựa Nano - Giải pháp chống ẩm tuyệt đối</h3>
          <p>Nếu trần thạch cao e ngại vấn đề ẩm ướt thì trần nhựa Nano chính là câu trả lời hoàn hảo. Được cấu tạo từ bột nhựa PVC và bột đá cao cấp cùng lớp phủ film Nano đa dạng vân gỗ, vân đá, sản phẩm này mang lại vẻ đẹp sang trọng mà vẫn đảm bảo độ bền tuyệt đối.</p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg my-8">
          <img src={featCeiling} alt="Thi công trần nhựa Nano đẹp" className="w-full object-cover aspect-[21/9]" />
          <p className="text-center text-xs italic py-2 bg-neutral-100">Mẫu trần nhựa Nano giả gỗ sang trọng cho phòng khách</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl border-r-4 border-primary">
          <h4 className="font-bold text-charcoal mb-4">Ưu điểm vượt trội của trần nhựa PVC:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-2">✓ <strong>Chống nước 100%:</strong> Không ẩm mốc, không mục nát.</li>
            <li className="flex items-center gap-2">✓ <strong>Chống mối mọt:</strong> Hoàn toàn miễn nhiễm với côn trùng.</li>
            <li className="flex items-center gap-2">✓ <strong>Chống cháy lan:</strong> Đạt tiêu chuẩn an toàn phòng cháy.</li>
            <li className="flex items-center gap-2">✓ <strong>Vệ sinh dễ dàng:</strong> Chỉ cần lau bằng khăn ẩm.</li>
            <li className="flex items-center gap-2">✓ <strong>Thi công cực nhanh:</strong> Không bụi bặm, xong trong ngày.</li>
            <li className="flex items-center gap-2">✓ <strong>Cách âm cách nhiệt:</strong> Cấu tạo rỗng giữa giúp tản nhiệt.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Báo giá thi công trần nhựa Nano 2026</h3>
          <p>Đơn giá thi công trọn gói thường dao động từ <strong>280.000đ - 450.000đ/m2</strong> tùy vào:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Độ dày tấm nhựa (6mm, 9mm hoặc 10mm).</li>
            <li>Độ cầu kỳ của mẫu (trần phẳng hay trần giật cấp).</li>
            <li>Hệ khung xương sắt hộp hay khung xương chuyên dụng.</li>
          </ul>
        </div>

        <p className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary font-medium">Chúng tôi cung cấp hàng trăm mẫu vân gỗ từ cổ điển đến hiện đại, đảm bảo phù hợp với mọi phong cách nội thất từ chung cư đến biệt thự.</p>
      </div>
    )
  },
  {
    title: "Sửa Trần Thạch Cao Chuyên Nghiệp, Vá Trần Nhanh Gọn",
    description: "Xử lý triệt để các lỗi trần thạch cao bị nứt, thấm nước, ố vàng and xệ trần.",
    date: "20/03/2026",
    category: "Sửa trần",
    slug: "sua-tran-thach-cao-chuyen-nghiep",
    image: featCeiling,
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Dịch vụ sửa trần thạch cao nhanh, bàn giao trong ngày</h3>
          <p>Trần thạch cao sau nhiều năm sử dụng có thể xuất hiện các dấu hiệu xuống cấp như nứt dọc mối nối, ố vàng do ngấm nước hoặc võng xệ khung xương. Những lỗi này nếu không xử lý kịp thời sẽ gây mất thẩm mỹ và tiềm ẩn nguy cơ mất an toàn.</p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg my-8">
          <img src={beforeAfter} alt="Trước và sau khi sửa trần thạch cao" className="w-full object-cover aspect-video" />
          <p className="text-center text-xs italic py-2 bg-neutral-100">Hình ảnh thực tế trước và sau khi đội thợ xử lý trần bị ngấm nước</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary p-5 rounded-2xl border border-charcoal/5">
            <h4 className="font-bold text-primary mb-3">Các lỗi thường gặp:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Trần bị thấm nước, ố vàng, rêu mốc.</li>
              <li>• Vết nứt xuất hiện tại các điểm giáp lai.</li>
              <li>• Trần bị võng xệ do khung xương yếu hoặc ẩm.</li>
              <li>• Lỗ hổng do thay đổi đèn, điều hòa, camera.</li>
            </ul>
          </div>
          <div className="bg-secondary p-5 rounded-2xl border border-charcoal/5">
            <h4 className="font-bold text-primary mb-3">Cam kết của đội thợ:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Khảo sát và báo giá miễn phí 24/7.</li>
              <li>• Thi công nhanh gọn, sạch sẽ trong ngày.</li>
              <li>• Xử lý triệt để mầm mống hư hỏng.</li>
              <li>• Sơn bả hoàn thiện phẳng mịn như mới.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Bộ dụng cụ thi công chuyên nghiệp</h3>
          <p>Chúng tôi trang bị đầy đủ máy móc hiện đại như máy laser cân bằng, máy chà nhám hút bụi và các dụng cụ bả matit chuyên dụng để đảm bảo độ phẳng mịn tuyệt đối cho bề mặt trần sau khi sửa.</p>
          <img src={repairTools} alt="Dụng cụ sửa trần thạch cao" className="rounded-2xl shadow-sm border border-neutral-100" />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Quy trình sửa chữa 4 bước chuyên nghiệp</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">1</div>
              <div>
                <p className="font-bold text-charcoal">Khảo sát & Tư vấn:</p>
                <p className="text-sm">Xác định nguyên nhân hư hỏng (do nước, do nhiệt hay do kết cấu) để có phương án xử lý triệt để tận gốc.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">2</div>
              <div>
                <p className="font-bold text-charcoal">Chuẩn bị mặt bằng:</p>
                <p className="text-sm">Che chắn nội thất bằng bạt chuyên dụng để đảm bảo vệ sinh, không để bụi bẩn ảnh hưởng đến đồ đạc trong nhà.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">3</div>
              <div>
                <p className="font-bold text-charcoal">Thi công sửa chữa:</p>
                <p className="text-sm">Thay thế tấm hư hỏng, gia cố lại khung xương, dán băng keo lưới chống nứt và tiến hành bả matit 2 lớp chuyên dụng.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-sm">4</div>
              <div>
                <p className="font-bold text-charcoal">Sơn hoàn thiện & Bàn giao:</p>
                <p className="text-sm">Lăn sơn theo màu cũ hoặc sơn lại toàn bộ theo yêu cầu. Vệ sinh sạch sẽ hiện trường trước khi bàn giao cho chủ nhà.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal text-center py-4">Giải đáp thắc mắc thường gặp (FAQ)</h3>
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
              <p className="font-bold text-charcoal mb-1">Q: Sửa một lỗ hổng trần nhỏ có nhận không?</p>
              <p className="text-sm italic">A: Có, chúng tôi nhận tất cả các hạng mục từ nhỏ nhất như vá lỗ đèn đến làm mới toàn bộ căn hộ.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
              <p className="font-bold text-charcoal mb-1">Q: Sửa xong có để lại vết nối không?</p>
              <p className="text-sm italic">A: Với kỹ thuật bả matit và sơn hoàn thiện chuyên nghiệp, chúng tôi cam kết bề mặt phẳng mịn 100%, không lộ vết vá.</p>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm border border-charcoal/5">
              <p className="font-bold text-charcoal mb-1">Q: Thời gian bảo hành là bao lâu?</p>
              <p className="text-sm italic">A: Chúng tôi bảo hành 12 tháng cho các hạng mục sửa chữa và lên đến 5 năm cho các hạng mục thi công mới.</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-2xl italic border-l-4 border-primary">
          <h4 className="font-bold text-charcoal not-italic mb-2 italic underline">Mẹo nhỏ giúp trần thạch cao bền hơn:</h4>
          <p className="text-sm mb-2">1. Luôn giữ cho mái nhà và hệ thống đường nước không bị rò rỉ.</p>
          <p className="text-sm mb-2">2. Đảm bảo phòng thông thoáng, hạn chế độ ẩm quá cao trong thời gian dài.</p>
          <p className="text-sm">3. Nếu thấy vết nứt nhỏ, hãy xử lý ngay để tránh vết nứt lan rộng gây tốn kém chi phí sau này.</p>
        </div>

        <p className="font-bold text-center text-primary text-xl animate-pulse">Hotline: 0388.423.600 - Phục vụ tận tâm 24/7</p>
      </div>
    )
  },
  {
    title: "Báo Giá Sơn Nhà Hà Nội 2026: Nhân Công Và Trọn Gói",
    description: "Cập nhật đơn giá sơn nhà mới nhất, cách tính chi phí và kinh nghiệm chọn màu sơn thực tế cho nhà phố, chung cư, phòng trọ.",
    date: "01/05/2026",
    category: "Sơn nhà",
    slug: "bao-gia-son-nha-ha-noi-2026",
    image: sonnha1,
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Báo giá thợ sơn lại nhà tại Hà Nội mới nhất</h3>
          <p>
            Chi phí sơn nhà phụ thuộc vào tình trạng tường, diện tích thực tế, hệ sơn lựa chọn và độ khó thi công.
            Với nhà ở dân dụng tại Hà Nội, bạn có thể tham khảo mức giá phổ biến dưới đây để chủ động ngân sách trước khi gọi thợ khảo sát.
          </p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl border-t-4 border-primary overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-primary font-bold border-b border-primary/20">
              <tr>
                <th className="pb-3">Hạng mục sơn</th>
                <th className="pb-3">Phạm vi công việc</th>
                <th className="pb-3 text-right">Đơn giá tham khảo (đ/m2)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-charcoal/5">
              <tr>
                <td className="py-3">Sơn nhân công</td>
                <td className="py-3">Chủ nhà tự mua sơn, đội thợ thi công</td>
                <td className="py-3 text-right font-bold">15.000 - 20.000</td>
              </tr>
              <tr>
                <td className="py-3">Sơn lại trọn gói</td>
                <td className="py-3">Vật tư + nhân công + vệ sinh bàn giao</td>
                <td className="py-3 text-right font-bold">40.000 - 60.000</td>
              </tr>
              <tr>
                <td className="py-3">Sơn mới nhà xây thô</td>
                <td className="py-3">Bả matit + lót + phủ hoàn thiện</td>
                <td className="py-3 text-right font-bold">65.000 - 95.000</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg my-8">
          <img src={featPainting} alt="Thi công sơn tường nhà ở thực tế" className="w-full object-cover aspect-video" />
          <p className="text-center text-xs italic py-2 bg-neutral-100">Thi công sơn tường đúng quy trình giúp bề mặt bền màu và ít bong tróc</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary p-6 rounded-2xl border-t-4 border-primary">
            <h4 className="font-bold text-primary mb-4 italic underline text-center">Sai lầm thường gặp khi sơn lại nhà:</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2"><span>•</span> <span>Chọn màu quá đậm cho toàn bộ không gian khiến phòng bị tối và bí.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Không xử lý nứt/chống thấm trước khi sơn phủ, dẫn đến bong tróc sớm.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Không kiểm tra định mức sơn, thi công thiếu lớp lót hoặc pha loãng quá mức.</span></li>
              <li className="flex gap-2"><span>•</span> <span>Chốt giá chung chung, không ghi rõ từng hạng mục và vật tư đi kèm.</span></li>
            </ul>
          </div>
          <div className="bg-secondary p-6 rounded-2xl border-t-4 border-primary">
            <h4 className="font-bold text-primary mb-4 italic underline text-center">Quy trình thi công sơn chuẩn:</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">01</span>
                <span>Khảo sát bề mặt, đo đạc diện tích và tư vấn hệ sơn phù hợp.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">02</span>
                <span>Xử lý bề mặt: cạo bỏ lớp cũ, vá nứt, chà nhám và chống thấm nếu cần.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">03</span>
                <span>Sơn lót đồng đều, sau đó sơn phủ 2 lớp để màu lên chuẩn và bền.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[10px]">04</span>
                <span>Vệ sinh, nghiệm thu và bàn giao theo đúng màu đã chốt ban đầu.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Các màu sơn nhà được chọn nhiều năm 2026</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Trắng kem - be sáng:</strong> Dễ phối nội thất, giúp không gian thoáng và sạch.</li>
            <li><strong>Xám nhạt hiện đại:</strong> Hợp chung cư, nhà phố phong cách tối giản.</li>
            <li><strong>Xanh pastel:</strong> Tạo cảm giác dịu mắt, phù hợp phòng ngủ và phòng trẻ em.</li>
            <li><strong>Màu nhấn đậm:</strong> Chỉ nên dùng cho 1 mảng tường để tránh nặng không gian.</li>
          </ul>
        </div>

        <div className="bg-primary/5 p-6 rounded-2xl border-l-4 border-primary space-y-3">
          <h4 className="font-bold text-charcoal">FAQ nhanh trước khi thuê thợ sơn</h4>
          <p className="text-sm"><strong>Hỏi:</strong> Dưới 50m2 có nhận làm không? <strong>Đáp:</strong> Có, đội thợ nhận cả công trình nhỏ và sẽ báo giá theo hiện trạng.</p>
          <p className="text-sm"><strong>Hỏi:</strong> Sơn xong bao lâu ở được? <strong>Đáp:</strong> Nên thông thoáng 24-48 giờ để mùi sơn bay bớt trước khi ở kín phòng.</p>
          <p className="text-sm"><strong>Hỏi:</strong> Có phát sinh chi phí không? <strong>Đáp:</strong> Chỉ phát sinh khi chủ nhà bổ sung hạng mục ngoài khối lượng đã chốt.</p>
        </div>

        <p className="font-bold text-center text-primary text-xl">Hotline tư vấn sơn nhà: 0388.423.600 - Khảo sát nhanh, báo giá minh bạch</p>
      </div>
    )
  }
];
