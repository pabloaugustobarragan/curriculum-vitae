import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png";
import Timeline from "@mui/lab/Timeline";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import { OneTimeline } from "./OneTimeline";
import { BugReport, Router, School } from "@mui/icons-material";
import { Languages } from "../App";

export const Experience = ({language}) => {

  const experiences = [
    {
      puesto: 'Desarrollador Senior',
      ubicacion : 'Servicio Público Provincial de Defensa Penal - Santa Fe, Argentina',
      fecha: '09/2019 - Presente',
      Icon: LaptopMacIcon,
      colorIcon:"success",
      text: `• Desarrollo PHP (Symfony/Laravel) para resolver problemas de
      web en funcionamiento y nuevas aplicaciones <br />• Desarrollo
      Javascript (React) para el desarrollo de nuevas aplicaciones.
      <br />• Revisión e presentación de informes relacionados a los
      errores vía Mantis <br />• Despliegue de versiones
      nuevas/actualizadas y manejo del servidor CentOS, mediante el
      uso de Git <br />• Optimizar el funcionamiento de las aplicaciones
      web antiguas <br />• Gestión de calidad del software <br />•
      Administración de base de datos (SQL). <br />• Desarrollo LDAP para
      múltiples aplicaciones con usuarios únicos. <br />• Análisis y
      diseño de proyectos <br />• Administración de paquetes Composer`,
    },
    {
      puesto: "Testing",
      ubicacion: "Ministerio de seguridad - Santa Fe, Argentina",
      fecha: "04/2018 - 08/2019",
      Icon: BugReport,
      text: `• Testing de aplicaciones desarrolladas en PHP, bases de
      datos, manejo de datos vía API/SOAP <br />• Revisión e
      presentación de informes relacionados a los errores vía Mantis`
    },
    {
      puesto: "Docente Jefe de Trabajos Prácticos",
      ubicacion: "Universidad Tecnológica Nacional - Santa Fe, Argentina",
      fecha: "03/2017 - Presente",
      Icon: School,
      text: `• Elaboración de trabajos de laboratorios, de Trabajos
      Prácticos, prácticas de exámenes, delegamientos de tareas,
      dictación de clases.`,
      colorIcon: "success"
    },
    {
      puesto: "Desarrollador",
      ubicacion: "Universidad Tecnológica Nacional - Santa Fe, Argentina",
      fecha: "04/2016 - 08/2016",
      Icon: LaptopMacIcon,
      text: `• Investigación y desarrollo de instrucciones para la robótica
                  en java para la exposición tecnológica 2016 en coordinación
                  con CIDISI`
    },
    {
      puesto: "Asistente técnico",
      ubicacion: "CyberLand - Santa Fe, Argentina",
      fecha: "01/2009 - 12/2016",
      Icon: Router,
      text: `• Atención al cliente
                  <br />• Instalación de aplicaciones, instalación y seteo de
                  red existente`
    },
  ];

  const experiencesEN = [
    {
      puesto: 'Senior Developer',
      ubicacion : 'Servicio Público Provincial de Defensa Penal - Santa Fe, Argentina',
      fecha: '09/2019 - Now',
      Icon: LaptopMacIcon,
      colorIcon:"success",
      text: `
      • PHP development (Symfony/Laravel) to solve problems of
                        web in operation and new applications<br />• Development
                        Javascript (React) for the development of new applications.
                        <br />• Review and presentation of reports related to the
                        bugs via Mantis <br />• Release Deployment
                        new/updated and management of the CentOS server, through the
                        using Git <br />• Optimize the performance of applications
                        old websites <br />• Software quality management <br />•
                        Database administration (SQL). <br />• LDAP development for
                        multiple applications with unique users. <br />• Analysis and
                        project design <br />• Composer package management`,
    },
    {
      puesto: "Testing",
      ubicacion: "Ministerio de seguridad - Santa Fe, Argentina",
      fecha: "04/2018 - 08/2019",
      Icon: BugReport,
      text: `• Testing of applications developed in PHP, databases
      data, data handling via API/SOAP <br />• Review and
      bug-related reporting via Mantis`
    },
    {
      puesto: "Teacher - Head of Practical Work",
      ubicacion: "Universidad Tecnológica Nacional - Santa Fe, Argentina",
      fecha: "03/2017 - Now",
      Icon: School,
      text: `• Preparation of laboratory work, Works
      Practicals, exam practices, task delegations,
      teaching classes.`,
      colorIcon: "success"
    },
    {
      puesto: "Developer",
      ubicacion: "Universidad Tecnológica Nacional - Santa Fe, Argentina",
      fecha: "04/2016 - 08/2016",
      Icon: LaptopMacIcon,
      text: `• Research and development of instructions for robotics
      in java for the technological exhibition 2016 in coordination
      with CIDISI`
    },
    {
      puesto: "Technical assistant",
      ubicacion: "CyberLand - Santa Fe, Argentina",
      fecha: "01/2009 - 12/2016",
      Icon: Router,
      text: `• Customer Support
      <br />• Installation of applications, installation and setup of
      existing network`
    },
  ]


  return (
    <section className="skill mt-5" id="experiences">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
            <h2>{language === Languages.español ? "Experiencia Profesional" : "Professional Experience"}</h2>
              {/* <h2>Skills</h2> */}
              {/* <h2>Experiencia Profesional</h2> */}
              <Timeline position="alternate">
                {
                  language === Languages.español ?
                  experiences.map(({text, ...experience}, index) => {
                    return (
                      <OneTimeline  meline
                        key={index}
                        {...experience}><div 
                        dangerouslySetInnerHTML={{__html: text}}></div></OneTimeline>
                    )
                  }) :
                  experiencesEN.map(({text, ...experience}, index) => {
                    return (
                      <OneTimeline  meline
                        key={index}
                        {...experience}><div 
                        dangerouslySetInnerHTML={{__html: text}}></div></OneTimeline>
                    )
                  })
                }
              </Timeline>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
