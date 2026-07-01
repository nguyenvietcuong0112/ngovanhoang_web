import ContentPage from "@/components/ContentPage";
import PricingTables from "@/components/PricingTables";
import { BRAND_NAME } from "@/constants/contact";
import { refImages } from "@/constants/images";

const Wall = () => (
  <ContentPage
    title={`Thi công vách thạch cao Hà Nội - Báo giá trọn gói | ${BRAND_NAME}`}
    description="Thi công vách thạch cao 1 mặt, 2 mặt, chống ẩm, ngăn phòng tại Hà Nội. Khảo sát thực tế và báo giá minh bạch."
    keywords="thi công vách thạch cao, vách ngăn thạch cao, báo giá vách thạch cao hà nội"
    heroTitle="Làm vách thạch cao đẹp, chắc, báo giá rõ trước khi thi công"
    heroSubtitle="Cần chia phòng, ngăn văn phòng, cải tạo cửa hàng hoặc che tường cũ? Chúng tôi nhận thi công vách thạch cao trọn gói tại Hà Nội."
    extra={
      <div className="max-w-5xl mx-auto">
        <PricingTables
          sections={["thi-cong"]}
          thiCongTables={["vach-1-mat", "vach-2-mat"]}
          showNav={false}
          headerTitle="Bảng giá thi công vách thạch cao tham khảo"
          headerSubtitle="Đơn giá làm vách thạch cao phụ thuộc vào diện tích, loại vách, loại tấm, khung xương, độ khó mặt bằng và yêu cầu hoàn thiện."
        />
      </div>
    }
  >
    <p>
      Đo diện tích, kiểm tra hiện trạng, tư vấn loại vách rồi mới chốt chi phí thi công.
      Bảng giá dưới đây giúp bạn ước tính chi phí ban đầu.
    </p>
    <img src="/images/vachthachcao1.jpg" alt="Khảo sát và tư vấn vách thạch cao" className="w-full rounded-2xl shadow-sm border border-neutral-100 my-6" />

    <h2>Các hạng mục thi công vách thạch cao</h2>
    <ul>
      <li><strong>Vách thạch cao 1 mặt:</strong> Phù hợp ốp tường, che tường cũ, trang trí hoặc xử lý bề mặt.</li>
      <li><strong>Vách thạch cao 2 mặt:</strong> Phù hợp chia phòng, ngăn văn phòng, cải tạo mặt bằng và tạo không gian riêng.</li>
      <li><strong>Vách thạch cao chống ẩm:</strong> Dùng cho nhà bếp, nhà vệ sinh, khu vực ẩm.</li>
      <li><strong>Vách thạch cao chống cháy:</strong> Phù hợp yêu cầu an toàn cháy nổ.</li>
      <li><strong>Vách ngăn văn phòng, cửa hàng:</strong> Tiết kiệm thời gian và chi phí so với xây tường gạch.</li>
      <li><strong>Sửa chữa, tháo dỡ vách thạch cao:</strong> Xử lý vách cũ, hư hỏng hoặc cải tạo không gian.</li>
    </ul>
    <img src="/images/vachthachcao2.jpg" alt="Các hạng mục thi công vách thạch cao" className="w-full rounded-2xl shadow-sm border border-neutral-100 my-6" />

    <h2>Tư vấn vật tư trước khi thi công</h2>
    <p>
      Diện tích nhỏ thường có đơn giá cao hơn do chi phí nhân công, vận chuyển và chuẩn bị mặt bằng.
      Khung Hà Nội, khung Vĩnh Tường, tấm thường, tấm chống ẩm hoặc chống cháy sẽ có giá khác nhau.
      Vách cao, mặt bằng khó, cần tháo dỡ hoặc sơn bả hoàn thiện sẽ cần khảo sát cụ thể.
      Không nên chọn vách chỉ theo giá rẻ — cần cân nhắc độ bền, mục đích sử dụng và vật tư phù hợp.
    </p>
    <img src="/images/vachthachcao3.jpg" alt="Tư vấn vật tư thi công vách thạch cao" className="w-full rounded-2xl shadow-sm border border-neutral-100 my-6" />

    <h2>Quy trình thi công vách thạch cao</h2>
    <ol>
      <li>Tiếp nhận yêu cầu và tư vấn sơ bộ.</li>
      <li>Khảo sát hiện trạng, đo diện tích và tư vấn loại vách.</li>
      <li>Báo giá rõ ràng, thống nhất vật tư và phương án thi công.</li>
      <li>Thi công lắp khung, bắn tấm, xử lý mối nối và hoàn thiện.</li>
      <li>Kiểm tra, dọn dẹp và bàn giao.</li>
    </ol>
    <img src="/images/vachthachcao4.jpg" alt="Quy trình thi công vách thạch cao" className="w-full rounded-2xl shadow-sm border border-neutral-100 my-6" />

    <h2>Cam kết khi thi công</h2>
    <p>
      Với nhiều năm kinh nghiệm thi công trần vách thạch cao, chúng tôi cam kết thi công chắc chắn, đúng kỹ thuật,
      báo giá minh bạch và bàn giao gọn sạch.
    </p>
  </ContentPage>
);

export default Wall;
