import React, { useEffect } from "react";
import linkaudio from "../assets/images/YeuLaCuoi-PhatHoX2X-7084519.mp3";

function Header() {
  const Playit = () => {
    console.log(document.querySelector("#audio"));
  };
  useEffect(() => {
    Playit();
  }, []);
  return (
    <header id="home" className="header valign bg-img parallaxie">
      <audio controls id="audio" autoPlay>
        <source src={linkaudio} type="audio/ogg" />
        <source src={linkaudio} type="audio/mpeg" />
      </audio>
      <button onClick={Playit()}>play</button>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center caption">
            <h1 className="animate-box" data-animate-effect="fadeInUp">
              Hữu Phát & Linh Phương
            </h1>
            <h5 className="animate-box" data-animate-effect="fadeInUp">
              15 December, 2021 – Hà Nội
            </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="arrow bounce text-center">
              <a href="#couple">
                {" "}
                <i className="ti-heart"></i>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
