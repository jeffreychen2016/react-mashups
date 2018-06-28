import React, { Component } from 'react';
import './App.css';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';
import connection from '../firebaseRequests/connection';

class App extends Component {
  componentDidMount () {
    connection();

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
