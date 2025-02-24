import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./topbar.css";
import "../header/header.css";

export default function Topbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`top ${isScrolled ? "scrolled" : ""} ${location.pathname === "/about" ? "aboutPage" : ""}`}>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem compliance">
            <Link className="link" to="/compliance">
              Compliance
            </Link>
          </li>
          <li className="topListItem privacy">
          <Link className="link" to="/privacy-policy">
            Privacy
          </Link>
        </li>
        </ul>
      </div>
    </div>
  );
}
