import back from "../assets/img's/back-btn.svg";
import Formitem from "../components/formItem";
import { Link } from "react-router-dom";
import { MAIN } from "../services/consts";

function Create() {
    return (
        <div className="block">
      <div className="back">
        <Link to={MAIN} className="back-btn">
          <img className="back-btn-img" src={back} />
        </Link>
      </div>
      <h1 className="Page-name">Make note</h1>
      <Formitem />
    </div>
    );
}

export default Create;