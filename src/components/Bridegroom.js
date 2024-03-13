import React from "react";
import Bride from "../assets/images/phat.jpg";
import Groom from "../assets/images/phuong.jpg";
function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div className="container">
        <div className="row mb-60">
          <div className="col-md-6">
            <div
              className="item toright mb-30 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="img">
                {" "}
                <img src={Bride} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Đỗ Hữu Phát <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>29/10/1999</span>
                  <p>Chàng trai IT với nhiều ước mơ và hoài bão.
                  Một chàng trai kiên trì, bền bỉ trong mọi quyết định của bản thân. Giao diện “trẻ con” nhưng có hệ điều hành cực kỳ tình cảm, biết lắng nghe và rất yêu thích bộ môn trêu vợ.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="item mb-30 animate-box"
              data-animate-effect="fadeInRight"
            >
              <div className="img">
                {" "}
                <img src={Groom} alt="" />{" "}
              </div>
              <div className="info valign">
                <div className="full-width">
                  <h6>
                    Chu Thị Linh Phương <i className="ti-heart"></i>
                  </h6>{" "}
                  <span>08/03/1998</span>
                  <p>Cô gái IT Comtor (biên - phiên dịch Tiếng Nhật) , đang học tập và làm việc với vị trí Tester. Là cô gái không thích giậm chân tại chỗ, độc lập và luôn hướng đến mục tiêu do bản thân đặt ra.
                    Đôi lúc ít nói, nhiều lúc nói không ai bằng.
                    Thân thiện, hay cười, cực kỳ yêu trẻ con và động vật (đặc biệt là chó)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">Sẽ cưới vào ngày </h3>
            <h4 className="oliven-couple-subtitle">
              31 / 03 / 2024 — Liên Hiệp, Phúc Thọ, Hà Nội
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bridegroom;
