import ContentPage from "@/components/ContentPage";
import { BRAND_NAME, PHONE, PHONE_TEL } from "@/constants/contact";

const About = () => (
  <ContentPage
    title={`Giới thiệu ${BRAND_NAME} - Thi công trần vách thạch cao Hà Nội`}
    description={`${BRAND_NAME} chuyên thi công trần thạch cao, vách thạch cao, sửa chữa và tháo dỡ thạch cao tại Hà Nội với hơn 15 năm kinh nghiệm.`}
    keywords="giới thiệu thi công thạch cao hà nội, đội thợ thạch cao uy tín"
    heroTitle={`Giới thiệu trần vách thạch cao ${BRAND_NAME}`}
    heroSubtitle="Đội thợ chuyên thi công trần thạch cao, vách thạch cao, sửa chữa và tháo dỡ thạch cao tại Hà Nội."
  >
    <p>
      {BRAND_NAME} là đội thợ chuyên thi công trần thạch cao, vách thạch cao, sửa chữa và tháo dỡ thạch cao tại Hà Nội.
      Với hơn 15 năm kinh nghiệm, chúng tôi luôn chú trọng thi công chắc chắn, đẹp, đúng kỹ thuật và phù hợp với nhu cầu thực tế của từng công trình.
    </p>
    <p>
      Chúng tôi nhận thi công cho nhà ở, chung cư, văn phòng, cửa hàng, showroom và các công trình cải tạo lớn nhỏ.
    </p>

    <h2>Đội thợ có kinh nghiệm, làm việc trực tiếp</h2>
    <p>
      {BRAND_NAME} có đội thợ chuyên làm thạch cao lâu năm, trực tiếp thi công tại công trình. Chúng tôi hiểu rõ từng công đoạn như lắp khung xương, bắn tấm, xử lý mối nối, làm phẳng bề mặt và hoàn thiện trần vách.
    </p>
    <p>
      Nhờ kinh nghiệm thực tế, đội thợ có thể tư vấn phương án phù hợp, hạn chế lỗi nứt, võng, lệch khung hoặc xuống cấp sau khi sử dụng.
    </p>

    <h2>Đầy đủ thợ, nhận công trình lớn nhỏ</h2>
    <p>
      Chúng tôi có đầy đủ thợ để nhận nhiều hạng mục khác nhau, từ sửa chữa nhỏ trong gia đình đến thi công trần vách thạch cao cho công trình lớn hơn.
      Tùy theo khối lượng công việc, chúng tôi sẽ sắp xếp nhân lực phù hợp để đảm bảo tiến độ, chất lượng và thời gian bàn giao cho khách hàng.
    </p>

    <h2>Làm việc chăm chỉ, có trách nhiệm</h2>
    <p>
      Nghề thạch cao là công việc vất vả, thường phải làm trong môi trường bụi, nóng hoặc công trình đang cải tạo.
      Dù nắng mưa hay công trình khó, đội thợ vẫn luôn cố gắng có mặt đúng hẹn, làm việc chăm chỉ và hoàn thành đúng phần việc đã nhận.
      Chúng tôi luôn đặt uy tín lên hàng đầu: tư vấn thật, báo giá rõ, thi công cẩn thận và không làm qua loa.
    </p>

    <h2>Dịch vụ chính</h2>
    <ul>
      <li>Thi công trần thạch cao phẳng, trần giật cấp, trần trang trí.</li>
      <li>Thi công vách thạch cao ngăn phòng, vách trang trí, vách cải tạo không gian.</li>
      <li>Sửa chữa trần vách thạch cao bị nứt, võng, thấm nước hoặc xuống cấp.</li>
      <li>Tháo dỡ trần vách thạch cao cũ, thu dọn gọn gàng sau thi công.</li>
    </ul>

    <h2>Tư vấn rõ ràng, báo giá theo thực tế</h2>
    <p>
      Mỗi công trình có diện tích, hiện trạng và yêu cầu khác nhau nên giá thi công có thể thay đổi.
      Vì vậy, chúng tôi luôn tư vấn rõ ràng trước khi làm, báo giá dựa trên thực tế công trình, loại vật tư và khối lượng thi công.
      Khách hàng có thể gửi hình ảnh, diện tích hoặc gọi trực tiếp để được tư vấn nhanh.
    </p>

    <h2>Cam kết của {BRAND_NAME}</h2>
    <p>
      Chúng tôi cam kết thi công đúng hạng mục, đúng kỹ thuật, sử dụng vật tư theo thỏa thuận và bàn giao công trình gọn sạch.
      Với hơn 15 năm kinh nghiệm, đội thợ chuyên và tinh thần làm việc trách nhiệm, chúng tôi mong muốn mang đến cho khách hàng những công trình trần vách thạch cao bền đẹp, an toàn và tiết kiệm chi phí.
    </p>

    <h2>Liên hệ</h2>
    <p>
      Nếu bạn cần thi công trần thạch cao, vách thạch cao, sửa chữa hoặc tháo dỡ thạch cao tại Hà Nội, hãy liên hệ {BRAND_NAME} để được tư vấn và báo giá nhanh.
    </p>
    <p>
      <strong>Hotline:</strong>{" "}
      <a href={`tel:${PHONE_TEL}`} className="text-primary font-bold no-underline hover:underline">
        {PHONE}
      </a>
      <br />
      <strong>Khu vực phục vụ:</strong> Hà Nội và các khu vực lân cận
    </p>
  </ContentPage>
);

export default About;
