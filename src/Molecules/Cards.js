import React from 'react';


function Card({ character }) {
  const redirectToURL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  return (
    <div className="Character-card">
      <div className="card-img">
        <img src={character.imageSrc} alt={character.name} />
      </div>
      <h2 className="card-title">{character.name}</h2>
      <p className="card-text">{character.description}</p>
      <a href={redirectToURL} className="ver-mas-button" target="_blank" rel="noopener noreferrer">
        <span>Ver más</span>
      </a>
    </div>
  );
}
export default Card;
