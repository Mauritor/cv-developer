import React, { Fragment } from 'react';
import Experiencia from './components/Experiencia';
import Acerca from './components/Acerca'
import JumboAvatar from './components/JumboAvatar'
import Formacion from './components/Formacion';
import Footer from './components/Footer';

function App() {
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
        <Footer />
        <h2 className="text-primary bg-primary text-center">space</h2>
      </div>
    </Fragment>
  );
}

export default App;
