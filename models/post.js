// models/post.js
const fs = require("fs");

const dataFilePath = "data.json";

const getAllPosts = () => {
  const data = fs.readFileSync(dataFilePath);
  return JSON.parse(data);
};
const getPostById = (postId) => {
  const allPosts = getAllPosts();
  return allPosts.find((post) => post.id === postId);
};
const createPost = (newPost) => {
  const allPosts = getAllPosts();
  allPosts.push(newPost);
  fs.writeFileSync(dataFilePath, JSON.stringify(allPosts));
};
const updatePost = (postId, updatedFields) => {
  const allPosts = getAllPosts();
  const updatedPosts = allPosts.map((post) =>
    post.id === postId ? { ...post, ...updatedFields } : post
  );
  fs.writeFileSync(dataFilePath, JSON.stringify(updatedPosts));
};

const deletePost = (postId) => {
  const allPosts = getAllPosts();
  const updatedPosts = allPosts.filter((post) => post.id !== postId);
  fs.writeFileSync(dataFilePath, JSON.stringify(updatedPosts));
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
};
