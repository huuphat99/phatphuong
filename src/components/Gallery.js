import React, { useState } from "react";
import gallery1 from "../assets/images/h1-1.jpg";
import gallery2 from "../assets/images/h1-2.jpg";
import gallery3 from "../assets/images/h1-3.jpg";
import gallery4 from "../assets/images/h2-1.jpg";
import gallery5 from "../assets/images/h2-2.jpg";
import gallery6 from "../assets/images/h2-3.jpg";
import gallery7 from "../assets/images/h3-1.jpg";
import gallery8 from "../assets/images/h3-2.jpg";
import gallery9 from "../assets/images/h3-3.jpg";
function Gallery() {
  const [modalImageSrc, setModalImageSrc] = useState("");
  const handleClick = (event) => {
    const imageSrc = event.currentTarget.querySelector("img").src;
    setModalImageSrc(imageSrc);
  };
  return (
    <div id="gallery" className="section-padding bg-pink pt-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Thư viện</span>
            <h2 className="oliven-title">Ảnh cưới</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row gallery-filter mt-3">
          <div className="col-md-4 gallery-item ceremony">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery1}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Tiệc cưới nhà Phát ^^</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery2}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Tiệc cưới nhà Phát ^^</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery3}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Tiệc cưới nhà Phát ^^</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery4}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Tiệc cưới nhà Phát ^^</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item party">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery5}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Tiệc cưới nhà Phương ^^</h4>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery6}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Lễ thành hôn của mình ^^</h4>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item party">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery7}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item ceremony">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery8}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Ceremony</h4>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 gallery-item party">
            <div
              className="img-zoom"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleClick}
            >
              <div className="gallery-box">
                <div className="gallery-img">
                  {" "}
                  <img
                    src={gallery9}
                    className="img-fluid mx-auto d-block"
                    alt=""
                  />{" "}
                </div>
                <div className="gallery-detail">
                  <h4 className="mb-0">Wedding Party</h4>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0 pb-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                src={modalImageSrc}
                className="imagepreview"
                style={{ width: "85%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
