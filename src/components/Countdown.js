import React, { useEffect } from "react";

function Countdown() {
  useEffect(() => {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
      let birthday = "Mar 31, 2024 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          let now = new Date().getTime(),
            distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(
            distance / day
          );
          document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          );
          document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          );
          document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          );

          //do something later when date is reached
          if (distance < 0) {
            clearInterval(x);
          }
          //seconds
        }, 0);
      return null;
    })();
  }, []);
  return (
    <div
      id="countdown"
      className="section-padding bg-img bg-fixed bg-custom"
      data-background="images/banner-1.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="section-head col-md-12">
            <h4 style={{ color: "pink" }}>Save the date</h4>
            <h4 style={{ color: "pink" }}>31 / 03 / 2024</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li style={{ color: "pink" }}>
                <span id="days" style={{ color: "pink" }}></span>Ngày
              </li>
              <li style={{ color: "pink" }}>
                <span id="hours" style={{ color: "pink" }}></span>Giờ
              </li>
              <li style={{ color: "pink" }}>
                <span id="minutes" style={{ color: "pink" }}></span>Phút
              </li>
              <li style={{ color: "pink" }}>
                <span id="seconds" style={{ color: "pink" }}></span>Giây
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
