import React, { Component } from 'react';
import './App.css';
import Animals from '../components/Animals/Animals';
import Form from '../components/Form/Form';

class App extends Component {
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
