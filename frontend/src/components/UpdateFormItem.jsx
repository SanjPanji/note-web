import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { a } from "../services/axiosInstance";
import { MAIN } from "../services/consts";
function UpdateFormItem() {
  
  const {id} = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await a.get(`items/detail/${id}/`);
                setContent(res.data.content);
            } catch(e) {
                console.log(e);
            }
        }
        fetchPost();
    },[id]);


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await a.put(`items/post/update/${id}/`, {content});
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
        <button className="submit-btn" type="submit">edit</button>
      </form>
    );
}

export default UpdateFormItem;