import React from "react";
import image4 from "../../images/1.svg";
import "../../App.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const AddChapter = () => {
  function successmsg(e) {
    e.preventDefault();
    swal({
      icon: "success",
      text: "Successfully created",
    });
  }
  return (
    <div className="container">
      <div className="form-control mt-3 bg-dark text-white">Create Chapter</div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={successmsg}>
          <div className="field">
            <label class="ml-5 createchap">Chapter Name</label>
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
          <div>
            <label class="ml-5 createchap">Suitable Department</label>
            <br></br>
            <br></br>
            <div>
              <div class="dropdown"></div>
            </div>
            <div className="col-md-2">
              <div class="dropdown">
                <button
                  style={{ borderColor: "#87C3E7" }}
                  class="btn form-control btn-light dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Departments
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Human Resource
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Finance
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Development
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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

export default AddChapter;
