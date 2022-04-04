import React from 'react'
import Comment from './components/Comment.js';
import './app.scss';
import data from './assets/data.json';

export default function App() {
  const commentsList = data.comments.map((comment) => {
   return  <Comment key={comment.id} replies={comment.replies} comment={comment} />
    
  })
  return (
    <div className='app'>
        <section className='comment-section'>
          {
            commentsList
          }
        </section>
    </div>
  )
}
