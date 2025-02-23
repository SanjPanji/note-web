import { READ } from "../services/consts";
import { formatDate } from "../services/formatDate";
import { Link } from "react-router-dom";

function Item({post}) {
    return (
<Link to={READ.substring(0, READ.length - 3) + post.id} className="item">
    <p className="item-title">{post.content.slice(0,30)+"..."}</p>
    <p className="item-date">{formatDate(post.created_at)}</p>
    </Link>
    );
}

export default Item;