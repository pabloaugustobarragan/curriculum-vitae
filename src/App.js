import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Experience } from './components/Experience';
import { useState } from 'react';

export const Languages = Object.freeze({
  español: 0,
  english: 1
})

function App() {
  const [language, setLanguage] = useState(Languages.español);

  return (
    <div className="App">
      <NavBar language={language} setLanguage={setLanguage}/>
      <Banner language={language}/>
      <Skills language={language}/>
      <Experience language={language}/>
      <Projects language={language}/>
      <Footer language={language}/>
    </div>
  );
}

export default App;
