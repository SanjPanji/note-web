import { useState, useEffect } from "react";
import { a } from "../services/axiosInstance";
import Item from "./item";

function PinnedList() {
    const [pinnedPosts, setPinnedPosts] = useState([]);

    useEffect(() => {
        async function fetchPinnedPosts() {
            try {
                const res = await a.get("items/"); // Получаем все заметки
                const pinned = res.data.filter(post => post.is_archived); // Оставляем только закрепленные
                setPinnedPosts(pinned);
            } catch (e) {
                console.error("Ошибка при загрузке закрепленных заметок:", e);
            }
        }
        fetchPinnedPosts();
    }, []);

    return (
        <div className="pinned-list">
            {pinnedPosts.length > 0 ? (
                pinnedPosts.map(post => <Item key={post.id} post={post} />)
            ) : (
                <p>Нет закрепленных заметок</p>
            )}
        </div>
    );
}

export default PinnedList;

