import React, { useEffect, useRef, useState } from "react";
import urlAudio from "../assets/images/nhac.mp3";
import sound from "../assets/images/sound.png";
import unsound from "../assets/images/unsound.png";

function Header() {
  const [play, setPlay] = useState(false);
  const refAudio = useRef(null);
  const refIcon = useRef(null);

  const playAudio = () => {
    refAudio.current.play();
    refIcon.current.src = sound;
  };

  const pauseAudio = () => {
    refAudio.current.pause();
    refIcon.current.src = unsound;
  };

  useEffect(() => {
    if (play) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [play]);
  return (
    <header id="home" className="header valign bg-img parallaxie relative">
      <audio controls ref={refAudio} hidden>
        <source src={urlAudio} type="audio/ogg"></source>
      </audio>
      <div
        onClick={() => {
          setPlay(!play);
        }}
        style={{
          width: 30,
          height: 30,
          position: "fixed",
          top: 15,
          right: 15,
          zIndex: 10,
        }}
      >
        <img src={play ? sound : unsound} alt="" ref={refIcon} />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center caption">
            <h1 className="animate-box" data-animate-effect="fadeInUp">
              Hữu Phát & Linh Phương
            </h1>
            <h5 className="animate-box" data-animate-effect="fadeInUp">
              31 / 03 / 2024 – Hà Nội
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
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        id="btn-modal"
        hidden
      >
        Launch demo modal
      </button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h5>Làm tí nhạc cho nó có tí không khí không nhỉ?</h5>
            </div>
            <div class="modal-footer border-0">
              <button
                type="button"
                class="btn btn-secondary p-2"
                data-bs-dismiss="modal"
                style={{ fontSize: 13 }}
              >
                Cook
              </button>
              <button
                type="button"
                class="btn btn-primary p-2"
                onClick={() => {
                  playAudio();
                  setPlay(!play);
                }}
                data-bs-dismiss="modal"
                style={{ fontSize: 13 }}
              >
                Nghe luôn
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
