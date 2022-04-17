const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  /* 加入欄位驗證 */
);

const Post = mongoose.model('posts', postSchema);

module.exports = Post;