// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";


const CommentSection = props => {
  // Add state for the comments
  const [commentData] = useState(props.comments);
  // console.log(commentData);
  // console.log(props);
  
  return (
    <div>
      {/* map through the comments data and return the Comment component */
       commentData.map( (comment) =>(
          <div className='comment-tunnel' key={Date.now()} >
            <Comment comment={comment}/>
          </div>  
      ))
      }
     <CommentInput/>
    </div>
  );
};

export default CommentSection;
