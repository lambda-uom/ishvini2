import "../App.css";
import image5 from "../images/12.png";

function ProfileOverview() {
  return (
    <div className="App">
      {" "}
      {/* this div is a JSX and we pass the name in the curly braces*/}
      <div className="form-control mt-3 bg-dark text-white">Profile</div>
      <User /> {/* call the User component*/}
    </div>
  );
}

const User = () => {
  {
    /* this is a component*/
  }
  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div
          className="card mt-5"
          style={{ backgroundColor: " rgb(199,227,244)" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-md-2 mt-3"></div>
              <div className="col-md-1 mt-4">
                <img
                  src={image5}
                  alt="companyImage"
                  className="rounded-circle"
                  style={{ width: "100px" }}
                ></img>
              </div>
              <div className="col-md-2 mt-3"></div>
              <div className="col-md-6 mt-3">
                <p className="card-title">Name : Jenny A.T Thomas</p>
                <p className="card-title">Job title : Software developer</p>
                <p className="card-title">Department : Development</p>
                <p className="card-title">User Role : Hired Employee</p>
                <p className="card-title">Email : jenny.thomas@intervest.com</p>
                <p className="card-title">Phone No : +94773550903</p>
                <p className="card-title">DOB : 29/09/1999</p>
                <p className="card-title">Gender : Male</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="column is-half mt-5">
    //   <br></br>
    //   <div className="title">NETS:Profile</div>
    //   <br></br>

    //   <div className="page">
    //     <img
    //       src={image5}
    //       draggable={false}
    //       alt="this is image"
    //       className="img12"
    //     />
    //     <p>Name : Jenny A.T Thomas</p>
    //     <p>Job title : Software developer</p>
    //     <p>Department : Development</p>
    //     <p>User Role : Hired Employee</p>
    //     <p>Email : jenny.thomas@intervest.com</p>
    //     <p>Phone No : +94773550903</p>
    //     <p>DOB : 29/09/1999</p>
    //     <p>Gender : Male</p>
    //   </div>
    // </div>
  );
};

export default ProfileOverview;
