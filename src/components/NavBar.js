import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/LOGO.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { Languages } from "../App";
import { Stack, Typography } from "@mui/material";
import { AntSwitch } from "./AntSiwtch";

export const NavBar = ({ language, setLanguage }) => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  const onUpdateActiveLinkLanguage = (e) => {
    if (language === Languages.español) {
      setLanguage(Languages.english);
    } else {
      setLanguage(Languages.español);
    }
  };

  console.log(language);

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {language === Languages.español ? "Principal" : "Home"}
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
              >
                {/* Habilidades */}
                {language === Languages.español ? "Habilidades" : "Skills"}
              </Nav.Link>
              <Nav.Link
                href="#experiences"
                className={
                  activeLink === "experiences"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("experiences")}
              >
                {language === Languages.español ? "Experiencia Profesional" : "Professional Experience"}
                
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                  ? "active navbar-link"
                  : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
                >
                {language === Languages.español ? "Proyectos" : "Projects"}
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/pablo-augusto-barragan-aa301bbb"
                  target="_blank"
                >
                  <img src={navIcon1} alt="" />
                </a>
                <a
                  href="https://www.facebook.com/NightCrawler1991/"
                  target="_blank"
                >
                  <img src={navIcon2} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/pabloaugustobarragan/"
                  target="_blank"
                >
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
          <Stack direction="row" spacing={1} alignItems="center" className="m-3">
            <Typography>EN</Typography>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
              onChange={onUpdateActiveLinkLanguage}
            />
            <Typography>ES</Typography>
          </Stack>
        </Container>
      </Navbar>
    </Router>
  );
};
