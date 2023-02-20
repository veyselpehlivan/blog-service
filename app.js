const express = require("express");
const app = express();
const mongoose = require("mongoose");
const blogRouter = require("./routes/BlogRoutes");
 
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);

 
//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/easy-notes",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to MongoDB");
      }
    }
  );
  
  app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
  });
  
  module.exports = app;