const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
const postsRouters = require("./routes/api/posts");
const getsRouters = require("./routes/api/gets");

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.htldnwj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("error"));

const PORT = process.env.PORT || 5000;
app.use("/api/posts", postsRouters);
app.use("/api/gets", getsRouters);
app.listen(PORT, () => console.log(`Server run at port ${PORT}`));
