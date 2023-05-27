import { useRef } from "react";
import { pbClient } from "../api/pocketbase";

const RootPage = () => {
  const titleField = useRef(null);
  const contentField = useRef(null);

  const handleCreatePost = async () => {
    const title = titleField.current.value;
    const content = contentField.current.value;
    // Post object
    const post = {
      title: title,
      content: content,
      username: "Unknown",
    };
    // upload the post
    await pbClient.collection("posts").create(post);
    alert("Post created");
  };

  return (
    <div className="flex flex-col items-center gap-y-2 px-24 py-12 w-full min-h-screen ">
      <label htmlFor="title" className="text-white">
        Post's Title
      </label>
      <input className="w-full" type="text" ref={titleField} />
      <textarea className="w-full" ref={contentField} />
      <button
        onClick={handleCreatePost}
        className="border-2 border-white text-white px-8 w-full"
        type="button"
      >
        Post
      </button>
    </div>
  );
};

export default RootPage;
