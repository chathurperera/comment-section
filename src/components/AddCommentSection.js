import React from 'react'
import avatarImage from "../assets/avatars/image-amyrobson.png";
import '../components/addCommentSection.scss';

export default function AddCommentSection() {
  return (
    <div className='addCommentSection'>
        <img src={avatarImage} alt="" />
        <textarea  id="" rows={5} placeholder='Add a comment...' ></textarea>
        <button>SEND</button>
    </div>
  )
}
