import React, { useState, useRef } from 'react';
import '../styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


const Collapse = () => {
    const [openIndexes, setOpenIndexes] = useState([false, false, false, false]);
    const contentRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    const titles = [
      'Fiabilité',
      'Respect',
      'Service',
      'Sécurité',
    ];
  
    const texts = [
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    ];
  
    const toggleCollapse = (index) => {
      setOpenIndexes((prevOpenIndexes) => {
        const newOpenIndexes = [...prevOpenIndexes];
        newOpenIndexes[index] = !newOpenIndexes[index];
        return newOpenIndexes;
      });
    };
  
    return (
      <div>
        <div className="collapse-wrapper">
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="collapse-container">
              <button className="collapse-button" onClick={() => toggleCollapse(index)}>
                {titles[index]}
                <span className={`icon ${index ? "rotated" : "90"}`}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </span>
              </button>
              <div
                className="collapse-content"
                style={{
                  maxHeight: openIndexes[index] ? `${contentRefs[index].current.scrollHeight}px` : '0px',
                }}
                ref={contentRefs[index]}
              >
                <p>{texts[index]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Collapse;
