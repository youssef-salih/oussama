// routes/postRoutes.js
const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/posts", authMiddleware.verifyToken, postController.getAllPosts);
router.get("/post/:id",authMiddleware.verifyToken, postController.getPostById);
router.post("/posts",authMiddleware.verifyToken, postController.createPost);
router.delete("/posts/:id",authMiddleware.verifyToken, postController.deletePost);
router.patch("/posts/:id",authMiddleware.verifyToken, postController.updatePost);

module.exports = router;
