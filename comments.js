// Create web server
// Access to database
// Access to model
// Access to route
// Access to controller

// Require express
const express = require('express');
// Create router
const router = express.Router();

// Require controller
const commentController = require('../controllers/commentController');

// Require middleware
const auth = require('../middlewares/auth');

// Require model
const Comment = require('../models/comment');

// Require route
const commentRoute = require('./comment');

// Create route
router.use('/:commentId/comment', commentRoute);

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by id
router.get('/:commentId', commentController.getCommentById);

// Create new comment
router.post('/', auth, commentController.createNewComment);

// Update comment by id
router.put('/:commentId', auth, commentController.updateCommentById);

// Delete comment by id
router.delete('/:commentId', auth, commentController.deleteCommentById);

// Export module
module.exports = router;