import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Filleul from './components/Filleul/Filleul';
import Parrain from './components/Parrain/Parrain';
import Souscription from './components/Souscription/Souscription';
import PackYasmine from './components/PackYasmine/PackYasmine';

function App() {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Filleul />
      <Parrain />
      <Souscription />
      <PackYasmine />
    </div>
  );
}

export default App;
