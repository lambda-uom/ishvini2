import React from "react";
import NavBar from "../components/NavBar";
import users from "../data/Users.json";
import { Link } from "react-router-dom";
const Department = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 bg-dark text-white">Departments</div>
        <br></br>
        {/* <button className="btn btn-outline-success form-control ">
          Add New Department
        </button> */}
        <Link to="/newdep" className="btn btn-outline-success form-control">
          Add New Department
        </Link>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Department name</th>

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
                    <th scope="row">{"D00" + item.id}</th>

                    <td>{item.department}</td>

                    <td>
                      <Link
                        to="/editdep"
                        className="btn btn-outline-primary form-control"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <Link
                        to="/deletedep"
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
export default Department;
