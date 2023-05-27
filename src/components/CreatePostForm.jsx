import { useRef } from "react";
import { PostController } from "../api/PostController";

const CreatePostForm = () => {
  const titleField = useRef(null);
  const contentField = useRef(null);

  const handleCreatePost = async () => {
    const title = titleField.current.value;
    const content = contentField.current.value;
    await PostController.createPost({
      title: title,
      content: content,
      username: "Unknown",
    });
    alert("Post created");
  };

  return (
    <div>
      <label htmlFor="title" className="text-white">
        New Post
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

export default CreatePostForm;
