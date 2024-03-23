import React from "react";

function Organization() {
  return (
    <div
      id="organization"
      className="organization section-padding bg-pink pt-0 pb-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Wedding</span>
            <h2 className="oliven-title">Các mốc sự kiện</h2>
          </div>
        </div>
        <div
          className="row bord-box bg-img"
          data-background="images/anhbia.jpg"
          style={{ backgroundPosition: "center" }}
        >
          <div className="col-md-4 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">Lễ dạm ngõ</h6>
            <p>
              Delta tristiu the jusone duise vitae diam neque nivami mis est
              augue artine aringilla the at elit finibus vivera.
            </p>
          </div>
          <div className="col-md-4 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Lễ ăn hỏi</h6>
            <p>
              Delta tristiu the jusone duise vitae diam neque nivami mis est
              augue artine aringilla the at elit finibus vivera.
            </p>
          </div>
          <div className="col-md-4 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Lễ thành hôn</h6>
            <p>
              Delta tristiu the jusone duise vitae diam neque nivami mis est
              augue artine aringilla the at elit finibus vivera.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
