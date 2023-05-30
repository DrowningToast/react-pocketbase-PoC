import { useRef } from "react";
import { pbClient } from "../api/pocketbase";
import { useForm } from "react-hook-form";
import { atom, useAtom } from "jotai";

export const testAtom = atom(0);

const CreatePostForm = () => {
  const { register, handleSubmit } = useForm();

  const [test, setTest] = useAtom(testAtom);

  console.log(test);

  const handleCreatePost = async (data) => {
    // console.log(data);
    pbClient.collection("posts").create({
      title: data.title,
      content: data.content,
      username: "Unknown",
    });
    alert("Post created");
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
      ></input>
    </form>
  );
};

export default CreatePostForm;
