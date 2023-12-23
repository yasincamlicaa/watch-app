import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import image1 from "../../assets/images/left-big.png";
import image2 from "../../assets/images/right-small.png";
import image3 from "../../assets/images/right-small-2.png";
import arrow from "../../assets/images/arrow.svg";
import "./TripleBanner.scss";

const TripleBanner: React.FC = () => {
  return (
    <section className="triple-banner">
      <Row className="w-100 mx-auto">
        <Col className="px-0 md-full">
          <div className="box1">
            <Image src={image1} fluid />
            <div className="absolute-content">
              <h3><a href="#xxx">Tudor Pelagos 39mm</a></h3>
              <h3>Reference: 25407N</h3>
              <p>
                Tudor, dalgıç saatlerindeki başarılı üyesi Pelagos model
                ailesini 39mm çapında tasarlanmış yeni bir seri ile
                genişletiyor.
              </p>
              <Image src={arrow} alt="link arrow" className="link-arrow" />
            </div>
          </div>
        </Col>
        <Col className="px-0 md-full">
          <Row className="w-100 mx-auto">
            <Col className="px-0 d-flex justify-content-end md-half">
              <div className="box2">
                <Image src={image2} fluid />
                <div className="absolute-content">
                  <h3><a href="#xxx">Solaklar İçin</a></h3>
                  <h3><a href="#xxx">Rolex</a></h3>
                  <Image src={arrow} alt="link arrow" className="link-arrow" />
                </div>
              </div>
            </Col>
            <Col className="px-0 d-flex justify-content-end md-half">
              <div className="box3">
                <Image src={image3} fluid />
                <div className="absolute-content">
                  <h3><a href="#xxx">Zenith Defy Double Tourbillon</a></h3>
                  <h3><a href="#xxx">(Ref. 10.9000.9020/79.R918)</a></h3>
                  <Image src={arrow} alt="link arrow" className="link-arrow" />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
};

export default TripleBanner;
