import React from "react";
import NavBar from "../components/NavBar";
import users from "../data/Users.json";
import { Link } from "react-router-dom";
const Jobtitle = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 bg-dark text-white">Jobtitles</div>
        <br></br>
        <Link to="/newjob" className="btn btn-outline-success form-control">
          Add New Jobtitle
        </Link>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Jobtitle name</th>

              <th scope="col">
                <center>Actions</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    <th scope="row">{"J00" + item.id}</th>

                    <td>{item.jobtitle}</td>

                    <td>
                      <Link
                        to="/editjob"
                        className="btn btn-outline-primary form-control"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/deletejob"
                        className="btn btn-outline-danger form-control"
                      >
                        Delete
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
export default Jobtitle;
