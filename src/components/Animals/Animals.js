import React from 'react';
import './Animals.css';

class Animals extends React.Component {
  render () {
    const {animals} = this.props;
    const indivisualAnimal = animals.map((animal) => {
      return (
        // <div key={animal.id}>{animal.name}</div>
        <div className="animal-card col-sm-6 col-md-4" key={animal.id}>
          <div className="thumbnail">
            <img src={animal.imgUrl} alt="..." />
            <div className="caption">
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="Animals">
        <div className="row">
          {indivisualAnimal}
        </div>
      </div>
    );
  };
};

export default Animals;
