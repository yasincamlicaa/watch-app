import React, { useState } from "react";
import { Button } from "react-bootstrap";
import videoBanner from "../../assets/images/big-left.png";
import videoBannerTwo from "../../assets/images/big-right.png";
import rado from "../../assets/images/rado.png";
import play from "../../assets/images/play.svg";
import "./VideoBanner.scss";

interface VideoBannerProps {
  videoId: string;
  title: string;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ videoId, title }) => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  return (
    <section className="video-banner">
      <div className="video-container">
        {!showVideo ? (
          <>
            <div className="video">
              <Button className="play-button" onClick={handlePlayClick}>
                <img src={play} alt="Play" />
                <h4>
                  Tv
                  <br />
                  Podcast
                </h4>
              </Button>
              <img src={videoBanner} alt="Banner" className="video-thumbnail" />
            </div>
          </>
        ) : (
          <iframe
            title="YouTube Video"
            width="745"
            height="461"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
            className="video-embed"
          ></iframe>
        )}
      </div>
      <a href="#asd" className="banner">
        <img src={videoBannerTwo} alt={title} />
        <div className="absolute-title">
          <img src={rado} alt="Rado" />
        </div>
      </a>
    </section>
  );
};

export default VideoBanner;
