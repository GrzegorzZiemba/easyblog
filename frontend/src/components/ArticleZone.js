import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CodeBlock from './CodeBlock'
function ArticleZone() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const data =  axios.get('http://localhost:5005/posts').then(res => setPosts(res.data.posts))
    
    console.log(data)
    console.log(data?.data)
  }, [])


  return (
    <div className="articles">
    <h2>Article Title</h2>
    <p>This is an article!</p>
    {posts?.map(post=> (
      <>
      <h1>{post.title}</h1>
      <h2>{post.description}</h2>
      <p><CodeBlock>{post.code}</CodeBlock></p>
      <h2>{post.keywords}</h2>
      <h3>{post.date}</h3>
      </>
    ))}
  </div>
  );
}

export default ArticleZone;
