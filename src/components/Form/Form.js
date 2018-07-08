import React from 'react';
import './Form.css';

class Form extends React.Component {
  render () {
    return (
      <div className="Form">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name:</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="input-name" placeholder="Email" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Image URL:</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" id="input-url" placeholder="Password" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputPassword3" className="col-sm-2 control-label">Description:</label>
            <div className="col-sm-10">
              <textarea type="password" className="form-control" id="input-description" placeholder="Password"></textarea>
            </div>
          </div>
        </form>
      </div>
    );
  };
};

export default Form;
