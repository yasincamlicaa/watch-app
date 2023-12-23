import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Newsletter.scss";

const Newsletter: React.FC = () => {
  return (
    <section className="newsletter-area">
      <div className="newsletter">
        <div className="newsletter-left">
          <h2>HOROBOX NEWSLETTER</h2>
          <p>BİZDEN HABERDAR OLMAK İÇİN</p>
        </div>
        <div className="newsletter-right">
          <input type="email" placeholder="e-mailinizi yazın" />
          <button><FontAwesomeIcon icon={faChevronRight} /></button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
