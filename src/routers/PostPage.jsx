import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { pbClient } from "../api/pocketbase";
import { useRef } from "react";

const PostPage = () => {
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const commentField = useRef(null);

  const { id } = useParams();

  const fetchComments = () => {
    pbClient
      .collection("comments")
      .getFullList()
      .then((comments) => setComments(comments));
  };

  // fetch specific post
  useEffect(() => {
    pbClient
      .collection("posts")
      .getOne(id)
      .then((post) => setPost(post));
  }, []);

  // after the post is fetched, fetch the comments next
  useEffect(() => {
    fetchComments();
  }, []);

  // post a new comment
  const handleCreateComment = async () => {
    const content = commentField.current.value;
    const comment = {
      content,
      username: "Unknown",
      post: id,
    };
    await pbClient.collection("comments").create(comment);
    alert("Comment created");
    fetchComments();
  };

  return (
    <div className="px-16 py-12 w-full h-full">
      {post && (
        <div className="bg-white w-full h-full flex flex-col gap-y-4 px-8 py-4">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-4xl font-semibold">{post.title}</h1>
            <h5>posted by: {post.username}</h5>
          </div>
          <p>{post.content}</p>
        </div>
      )}
      {/* Create new comment form */}
      <div className="my-8 flex flex-col gap-y-2">
        <h1 className="text-white font-semibold text-lg">Comment:</h1>
        <textarea ref={commentField} className="w-full h-24"></textarea>
        <button
          onClick={handleCreateComment}
          className="bg-white w-24 border-blue-400 border-2 rounded-md"
        >
          Comment
        </button>
      </div>
      <h1 className="text-white">Comments: </h1>
      {/* Display comments */}
      <div className="flex flex-col gap-y-2">
        {comments?.map((comment) => {
          return (
            <div className="bg-white px-8 py-4 flex flex-col gap-y-2 rounded-md">
              <p className="text-lg">{comment.content}</p>
              <span className="text-sm">Posted by: {comment.username}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostPage;
