import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/LOGO.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Languages } from "../App";

export const Footer = ({language}) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/pablo-augusto-barragan-aa301bbb" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/NightCrawler1991/" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/pabloaugustobarragan/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            { language === Languages.español ?
              <p>Derechos de autor 2023. Todos los derechos reservados</p>:
              <p>Copyright 2023. All Rights Reserved</p>

            }
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
