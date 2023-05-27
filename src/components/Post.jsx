import { useState } from "react";
import PostEdit from "./PostEdit";

const Post = ({ id, title, content }) => {
  const [isEditing, setEditing] = useState(false);

  const handleClickEdit = () => {
    setEditing(!isEditing);
  };

  return (
    <div className="bg-white px-6 py-4 rounded-md relative" key={id}>
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
