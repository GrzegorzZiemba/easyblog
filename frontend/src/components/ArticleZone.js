import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArticleZone() {
  let { id } = useParams();
  useEffect(()=>{
    const data =  axios.get('http://localhost:5005/posts').then(res => console.log(res.data.posts))
    
    console.log(data)
    console.log(data?.data)
  }, [])


  return (
    <div className="articles">
    <h2>Article Title</h2>
    <p>This is an article!</p>
  </div>
  );
}

export default ArticleZone;
