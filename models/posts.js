const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
  /* 加入欄位驗證 */
  {
    title : {
      type: String,
      required: [true, `標題必填`]
    },
    content: {
      type: String,
      required: [true, '內文必填']
    },
    likes: {
      type: Number,
      default: 0
    },
    comments: {
      type: Number,
      default: 0
    },
    tags: {
      type: [String],
      default: []
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;