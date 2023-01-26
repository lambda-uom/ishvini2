import React from "react";
import NavBar from "../components/NavBar";
import users from "../data/Users.json";
const PermanentDeleteChapter = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="container">
        <div className="form-control mt-3 bg-dark text-white">
          Permanent Delete Chapters
        </div>
        <br></br> <br></br>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>

              <th scope="col">Chapter name</th>
              <th scope="col">Related department</th>

              <th scope="col">
                <center>Action</center>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <>
                  <tr className="align-middle">
                    <th scope="row">{"C00" + item.id}</th>

                    <td>{item.chapter}</td>
                    <td>{item.department}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger form-control"
                      >
                        Delete
                      </button>
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
export default PermanentDeleteChapter;
