import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SGI.png";
import projImg2 from "../assets/img/SRP.png";
import projImg3 from "../assets/img/SPPDP.png";
import projImg4 from "../assets/img/SAC.png";
import projImg5 from "../assets/img/TRF.png";
import projImg6 from "../assets/img/LDAP.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Languages } from "../App";

export const Projects = ({ language }) => {
  const projects = [
    {
      title: "SPPDP",
      description: "Servicio Público Provincial de Defensa Penal",
      subdescription: "https://defensasantafe.gob.ar/",
      imgUrl: projImg3,
    },
    {
      title: "TRF",
      description: "Sistema de Recursos Humanos",
      imgUrl: projImg5,
    },
    {
      title: "LDAP",
      description: "Protocolo Ligero de Acceso a Directorio",
      imgUrl: projImg6,
    },
    {
      title: "SGI",
      description: "Sistema de Gestión de Inventarios",
      subdescription: "privado",
      imgUrl: projImg1,
    },
    {
      title: "SRP",
      description: "Sistema de Pericias",
      subdescription: "privado",
      imgUrl: projImg2,
    },
    {
      title: "SAC",
      description: "Sistema de Asignación de Casos",
      subdescription: "privado",
      imgUrl: projImg4,
    },
  ];

  const projects2 = [
    {
      title: "SPPDP",
      description: "Servicio Público Provincial de Defensa Penal",
      subdescription: "https://defensasantafe.gob.ar/",
      imgUrl: projImg3,
    },
    {
      title: "TRF",
      description: "Sistema de Recursos Humanos",
      subdescription: "privado",
      imgUrl: projImg5,
    },
    {
      title: "LDAP",
      description: "Protocolo Ligero de Acceso a Directorio",
      subdescription: "privado",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Proyectos</h2>
                  <h2>
                    {language === Languages.español ? "Proyectos" : "Projects"}
                  </h2>
                  <p>
                    {language === Languages.español
                      ? "Se publica una serie de trabajos realizados a lo largo de la carrera profesional."
                      : "A series of works carried out throughout the professional career are published"}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          {language === Languages.español
                            ? "Proyectos Trabajados"
                            : "Projects Worked"}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          {language === Languages.español
                            ? "Proyectos Creados"
                            : "Projects Created"}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          {language === Languages.español
                            ? "Futuros Proyectos"
                            : "Future Projects"}
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {language === Languages.español ? (
                          <>
                            <p>Sistema de Tesorería.</p>
                            <p>Sistema de Consultorio Médico.</p>
                            <p>Sistema de Compra/Venta de Mercadería.</p>
                            <p>
                              Sistema de Sistema de Administración de Pagos.
                            </p>
                          </>
                        ) : (
                          <>
                            <p>Treasury System.</p>
                            <p>Medical Office System.</p>
                            <p>Merchandise Purchase/Sale System.</p>
                            <p>Payment Management System.</p>
                          </>
                        )}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
