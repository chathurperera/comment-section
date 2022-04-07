import React from 'react'
import avatarImage from "../assets/avatars/image-amyrobson.png";
import '../components/addCommentSection.scss';

export default function AddCommentSection(props) {
  function showValue(){
    console.log('value:',document.querySelector('#textarea'))
  }
  return (
    <div className='addCommentSection'>
        <img src={avatarImage} alt="" />
        <textarea onChange={showValue} id="textarea" rows={5} placeholder='Add a comment...' > </textarea>
        <button>SEND</button>
    </div>
  )
}
