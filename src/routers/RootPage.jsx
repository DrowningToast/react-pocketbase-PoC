import { useRef } from "react";
import { pbClient } from "../api/pocketbase";
import Post from "../components/Post";
import { useState } from "react";
import { useEffect } from "react";
import CreatePostForm from "../components/CreatePostForm";

const RootPage = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    pbClient
      .collection("posts")
      .getFullList()
      .then((posts) => setPosts(posts));
  };

  // Fetch posts
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 px-24 py-12 w-full min-h-screen ">
      <CreatePostForm />
      <div className="flex flex-col gap-y-4 mt-12">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              fetchPosts={fetchPosts}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RootPage;
