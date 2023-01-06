const express = require("express");
const router = express.Router();

//Posts model
const Posts = require("../../models/Posts");

router.post("/", async (req, res) => {
  console.log(req.body.newItem);
  const color = req.body.newItem.color;
  const clothe = req.body.newItem.clothe;
  const warm = req.body.newItem.warm;
  const newPost = new Posts({ color, clothe, warm });
  console.log(newPost);
  try {
    const post = await newPost.save();
    if (!post) throw Error("Something went wrong while saveing the post");
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  //   res.send("Lets create post");
});

module.exports = router;
