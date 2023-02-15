import React from "react";
import { Link } from "react-router-dom";

const DemoForm = () => {
  return (
    <React.Fragment>
      <h1>Demo Form</h1>
      <Link to="/users/add"><button className="btn btn-primary">Add User Form</button></Link>
      <Link to="/listings/add"><button className="btn btn-primary">Add Listing Form</button></Link>
      <h2>Input Fields</h2>

      <div className="form-group">
        <label>I am a field Label</label>
        <input className="form-control" type="text" placeholder="I am a simple text field" />
      </div>

      <div className="form-group">
        <label>Number Field</label>
        <input className="form-control" type="number" placeholder="I am a number field" />
      </div>

      <div className="form-group">
        <label>Date Field</label>
        <input className="form-control" type="date" />
      </div>

      <div className="form-group">
        <label>Select Field</label>
        <select className="form-control">
          <option>Item 1</option>
          <option>Item 2</option>
          <option>Item 3</option>
        </select>
      </div>

      <div className="form-group">
        <label>Date Field</label>
        <textarea className="form-control"></textarea>
      </div>

      <h2>From Group/columned</h2>
      <div className="form-group form-group-row">
        <div className="form-group-column">
          <label>First Name</label>
          <input className="form-control" type="text" />
        </div>
        
        <div className="form-group-column">
          <label>Last Name</label>
          <input className="form-control" type="text" />
        </div>
      </div>

      {/* Ignore anything beyond this part */}
      <div style={ { height: '100px' } }></div>
    </React.Fragment>
  );
};

export default DemoForm;
