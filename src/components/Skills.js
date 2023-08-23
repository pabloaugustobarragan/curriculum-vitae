import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Circle } from "./Circle.js";
import { Languages } from "../App";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';


import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    trainee: {
      main: '#68c968',
    },
    junior: {
      main: '#4d61e8'
    },
    semisenior: {
      main: '#d68719'
    },
    senior: {
      main: '#d62919'
    }
  },
});

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
}));


export const Skills = ({ language }) => {

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* <h2>Skills</h2> */}
              <h2>{language === Languages.español ? "Habilidades" : "Skills"}</h2>
              {language === Languages.español ?
                <p>A continuación se detalla el domino de los lenguajes (Actualizado al 22/08/2023).</p> :
                <p>Next the profency  of the languages ​​is detailed (Updated at 22/08/2023).</p>
              }
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={15} columns={12}>
                  <Grid container item><h2>PHP</h2></Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs>
                      <Circle percentaje={80} color={"#f54242"}>
                        <h4>Laravel</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={95} color={"#192070"} >
                        <h4>Symfony</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#e0843d"} >
                        <h4>CodeIgniter</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#a82c2c"} >
                        <h4>CakePHP</h4>
                      </Circle>
                    </Grid>

                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid container item><h2>JavaScript</h2></Grid>
                    <Grid item xs>
                      <Circle percentaje={75} color={"#6c7019"}>
                        <h4>React</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={60} color={"#218219"} >
                        <h4>NodeJS</h4>
                        <h4>Express</h4>
                        <h4>NestJS</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={0} color={"#701967"} >
                        <h4>VueJS</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs></Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid container item><h2>TypeScript</h2></Grid>
                    <Grid item xs>
                      <Circle percentaje={65} color={"#6c7019"}>
                        <h4>React</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={55} color={"#e3736b"} >
                        <h4>Angular</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={20} color={"#218219"} >
                        <h4>NestJS</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={40} color={"#e6be5a"} >
                        <h4>Ionic</h4>
                      </Circle>
                    </Grid>
                  </Grid>

                  <Grid container item spacing={3}>
                    <Grid container item><h2>CSS</h2></Grid>

                    <Grid item xs>

                      <Circle percentaje={80} color={"#701967"} >
                        <h4>Bootstrap</h4>
                      </Circle>


                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={50} color={"#185a7d"} >
                        <h4>Tailwind</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={50} color={"#184bba"} >
                        <h4>Material UI</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs></Grid>

                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid container item><h2>SQL</h2></Grid>


                    <Grid item xs>

                      <Circle percentaje={85} color={"#0c1d7d"} >
                        <h4>MySql</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={85} color={"#874009"} >
                        <h4>MariaDB</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={65} color={"#c4c0bc"} >
                        <h4>Microsoft SQL Server</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={50} color={"#0c1d7d"} >
                        <h4>PostgreSQL</h4>
                      </Circle>

                    </Grid>

                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid container item><h2>NoSQL</h2></Grid>


                    <Grid item xs>

                      <Circle percentaje={65} color={"#34c740"} >
                        <h4>MongoDB</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={40} color={"#c7b961"} >
                        <h4>ElasticSearch</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={40} color={"#c3f0fa"} >
                        <h4>Cassandra</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={0} color={"#cf472b"} >
                        <h4>Redis</h4>
                      </Circle>

                    </Grid>

                  </Grid>


                  <Grid container item spacing={3}>
                    <Grid container item><h2>Java</h2></Grid>
                    <Grid container item spacing={3}>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={95} color={"#bad2f5"} >
                        <h4>{language === Languages.español ? "Escritorio" : "Desktop"}</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={80} color={"#bcf757"} >
                        <h4>Android</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={45} color={"#bcf757"} >
                        <h4>Spring</h4>
                      </Circle>

                    </Grid>
                    <Grid item xs>

                      <Circle percentaje={15} color={"#b39c72"} >
                        <h4>Hibernate</h4>
                      </Circle>

                    </Grid>
                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid container item><h2>Git</h2></Grid>
                    <Grid item xs>
                      <Circle percentaje={95} color={"#bad2f5"} >
                        <h4>BitBucket</h4>
                        <h4>Jira</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={80} color={"#2b2925"} >
                        <h4>GitHub</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#cf472b"} >
                        <h4>GitLab</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs></Grid>

                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid container item><h2>{language === Languages.español ? "Arquitectura" : "Architecture"}</h2></Grid>
                    <Grid item xs>
                      <Circle percentaje={65} color={"#fcbe53"} >
                        <h4>{language === Languages.español ? "Monolítico" : "Monolitic"}</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={95} color={"#b6f0ed"} >
                        <h4>{language === Languages.español ? "N-Capas" : "N-Layer"}</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={70} color={"#bad2f5"}>
                        <h4>{language === Languages.español ? "Microservicios" : "Microservices"}</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#bad2f5"}>
                        <h4>SOA</h4>
                      </Circle>
                    </Grid>

                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#cf472b"} >
                        <h4>Serverless</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#cf472b"} >
                        <h4>Service Mesh</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#2b2925"} >
                        <h4>Twelve Factor Apps</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs></Grid>
                  </Grid>


                  <Grid container item spacing={3}>
                    <Grid container item><h2>{language === Languages.español ? "Principios de diseño y desarrollo" : "Design and Development Principles"}</h2></Grid>
                    <Grid item xs>
                      <Circle percentaje={80} color={"#fcbe53"} >
                        <h4>{language === Languages.español ? "Patrones de diseño" : "Design Patterns"}</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={95} color={"#cf472b"} >
                        <h4>MVC</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#b6f0ed"} >
                        <h4>DDD</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#bad2f5"}>
                        <h4>{language === Languages.español ? "Desarrollo guiado por pruebas" : "Test Driven Development"}</h4>
                      </Circle>
                    </Grid>

                  </Grid>
                  <Grid container item spacing={3}>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#bad2f5"}>
                        <h4>CQRS</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs>
                      <Circle percentaje={0} color={"#bad2f5"}>
                        <h4>Event Sourcing</h4>
                      </Circle>
                    </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs></Grid>
                  </Grid>
                  <ThemeProvider theme={theme}>
                    <Grid container item><h2>{language === Languages.español ? "Información" : "Information"}</h2></Grid>
                    <Grid container item spacing={1.5} className='mx-5 pt-2'>
                      <Grid item xs={12} style={{ position: "relative" }}>

                        <BorderLinearProgress variant="determinate" value={49} color={"trainee"} />
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "3%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          0%
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "white",
                            fontWeight: "bold",
                            top: 0,
                            left: "20%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          Trainee
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "47%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          49%
                        </Typography>
                      </Grid>
                      <Grid item xs={12} style={{ position: "relative" }}>

                        <BorderLinearProgress variant="determinate" value={74} color={"junior"} />
                        <Typography
                          style={{
                            position: "absolute",
                            color: "white",
                            fontWeight: "bold",
                            top: 0,
                            left: "60%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          Junior
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          50%
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "72%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          74%
                        </Typography>
                      </Grid>
                      <Grid item xs={12} style={{ position: "relative" }}>

                        <BorderLinearProgress variant="determinate" value={89} color={"semisenior"} />
                        <Typography
                          style={{
                            position: "absolute",
                            color: "white",
                            fontWeight: "bold",
                            top: 0,
                            left: "82%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          SSr
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "75%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          75%
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "88%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          89%
                        </Typography>
                      </Grid>
                      <Grid item xs={12} style={{ position: "relative" }}>

                        <BorderLinearProgress variant="determinate" value={100} color="senior" />
                        <Typography
                          style={{
                            position: "absolute",
                            color: "white",
                            fontWeight: "bold",
                            top: 0,
                            left: "94%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          Sr
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "90%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          90%
                        </Typography>
                        <Typography
                          style={{
                            position: "absolute",
                            color: "black",
                            top: 0,
                            left: "98%",
                            transform: "translateX(-50%)",
                          }}
                        >
                          100%
                        </Typography>
                      </Grid>
                    </Grid>
                  </ThemeProvider>
                </Grid>
              </Box>

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section >
  )
}
