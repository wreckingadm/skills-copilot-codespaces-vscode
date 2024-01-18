// Create web server with express
// Create routes for comments
// Create method to get comments from database
// Create method to post comments to database
// Create method to update comments in database
// Create method to delete comments from database
// Export router

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get comments from database
router.get('/comments', function(req, res, next) {
    Comment.find(function(err, comments) {
        if (err) {
            res.send(err);
        } else {
            res.json(comments);
        }
    });
});

// Post comments to database
router.post('/comments', function(req, res, next) {
    let newComment = new Comment({
        title: req.body.title
    });
    // Rest of the code...
});
