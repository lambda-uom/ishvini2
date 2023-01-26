import React from "react";
import { useParams } from "react-router-dom";
import users from "../data/Users.json";
import NavBar from "../components/NavBar";

const EditAllocate = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 bg-dark text-white">
          Allocate Chapters
        </div>
        <br></br> <br></br>
        <table className="table">
          {/* <thead>
              <tr>
                <th scope="col">Job title</th>
  
                <th scope="col">
                  <center>Actions</center>
                </th>
              </tr>
            </thead> */}
          <tbody>
            {users.map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                    ></input>
                    <label class="form-check-label">{item.chapter}</label>
                  </tr>
                </>
              );
            })}
            <input
              type="submit"
              className="btn btn-primary"
              value="Edit Allocated chapter"
            ></input>{" "}
            &nbsp;
            <input
              type="reset"
              className="btn btn-warning"
              value="Reset"
            ></input>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default EditAllocate;
