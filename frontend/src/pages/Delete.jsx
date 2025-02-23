import { useNavigate, useParams } from "react-router-dom";
import back from "../assets/img's/back-btn.svg";
import { a } from "../services/axiosInstance";
import { MAIN, READ } from "../services/consts";
import { Link } from "react-router-dom";


function Delete () {

  const {id} = useParams();
  const navigate = useNavigate();
  const postId = Number(id);
  
  async function hadnleDelete() {
    try {
      await a.delete(`items/delete/${id}/`);
      navigate(MAIN)
    } catch(e) {
      console.log(e);
    }
  }

    return (
        <div className="block">
        <div className="back">
          <Link to={READ.substring(0, READ.length - 3) + postId} className="back-btn">
            <img className="back-btn-img" src={back} />
          </Link>
        </div>
        <div className="up-menu">
          <h1 className="Page-name">Delete note?</h1>
        </div>
        <p className="description">are you sure you want delete this?</p>
        <button onClick={hadnleDelete} className="submit-btn-delete" type="submit">delete</button>
      </div>
    );
}

export default Delete;