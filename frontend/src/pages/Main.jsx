import { useState } from "react";
import { Link } from "react-router-dom";

import ItemList from "../components/ItemList";
import search from "../assets/img's/search.svg"
import down from "../assets/img's/down.svg"
import plus from "../assets/img's/plus.svg"

import PinnedList from "../components/PinnedList";
import { CREATE } from "../services/consts";

function Main() {
  const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="block">
              <div className="up-menu">
                <h1 className="Page-name">Notes</h1>
                  </div>
                  
                  <div className="pinned-items">
                    <div className="pinned">
                    <h3 className="pinned-title">pinned</h3>
                    <button className="pinned-btn" onClick={() => setIsVisible(!isVisible)}>
                    <img className="pinned-img" src={down}/>
                    </button>
                    </div>
                    {isVisible && <PinnedList />}
                  </div>
                  <h3 className="pinned-title">Notes</h3>
                  <ItemList />
                  <Link to={CREATE} className="fixed-bottom-right">
                    <img src={plus} />
                  </Link>
            </div>
    );
}


export default Main;