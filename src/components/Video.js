import React from "react";

function Video() {
  return (
    <div id="video" className="section-padding py-5">
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
          height="700"
          src="https://www.youtube.com/embed/Oc_GNGtEw4A?si=X3ZHiAwNZgzVww4U"
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
