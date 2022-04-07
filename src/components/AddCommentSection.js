import React from "react";
import avatarImage from "../assets/avatars/image-amyrobson.png";
import "../components/addCommentSection.scss";

export default function AddCommentSection(props) {
  function showValue() {
    let replyValue = document.getElementById("textarea").value;
    const id = Date.now();
    const replyTo = props.addReplyTo;
    const reply = {
      content: replyValue,
      accountHolder : true,
      createdAt: "Just Now",
      id: id,
      replyingTo: replyTo,
      score: 0,
      user: {
        image: {
          png: "./assets/avatars/image-ramsesmiron.png",
        },
        username: "ramsesmiron",
      },
    };
    console.log(replyValue);
    props.onAddComment((prevData) => [...prevData, {...reply}]);
    props.showAddReply();
  }
  return (
    <div className="addCommentSection">
      <img src={avatarImage} alt="" />
      <textarea id="textarea" rows={5} placeholder="Add a comment...">
        {" "}
      </textarea>
      <button onClick={showValue}>SEND</button>
    </div>
  );
}
