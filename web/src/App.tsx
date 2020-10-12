import React, { FC } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

const App: FC = () => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Duque de Caxias</strong>
          <span>Rio de Janeiro</span>
        </div>

        <a href="/nothing" className="enter-app">
          <FiArrowRight size={20} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default App;
