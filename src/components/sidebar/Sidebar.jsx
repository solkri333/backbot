import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("cat") || "All"; // Get selected category from URL

  useEffect(() => {
    fetch("https://botback-721508493198.us-central1.run.app/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result && Array.isArray(data.result)) {
          setCategories(data.result);
        } else {
          console.error("Invalid response:", data);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/?cat=${category}`);
  };

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`sidebarListItem ${selectedCategory === category ? "selected" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              <Link className="link" to={`/?cat=${category}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
