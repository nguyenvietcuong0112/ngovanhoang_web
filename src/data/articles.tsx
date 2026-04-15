import type { ReactNode } from "react";

export type Article = {
  title: string;
  description: string;
  date: string;
  category: string;
  content: ReactNode;
};

export const articles: Article[] = [
  {
    title: "Bảng Báo Giá Sơn Nhà Trọn Gói Mới Nhất 2026",
    description: "Báo giá sơn nhà theo m2, đầy đủ vật tư và nhân công, áp dụng cho nhà ở dân dụng và văn phòng.",
    date: "02/03/2026",
    category: "Sơn nhà",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Dịch vụ sơn nhà trọn gói giúp chủ nhà kiểm soát chi phí dễ dàng và đảm bảo chất lượng đồng đều. Quy trình gồm xử lý bề mặt, sơn lót, sơn phủ và nghiệm thu theo từng hạng mục.</p>
        <div className="bg-secondary p-4 rounded-xl space-y-2">
          <h5 className="font-bold text-charcoal">Đơn giá trọn gói phổ biến:</h5>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between"><span>• Sơn lại không bả:</span> <span className="font-bold text-primary">45k - 65k/m2</span></li>
            <li className="flex justify-between"><span>• Sơn lại có xử lý nứt nhẹ:</span> <span className="font-bold text-primary">60k - 85k/m2</span></li>
            <li className="flex justify-between"><span>• Sơn mới + bả hoàn thiện:</span> <span className="font-bold text-primary">85k - 120k/m2</span></li>
          </ul>
        </div>
        <p>Miễn phí khảo sát thực tế và tư vấn phối màu theo phong cách hiện đại hoặc tân cổ điển.</p>
      </div>
    )
  },
  {
    title: "Thi Công Chống Thấm Nhà Ở Chuyên Nghiệp",
    description: "Giải pháp chống thấm sân thượng, tường ngoài trời, nhà vệ sinh giúp ngăn thấm dột lâu dài.",
    date: "10/03/2026",
    category: "Chống thấm",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Chống thấm đúng kỹ thuật giúp ngăn nước ngấm vào kết cấu, tránh nứt tường, bong sơn và ẩm mốc kéo dài. Chúng tôi thi công theo từng bề mặt để đạt độ bền tối đa.</p>
        <div className="bg-secondary p-4 rounded-xl space-y-2">
          <h5 className="font-bold text-charcoal">Hạng mục phổ biến:</h5>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between"><span>• Chống thấm sân thượng:</span> <span className="font-bold text-primary">120k - 220k/m2</span></li>
            <li className="flex justify-between"><span>• Chống thấm tường ngoài:</span> <span className="font-bold text-primary">90k - 160k/m2</span></li>
            <li className="flex justify-between"><span>• Chống thấm nhà vệ sinh:</span> <span className="font-bold text-primary">Liên hệ khảo sát</span></li>
          </ul>
        </div>
        <p>Bảo hành theo hạng mục và vật liệu sử dụng, hỗ trợ kiểm tra lại sau mùa mưa.</p>
      </div>
    )
  },
  {
    title: "Sửa Trần Thạch Cao Chuyên Nghiệp, Vá Trần Nhanh Gọn",
    description: "Xử lý triệt để các lỗi trần thạch cao bị nứt, thấm nước, ố vàng và xệ trần.",
    date: "20/03/2026",
    category: "Sửa trần",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Trần thạch cao sau thời gian sử dụng thường xuất hiện nứt mối nối, ố vàng do thấm hoặc võng nhẹ. Đội thợ xử lý đúng điểm lỗi để đảm bảo thẩm mỹ như mới.</p>
        <div className="bg-secondary p-4 rounded-xl space-y-2">
          <h5 className="font-bold text-charcoal">Các hạng mục sửa chữa:</h5>
          <ul className="space-y-1 text-sm">
            <li>• Vá lỗ khoét đèn, lỗ thăm trần cũ.</li>
            <li>• Xử lý triệt để vết nứt dọc khung xương.</li>
            <li>• Thay tấm thạch cao mục do ngấm nước.</li>
            <li>• Sơn bả lại vùng sửa chữa, giảm lộ vết vá.</li>
          </ul>
        </div>
        <p>Giá sửa chữa phụ thuộc diện tích lỗi và độ khó thi công, sẽ báo cụ thể sau khảo sát.</p>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Làm Vách Thạch Cao 1 Mặt Và 2 Mặt",
    description: "Giải pháp làm vách ngăn phòng ngủ, văn phòng, shop kinh doanh với chi phí hợp lý.",
    date: "12/03/2026",
    category: "Vách ngăn",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Vách thạch cao 1 mặt và 2 mặt phù hợp cải tạo không gian nhanh mà không cần xây tường gạch. Thi công gọn, sạch và dễ đi hệ điện âm tường.</p>
        <div className="bg-secondary p-4 rounded-xl space-y-2">
          <h5 className="font-bold text-charcoal">Giá thi công vách ngăn:</h5>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between"><span>• Vách 1 mặt (không bông):</span> <span className="font-bold text-primary">180k - 230k/m2</span></li>
            <li className="flex justify-between"><span>• Vách 2 mặt tiêu chuẩn:</span> <span className="font-bold text-primary">260k - 320k/m2</span></li>
            <li className="flex justify-between"><span>• Vách cách âm có bông khoáng:</span> <span className="font-bold text-primary">320k - 430k/m2</span></li>
          </ul>
        </div>
        <p>Có thể thi công kèm cửa, ô kính và hệ điện theo bản vẽ công năng thực tế.</p>
      </div>
    )
  },
  {
    title: "Bảng Báo Giá Làm Trần Nhựa Giả Gỗ Nano PVC 2026",
    description: "Báo giá trần nhựa nano chống ẩm, chống mối mọt, mẫu vân gỗ và vân đá hiện đại cho nhà ở.",
    date: "08/03/2026",
    category: "Trần nhựa",
    content: (
      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>Trần nhựa nano giả gỗ là xu hướng mới nhờ khả năng chống nước tốt, dễ vệ sinh và chi phí vừa phải. Mẫu mã đa dạng giúp phối hợp linh hoạt với nội thất hiện đại.</p>
        <div className="bg-secondary p-4 rounded-xl space-y-2">
          <h5 className="font-bold text-charcoal">Đơn giá trần nhựa nano:</h5>
          <ul className="space-y-1 text-sm">
            <li className="flex justify-between"><span>• Trần nhựa nano phẳng:</span> <span className="font-bold text-primary">220k - 290k/m2</span></li>
            <li className="flex justify-between"><span>• Trần nhựa nano giật cấp:</span> <span className="font-bold text-primary">300k - 420k/m2</span></li>
            <li className="flex justify-between"><span>• Ốp tường nano vân đá:</span> <span className="font-bold text-primary">260k - 380k/m2</span></li>
          </ul>
        </div>
        <p>Sản phẩm bảo hành từ 3 đến 5 năm tùy dòng tấm và điều kiện sử dụng thực tế.</p>
      </div>
    )
  }
];
