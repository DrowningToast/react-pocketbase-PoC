import { useRef } from "react";
import { pbClient } from "../api/pocketbase";
import { useState } from "react";

const CreatePostForm = () => {
  const [titleValue, setTitle] = useState("");
  const [contentValue, setContent] = useState("");

  const handleCreatePost = async () => {
    pbClient.collection("posts").create({
      title: titleValue,
      content: contentValue,
      username: "Unknown",
    });
    alert("Post created");
  };

  return (
    <div>
      <label htmlFor="title" className="text-white">
        Post Title
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={titleValue}
        className="w-full"
        type="text"
      />
      <textarea
        onChange={(e) => setContent(e.target.value)}
        value={contentValue}
        className="w-full"
      />
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

export default CreatePostForm;
