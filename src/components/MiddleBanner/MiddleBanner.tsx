import React from "react";
import './MiddleBanner.scss';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import firstMiddleBanner from "../../assets/images/firstMiddleBanner.png";
import secondMiddleBanner from "../../assets/images/secondMiddleBanner.png";
import thirdMiddleBanner from "../../assets/images/thirdMiddleBanner.png";
import fourthMiddleBanner from "../../assets/images/fourthMiddleBanner.png";
import fifthMiddleBanner from "../../assets/images/fifthMiddleBanner.png";

interface MiddleBannerProps {
  photo: string;
  alt?: string;
  linkTo?: string;
}

const MiddleBanner: React.FC<MiddleBannerProps> = ({ photo, alt, linkTo }) => {
  let imagePath = "";

  switch (photo) {
    case "first":
      imagePath = firstMiddleBanner;
      break;
    case "second":
      imagePath = secondMiddleBanner;
      break;
      case "third":
      imagePath = thirdMiddleBanner;
      break;
      case "fourth":
      imagePath = fourthMiddleBanner;
      break;
      case "fifth":
      imagePath = fifthMiddleBanner;
      break;
    default:
      imagePath = "";
      break;
  }

  const imageElement = linkTo ? (
    <Link to={linkTo}>
      <Image src={imagePath} alt={alt || "Horobox"} fluid />
    </Link>
  ) : (
    <Image src={imagePath} alt={alt || "Horobox"} fluid />
  );

  return (
    <section className="middle-banner">
      {imageElement}
    </section>
  );
};

export default MiddleBanner;
