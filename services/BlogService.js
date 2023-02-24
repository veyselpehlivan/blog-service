const BlogModel = require("../models/Blog");
 
exports.getAllBlogs = async () => {
  return await BlogModel.find();
};
 
exports.createBlog = async (blog) => {
  return await BlogModel.create(blog);
};
exports.getBlogById = async (id) => {
  return await BlogModel.findById(id);
};

exports.getBlogByUserId = async (userId) => {
  return await BlogModel.find({userId: userId});
};
 
exports.updateBlog = async (id, blog) => {
  return await BlogModel.findByIdAndUpdate(id, blog);
};
 
exports.deleteBlog = async (id) => {
  return await BlogModel.findByIdAndDelete(id);
};