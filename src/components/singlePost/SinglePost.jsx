import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./singlePost.css";

export default function SinglePost() {
  const { id } = useParams();  // ✅ Only extracting `id` now
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch("https://botback-721508493198.us-central1.run.app/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),  // ✅ No category needed
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.title) {
          setPost(data);
        } else {
          console.error("Invalid response:", data);
        }
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
      <img className="singlePostImg" src={post.img} alt="Post Image" />
        <h1 className="singlePostTitle">{post.title}</h1>
        <div className="singlePostInfo">
          <span>
            <b className="singlePostAuthor">
              {new Date(post.date).toLocaleDateString()}
            </b>
          </span>
        </div>
      <p className="singlePostDesc" dangerouslySetInnerHTML={{ __html: post.body }}></p>
      </div>
    </div>
  );
}
