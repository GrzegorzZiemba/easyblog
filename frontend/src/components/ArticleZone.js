import React from 'react';
import { useParams } from 'react-router-dom';

function ArticleZone() {
  let { id } = useParams();


  return (
    <div className="articles">
    <h2>Article Title</h2>
    <p>This is an article!</p>
  </div>
  );
}

export default ArticleZone;
