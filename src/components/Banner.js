import { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import headerImg from "../assets/img/kindpng_1272131.png";
import profileImg from "../assets/img/profile.png";
import { ArrowDownCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Languages } from "../App";

export const Banner = ({ language }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 20);
  const toRotate = [
    "Desarrollador Backend / Fullstack",
    "PHP · Symfony · Java · React",
    "Ing. en Sistemas de Información",
    "Docente Universitario",
  ];
  const toRotateEN = [
    "Backend / Fullstack Developer",
    "PHP · Symfony · Java · React",
    "Information Systems Engineer",
    "University Lecturer",
  ];
  const period = 2000;
  const date = new Date();
  const yearDevelopWeb =
    date.getFullYear() - new Date("02-01-2018").getFullYear();
  const yearDevelopMovil =
    date.getFullYear() - new Date("08-08-2016").getFullYear();
  const yearDevelopDesktop =
    date.getFullYear() - new Date("03-13-2015").getFullYear();
  const resumen = `Programador con más de ${yearDevelopWeb} años en desarrollo
                    de aplicaciones web, ${yearDevelopMovil} años de
                    aplicaciones móviles y ${yearDevelopDesktop} años de
                    aplicaciones de escritorio. Creé un framework base en
                    Symfony y Keycloak sobre el que desarrollé 6 aplicaciones
                    (administración, tesorería, pericias y seguimiento de
                    casos) con entre 20 y 80 usuarios cada una. Disponible
                    para trabajo remoto en España.`;
  const resumenEN = `
  Programmer with over ${yearDevelopWeb} years in web app development, ${yearDevelopMovil} years in mobile apps, and ${yearDevelopDesktop} years in desktop apps. Built a base framework with Symfony and Keycloak and developed 6 applications on top of it (administration, treasury, expert fees and case tracking), each with 20 to 80 users. Available for remote work in Spain.`;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, language]);

  const tick = () => {
    let i = 0;
    let fullText = "";
    if (language === Languages.español) {
      i = loopNum % toRotate.length;
      fullText = toRotate[i];
    } else {
      i = loopNum % toRotateEN.length;
      fullText = toRotateEN[i];
    }
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">{language === Languages.español ? "Bienvenidos a mi Portafolio" : "Welcome to my Portfolio"}</span>
                  {/* <span className="tagline">Welcome to my Portfolio</span> */}
                  {/* <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1> */}
                  <h1>
                    {language === Languages.español ? `¡Hola!` : `Hi!`}
                    <br />
                    <small>
                      {language === Languages.español
                        ? "Soy Pablo A. Barragán"
                        : "I am Pablo A. Barragán"}
                    </small>
                    <br />
                    <span
                      className="txt-rotate"
                      data-period="500"
                      data-rotate={
                        language === Languages.español ? toRotate : toRotateEN
                      }
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <div className="row mb-2">
                    <div className="col-2">
                      <Image
                        rounded={true}
                        roundedCircle={true}
                        src={profileImg}
                        alt="Header Img"
                      />
                    </div>
                    <div className="col-10">{language === Languages.español ? resumen : resumenEN}</div>
                  </div>
                  <a href={`${process.env.PUBLIC_URL}/CV-Pablo-Augusto-Barragan.pdf`} className="border border-primary p-2" target="_blank" rel="noreferrer" download="CV-Pablo-Augusto-Barragan.pdf">
                    Curriculum Vitae <ArrowDownCircle size={25} />
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "header-img animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
