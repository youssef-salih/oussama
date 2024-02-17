// controllers/postController.js
const postModel = require("../models/post");

const getAllPosts = (req, res) => {
  const posts = postModel.getAllPosts();
  res.json(posts);
};

const getPostById = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = postModel.getPostById(postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: `Post ${postId} not found` });
  }
};

const createPost = (req, res) => {
  const newPost = req.body;
  postModel.createPost(newPost);
  res.json({ message: "Post created successfully", post: newPost });
};

const updatePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const updatedFields = req.body;
  postModel.updatePost(postId, updatedFields);
  res.json({
    message: `Post ${postId} updated successfully`,
    updatedFields,
  });
};

const deletePost = (req, res) => {
  const postId = parseInt(req.params.id);
  postModel.deletePost(postId);
  res.json({ message: `Post ${postId} deleted successfully` });
};
module.exports = {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
  getPostById,
};
