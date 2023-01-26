import React from "react";
import NavBar from "../components/NavBar";
import users from "../data/Users.json";
import { Link } from "react-router-dom";
const AllocateChapter = () => {
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
                    <td>{item.jobtitle}</td>

                    <td>
                      <Link
                        to="/editallocatechapter"
                        className="btn btn-primary mr-1"
                      >
                        Add Chapters
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default AllocateChapter;
