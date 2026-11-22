import HoangPhatLayout from "@/components/HoangPhatLayout";
import SEO from "@/components/SEO";
import { TelLink, ZaloLink } from "@/components/HoangPhatLinks";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Trần thạch cao bị nứt có tự khỏi không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không. Vết nứt thường lan rộng theo thời gian, nên xử lý sớm để tiết kiệm chi phí.",
      },
    },
    {
      "@type": "Question",
      name: "Trần bị thấm có cần thay cả trần không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Không nhất thiết. Nếu chỉ hư cục bộ, chỉ cần thay phần tấm bị ảnh hưởng sau khi xử lý nguồn nước.",
      },
    },
    {
      "@type": "Question",
      name: "Sửa thạch cao mất bao lâu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vá nhỏ thường xong trong ngày. Hạng mục lớn cần 1–3 ngày tùy diện tích và thời gian chờ khô.",
      },
    },
    {
      "@type": "Question",
      name: "Có nhận sửa nhỏ lẻ không?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Có. Chúng tôi nhận cả những hạng mục nhỏ như vá lỗ, xử lý nứt mối nối.",
      },
    },
  ],
};

const Repair = () => (
  <HoangPhatLayout>
    <SEO
      title="Sửa Thạch Cao Hà Nội: Nguyên Nhân Hư Hỏng, Khi Nào Cần Sửa Và Báo Giá Chi Tiết | Sửa Nhà Hoàng Phát"
      description="Sửa chữa trần, vách thạch cao bị nứt, võng, thấm dột, bong tróc tại Hà Nội. Khảo sát tận nơi, báo giá thật không phát sinh, nhận sửa nhỏ lẻ."
      keywords="sửa thạch cao hà nội, sửa trần thạch cao bị nứt, vá trần thạch cao"
      jsonLd={FAQ_SCHEMA}
    />
    <main>
      <article id="sua">
        <h2>
          Sửa Thạch Cao Hà Nội: Nguyên Nhân Hư Hỏng, Khi Nào Cần Sửa Và Báo Giá Chi Tiết
        </h2>
        <p className="lead">
          Trần và vách thạch cao được dùng rộng rãi nhờ thẩm mỹ cao và thi công nhanh. Sau một thời gian, nhiều công trình bị nứt, võng, thấm dột hoặc bong tróc. Bài viết giúp bạn hiểu nguyên nhân, biết khi nào cần sửa và nắm chi phí sửa thạch cao trước khi liên hệ thợ.
        </p>

        <div className="gl">
          <figure>
            <img
              src="/images/hoangphat/img-25.webp"
              alt="Thợ sửa chữa thạch cao tại công trình"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Thợ thi công, sửa tấm thạch cao tại công trình</figcaption>
          </figure>
          <figure>
            <img
              src="/images/hoangphat/img-26.webp"
              alt="Sửa trần thạch cao chống ẩm khu vực vệ sinh"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Sửa, lắp trần thạch cao chống ẩm khu vực vệ sinh</figcaption>
          </figure>
        </div>

        <h4>Trước và sau khi sửa chữa</h4>
        <div className="gl">
          <figure>
            <img
              src="/images/hoangphat/img-27.webp"
              alt="Trần thạch cao bị rách hở lộ hộp cuốn cửa trước khi sửa chữa"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Trước khi sửa: mép trần bị rách, hở lộ hộp cuốn cửa</figcaption>
          </figure>
          <figure>
            <img
              src="/images/hoangphat/img-28.webp"
              alt="Trần thạch cao sau khi sửa chữa che kín hộp cuốn cửa"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Sau khi sửa: bịt kín bằng hộp thạch cao, trần phẳng gọn</figcaption>
          </figure>
        </div>

        <h3>1. Nguyên nhân khiến trần, vách thạch cao bị hư hỏng</h3>
        <h4>Thấm dột từ trên xuống</h4>
        <p>
          Đây là nguyên nhân phổ biến nhất. Nước từ mái, sàn tầng trên, đường ống cấp thoát nước hoặc máy lạnh rò rỉ làm tấm thạch cao hút ẩm, ngả vàng, phồng rộp rồi sụp.
        </p>
        <h4>Thi công sai kỹ thuật</h4>
        <ul>
          <li>Khung xương đặt xa nhau, không đủ chịu lực</li>
          <li>Ty treo thiếu hoặc đặt sai vị trí</li>
          <li>Bắn vít sai khoảng cách, vít chạm sâu làm rách mặt giấy</li>
          <li>Xử lý mối nối, băng keo, bột bả sơ sài khiến mối nối bị nứt</li>
        </ul>
        <h4>Vật liệu kém chất lượng</h4>
        <p>
          Tấm thạch cao, khung xương mạ mỏng hoặc bột trét trôi nổi dễ cong vênh, gỉ sét, xuống cấp chỉ sau 1–2 năm.
        </p>
        <h4>Môi trường ẩm</h4>
        <p>
          Hà Nội nồm ẩm kéo dài. Dùng tấm thạch cao thường ở nhà vệ sinh, bếp, ban công thay vì tấm chống ẩm làm tấm nhanh mục và nấm mốc.
        </p>
        <h4>Rung chấn và co ngót công trình</h4>
        <p>
          Công trình mới xây, gần đường lớn hoặc gần khu vực đang thi công thường bị nứt chân chim, nứt dọc theo mối nối.
        </p>
        <h4>Tác động cơ học</h4>
        <p>
          Va đập, khoan đục, lắp thêm đèn hoặc điều hòa nặng mà không gia cố sẽ gây thủng hoặc võng cục bộ.
        </p>

        <h3>2. Khi nào cần sửa trần, vách thạch cao?</h3>
        <p>Bạn nên kiểm tra và sửa sớm khi thấy các dấu hiệu sau:</p>
        <ol>
          <li>
            <b>Vết ố vàng, loang nước:</b> báo hiệu có nước thấm, cần xử lý nguồn nước trước khi sửa.
          </li>
          <li>
            <b>Trần bị võng, phồng:</b> tấm đã ngậm nước hoặc khung xương yếu, có nguy cơ sập.
          </li>
          <li>
            <b>Vết nứt dài, nứt tại mối nối:</b> nứt nhỏ xử lý nhanh, để lâu sẽ lan rộng.
          </li>
          <li>
            <b>Bong tróc sơn, nấm mốc:</b> ảnh hưởng thẩm mỹ và sức khỏe, nhất là trong phòng ngủ.
          </li>
          <li>
            <b>Thủng, vỡ do va đập hoặc thi công:</b> cần vá lại để đảm bảo cách âm, cách nhiệt.
          </li>
          <li>
            <b>Muốn thay đổi thiết kế:</b> mở thêm hộp đèn, khe đèn, cắt vách, nâng cấp trần.
          </li>
        </ol>
        <div className="note">
          <b>Lưu ý:</b> trần có dấu hiệu võng nặng hoặc nước chảy xuống cần được xử lý ngay để tránh sập trần gây nguy hiểm.
        </div>

        <h3>3. Đơn vị sửa chữa thạch cao chuyên nghiệp tại Hà Nội</h3>
        <p>
          <b>Sửa Nhà Hoàng Phát</b> chuyên thi công và sửa chữa trần, vách thạch cao cho nhà ở, chung cư, văn phòng, cửa hàng tại Hà Nội. Chúng tôi chuyên sâu về thạch cao nên có kinh nghiệm xử lý đúng các lỗi nứt, võng, thấm.
        </p>
        <p>
          <b>Vì sao chọn chúng tôi?</b>
        </p>
        <ul>
          <li>
            Khảo sát tận nơi, <b>báo giá thật, không phát sinh</b> khi chưa thống nhất
          </li>
          <li>Tìm đúng nguyên nhân (thấm, nứt, võng) rồi mới sửa, tránh hỏng lại</li>
          <li>Vật tư rõ nguồn gốc, dùng tấm chống ẩm ở khu vực ẩm</li>
          <li>Thi công gọn gàng, bảo vệ đồ đạc, dọn dẹp sau khi xong</li>
          <li>
            <b>Bảo hành 2–5 năm</b> tùy hạng mục
          </li>
          <li>Nhận sửa nhỏ lẻ như vá nứt, thay tấm cục bộ, không bắt buộc làm cả trần</li>
        </ul>
        <div className="contact">
          <p>
            <b>Gửi ảnh hiện trạng để được tư vấn ngay</b>
          </p>
          <TelLink className="cta">Gọi 0388.423.600</TelLink>{" "}
          <ZaloLink className="cta z">Nhắn Zalo</ZaloLink>
        </div>

        <h3>4. Bảng giá sửa thạch cao tham khảo</h3>
        <p>
          <i>Giá phụ thuộc mức độ hư hỏng, vật tư và vị trí thi công. Giá chính xác được báo sau khi khảo sát.</i>
        </p>

        <h4>4.1. Giá sửa thạch cao theo nguyên nhân hư hỏng</h4>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Nguyên nhân</th>
                <th>Hướng xử lý</th>
                <th>Đơn giá tham khảo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nứt mối nối, co ngót</td>
                <td>Cắt mối, dán băng keo, trét, sơn lại</td>
                <td className="p">40.000 – 80.000đ/m</td>
              </tr>
              <tr>
                <td>Thấm dột, ố vàng, phồng</td>
                <td>Cắt bỏ phần ướt, thay tấm mới (chưa gồm xử lý nguồn nước)</td>
                <td className="p">150.000 – 250.000đ/m²</td>
              </tr>
              <tr>
                <td>Thi công sai kỹ thuật (võng, thiếu ty)</td>
                <td>Gia cố hoặc làm lại khung xương</td>
                <td className="p">120.000 – 200.000đ/m²</td>
              </tr>
              <tr>
                <td>Va đập, thủng, vỡ</td>
                <td>Vá, bả, hoàn thiện</td>
                <td className="p">150.000 – 400.000đ/vị trí</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>4.2. Giá sửa thạch cao theo loại tấm</h4>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Loại tấm</th>
                <th>Đơn giá thay tấm (gồm vật tư + nhân công)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tấm thạch cao thường</td>
                <td className="p">120.000 – 160.000đ/m²</td>
              </tr>
              <tr>
                <td>Tấm chống ẩm (nhà vệ sinh, bếp, ban công)</td>
                <td className="p">150.000 – 200.000đ/m²</td>
              </tr>
              <tr>
                <td>Tấm chống cháy</td>
                <td className="p">170.000 – 230.000đ/m²</td>
              </tr>
              <tr>
                <td>Tấm xi măng (Cemboard)</td>
                <td className="p">200.000 – 300.000đ/m²</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>4.3. Giá sửa thạch cao theo hiện trạng</h4>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Hiện trạng</th>
                <th>Mô tả</th>
                <th>Chi phí tham khảo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hư nhẹ</td>
                <td>Nứt nhỏ, thủng nhỏ, bong sơn</td>
                <td className="p">150.000 – 500.000đ trọn gói/vị trí</td>
              </tr>
              <tr>
                <td>Hư vừa</td>
                <td>Võng, phồng, thấm cục bộ</td>
                <td className="p">150.000 – 250.000đ/m²</td>
              </tr>
              <tr>
                <td>Hư nặng</td>
                <td>Sập trần, hỏng cả mảng, phải làm lại</td>
                <td className="p">Từ 150.000đ/m² (gồm tháo dỡ, làm mới)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>4.4. Giá sửa thạch cao theo diện tích hoàn thiện</h4>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Diện tích</th>
                <th>Cách tính</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dưới 5m²</td>
                <td>Tính trọn gói tối thiểu, khoảng 500.000 – 1.000.000đ</td>
              </tr>
              <tr>
                <td>5 – 20m²</td>
                <td>Tính theo đơn giá m²</td>
              </tr>
              <tr>
                <td>Trên 20m²</td>
                <td>Đơn giá m², có ưu đãi theo khối lượng</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <i>Sơn hoàn thiện sau sửa chữa: khoảng 25.000 – 45.000đ/m².</i>
        </p>

        <h4>Yếu tố ảnh hưởng đến giá</h4>
        <ul>
          <li>
            <b>Mức độ hư hỏng:</b> vá nhỏ rẻ hơn nhiều so với thay cả mảng trần
          </li>
          <li>
            <b>Loại tấm:</b> tấm thường, chống ẩm, chống cháy có giá khác nhau
          </li>
          <li>
            <b>Chiều cao, mặt bằng thi công:</b> trần cao cần dựng giàn giáo
          </li>
          <li>
            <b>Xử lý nguồn thấm:</b> nếu cần chống thấm trước, chi phí tăng thêm
          </li>
        </ul>

        <h3>5. Quy trình sửa thạch cao tại Sửa Nhà Hoàng Phát</h3>
        <ol>
          <li>Tiếp nhận thông tin, tư vấn sơ bộ qua điện thoại/Zalo</li>
          <li>Khảo sát thực tế, xác định nguyên nhân</li>
          <li>Báo giá chi tiết, thống nhất phương án</li>
          <li>Che chắn đồ đạc, tháo dỡ phần hư hỏng</li>
          <li>Xử lý khung xương, thay hoặc vá tấm</li>
          <li>Xử lý mối nối, bả matit, chà nhám</li>
          <li>Sơn hoàn thiện (nếu có)</li>
          <li>Nghiệm thu, dọn vệ sinh, bàn giao và bảo hành</li>
        </ol>

        <h3>6. Câu hỏi thường gặp</h3>
        <details>
          <summary>Trần thạch cao bị nứt có tự khỏi không?</summary>
          <p>Không. Vết nứt thường lan rộng theo thời gian, nên xử lý sớm để tiết kiệm chi phí.</p>
        </details>
        <details>
          <summary>Trần bị thấm có cần thay cả trần không?</summary>
          <p>
            Không nhất thiết. Nếu chỉ hư cục bộ, chỉ cần thay phần tấm bị ảnh hưởng sau khi xử lý nguồn nước.
          </p>
        </details>
        <details>
          <summary>Sửa thạch cao mất bao lâu?</summary>
          <p>
            Vá nhỏ thường xong trong ngày. Hạng mục lớn cần 1–3 ngày tùy diện tích và thời gian chờ khô.
          </p>
        </details>
        <details>
          <summary>Có nhận sửa nhỏ lẻ không?</summary>
          <p>Có. Chúng tôi nhận cả những hạng mục nhỏ như vá lỗ, xử lý nứt mối nối.</p>
        </details>

        <h3>Khảo sát và báo giá sửa thạch cao miễn phí</h3>
        <p>
          Trần, vách nhà bạn đang nứt, võng hoặc thấm? Gửi 2–3 ảnh qua Zalo để được báo giá sơ bộ ngay. Sau đó chúng tôi khảo sát tận nơi và <b>báo giá thật, không phát sinh</b>.
        </p>
        <div className="contact">
          <TelLink className="cta">Gọi 0388.423.600</TelLink>{" "}
          <ZaloLink className="cta z">Nhắn Zalo</ZaloLink>
        </div>

        <h3>Đánh giá khách hàng</h3>
        <div className="rv">
          <blockquote>
            “Trần phòng khách bị võng, thợ sửa trong 1 buổi, nhìn như mới.”
            <cite>Chị Mai, Đống Đa ★★★★★</cite>
          </blockquote>
          <blockquote>
            “Sửa vết nứt nhiều lần không được, bên này tìm đúng nguyên nhân nên hết hẳn.”
            <cite>Anh Hải, Long Biên ★★★★☆</cite>
          </blockquote>
        </div>
      </article>
    </main>
  </HoangPhatLayout>
);

export default Repair;
