import ContentPage from "@/components/ContentPage";
import PricingTables from "@/components/PricingTables";
import { BRAND_NAME, PHONE, PHONE_TEL } from "@/constants/contact";
import { refImages } from "@/constants/images";

const Repair = () => (
  <ContentPage
    title={`Sửa chữa thạch cao Hà Nội - Uy tín, giá tốt | ${BRAND_NAME}`}
    description="Sửa chữa trần vách thạch cao bị nứt, thấm nước, võng, bong tróc tại Hà Nội. Khảo sát tận nơi, báo giá rõ ràng."
    keywords="sửa chữa thạch cao, sửa trần thạch cao bị nứt, sửa vách thạch cao hà nội"
    heroTitle="Dịch vụ sửa chữa thạch cao uy tín - giá tốt"
    heroSubtitle="Trần thạch cao bị nứt, thấm nước, võng trần hay bong tróc cần xử lý đúng kỹ thuật để đảm bảo an toàn và thẩm mỹ."
    images={[...refImages.repair]}
    imageAlt="Hình ảnh sửa chữa thạch cao thực tế"
    extra={
      <div className="max-w-5xl mx-auto">
        <PricingTables
          sections={["sua-chua"]}
          showNav={false}
          headerTitle="Bảng giá sửa chữa trần vách thạch cao"
          headerSubtitle="Đơn giá tham khảo theo mét vuông. Với hạng mục sửa chữa nhỏ, chi phí có thể tính theo gói tối thiểu."
        />
      </div>
    }
  >
    <p>
      {BRAND_NAME} nhận sửa chữa trần vách thạch cao tại Hà Nội với thợ thi công trực tiếp, khảo sát tận nơi
      và tư vấn phương án xử lý phù hợp cho từng tình trạng công trình.
    </p>

    <h2>Các hạng mục sửa chữa chúng tôi nhận thi công</h2>
    <ul>
      <li>Sửa trần thạch cao bị nứt, hở mối nối.</li>
      <li>Sửa trần thạch cao bị thấm nước, ố vàng.</li>
      <li>Sửa trần thạch cao bị võng, cong vênh.</li>
      <li>Thay tấm thạch cao bị hư hỏng, mục nát.</li>
      <li>Vá lỗ, bả lại bề mặt trần thạch cao.</li>
      <li>Gia cố khung xương trần thạch cao yếu, xuống cấp.</li>
      <li>Sửa vách thạch cao bị nứt, thủng, bong tróc.</li>
      <li>Sơn sửa, làm mới trần vách thạch cao cũ.</li>
      <li>Khắc phục lỗi thi công trần vách thạch cao sai kỹ thuật.</li>
    </ul>

    <h2>Quy trình sửa chữa thạch cao</h2>
    <ol>
      <li><strong>Tiếp nhận thông tin</strong> — Khách hàng liên hệ và gửi tình trạng trần vách thạch cao cần sửa chữa.</li>
      <li><strong>Khảo sát thực tế</strong> — Thợ đến tận nơi kiểm tra hiện trạng, xác định nguyên nhân nứt, thấm, võng, bong tróc hoặc hư hỏng.</li>
      <li><strong>Tư vấn phương án và báo giá</strong> — Sau khi khảo sát, chúng tôi tư vấn cách xử lý phù hợp và báo giá rõ ràng trước khi thi công.</li>
      <li><strong>Tiến hành sửa chữa</strong> — Đội thợ thi công đúng kỹ thuật, xử lý chắc từng hạng mục, hạn chế bụi bẩn.</li>
      <li><strong>Kiểm tra và bàn giao</strong> — Sau khi hoàn thiện, kiểm tra lại công trình, vệ sinh khu vực thi công và bàn giao cho khách hàng.</li>
    </ol>

    <h2>Cam kết thi công sửa chữa thạch cao</h2>
    <p>
      Sửa chữa trần vách thạch cao quan trọng nhất là phải xử lý đúng lỗi, làm cho chắc và không làm qua loa.
      Chỗ nào nứt thì xử lý nứt cho kỹ. Chỗ nào thấm nước, ố vàng thì phải xem nguyên nhân do đâu.
      Chỗ nào trần bị võng, khung yếu thì cần gia cố lại cho chắc.
    </p>
    <p>
      Chúng tôi cam kết báo giá rõ ràng trước khi thi công, vật tư phù hợp với từng hạng mục,
      làm việc gọn gàng và dọn dẹp sạch sẽ sau khi hoàn thiện.
      Liên hệ <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold no-underline hover:underline">{PHONE}</a> để được khảo sát và báo giá chính xác.
    </p>
  </ContentPage>
);

export default Repair;
