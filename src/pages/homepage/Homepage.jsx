import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation(); // Keeps track of URL changes

  return (
    <>
      <Header />
      <div className="home">
        <Posts /> {/* This will automatically change when the URL changes */}
        <Sidebar />
      </div>
    </>
  );
}
