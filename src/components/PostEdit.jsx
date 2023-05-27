import { useEffect } from "react";
import { useRef } from "react";
import { pbClient } from "../api/pocketbase";

const PostEdit = ({ id, title, content, setEditing }) => {
  const titleField = useRef(null);
  const contentField = useRef(null);

  useEffect(() => {
    titleField.current.value = title;
    contentField.current.value = content;
  }, [title, content]);

  const handleUpdatePost = () => {
    const updatedTitle = titleField.current.value;
    const updatedContent = contentField.current.value;
    pbClient
      .collection("posts")
      .update(id, { title: updatedTitle, content: updatedContent });
    alert("Post Edited");
    setEditing(false);
  };

  return (
    <div className="flex flex-col gap-y-2 relative">
      <h1 className="text-4xl font-semibold">Edit Mode</h1>
      <input
        onChange={handleUpdatePost}
        className="border-2 border-black"
        ref={titleField}
      />
      <textarea className="border-2 border-black" ref={contentField} />
      <button
        onClick={handleUpdatePost}
        className="bg-blue-500 text-white font-semibold border-2 border-white"
      >
        Save
      </button>
    </div>
  );
};

export default PostEdit;
