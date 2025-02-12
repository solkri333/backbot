import "./header.css";
import { useState, useEffect } from "react";

export default function Header() {
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
    <div className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="headerTitles">
        <span className={`headerTitleSm ${isScrolled ? "scrolled" : ""}`}>
          Everyday
        </span>
        <span className={`headerTitleLg ${isScrolled ? "scrolled" : ""}`}>
          READ
        </span>
      </div>
      <img
        className={`headerImg ${isScrolled ? "hidden" : ""}`}
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
