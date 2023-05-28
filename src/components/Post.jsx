import { useState } from "react";
import PostEdit from "./PostEdit";
import { useNavigate } from "react-router";

const Post = ({ id, title, content, fetchPosts }) => {
  const [isEditing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleClickEdit = (e) => {
    e.stopPropagation();
    setEditing(!isEditing);
  };

  // go to specific post
  const handleViewPost = () => {
    navigate("/post/" + id);
  };

  return (
    <div
      onClick={isEditing ? null : handleViewPost}
      className={`bg-white px-6 py-4 rounded-md relative ${
        isEditing ? "" : "cursor-pointer"
      }`}
      key={id}
    >
      {!isEditing ? (
        <>
          <h2 className="text-2xl">{title}</h2>
          <p>{content}</p>
        </>
      ) : (
        <>
          <PostEdit
            id={id}
            title={title}
            content={content}
            setEditing={setEditing}
            fetchPosts={fetchPosts}
          />
        </>
      )}
      {/* Edit Button */}
      <button
        onClick={handleClickEdit}
        className="bg-white text-black px-2 py-0.5 absolute top-2 right-2 cursor-pointer"
      >
        {isEditing ? "Cancel" : "Edit"}
      </button>
    </div>
  );
};

export default Post;
