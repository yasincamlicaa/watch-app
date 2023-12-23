import React from "react";
import Header from "../components/Header/Header";
import MiddleBanner from "../components/MiddleBanner/MiddleBanner";
import TripleBanner from "../components/TripleBanner/TripleBanner";
import TripleBlog from "../components/TripleBlog/TripleBlog";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import Newsletter from "../components/Newsletter/Newsletter";
import TripleBlogViaTitle from "../components/TripleBlogViaTitle/TripleBlogViaTitle";
import Brands from "../components/Brands/Brands";
import Footer from "../components/Footer/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MiddleBanner photo="first" alt="MontBlanc" linkTo="/montblanc" />
      <TripleBanner />
      <MiddleBanner photo="second" alt="Panerai" linkTo="/panerai" />
      <TripleBlog />
      <MiddleBanner photo="third" alt="Ulysse" linkTo="/ulysse" />
      <VideoBanner videoId="RW0yb1lK7UM" title="RADO Switzeland" />
      <Newsletter />
      <MiddleBanner photo="fourth" alt="Oris" linkTo="/oris" />
      <TripleBlogViaTitle title="En Çok Okunanlar" />
      <MiddleBanner photo="fifth" alt="Grand Seiko" linkTo="/grandseiko" />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
