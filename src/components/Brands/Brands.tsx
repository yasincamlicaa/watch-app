import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import './Brands.scss'; 

interface Brand {
  src: string;
  link: string;
}

const brandsCount = 12;
const brands: Brand[] = Array.from({ length: brandsCount }, (_, index) => ({
  src: `/images/brands/${index + 1}.png`,
  link: `#${index + 1}`
}));

const Brands: React.FC = () => {
  return (
    <section className='brands-area'>
      <Row className="brands-row">
        {brands.map((brand, index) => (
          <Col key={index} xs={6} sm={4} md={3} lg={2} xl={2}>
            <a href={brand.link} className="brand-link">
              <img src={process.env.PUBLIC_URL + brand.src} alt={`Brand ${index + 1}`} className="brand-image" />
            </a>
          </Col>
        ))}
      </Row>
      <button className='see-more-button'>Daha Fazla <FontAwesomeIcon icon={faChevronDown} /></button>

    </section>
  );
};

export default Brands;
