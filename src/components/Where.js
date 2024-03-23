import React from "react";
import where1 from "../assets/images/anhngoi1.jpg";
import where3 from "../assets/images/h3-1.jpg";
import where2 from "../assets/images/anhphong.jpg";
function Where() {
  return (
    <div id="whenwhere" className="whenwhere section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            {" "}
            <span className="oliven-title-meta">Thông tin</span>
            <h2 className="oliven-title">Thời gian & Địa điểm</h2>{" "}
          </div>
        </div>
        <div className="row">
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where1} alt="" />
            </div>
            <div className="content">
              <h5>Tiệc cưới nhà chú rể</h5>
              <p>
                <i className="ti-location-pin"></i> Thôn 10, Liên Hiệp, Phúc Thọ, Hà Nội
              </p>
              <p>
                <i className="ti-time"></i> <span>30/03/2024 - 14h30</span>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where2} alt="" />
            </div>
            <div className="content">
              <h5>Tiệc cưới nhà cô dâu</h5>
              <p>
                <i className="ti-location-pin"></i> Thôn 6, Phù Vân, Phủ Lý, Hà Nam
              </p>
              <p>
                <i className="ti-time"></i> <span>30/03/2024 - 14h30</span>
              </p>
            </div>
          </div>
          <div className="item col-12 col-md-4">
            <div className="whenwhere-img">
              {" "}
              <img src={where3} alt="" />
            </div>
            <div className="content">
              <h5>Lễ thành hôn</h5>
              <p>
                <i className="ti-direction-alt"></i> Thôn 10, Liên Hiệp, Phúc Thọ, Hà Nội
              </p>
              <p>
                <i className="ti-direction"></i> 31/03/2024 - 11h30
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Where;
