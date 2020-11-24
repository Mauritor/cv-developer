import React, { Fragment } from 'react';
import Experiencia from './components/Experiencia';
import Acerca from './components/Acerca'
import JumboAvatar from './components/JumboAvatar'
import Formacion from './components/Formacion';
import Footer from './components/Footer';
import Aptitudes from './components/Aptitudes';
import Skills from './components/Skills';
import ReactGa from 'react-ga'

const initializeAnalytics = () => { 
  ReactGa.initialize("G-XXLE0EPLJ2")
  ReactGa.pageview(window.location.pathname + window.location.search)
}
function App() {
  initializeAnalytics();
  return (
    <Fragment>
      <div className="bg-primary">
        <JumboAvatar />
        <h4 className="text-success text-center">Acerca</h4>
        <Acerca />
        <h4 className="text-success text-center">Formación</h4>
        <Formacion />
        <h4 className="text-success text-center mb-3">Experiencia Previa</h4>
        <Experiencia />
        <h4 className="text-success text-center mb-3">Aptitudes</h4>
        <Aptitudes />
        <h4 className="text-success text-center mb-3">Conocimientos</h4>
        <Skills />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
