import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ id, title, desc, img, date }) {
  return (
    <div className="post" key={id}>
      <img className="postImg" src={img} alt="Post Image" />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/post/${id}`} className="link">{title}</Link>
        </span>
        <hr />
        <span className="postDate">{new Date(date).toLocaleDateString()}</span>
      </div>
      <p className="postDesc">{desc}</p>
    </div>
  );
}
