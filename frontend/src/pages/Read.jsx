import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { a } from "../services/axiosInstance";
import back from "../assets/img's/back-btn.svg";
import edit from "../assets/img's/edit.svg";
import create from "../assets/img's/plus.svg";
import trash from "../assets/img's/trash.svg";
import Pinbtn from "../components/PinBtn";
import { CREATE, DELETE, MAIN, UPDATE } from "../services/consts";
import { Link } from "react-router-dom";

function Read() {
  const { id } = useParams();
  const postId = Number(id); // 🔹 Приводим к числу
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await a.get(`items/detail/${postId}/`);
        setPost(res.data);
        console.log("Полученные данные:", res.data); // 🔹 Проверяем, что приходит
      } catch (e) {
        console.log("Ошибка при запросе:", e);
      }
    }
    fetchPost();
  }, [postId]);

  if (!post) return <p>Загрузка...</p>;

  return (
    <div className="block">
      <div className="back">
        <Link to={MAIN} className="back-btn">
          <img className="back-btn-img" src={back} alt="Назад" />
        </Link>
      </div>
      <div className="Page-name">
        <h1 className="Page-name">Reading note</h1>
        <Pinbtn post={post} setPost={setPost} />
      </div>
      <p className="description">{post.content || "Загрузка..."}</p> {/* 🔹 Добавлен fallback */}
      <div className="control-menu">
        <Link to={DELETE.substring(0, DELETE.length - 3) + post.id} className="menu-delete">
          <img src={trash} alt="delete" />
        </Link>
        <Link to={UPDATE.substring(0,UPDATE.length-3) +post.id} className="menu-edit">
          <div>
          <img src={edit} alt="edit" />
          </div>
        </Link>
        <Link to={CREATE} className="menu-create">
          <img src={create} alt="create" />
        </Link>
      </div>
    </div>
  );
}

export default Read;
