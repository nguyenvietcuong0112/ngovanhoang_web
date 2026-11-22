import HoangPhatLayout from "@/components/HoangPhatLayout";
import SEO from "@/components/SEO";
import { TelLink } from "@/components/HoangPhatLinks";

const Pricing = () => (
  <HoangPhatLayout>
    <SEO
      title="Bảng giá thi công thạch cao & sơn nhà tại Hà Nội | Sửa Nhà Hoàng Phát"
      description="Bảng giá thi công trần thạch cao, vách thạch cao, sửa chữa, phá dỡ và sơn nhà tại Hà Nội. Giá trọn gói vật tư + nhân công, khảo sát báo giá miễn phí."
      keywords="bảng giá thạch cao hà nội, giá sơn nhà hà nội, báo giá trần vách thạch cao"
    />
    <main>
      <div className="grp">BẢNG GIÁ THAM KHẢO</div>
      <article id="gia">
        <h2>Bảng giá thi công thạch cao &amp; sơn nhà tại Hà Nội</h2>
        <p>
          Giá tham khảo đã gồm vật tư và nhân công. Giá chính xác phụ thuộc diện tích, kiểu thiết kế và loại vật tư. Khảo sát và báo giá miễn phí.
        </p>

        <h3>Trần thạch cao</h3>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Đơn vị</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trần thạch cao phẳng</td>
                <td>m²</td>
                <td className="p">150.000 – 190.000đ</td>
              </tr>
              <tr>
                <td>Trần thạch cao giật cấp</td>
                <td>m²</td>
                <td className="p">190.000 – 250.000đ</td>
              </tr>
              <tr>
                <td>Trần thả tấm 600x600</td>
                <td>m²</td>
                <td className="p">110.000 – 150.000đ</td>
              </tr>
              <tr>
                <td>Trần chống ẩm (bếp, vệ sinh)</td>
                <td>m²</td>
                <td className="p">+20.000 – 30.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Vách thạch cao</h3>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Đơn vị</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vách ngăn 1 mặt</td>
                <td>m²</td>
                <td className="p">170.000 – 220.000đ</td>
              </tr>
              <tr>
                <td>Vách ngăn 2 mặt</td>
                <td>m²</td>
                <td className="p">220.000 – 300.000đ</td>
              </tr>
              <tr>
                <td>Vách cách âm (có bông)</td>
                <td>m²</td>
                <td className="p">+40.000 – 60.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Sửa chữa &amp; phá dỡ</h3>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Đơn vị</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sửa trần nứt, võng, thấm (cục bộ)</td>
                <td>m²</td>
                <td className="p">80.000 – 150.000đ</td>
              </tr>
              <tr>
                <td>Công tối thiểu mỗi lần sửa</td>
                <td>lần</td>
                <td className="p">từ 500.000đ</td>
              </tr>
              <tr>
                <td>Phá dỡ trần thạch cao (gồm thu gom)</td>
                <td>m²</td>
                <td className="p">20.000 – 40.000đ</td>
              </tr>
              <tr>
                <td>Phá dỡ vách thạch cao</td>
                <td>m²</td>
                <td className="p">30.000 – 50.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Sơn nhà</h3>
        <div className="tw">
          <table>
            <thead>
              <tr>
                <th>Hạng mục</th>
                <th>Đơn vị</th>
                <th>Đơn giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sơn lại tường, không bả (1 lót, 2 phủ)</td>
                <td>m²</td>
                <td className="p">35.000 – 60.000đ</td>
              </tr>
              <tr>
                <td>Bả matit + sơn (1 lót, 2 phủ)</td>
                <td>m²</td>
                <td className="p">60.000 – 95.000đ</td>
              </tr>
              <tr>
                <td>Sơn ngoài trời, chống thấm màu</td>
                <td>m²</td>
                <td className="p">70.000 – 110.000đ</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <b>Lưu ý:</b> thi công dưới 20m² có thể áp dụng công tối thiểu. Công trình trên cao, nhà trong ngõ nhỏ hoặc khối lượng lớn sẽ được báo giá riêng.
        </p>

        <TelLink className="cta">Nhận báo giá miễn phí: 0388.423.600</TelLink>
      </article>
    </main>
  </HoangPhatLayout>
);

export default Pricing;
