import { useRef } from "react";
import { pbClient } from "../api/pocketbase";
import { useForm } from "react-hook-form";

const CreatePostForm = () => {
  const { register, handleSubmit } = useForm();

  const handleCreatePost = async (data) => {
    pbClient
      .collection("posts")
      .create({
        title: data.title,
        data: data.content,
        username: "Unknown",
      })
      .then((res) => {
        console.log(data);
        alert("Post created");
      });
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreatePost)}
      className="flex flex-col gap-y-2 w-full"
    >
      <label htmlFor="title" className="text-white">
        New Post
      </label>
      <input {...register("title")} className="w-full" type="text" />
      <textarea {...register("content")} className="w-full" />
      <input
        className="border-2 border-white text-white px-8 w-full"
        type="submit"
        value="Post"
      ></input>
    </form>
  );
};

export default CreatePostForm;
