import ContentPage from "@/components/ContentPage";
import PricingTables from "@/components/PricingTables";
import { BRAND_NAME, PHONE, PHONE_TEL, ZALO_URL } from "@/constants/contact";
import { refImages } from "@/constants/images";

const Dismantle = () => (
  <ContentPage
    title={`Tháo dỡ thạch cao Hà Nội - Trọn gói, giá tốt | ${BRAND_NAME}`}
    description="Dịch vụ tháo dỡ trần vách thạch cao cũ tại Hà Nội. Tháo dỡ an toàn, dọn dẹp gọn sạch, báo giá rõ ràng."
    keywords="tháo dỡ thạch cao, tháo trần thạch cao cũ, phá dỡ vách thạch cao hà nội"
    heroTitle="Tháo dỡ trần vách thạch cao gọn, an toàn, báo giá rõ"
    heroSubtitle="Nhận tháo dỡ trần thạch cao, vách thạch cao cũ cho nhà ở, văn phòng, cửa hàng và công trình cải tạo."
    images={[...refImages.dismantle]}
    imageAlt="Hình ảnh tháo dỡ thạch cao thực tế"
    extra={
      <div className="max-w-5xl mx-auto">
        <PricingTables
          sections={["thao-do"]}
          showNav={false}
          headerTitle="Bảng giá tháo dỡ thạch cao tham khảo"
          headerSubtitle="Đơn giá tháo dỡ phụ thuộc diện tích, độ cao, vị trí thi công, mức độ khó và yêu cầu thu gom sau tháo dỡ."
        />
      </div>
    }
  >
    <p>
      Đội thợ kiểm tra hiện trạng, tháo dỡ đúng thứ tự, hạn chế bụi bẩn và dọn gọn sau thi công.
      Kiểm tra trần, vách, khung xương và mặt bằng trước khi chốt phương án tháo dỡ.
    </p>

    <h2>Các hạng mục tháo dỡ thạch cao</h2>
    <ul>
      <li>Tháo dỡ trần thạch cao cũ (phẳng, giật cấp, tấm thả).</li>
      <li>Tháo dỡ vách thạch cao 1 mặt, 2 mặt.</li>
      <li>Tháo dỡ một phần trần vách để sửa chữa hoặc cải tạo.</li>
      <li>Thu gom, vận chuyển phế liệu sau tháo dỡ.</li>
      <li>Chuẩn bị mặt bằng cho thi công trần vách mới.</li>
    </ul>

    <h2>Khi nào nên tháo dỡ thạch cao?</h2>
    <ul>
      <li>Trần vách cũ bị xuống cấp, võng, thấm nước nặng.</li>
      <li>Cần cải tạo không gian, thay đổi bố cục phòng.</li>
      <li>Chuẩn bị thi công trần vách thạch cao mới.</li>
      <li>Khung xương yếu, không đảm bảo an toàn.</li>
    </ul>

    <h2>Kinh nghiệm thực tế trong tháo dỡ</h2>
    <ul>
      <li><strong>Biết điểm cần tháo trước:</strong> Khảo sát kỹ để tránh ảnh hưởng kết cấu còn giữ.</li>
      <li><strong>Giảm ảnh hưởng sinh hoạt:</strong> Che chắn, hạn chế bụi trong quá trình tháo dỡ.</li>
      <li><strong>Tách phần tháo và phần giữ:</strong> Tháo đúng thứ tự, an toàn cho công trình.</li>
      <li><strong>Bàn giao mặt bằng sạch hơn:</strong> Dọn dẹp, thu gom phế liệu sau thi công.</li>
    </ul>

    <h2>Quy trình tháo dỡ thạch cao</h2>
    <ol>
      <li>Tiếp nhận hiện trạng công trình.</li>
      <li>Tư vấn phương án tháo dỡ phù hợp.</li>
      <li>Khảo sát tận nơi nếu cần.</li>
      <li>Thống nhất chi phí trước khi làm.</li>
      <li>Tiến hành tháo dỡ an toàn.</li>
      <li>Kiểm tra và bàn giao mặt bằng.</li>
    </ol>

    <p>
      Xem thêm bài viết chi tiết:{" "}
      <a href="/bai-viet/pha-do-nha-cu-tai-ha-noi" className="text-primary font-bold underline hover:text-primary/80">
        Phá Dỡ Nhà Cũ Tại Hà Nội: Bảng Giá, Quy Trình Và Những Điều Cần Biết Năm 2026
      </a>
    </p>

    <p>
      Khách hàng có thể gửi ảnh trần, vách cần tháo dỡ, diện tích dự kiến và địa chỉ công trình qua{" "}
      <a href={ZALO_URL} className="text-primary font-bold no-underline hover:underline" target="_blank" rel="noopener noreferrer">
        Zalo
      </a>{" "}
      để được tư vấn sơ bộ. Hotline:{" "}
      <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold no-underline hover:underline">{PHONE}</a>.
    </p>
  </ContentPage>
);

export default Dismantle;
