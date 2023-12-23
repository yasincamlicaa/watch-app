import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import logoWhite from "../../assets/images/logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="logo">
              <img src={logoWhite} alt="Horobox" />
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="#">HESABIM</a>
                </li>
                <li>
                  <a href="#">İÇERİKLER</a>
                </li>
                <li>
                  <a href="#">HAKKIMIZDA</a>
                </li>
                <li>
                  <a href="#">SAATLER</a>
                </li>
                <li>
                  <a href="#">YAZARLAR</a>
                </li>
                <li>
                  <a href="#">MARKALAR</a>
                </li>
                <li>
                  <a href="#">TERMİNOLOJİ</a>
                </li>
                <li>
                  <a href="#">TV / PODCAST</a>
                </li>
                <li>
                  <a href="#">PARTNERS</a>
                </li>
                <li>
                  <a href="#">INSIDE</a>
                </li>
                <li>
                  <a href="#">GİZLİLİK SÖZLEŞMESİ</a>
                </li>
                <li>
                  <a href="#">FUAR</a>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="footer-box">
              <div className="footer-box-top">
                <div className="social-icons">
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
                <div className="contact-info">
                  <a href="mailto:info@horobox.com" type="mail">
                    <p>info@horobox.com</p>
                  </a>
                </div>
              </div>
              <div className="contact-form">
                <Form>
                  <Form.Group controlId="formName">
                    <Form.Control type="text" placeholder="Adınız Soyadınız" />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="E-mailiniz" />
                  </Form.Group>
                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Mesajınız"
                    />
                  </Form.Group>
                  <Button type="submit">
                    GÖNDER
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
          <Col>
            <p className="footer-text">
              ©2022 The company plans to acquire, renovate, manage, and dispose
              of
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
