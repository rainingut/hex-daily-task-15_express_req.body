const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  /* 加入欄位驗證 */
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;