import { PostController } from "../api/PostController";
import { useEffect } from "react";
import { useState } from "react";
import CreatePostForm from "../components/CreatePostForm";

const RootPage = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts
  useEffect(() => {
    PostController.getAllPosts().then((posts) => setPosts(posts));
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
        })}
      </div>
    </div>
  );
};

export default RootPage;
