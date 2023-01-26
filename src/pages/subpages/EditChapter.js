import image1 from "../../images/2.svg";
import swal from "sweetalert";
import "../../App.css";
const EditChapter = () => {
  function successmsg(e) {
    e.preventDefault();
    swal({
      icon: "success",
      text: "Successfully changed!",
    });
  }

  return (
    <div className="container">
      <div className="form-control mt-3 bg-dark text-white">Edit Chapter</div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={successmsg}>
          <div className="field">
            <label class="ml-5 createchap">Chapter Name after edit</label>
            <div className="control">
              <input
                type="text"
                name="dname"
                className="input my-3 ml-5"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label class="ml-5 createchap">Reason</label>
            <div className="control">
              <input
                type="text"
                name="dreason"
                className="input my-3 ml-5"
                placeholder="Reason"
                required
              />
            </div>
          </div>

          <div className="control">
            <button
              type="submit"
              className="btn btn-primary mr-1 column is-half text-white"
            >
              Save
            </button>
          </div>

          <div>
            <img src={image1} draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default EditChapter;
