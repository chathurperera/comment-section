import React ,{useState} from 'react'
import Comment from './components/Comment.js';
import './app.scss';
import data from './assets/data.json';
import AddCommentSection from './components/AddCommentSection.js';
import maxblagun from './assets/avatars/image-maxblagun.png';
import ramsesmiron from './assets/avatars/image-ramsesmiron.png';

export default function App() {
  const [comments,setComments] = useState(data.comments);
  console.log(comments)
  const commentsList = comments?.map((comment) => {
   return  <Comment key={comment.id} replies={comment.replies} listUpdate={setComments}  comment={comment} />
    
  })
  return (
    <div className='app'>
        <section className='comment-section'>
          {
            commentsList
          }
        <AddCommentSection  />
        </section>
    </div>
  )
}
