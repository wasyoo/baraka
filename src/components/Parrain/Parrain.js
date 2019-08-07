import React from 'react';
import './parrain.css';
import H2 from '../shared/titles/H2';

export default function Parrain() {
  return (
    <div className="parrain-section">
      <H2 title="Pour vous, Parrain:"/>
      <div className="parrain-content">
        <div className="parrain-gift-msg">
          <strong>
            5 cadeaux <br />
            A GAGNER
          </strong>
        </div>
        <div className="parrain-gift">
          <div className="parrain-gift-card">
            <h3>1<sup>er</sup>: billet d'avion</h3>
            <small>aller-retour vers la destination du filleul</small>
          </div>
          <img src="/img/avion.png" alt="avion"/>
        </div>
        <div className="parrain-gift">
          <div className="parrain-gift-card">
            <h3>2<sup>éme</sup>: 2 nitées</h3>
            <small>por 2 personnes dans un hôtel en Tunisie</small>
          </div>
          <img src="/img/pc1.png" alt="avion"/>
        </div>
        <div className="parrain-gift">
          <div className="parrain-gift-card">
            <h3>3<sup>éme</sup>,4<sup>éme</sup>,5<sup>éme</sup>: Weekend</h3>
            <small>por 2 personnes dans un hôtel en Tunisie</small>
          </div>
          <img src="/img/pc2.png" alt="avion"/>
        </div>
      </div>
    </div>
  )
}
