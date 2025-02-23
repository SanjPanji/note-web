import { useState, useEffect } from "react";

function ThemeBtn() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
    return (
        <div className="theme">
        <button onClick={toggleTheme} className="theme-btn">
            {theme === "light" ? "🌙" : "☀️"}
        </button>
        </div>
    );
}

export default ThemeBtn;