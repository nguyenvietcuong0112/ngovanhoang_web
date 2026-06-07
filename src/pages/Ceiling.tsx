import ContentPage from "@/components/ContentPage";
import PricingTables from "@/components/PricingTables";
import { BRAND_NAME } from "@/constants/contact";
import { refImages } from "@/constants/images";

const Ceiling = () => (
  <ContentPage
    title={`Thi công trần thạch cao Hà Nội - Báo giá trọn gói | ${BRAND_NAME}`}
    description="Thi công trần thạch cao phẳng, giật cấp, tấm thả tại Hà Nội. Khảo sát thực tế, tư vấn vật tư và báo giá minh bạch trước khi thi công."
    keywords="thi công trần thạch cao, báo giá trần thạch cao hà nội, trần giật cấp"
    heroTitle="Làm trần thạch cao đẹp, gọn, báo giá rõ trước khi thi công"
    heroSubtitle={`${BRAND_NAME} nhận thi công trần thạch cao phẳng, giật cấp, tấm thả cho nhà ở, văn phòng, cửa hàng tại Hà Nội.`}
    images={[...refImages.ceiling]}
    imageAlt="Hình ảnh thi công trần thạch cao thực tế"
    extra={
      <div className="max-w-5xl mx-auto -mx-0">
        <PricingTables
          sections={["thi-cong"]}
          thiCongTables={["tran-phang", "tran-tam-tha"]}
          showNav={false}
          headerTitle="Bảng giá thi công trần thạch cao tham khảo"
          headerSubtitle="Đơn giá phụ thuộc vào diện tích, loại trần, khung xương, loại tấm và yêu cầu hoàn thiện. Bảng dưới đây giúp khách hàng ước tính chi phí ban đầu."
        />
      </div>
    }
  >
    <p>
      Đội thợ khảo sát thực tế, tư vấn vật tư phù hợp và báo giá minh bạch trước khi làm.
      Đo diện tích, kiểm tra hiện trạng, tư vấn kiểu trần và vật tư rồi mới chốt chi phí.
    </p>

    <h2>Các hạng mục thi công trần thạch cao</h2>
    <ul>
      <li><strong>Trần thạch cao phẳng, giật cấp:</strong> Phù hợp nhà ở, căn hộ, phòng khách, phòng ngủ và không gian cần thẩm mỹ cao.</li>
      <li><strong>Trần thạch cao tấm thả:</strong> Phù hợp văn phòng, cửa hàng, khu vực cần thi công nhanh và dễ bảo trì.</li>
      <li><strong>Trần thạch cao chống ẩm:</strong> Dùng cho nhà bếp, nhà vệ sinh, khu vực ẩm.</li>
      <li><strong>Trần thạch cao trang trí:</strong> Giật cấp, đèn led, phào chỉ theo yêu cầu.</li>
    </ul>

    <h2>Quy trình thi công trần thạch cao</h2>
    <ol>
      <li>Tiếp nhận thông tin và tư vấn sơ bộ qua điện thoại hoặc Zalo.</li>
      <li>Khảo sát thực tế, đo diện tích và kiểm tra hiện trạng mặt bằng.</li>
      <li>Tư vấn vật tư, kiểu trần và báo giá rõ ràng trước khi thi công.</li>
      <li>Thi công đúng kỹ thuật: lắp khung, bắn tấm, xử lý mối nối, hoàn thiện.</li>
      <li>Kiểm tra, vệ sinh và bàn giao công trình gọn sạch.</li>
    </ol>

    <h2>Lưu ý trước khi chốt giá thi công trần thạch cao</h2>
    <p>
      Bảng giá chỉ mang tính tham khảo. Đơn giá thực tế nên được chốt sau khi kiểm tra diện tích, loại khung xương, loại tấm, kiểu trần và hiện trạng mặt bằng.
      Cam kết dễ kiểm tra, không nói chung chung — rõ vật tư, rõ giá, rõ hạng mục trước khi làm.
    </p>
  </ContentPage>
);

export default Ceiling;
