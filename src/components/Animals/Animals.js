import React from 'react';
import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animals} = this.props;
    console.log(animals);
    const indivisualAnimal = animals.map((animal) => {
      return (
        <div key={animal.id}>{animal.name}</div>
      );
    });
    return (
      <div className="Animals">
        {indivisualAnimal}
      </div>
    );
  };
};

export default Animals;
