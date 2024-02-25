import React from "react";
import QRPhat from "../assets/images/QR-Phat.png";
import QRPhuong from "../assets/images/QR-Phuong.png";
function RSVP() {
  return (
    <div id="rsvp" className="section-padding bg-img bg-fixed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-white p-40">
            {" "}
            <span className="oliven-title-meta text-center">
              Cùng chúc mừng hạnh phúc của tớ nhé ^^
            </span>
            <h2 className="oliven-title text-center">Hòm thư hạnh phúc</h2>
            <br />
            <div className="row mb-60">
              <div className="col-md-6">
                <div
                  className="item toright mb-30 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="img">
                    {" "}
                    <img src={QRPhat} alt="" style={{ height: 218 }} />{" "}
                  </div>
                  <div className="info valign">
                    <div className="full-width text-center">
                      <h4>Đỗ Hữu Phát</h4> <h5>Ngân hàng : Techcombank</h5>
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
                    <img src={QRPhuong} alt="" style={{ height: 218 }} />{" "}
                  </div>
                  <div className="info valign">
                    <div className="full-width text-center">
                      <h4>Chu Thị Linh Phương</h4>
                      <h5>Ngân hàng : Techcombank</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
