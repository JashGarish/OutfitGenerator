const express = require("express");
const router = express.Router();
//Posts model
const Posts = require("../../models/Posts");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Posts.find({ clothe: id }).exec();
    res.send(data);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  //   res.send("Lets create post");
});

module.exports = router;
