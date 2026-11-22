import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import HoangPhatLayout from "@/components/HoangPhatLayout";
import SEO from "@/components/SEO";
import { TelLink, ZaloLink } from "@/components/HoangPhatLinks";

const HASH_ROUTE_MAP: Record<string, string> = {
  "#tran": "/tran-thach-cao",
  "#vach": "/vach-thach-cao",
  "#sua": "/sua-chua-thach-cao",
  "#pha": "/thao-do-thach-cao",
  "#son": "/son-lai-nha",
  "#gia": "/bao-gia",
};

const Index = () => {
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = HASH_ROUTE_MAP[hash];
    if (target) {
      navigate(target, { replace: true });
    }
  }, [hash, navigate]);

  return (
    <HoangPhatLayout>
      <SEO
        title="Thi công thạch cao & sơn nhà Hà Nội | Trần, vách, sửa chữa, phá dỡ - Bảo hành 5 năm"
        description="Thi công trần thạch cao, vách thạch cao, sửa chữa thạch cao, phá dỡ thạch cao và sơn lại nhà tại Hà Nội. Báo giá miễn phí, thợ tay nghề cao, bảo hành đến 5 năm."
      />

      <header className="hm hero">
        <div className="hero-in">
          <div>
            <p className="kick">THI CÔNG TRỌN GÓI TẠI HÀ NỘI</p>
            <h1>
              <span className="t1">THẠCH CAO</span>
              <span className="t2">SƠN NHÀ</span>
              <span className="vh"> trọn gói tại Hà Nội</span>
            </h1>
            <div className="rib">TRẦN · VÁCH · SỬA CHỮA · PHÁ DỠ · SƠN</div>
            <p className="sl">Thi công trọn gói – Chất lượng vượt trội</p>
          </div>
          <div className="hr">
            <img
              src="/images/hoangphat/img-01.webp"
              alt="Thi công trần thạch cao giật cấp khe bóng đổ tại Hà Nội"
              decoding="async"
            />
          </div>
        </div>

        <div className="feat">
          <div>
            <i>✓</i>Đội ngũ thợ nhiều năm kinh nghiệm
          </div>
          <div>
            <i>✓</i>Khảo sát, tư vấn miễn phí
          </div>
          <div>
            <i>✓</i>Thi công trực tiếp, không qua trung gian
          </div>
          <div>
            <i>✓</i>Giá cả cạnh tranh, báo giá rõ ràng
          </div>
          <div>
            <i>✓</i>Bảo hành, hậu mãi chu đáo
          </div>
        </div>

        <div className="bar">
          <div className="bar-actions">
            <TelLink className="phone">📞 0388.423.600</TelLink>
            <ZaloLink className="cta z">Chat Zalo nhận báo giá</ZaloLink>
          </div>
          <div className="badge">
            CAM KẾT
            <br />
            Chất lượng
            <br />
            Tiến độ
            <br />
            Giá tốt
          </div>
        </div>

        <div className="ic">
          <div>
            <span>🏅</span>Vật tư chính hãng
          </div>
          <div>
            <span>💰</span>Giá tốt, báo giá rõ
          </div>
          <div>
            <span>⏱️</span>Thi công đúng hẹn
          </div>
          <div>
            <span>🎧</span>Tư vấn nhiệt tình
          </div>
        </div>

        <div className="gr">
          THI CÔNG TRỌN GÓI: TRẦN THẠCH CAO · VÁCH THẠCH CAO · SỬA CHỮA · SƠN HOÀN THIỆN
        </div>

        <div className="ph4">
          <figure>
            <img
              src="/images/hoangphat/img-02.webp"
              alt="Thi công trần thạch cao giật cấp nhà phố"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Thi công trần thạch cao</figcaption>
          </figure>
          <figure>
            <img
              src="/images/hoangphat/img-03.webp"
              alt="Dựng khung xương vách ngăn thạch cao văn phòng"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Dựng vách ngăn</figcaption>
          </figure>
          <figure>
            <img
              src="/images/hoangphat/img-04.webp"
              alt="Thợ sửa chữa thạch cao tại công trình"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Sửa chữa thạch cao</figcaption>
          </figure>
          <figure>
            <img
              src="/images/hoangphat/img-05.webp"
              alt="Trần thạch cao giật cấp hoàn thiện đèn downlight"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Công trình hoàn thiện</figcaption>
          </figure>
        </div>
      </header>

      <main>
        <section id="home" className="hm">
          <h2>Dịch vụ của chúng tôi</h2>
          <div className="sg">
            <Link className="sv" to="/tran-thach-cao">
              <img
                src="/images/hoangphat/img-06.webp"
                alt="Trần thạch cao giật cấp khe bóng đổ"
                loading="lazy"
                decoding="async"
              />
              <b>Trần thạch cao</b>
              <span>Trần chìm (phẳng, giật cấp, khe bóng đổ, vòm) và trần thả 600x600.</span>
              <em>Từ 110.000đ/m²</em>
            </Link>
            <Link className="sv" to="/vach-thach-cao">
              <img
                src="/images/hoangphat/img-07.webp"
                alt="Vách ngăn thạch cao cách âm"
                loading="lazy"
                decoding="async"
              />
              <b>Vách thạch cao</b>
              <span>Vách ngăn phòng, vách ốp tường, vách cách âm, chống cháy.</span>
              <em>Từ 170.000đ/m²</em>
            </Link>
            <Link className="sv" to="/sua-chua-thach-cao">
              <img
                src="/images/hoangphat/img-08.webp"
                alt="Sửa chữa trần thạch cao"
                loading="lazy"
                decoding="async"
              />
              <b>Sửa chữa thạch cao</b>
              <span>Xử lý trần nứt, võng, thấm dột, bong sơn, vá cục bộ.</span>
              <em>Từ 500.000đ/lần</em>
            </Link>
            <Link className="sv" to="/thao-do-thach-cao">
              <img
                src="/images/hoangphat/img-09.webp"
                alt="Phá dỡ trần thạch cao"
                loading="lazy"
                decoding="async"
              />
              <b>Phá dỡ thạch cao</b>
              <span>Tháo dỡ trần, vách nhanh, thu gom phế thải, dọn sạch.</span>
              <em>Từ 20.000đ/m²</em>
            </Link>
            <Link className="sv" to="/son-lai-nha">
              <img
                src="/images/hoangphat/img-10.webp"
                alt="Sơn lại nhà Hà Nội"
                loading="lazy"
                decoding="async"
              />
              <b>Sơn lại nhà</b>
              <span>Sơn trong và ngoài nhà, bả matit, chống thấm, sơn chính hãng.</span>
              <em>Từ 35.000đ/m²</em>
            </Link>
            <Link className="sv" to="/bao-gia">
              <div className="sv-price-thumb" aria-hidden="true">
                <span>📋</span>
                BẢNG GIÁ 2026
              </div>
              <b>Bảng giá chi tiết</b>
              <span>Đơn giá tham khảo toàn bộ hạng mục thạch cao và sơn nhà.</span>
              <em>Xem bảng giá</em>
            </Link>
          </div>

          <h2 style={{ marginTop: 30 }}>Công trình đã hoàn thiện</h2>
          <div className="gl pt">
            <figure>
              <img
                src="/images/hoangphat/img-11.webp"
                alt="Trần thạch cao giật cấp bo cong phòng khách lớn tại Hà Nội"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Trần giật cấp bo cong phòng khách lớn</figcaption>
            </figure>
            <figure>
              <img
                src="/images/hoangphat/img-12.webp"
                alt="Trần thạch cao khe bóng đổ hắt sáng cầu thang đèn chùm thông tầng"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Trần khe bóng đổ hắt sáng, đèn chùm thông tầng</figcaption>
            </figure>
            <figure>
              <img
                src="/images/hoangphat/img-13.webp"
                alt="Trần thạch cao giật cấp đèn LED viền văn phòng hiện đại"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Trần giật cấp LED viền cho văn phòng</figcaption>
            </figure>
            <figure>
              <img
                src="/images/hoangphat/img-14.webp"
                alt="Trần thạch cao chìm giật cấp đã bả matit nhà phố"
                loading="lazy"
                decoding="async"
              />
              <figcaption>Trần chìm giật cấp đã bả matit nhà phố</figcaption>
            </figure>
          </div>

          <h2 style={{ marginTop: 30 }}>Quy trình làm việc</h2>
          <div className="st">
            <div>
              <b>Tiếp nhận &amp; tư vấn</b>
              <span>
                Gọi hotline hoặc nhắn Zalo, mô tả nhu cầu, gửi ảnh hiện trạng để được tư vấn sơ bộ.
              </span>
            </div>
            <div>
              <b>Khảo sát tận nơi miễn phí</b>
              <span>
                Thợ đến đo đạc, kiểm tra hiện trạng, tư vấn kiểu trần, vật liệu, màu sơn phù hợp.
              </span>
            </div>
            <div>
              <b>Báo giá &amp; ký hợp đồng</b>
              <span>
                Báo giá chi tiết từng hạng mục, không phát sinh, thống nhất tiến độ và bảo hành bằng văn bản.
              </span>
            </div>
            <div>
              <b>Chuẩn bị vật tư &amp; lên lịch</b>
              <span>
                Chốt vật tư chính hãng, sắp xếp đội thợ, hẹn ngày giờ thi công thuận tiện cho gia chủ.
              </span>
            </div>
            <div>
              <b>Thi công &amp; giám sát</b>
              <span>
                Che chắn đồ đạc, thi công đúng quy trình, cập nhật tiến độ, dọn vệ sinh mỗi ngày.
              </span>
            </div>
            <div>
              <b>Nghiệm thu, bàn giao &amp; bảo hành</b>
              <span>
                Cùng chủ nhà kiểm tra chất lượng, thanh toán sau nghiệm thu, giao phiếu bảo hành và hỗ trợ sau thi công.
              </span>
            </div>
          </div>

          <h2 style={{ marginTop: 30 }}>Đánh giá khách hàng</h2>
          <div className="rv">
            <blockquote>
              “Trần giật cấp làm gọn, đèn led đều, thợ dọn dẹp sạch sẽ. Đúng hẹn 4 ngày.”
              <cite>Chị Lan, Cầu Giấy · Trần thạch cao ★★★★★</cite>
            </blockquote>
            <blockquote>
              “Chia phòng ngủ cho con trong 2 ngày, vách cách âm tốt hơn mong đợi.”
              <cite>Chị Hương, Thanh Xuân · Vách thạch cao ★★★★★</cite>
            </blockquote>
            <blockquote>
              “Trần phòng khách bị võng, thợ sửa trong 1 buổi, nhìn như mới.”
              <cite>Chị Mai, Đống Đa · Sửa chữa thạch cao ★★★★★</cite>
            </blockquote>
            <blockquote>
              “Phá trần cũ cả căn hộ 90m2 trong 1 ngày, dọn sạch không để lại gì.”
              <cite>Anh Nam, Hoàng Mai · Phá dỡ thạch cao ★★★★★</cite>
            </blockquote>
            <blockquote>
              “Sơn lại cả nhà 4 tầng, màu lên đúng ý, đúng tiến độ.”
              <cite>Anh Vũ, Đông Anh · Sơn lại nhà ★★★★★</cite>
            </blockquote>
            <blockquote>
              “Báo giá rõ từng hạng mục, không phát sinh. Sau 1 năm trần vẫn phẳng đẹp.”
              <cite>Anh Tuấn, Hà Đông · Trần thạch cao ★★★★★</cite>
            </blockquote>
          </div>

          <p>
            <TelLink className="cta">Nhận báo giá miễn phí</TelLink>
          </p>
        </section>
      </main>
    </HoangPhatLayout>
  );
};

export default Index;
