import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { a } from "../services/axiosInstance";
import back from "../assets/img's/back-btn.svg";
import Pinbtn from "../components/PinBtn";
import { Link } from "react-router-dom";
import { MAIN } from "../services/consts";
import UpdateFormItem from "../components/UpdateFormItem";

function Edit() {
    const { id } = useParams(); // Получаем ID из URL
    const [post, setPost] = useState(null); // Храним данные заметки

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await a.get(`items/detail/${id}/`);
                setPost(res.data); // Загружаем данные
            } catch (e) {
                console.error("Ошибка загрузки заметки:", e);
            }
        }
        fetchPost();
    }, [id]);

    return (
        <div className="block">
            <div className="back">
                <Link to={MAIN} className="back-btn">
                    <img className="back-btn-img" src={back} alt="Назад" />
                </Link>
            </div>
            <div className="Page-name">
                <h1 className="Page-name">Edit note</h1>
                {post && <Pinbtn post={post} />} {/* Передаем данные */}
            </div>
            <UpdateFormItem post={post} />
        </div>
    );
}

export default Edit;
