import { Container, Row, Col } from "react-bootstrap";
import { Github, Envelope } from "react-bootstrap-icons";
import logo from "../assets/img/LOGO.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
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
              <a href="https://www.linkedin.com/in/pablo-augusto-barragan-aa301bbb" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/pabloaugustobarragan" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={24} color="#fff" /></a>
              <a href="mailto:pabloaugustobarragan@gmail.com" aria-label="Email"><Envelope size={24} color="#fff" /></a>
            </div>
            { language === Languages.español ?
              <p>Derechos de autor {new Date().getFullYear()}. Todos los derechos reservados</p>:
              <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>

            }
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
