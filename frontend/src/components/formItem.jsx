import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { MAIN } from "../services/consts";
function Formitem() {

  const [content, setContent] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await a.post('items/post/', {content});
      navigate(MAIN);
    } catch (err) {
      console.log(err);
    }
  }

    return (
      <form className="form" onSubmit={handleSubmit}>
        <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control" 
            placeholder="write something today....">
            </textarea>
        <button className="submit-btn" type="submit">save</button>
      </form>
    );
}

export default Formitem;