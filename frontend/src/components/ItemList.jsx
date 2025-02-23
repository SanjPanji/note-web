import { useState, useEffect } from "react";
import { a } from "../services/axiosInstance";

import Item from "./item";

function ItemList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await a.get('items/');
                const filteredPosts = res.data.filter(post => !post.is_archived); // ✅ Фильтрация
                setPosts(filteredPosts);
            } catch (e) {
                console.log(e);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className="items-list">
            {posts.length > 0 ? (
                posts.map((post) => <Item key={post.id} post={post} />)
            ) : (
                <p>Нет данных</p>
            )}
        </div>
    );
}

export default ItemList;
