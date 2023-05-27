import { pbClient } from "./pocketbase";

/**
 *
 * @param {Object} post
 * @param {string} post.title
 * @param {string} post.content
 * @param {string} post.username
 */
const createPost = async (post) => {
  await pbClient.collection("posts").create(post);
};

const getAllPosts = async () => {
  return await pbClient.collection("posts").getFullList();
};

export const PostController = {
  createPost,
  getAllPosts,
};
