import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("cat") || "All"; // Default to "coffee" if no category is selected

  useEffect(() => {
    fetch("https://botback-721508493198.us-central1.run.app/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Invalid response:", data);
          setPosts([]);
        }
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, [category]); // Refetch when `category` changes

  return (
    <div className="posts">
      {posts.length === 0 ? (
        <p>...</p>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </div>

  );
}
