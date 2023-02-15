import Alert from "../../ui/Alert";

const AddUsersForm = () => {
  return (
    <div>
      <h1>Add new User</h1>
      <Alert theme="danger">You got an error upon submitting!</Alert>
      <form>

        <h3>Info</h3>
        <div className="form-group form-group-row">
          <div className="form-group-column">
            <label>First Name</label>
            <input className="form-control" type="text" />
            <span className="form-error"><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> I am an error message...</span>
          </div>
          
          <div className="form-group-column">
            <label>Last Name</label>
            <input className="form-control" type="text" />
          </div>
        </div>
        
        <div className="form-group form-group-row">
          <div className="form-group-column">
            <label>Email</label>
            <input className="form-control" type="email" />
          </div>
          
          <div className="form-group-column">
            <label>Website</label>
            <input className="form-control" type="url" />
          </div>
          
          <div className="form-group-column">
            <label>Birthdate</label>
            <input className="form-control" type="date" />
          </div>
        </div>

        <div className="form-group form-group-row">
          <div className="form-group-column">
            <label>Contact Number</label>
            <input className="form-control" type="text" />
          </div>
          
          <div className="form-group-column">
            <label>Phone Number (for GCash or whatever...)</label>
            <input className="form-control" type="text" />
          </div>
        </div>

        <div className="form-group">
          <label>Bio</label>
          <textarea className="form-control"></textarea>
        </div>

        <h3>Address</h3>
        <div className="form-group form-group-row">          
          <div className="form-group-column">
            <label>Street</label>
            <input className="form-control" type="text" />
          </div>
          
          <div className="form-group-column">
            <label>Barangay</label>
            <input className="form-control" type="text" />
          </div>
        </div>

        <div className="form-group form-group-row">
          <div className="form-group-column">
            <label>City</label>
            <input className="form-control" type="text" />
          </div>

          <div className="form-group-column">
            <label>Region</label>
            <input className="form-control" type="text" />
          </div>
          
          <div className="form-group-column">
            <label>Postal Code</label>
            <input className="form-control" type="text" />
          </div>
        </div>


        <div className="spacer"></div>
        <div className="form-group">
          <button className="btn btn-info btn-lg btn-block">Add</button>
        </div>
        <div className="spacer spacer-lg"></div>

      </form>
    </div>
  );
};

export default AddUsersForm;