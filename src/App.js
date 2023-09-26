import React from 'react';
import './App.css';
//import CharacterList from './components/Molecules/List';
import Card from './Molecules/Cards';
import cilian from './img/cilian.jpeg';
import arthur from './img/paul.jpeg';
import joe from './img/joe.jpeg';
import helen from './img/Helen.jpeg';
import sophie from './img/Sophie.jpeg';
import sam from './img/sam.jpeg';

function App() {
  const characters = [
    {
      name: 'Thomas Shelby',
      imageSrc: cilian,
      description: 'Es el líder de la familia y el personaje principal de la serie. Es un hombre astuto y carismático que dirige las operaciones de la banda criminal Peaky Blinders.',
    },
    {
      name: 'Arthur Shelby',
      imageSrc: arthur,
      description: ' Es el hermano mayor de Thomas y uno de los miembros más antiguos de la banda. A menudo actúa como el enforcer de la familia.',
    },
    {
      name: 'John Shelby',
      imageSrc: joe,
      description: 'Es otro hermano de Thomas y es conocido por su temperamento volátil. Se involucra en actividades criminales y es miembro activo de los Peaky Blinders.',
    },
    {
      name: 'Polly Gray',
      imageSrc: helen,
      description: 'Es tía de Thomas, Arthur y John, y una figura materna para ellos. También es una de las mentes más astutas de la familia y desempeña un papel importante en la toma de decisiones.',
    },
    {
      name: 'Ada Shelby',
      imageSrc: sophie,
      description: 'Es la hermana de Thomas y es la más alejada de las actividades criminales de la familia. A lo largo de la serie, se involucra en movimientos políticos y sociales.',
    },
    {
      name: 'Campbell',
      imageSrc: sam,
      description: 'El personaje de Campbell es conocido por su enfoque implacable en la persecución de la familia Shelby y su voluntad de hacer lo que sea necesario para lograr su misión, incluso si eso significa recurrir a la violencia y la intimidación',
    },
  ];

  return (
    <div className="App">
      <div className="character-card-container">
        {characters.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </div>
    </div>
  );
}

export default App;
