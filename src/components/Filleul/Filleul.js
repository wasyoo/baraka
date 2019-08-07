import React from 'react';
import './filleul.css';
import H2 from '../shared/titles/H2';
import Puce from '../shared/Puce/Puce';

export default function Filleul() {
  return (
    <div className="filleul-section">
      <H2 title="Pour vous, Filleul:"/>
      <div className="filleul-content">
        <p>
          <Puce /> 
          <span>
            <strong>50%</strong> de <span>réduction</span> sur les frais du pack yasmine pour la premiére année, pour les TRE qui ont souscris à l'offre spontanement.
          </span>
        </p>
        <p>
          <Puce />
          <span>
            <strong>Gratuité</strong> du pack yasmine pour la premiére année, pour les filleuls TRE ayant souscris site à la recommandation d'un parrain.
          </span>
        </p>
      </div>
    </div>
  )
}
