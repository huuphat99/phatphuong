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
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content background-popup">
            <div class="modal-body d-flex justify-content-center align-items-center">
              <div>
                <h5 className="text-popup">
                  Làm tí nhạc cho nó có tí không khí không nhỉ?
                </h5>

                <div
                  className="mt-5 d-flex justify-content-center"
                  style={{ gap: 20 }}
                >
                  <a data-bs-dismiss="modal" class="button button--pen">
                    <div class="button__wrapper">
                      <span class="button__text">Không</span>
                    </div>
                    <div class="characterBox">
                      <div class="character wakeup">
                        <div class="character__face"></div>
                        <div class="charactor__face2"></div>
                      </div>
                      <div class="character wakeup">
                        <div class="character__face"></div>
                        <div class="charactor__face2"></div>
                      </div>
                      <div class="character">
                        <div class="character__face"></div>
                        <div class="charactor__face2"></div>
                      </div>
                    </div>
                  </a>

                  <a
                    onClick={() => {
                      playAudio();
                      setPlay(!play);
                    }}
                    data-bs-dismiss="modal"
                    class="button button--piyo"
                  >
                    <div class="button__wrapper">
                      <span class="button__text">Nghe</span>
                    </div>
                    <div class="characterBox">
                      <div class="character wakeup">
                        <div class="character__face"></div>
                      </div>
                      <div class="character wakeup">
                        <div class="character__face"></div>
                      </div>
                      <div class="character">
                        <div class="character__face"></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
