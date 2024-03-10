import React from "react";

function Video() {
  return (
    <div id="video" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30">
            <span className="oliven-title-meta">Video</span>
            <h2 className="oliven-title">Kỉ niệm</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/rwIOCoDtHyI?si=j9gXuGeAmOWMaxsB&amp;start=10"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
