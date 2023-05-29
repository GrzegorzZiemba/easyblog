const mongoose = require('mongoose')



const postSchema = new mongoose.Schema({
    text: String,
    date: Date,
    image: String,
    description: String,
    keywords: [
        {type: String}
    ]
  });
  
  const PostModel = mongoose.model('User', postSchema);
  

module.exports = PostModel