import image3 from "../../images/3.svg";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const DeleteChapter = () => {
  function deletemsg(e) {
    e.preventDefault();
    swal({
      title: "Confirm",
      text: "Are you absolutely sure you want to permanently delete this chapter and all the data it contains?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Your chapter has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your chapter is safe!");
      }
    });
  }

  return (
    <div className="container">
      <div className="form-control mt-3 bg-dark text-white">Delete chapter</div>
      <div className="columns mt-5">
        <form name="myForm" onSubmit={deletemsg}>
          <div className="field">
            <label class="ml-5 createchap">Reason</label>
            <div className="control">
              <textarea class="Reason" rows="4" cols="100" required></textarea>
            </div>
          </div>

          <div className="control">
            <button
              type="submit"
              className="btn btn-danger mr-1 column is-half text-white"
            >
              Delete
            </button>
          </div>

          <div>
            <img src={image3} draggable={false} alt="this is image" />
          </div>
          <div className="field"></div>
        </form>
      </div>
    </div>
  );
};

export default DeleteChapter;
