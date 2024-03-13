import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
function Sidebar() {
  const [show, setShow] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    setShow(!show);
    document.body.classList.toggle("slide");
  };

  useEffect(() => {
    setTimeout(() => {
      const topScroll = document.querySelector("#homeTop");
      topScroll.click();
    }, 2000);
  }, []);

  return (
    <>
      <a
        href="/"
        onClick={openMenu}
        className={`js-oliven-nav-toggle oliven-nav-toggle${
          show ? " active" : ""
        }`}
      >
        <i></i>
      </a>
      <aside id="oliven-aside">
        <div className="oliven-logo">
          <a href="/">
            <img src={Logo} alt="" />
            <span>
              Hữu Phát <small>&</small> Linh Phương
            </span>
            <h6>31/03/2024</h6>
          </a>
        </div>
        <nav className="oliven-main-menu">
          <ul>
            <li>
              <a href="#home" id="homeTop">
                Home
              </a>
            </li>
            <li>
              <a href="#couple">Cô dâu - Chú rể</a>
            </li>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#organization">Thông tin</a>
            </li>
            <li>
              <a href="#video">Video</a>
            </li>
            <li>
              <a href="#gallery">Ảnh cưới</a>
            </li>
            <li>
              <a href="#whenwhere">Thời gian & Địa điểm</a>
            </li>
          </ul>
        </nav>
        <div className="footer1">
          <span className="separator"></span>
          <p>
            Lễ thành hôn
            <br />
            31 / 03 / 2024, Hà Nội
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
