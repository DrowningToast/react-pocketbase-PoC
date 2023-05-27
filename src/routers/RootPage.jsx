import { useRef } from "react";
import { pbClient } from "../api/pocketbase";
import { useState } from "react";
import { useEffect } from "react";
import CreatePostForm from "../components/CreatePostForm";

const RootPage = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts
  useEffect(() => {
    pbClient
      .collection("posts")
      .getFullList()
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-2 px-24 py-12 w-full min-h-screen ">
      <CreatePostForm />
      <div className="flex flex-col gap-y-4 mt-12">
        {posts.map((post) => {
          return (
            <div className="bg-white px-6 py-4 rounded-md" key={post.id}>
              <h2 className="text-2xl">{post.title}</h2>
              <p>{post.content}</p>
            </div>
          );
          S;
        })}
      </div>
    </div>
  );
};

export default RootPage;
