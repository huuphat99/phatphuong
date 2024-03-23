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
            <h6 className="title">Lễ dạm ngõ (21/03/2024)</h6>
            <p>
            Hai bên gia đình gặp gỡ tính chuyện trăm năm
            </p>
          </div>
          <div className="col-md-4 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Lễ ăn hỏi & bữa cơm thân mật (30/03/2024)</h6>
            <p>09:00 — Tổ chức lễ ăn hỏi</p>
            <p>16:30 — Bữa cơm thân mật tại nhà chú rể</p>
            <p>15:30 — Bữa cơm thân mật tại nhà cô dâu</p>
          </div>
          <div className="col-md-4 item-box">
            <h2 className="custom-font numb">03</h2>
            <h6 className="title">Lễ thành hôn (31/03/2024)</h6>
            <p>11:30 — Đón tiếp khách mời</p>
            <p>12:00 — Bắt đầu lễ thành hôn</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Organization;
