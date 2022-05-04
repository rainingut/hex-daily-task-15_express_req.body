const express = require('express');
const router = express.Router();
const Post = require('../models/posts');

router.post('/', async(req, res, next) =>  {
  try {
      /* 請在此填寫答案 */
      // 取得來自 request body 的資料
      const data = req.body;
      // 驗證是否有 content 欄位 -> 若有則使用 mongoose 語法新增資料 -> 回傳成功回應
      //                       -> 未填寫 content 欄位 -> 回傳失敗回應
      if (!data.title.trim() || !data.content.trim()) {
        res.status(400).send({status: false, message: `標題與內容必填`});
        return;
      }
      else {
        const posts = await Post.find();
        await Post.create({...data})
        .then(() => res.send({status: true, message: '新增成功', data: posts}))
        .catch((error) => res.status(400).send({status: true, message: '新增失敗', error}));
        
      }
  
  } catch (error) {
    res.status(400).json({
        status: 'false',
        "message": "欄位未填寫正確，或無此 todo ID"
    });
  }
})


module.exports = router;

