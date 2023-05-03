import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { Circle } from "./Circle.js";
import { Languages } from "../App";

export const Skills = ({language}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        {/* <h2>Skills</h2> */}
                        <h2>{language === Languages.español ? "Habilidades" : "Skills" }</h2>
                        {language === Languages.español ?
                          <p>Dominio de PHP, MySQL, HTML5, CSS3, JQuery y Javascript. Conocimiento de las bases de datos MySQL, PostgreSQL, MongoDB. Capacidad de trabajo en equipo.</p> :
                          <p>Profency of PHP, MySQL, HTML5, CSS3, JQuery and Javascript. Knowledge of MySQL, PostgreSQL, MongoDB databases. Capacity for teamwork.</p>
                        }
                          
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                              <Circle percentaje={80} color={"#f54242"} />
                              <h5>PHP</h5>
                              <h5>Laravel</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={95} color={"#192070"} />
                                <h5>PHP</h5>
                                <h5>Symfony</h5>
                            </div>
                            
                            <div className="item">
                              <Circle percentaje={75} color={"#6c7019"} />
                                <h5>Javascript</h5>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={55} color={"#e3736b"} />
                                <h5>TypeScript</h5>
                                <h5>React</h5>
                                <h5>Angular</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={50} color={"#218219"} />
                                <h5>NodeJS</h5>
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={80} color={"#701967"} />
                                <h5>CSS</h5>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={60} color={"#185a7d"} />
                                <h5>CSS</h5>
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={75} color={"#0c1d7d"} />
                                <h5>SQL</h5>
                                <h5>MySql</h5>
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={60} color={"#34c740"} />
                                <h5>NoSQL</h5>
                                <h5>MongoDB</h5>
                                <h5>ElasticSearch</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={95} color={"#bad2f5"} />
                                <h5>Java</h5>
                                <h5>{language === Languages.español ? "Escritorio" : "Desktop" }</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={80} color={"#bcf757"} />
                                <h5>Java</h5>
                                <h5>Android</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={45} color={"#bcf757"} />
                                <h5>Java</h5>
                                <h5>Spring</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={45} color={"#e6be5a"} />
                                <h5>TypeScript</h5>
                                <h5>Ionic</h5>
                            </div>
                            <div className="item">
                              <Circle percentaje={95} color={"#663405"} />
                                <h5>Git</h5>
                                <h5>BitBucket</h5>
                                <h5>GitHub</h5>
                                <h5>Jira</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
