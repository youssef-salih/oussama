// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/posts", postController.getAllPosts);
router.get("/post/:id", postController.getPostById);
router.post("/posts", postController.createPost);
router.delete("/posts/:id", postController.deletePost);
router.patch("/posts/:id", postController.updatePost);

module.exports = router;
