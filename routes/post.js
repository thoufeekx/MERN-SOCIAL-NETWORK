const express = require("express");
const {getPosts, createPost} = require("../controllers/post");
const router = express.Router();
const validator = require('../validator/index')



router.get("/", getPosts);


//post function get data from frontend and save it to database
router.post("/post", validator.createPostValidator, createPost);




module.exports = router;

