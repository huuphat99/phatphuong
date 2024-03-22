import React from "react";
import Bride from "../assets/images/profile-phat.jpg";
import Groom from "../assets/images/profile-codau.jpeg";
import Heart from "../assets/images/free-heart.webp";
function Bridegroom() {
  return (
    <div id="couple" className="bridegroom clear section-padding bg-pink">
      <div
        className="d-flex flex-column"
        style={{ backgroundColor: "white", padding: "20px 50px" }}
      >
        <div className="d-flex flex-custom-column">
          <div className="w-50 d-flex align-items-center w-md-100">
            <img src={Bride} alt="" />
          </div>
          <div className="w-50 d-flex align-items-center w-md-100">
            <div className="info valign m-0 p-3">
              <div className="full-width">
                <h4
                  className="text-center fs-2 mb-0"
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                >
                  Chú Rể
                </h4>{" "}
                <h4
                  className="text-center fs-2 mb-0"
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                >
                  Đỗ Hữu Phát
                </h4>{" "}
                <span className="d-flex justify-content-center">
                  29/10/1999
                </span>
                <p>
                  Chàng trai IT - Developer với nhiều ước mơ và hoài bão. Một
                  chàng trai kiên trì, bền bỉ trong mọi quyết định của bản thân.
                  Giao diện “trẻ con” nhưng có hệ điều hành cực kỳ tình cảm,
                  biết lắng nghe và rất yêu thích bộ môn trêu vợ.
                  <p>
                    <img src={Heart} style={{ width: 20, height: 20 }} />
                    <img src={Heart} style={{ width: 20, height: 20 }} />
                    <img src={Heart} style={{ width: 20, height: 20 }} />
                  </p>
                  * The best thing to hold onto in life is each other.
                  <p>
                    Tạm dịch: Điều tốt nhất để níu kéo trong cuộc đời là có
                    nhau.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-custom-column">
          <div className="w-50 d-flex align-items-center w-md-100 order-custom-1">
            <div className="info valign m-0 p-3">
              <div className="full-width">
                <h4
                  className="text-center fs-2 mb-0"
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                >
                  Cô Dâu
                </h4>{" "}
                <h4
                  className="text-center fs-2 mb-0"
                  style={{ fontFamily: "'Alex Brush', cursive" }}
                >
                  Chu Thị Linh Phương
                </h4>
                <span className="d-flex justify-content-center">
                  08/03/1998
                </span>
                <p>
                  Cô gái IT Comtor (biên - phiên dịch Tiếng Nhật) , đang học tập
                  và làm việc với vị trí Tester. Là cô gái không thích giậm chân
                  tại chỗ, độc lập, chỉnh chu, làm gì cũng có plan rõ ràng Đôi
                  lúc ít nói, nhiều lúc nói không ai bằng. Thân thiện, hay cười,
                  cực kỳ yêu trẻ con và động vật (đặc biệt là chó)
                  <p>
                    <img src={Heart} style={{ width: 20, height: 20 }} />
                    <img src={Heart} style={{ width: 20, height: 20 }} />
                    <img src={Heart} style={{ width: 20, height: 20 }} />
                  </p>
                  * To the world you may be one person, but to one person you
                  may be the world.
                  <p>
                    Tạm dịch: Với thế giới bạn có thể là một người, nhưng với
                    một người, bạn có thể là cả thế giới.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="w-50 d-flex align-items-center w-md-100 order-custom-0">
            <img src={Groom} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="row">
          <div
            className="col-md-12 text-center animate-box"
            data-animate-effect="fadeInUp"
          >
            <h3 className="oliven-couple-title">Sẽ cưới vào ngày </h3>
            <h4 className="oliven-couple-subtitle">
              31 / 03 / 2024 — Liên Hiệp, Phúc Thọ, Hà Nội
            </h4>
          </div>
        </div> */}
    </div>
  );
}

export default Bridegroom;
