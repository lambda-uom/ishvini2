import React from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const AddJobtitle = () => {
  function successmsg(e) {
    e.preventDefault();
    swal({
      icon: "success",
      text: "Successfully created",
    });
  }
  return (
    <div className="container">
      <div className="form-control mt-3 bg-dark text-white">
        Create Jobtitle
      </div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={successmsg}>
          <div className="field">
            <label class="ml-5 createchap">Jobtitle Name</label>
            <div className="control">
              <input
                type="text"
                name="cname"
                className="input my-3 ml-5"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <br></br>
          <label class="ml-5 createchap">Suitable Departments</label>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Finance</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Development</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""></input>
            <label class="form-check-label">Human Resource</label>
          </div>
          <br></br>
          <div className="control">
            <button
              type="submit"
              className="btn btn-primary mr-1 column is-half text-white"
            >
              Save
            </button>
          </div>

          <div>
            <img src={image4} draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default AddJobtitle;
