const Post = require("../models/post")




exports.getPosts = (req,res) => {
    const posts = Post.find()
    .select("_id title body")
    .then(posts => {
        res.json({posts})
        //If value key have same name just use name
    })
    .catch(err => console.log(err));
};

exports.createPost = (req,res) => {

    const post = new Post(req.body)

    //Data to post on DB comes from frond end with "Req" function

    //console.log("Creating post: ", req.body );

    // post.save((err, result) => {
    //     if (err) {
    //         return res.status(400).json({error: err})
    //     }
    //     res.status(200).json({post: result});
    // } )
  
        post.save().then(result => {
            res.status(200).json({
                post: result
            })
            
        });

};




