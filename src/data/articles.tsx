import type { ReactNode } from "react";

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
    title: "Báo Giá Chi Tiết Thi Công Trần Và Vách Thạch Cao 2026",
    description: "Tổng hợp đơn giá thi công trần phẳng, trần giật cấp và vách ngăn thạch cao 1-2 mặt sử dụng khung xương Vĩnh Tường, Hà Nội.",
    date: "16/04/2026",
    category: "Giá thi công",
    slug: "bao-gia-tran-vach-thach-cao-2026",
    image: "/src/assets/hero-ceiling.png",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Tại sao nên chọn trần vách thạch cao?</h3>
          <p>Trần và vách thạch cao hiện nay là lựa chọn số 1 cho các công trình dân dụng, văn phòng và chung cư. Với ưu điểm nhẹ, thi công nhanh, bề mặt phẳng mịn dễ dàng trang trí, thạch cao còn mang lại khả năng <strong>cách âm lên đến 40-50dB</strong> và <strong>cách nhiệt hiệu quả</strong>, giúp tiết kiệm điện năng cho điều hòa.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl border-l-4 border-primary">
          <h4 className="font-bold text-charcoal mb-4">Bảng báo giá hạng mục thạch cao 2026:</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
              <span>Trần thạch cao phẳng (Khung Vĩnh Tường)</span>
              <span className="font-bold text-primary">155.000đ - 175.000đ/m2</span>
            </div>
            <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
              <span>Trần thạch cao giật cấp (Mẫu hiện đại)</span>
              <span className="font-bold text-primary">165.000đ - 195.000đ/m2</span>
            </div>
            <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
              <span>Vách thạch cao ngăn phòng (1 mặt)</span>
              <span className="font-bold text-primary">185.000đ - 215.000đ/m2</span>
            </div>
            <div className="flex justify-between items-center border-b border-charcoal/5 pb-2">
              <span>Vách thạch cao ngăn phòng (2 mặt)</span>
              <span className="font-bold text-primary">265.000đ - 315.000đ/m2</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Lưu ý khi thi công:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nên sử dụng tấm thạch cao Gyproc chất lượng cao để tránh nứt nẻ.</li>
            <li>Khoảng cách khung xương phải đạt tiêu chuẩn 400x600mm để đảm bảo độ cứng.</li>
            <li>Sử dụng băng keo lưới tại các mối nối để chống nứt sau khi sơn bả.</li>
          </ul>
        </div>

        <p className="italic text-sm">* Lưu ý: Đơn giá trên có thể thay đổi tùy theo diện tích và độ khó của mẫu thiết kế. Quý khách vui lòng liên hệ Hotline để được tư vấn khảo sát miễn phí.</p>
      </div>
    )
  },
  {
    title: "Giải Pháp Sửa Chữa Nâng Cấp Không Gian Sống Toàn Diện",
    description: "Dịch vụ cải tạo nhà ở chuyên nghiệp: Xử lý nứt tường, sơn bả lại, nâng cấp hệ thống âm trần và thiết kế lại công năng.",
    date: "16/04/2026",
    category: "Cải tạo nhà",
    slug: "giai-phap-sua-chua-nang-cap-nha",
    image: "/src/assets/hero-renovation.png",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Khi nào cần cải tạo nhà cũ?</h3>
          <p>Căn nhà của bạn sau 10-15 năm thường xuất hiện tình trạng bong tróc sơn, thấm dột, hoặc hệ thống điện nước lỗi thời. Việc cải tạo không chỉ giúp nâng tầm vẻ đẹp mà còn đảm bảo an toàn và tối ưu hóa diện tích sử dụng cho cả gia đình.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-secondary p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-primary mb-2 italic underline text-center">Các hạng mục chính:</h4>
            <ul className="space-y-2 text-sm">
              <li>• Phá dỡ tường, cơi nới không gian.</li>
              <li>• Xử lý nứt tường, ẩm mốc triệt để.</li>
              <li>• Thay thế hệ thống điện nước âm.</li>
              <li>• Thi công lại trần thạch cao & sàn gỗ.</li>
            </ul>
          </div>
          <div className="bg-secondary p-5 rounded-2xl shadow-sm">
            <h4 className="font-bold text-primary mb-2 italic underline text-center">Quy trình làm việc:</h4>
            <ul className="space-y-2 text-sm">
              <li>1. Khảo sát hiện trạng thực tế.</li>
              <li>2. Thiết kế phương án tối ưu.</li>
              <li>3. Báo giá chi tiết từng hạng mục.</li>
              <li>4. Thi công và nghiệm thu bàn giao.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Cam kết của chúng tôi:</h3>
          <p>Với phương châm <strong>"Uy tín tạo niềm tin"</strong>, chúng tôi cam kết thi công đúng tiến độ, sử dụng vật liệu chính hãng và đảm bảo vệ sinh sạch sẽ cho công trình sau khi hoàn thiện.</p>
        </div>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Làm Vách Thạch Cao 1 Mặt Và 2 Mặt",
    description: "Giải pháp làm vách ngăn phòng ngủ, văn phòng, shop kinh doanh với chi phí hợp lý.",
    date: "12/03/2026",
    category: "Vách ngăn",
    slug: "bao-gia-vach-thach-cao-1-mat-2-mat",
    image: "/src/assets/feat-ceiling.png",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Ứng dụng đa dạng của vách thạch cao</h3>
          <p>Vách ngăn thạch cao là giải pháp thay thế tường gạch truyền thống một cách hoàn hảo. Với trọng lượng chỉ bằng 1/10 tường gạch, vách thạch cao giúp giảm tải trọng cho móng và cho phép thay đổi thiết kế linh hoạt sau này.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl">
          <h4 className="font-bold text-charcoal mb-4">Phân loại vách thạch cao:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="font-bold text-primary">Vách 1 mặt:</p>
              <p className="text-sm">Thường dùng để ốp trực tiếp vào tường cũ để tiêu âm, chống nóng hoặc che hệ thống điện nước trang trí.</p>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-primary">Vách 2 mặt:</p>
              <p className="text-sm">Dùng để ngăn chia không gian độc lập. Bề mặt nhẵn bóng cho phép sơn bả hoặc dán giấy dán tường tùy ý.</p>
            </div>
          </div>
        </div>

        <p>Để đạt hiệu quả cách âm tuyệt đối cho phòng ngủ hoặc phòng karaoke, quý khách có thể yêu cầu thêm lớp <strong>bông khoáng hoặc bông thủy tinh</strong> bên trong khung xương.</p>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Làm Trần Nhựa Giả Gỗ Nano PVC 2026",
    description: "Báo giá trần nhựa nano chống ẩm, chống mối mọt, mẫu vân gỗ và vân đá hiện đại cho nhà ở.",
    date: "08/03/2026",
    category: "Trần nhựa",
    slug: "bao-gia-tran-nhua-nano-pvc-2026",
    image: "/src/assets/hero-construction-modern.jpg",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Trần nhựa Nano - Giải pháp chống ẩm tuyệt đối</h3>
          <p>Nếu trần thạch cao e ngại vấn đề ẩm ướt thì trần nhựa Nano chính là câu trả lời. Được làm từ bột nhựa PVC và bột đá cao cấp, sản phẩm này <strong>chống nước 100%</strong>, không cong vênh, không mối mọt và cực kỳ dễ vệ sinh.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl border-r-4 border-primary">
          <h4 className="font-bold text-charcoal mb-4">Ưu điểm vượt trội:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-2">✓ Độ bền trên 20 năm</li>
            <li className="flex items-center gap-2">✓ Chống cháy lan hiệu quả</li>
            <li className="flex items-center gap-2">✓ Mẫu mã vân gỗ, vân đá sang trọng</li>
            <li className="flex items-center gap-2">✓ Thi công sạch sẽ, không bụi bặm</li>
          </ul>
        </div>

        <p>Đơn giá thi công trọn gói thường dao động từ <strong>280.000đ - 450.000đ/m2</strong> tùy vào độ dày của tấm và hệ khung xương đi kèm.</p>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Sơn Nhà Trọn Gói Mới Nhất 2026",
    description: "Báo giá sơn nhà theo m2, đầy đủ vật tư and nhân công, áp dụng cho nhà ở dân dụng and văn phòng.",
    date: "02/03/2026",
    category: "Sơn nhà",
    slug: "bao-gia-son-nha-tron-goi-2026",
    image: "/src/assets/hero-painting.png",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Thay đổi diện mạo ngôi nhà bằng màu sơn mới</h3>
          <p>Sơn nhà không chỉ là trang trí mà còn là lớp bảo vệ tường khỏi các tác động của môi trường. Chúng tôi cung cấp dịch vụ sơn nhà chuyên nghiệp với hệ thống sơn từ các thương hiệu lớn như <strong>Dulux, Jotun, Kova</strong>.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl">
          <h4 className="font-bold text-charcoal mb-4">Các bước thi công chuẩn kỹ thuật:</h4>
          <ol className="space-y-3 text-sm list-decimal pl-5">
            <li><strong>Vệ sinh bề mặt:</strong> Cạo sạch lớp sơn cũ, xử lý vết nứt và bụi bẩn.</li>
            <li><strong>Bả Matit (nếu cần):</strong> Làm phẳng bề mặt tường cho lớp sơn mịn đẹp nhất.</li>
            <li><strong>Sơn lót kháng kiềm:</strong> Tăng độ bám dính và chống ố vàng cho lớp sơn phủ.</li>
            <li><strong>Sơn phủ 2 lớp:</strong> Đảm bảo màu sắc lên chuẩn, bền màu theo thời gian.</li>
          </ol>
        </div>

        <p>Chúng tôi cam kết sử dụng <strong>Sơn Chính Hãng 100%</strong>, phát hiện sơn giả đền bù gấp 10 lần giá trị công trình.</p>
      </div>
    )
  },
  {
    title: "Thi Công Chống Thấm Nhà Ở Chuyên Nghiệp",
    description: "Giải pháp chống thấm sân thượng, tường ngoài trời, nhà vệ sinh giúp ngăn thấm dột lâu dài.",
    date: "10/03/2026",
    category: "Chống thấm",
    slug: "thi-cong-chong-tham-chuyen-nghiep",
    image: "/src/assets/about-home.png",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Đừng để thấm dột phá hủy ngôi nhà của bạn</h3>
          <p>Thấm dột là "kẻ thù âm thầm" làm giảm tuổi thọ công trình và gây ẩm mốc có hại cho sức khỏe. Việc xử lý chống thấm cần được thực hiện dứt điểm ngay từ đầu bằng các phương pháp chuyên sâu.</p>
        </div>

        <div className="space-y-3">
          <h4 className="font-bold text-charcoal">Hạng mục chống thấm phổ biến:</h4>
          <ul className="space-y-2">
            <li className="flex gap-2"><strong>- Chống thấm sân thượng:</strong> Dùng màng khò hoặc sơn Epoxy chống tia UV.</li>
            <li className="flex gap-2"><strong>- Chống thấm nhà vệ sinh:</strong> Xử lý cổ ống và sàn bằng Sika Latex cao cấp.</li>
            <li className="flex gap-2"><strong>- Chống thấm tường ngoài:</strong> Sơn CT11A trộn xi măng hạn chế tối đa nứt chân chim.</li>
          </ul>
        </div>

        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 italic">
          "Chúng tôi bảo hành dịch vụ chống thấm từ 2-5 năm, cam kết xử lý lại hoàn toàn miễn phí nếu có hiện tượng thấm lại."
        </div>
      </div>
    )
  },
  {
    title: "Sửa Trần Thạch Cao Chuyên Nghiệp, Vá Trần Nhanh Gọn",
    description: "Xử lý triệt để các lỗi trần thạch cao bị nứt, thấm nước, ố vàng and xệ trần.",
    date: "20/03/2026",
    category: "Sửa trần",
    slug: "sua-tran-thach-cao-chuyen-nghiep",
    image: "/src/assets/feat-ceiling.png",
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">Khắc phục triệt để mọi hư hỏng trần thạch cao</h3>
          <p>Trần thạch cao sau nhiều năm có thể bị xệ, nứt dọc mối nối hoặc ố vàng do ngấm nước. Những lỗi này cần đội thợ lành nghề xử lý tinh tế để tránh tình trạng "râu ông nọ chắp cằm bà kia", làm mất thẩm mỹ chung của căn phòng.</p>
        </div>

        <div className="bg-secondary p-6 rounded-2xl">
          <h4 className="font-bold text-charcoal mb-4">Chúng tôi nhận xử lý:</h4>
          <ul className="space-y-2 text-sm">
            <li>• Vá các lỗ hổng do khoét đèn, thay đổi vị trí điều hòa.</li>
            <li>• Gia cố hệ thống khung xương bị han gỉ, mục nát.</li>
            <li>• Thay thế tấm thạch cao bị võng hoặc thấm nước.</li>
            <li>• Xử lý triệt để vết nứt trần nhà cũ diện tích lớn.</li>
          </ul>
        </div>

        <p>Với đội thợ chuyên nghiệp, chúng tôi nhận <strong>sửa chữa ngay trong ngày</strong> cho các hạng mục nhỏ gọn, bàn giao mặt bằng sạch sẽ sau thi công.</p>
      </div>
    )
  }
];
