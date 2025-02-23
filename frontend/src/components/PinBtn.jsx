import { useState } from "react";
import { a } from "../services/axiosInstance";

function PinBtn({ post }) {
    const [isArchived, setIsArchived] = useState(post.is_archived);

    const toggleArchive = async () => {
        try {
            const url = isArchived
                ? `items/restore/${post.id}/` // ✅ Исправленный URL
                : `items/archive/${post.id}/`; // ✅ Исправленный URL
            
            await a.post(url); // ✅ Отправляем POST-запрос
            setIsArchived(!isArchived); // ✅ Обновляем состояние
        } catch (error) {
            console.error("Ошибка при изменении статуса:", error);
        }
    };

    return (
        <div className="pin">
            <label>
                <input
                    className="pin-btn"
                    type="checkbox"
                    checked={isArchived}
                    onChange={toggleArchive}
                />
                Pin
            </label>
        </div>
    );
}

export default PinBtn;




