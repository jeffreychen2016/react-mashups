import React, { Component } from 'react';
import './App.css';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';
import connection from '../firebaseRequests/connection';
import animalRequest from '../firebaseRequests/animalRequest';

class App extends Component {
  state = {
    animals: [],
  }

  componentDidMount () {
    connection();
    animalRequest()
      .then((animalsArray) => {
        this.setState({animals: animalsArray});
      })
      .catch((err) => {
        console.error('Error getting animals:', err);
      });
  };

  render () {
    return (
      <div className="App">
        <div className="col-md-6">
          <Animals animals={this.state.animals}/>
        </div>
        <div className="col-md-6">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
