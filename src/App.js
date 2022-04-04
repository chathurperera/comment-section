import React from 'react'
import Comment from './components/Comment.js';
import './app.scss';

export default function App() {
  return (
    <div className='app'>
        <section className='comment-section'>
       <Comment />
        </section>
    </div>
  )
}
