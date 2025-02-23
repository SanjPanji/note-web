import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create"
import Edit from "./pages/Edit";
import Delete from "./pages/Delete";
import Read from "./pages/Read";
import AppRouter from "./components/AppRouter";
import ThemeBtn from "./components/ThemeBtn";

import "./assets/styles/style.css"

function App() {
  return (
    <div>
      <ThemeBtn />
      <AppRouter />
    </div>
  );
}



export default App;
