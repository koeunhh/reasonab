import React from 'react';

import Nav from './components/Nav';
import About from './components/About';
import Program from './components/Program';
import Trial from './components/Trial';

import './styles/app.scss';

function App() {
  return (
      <div className="App">
        <Nav/>
        <div className='content'>
          <About/>
          <Program/>
          <Trial/>
        </div>
      </div>
  );
}

export default App;
