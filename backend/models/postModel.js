const mongoose = require('mongoose')



const postSchema = new mongoose.Schema({
    title: String,
    date: Date,
    image: String,
    description: String,
    code: String,
    keywords: [
        {type: String}
    ]
  });
  
  const PostModel = mongoose.model('post', postSchema);
  

module.exports = PostModel