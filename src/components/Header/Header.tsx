import React from "react";
import { Navbar, Nav, Image, DropdownButton, Dropdown } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/search.png";
import search from "../../assets/images/user.png";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import "../../i18n/i18n";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">
          <Image src={logo} alt={t("Horobox")} fluid />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto link-area">
            <Nav.Link href="#home">{t("İÇERİKLER")}</Nav.Link>
            <Nav.Link href="#link">{t("MARKALAR")}</Nav.Link>
            <Nav.Link href="#about">{t("TV / PODCAST")}</Nav.Link>
            <Nav.Link href="#contact">{t("INSIDE")}</Nav.Link>
            <Nav.Link href="#fair">{t("FUAR")}</Nav.Link>
          </Nav>
          <Nav className="ml-auto tools-area">
            <DropdownButton id="language-dropdown" title={<>{t(i18n.language)} <FontAwesomeIcon icon={faChevronDown} /></>}>
              <Dropdown.Item onClick={() => changeLanguage("TR")}>
                {t("TR")}
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("EN")}>
                {t("EN")}
              </Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="#search">
              <Image src={search} alt="Ara" />
            </Nav.Link>
            <Nav.Link href="#user">
              <Image src={user} alt="Kullanıcı" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
