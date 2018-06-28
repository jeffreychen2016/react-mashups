import React, { Component } from 'react';
import './App.css';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';
import connection from '../firebaseRequests/connection';
import getAnimals from '../firebaseRequests/animals';

class App extends Component {
  componentDidMount () {
    connection();
    getAnimals()
      .then((animalsArray) => {
        console.log(animalsArray);
      })
      .catch((err) => {
        console.error('Error getting animals:', err);
      });
  };

  render () {
    return (
      <div className="App">
        <div className="col-md-6">
          <Animals />
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
