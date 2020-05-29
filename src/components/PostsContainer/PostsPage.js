//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
// import CommentSection from '../CommentSection/CommentSectionContainer'
import Post from "./Post";
import "./Posts.css";
// import data 
import data from "../../dummy-data";
// console.log(data)
const PostsPage = (props) => {
  // set up state for your data
  const [postData] = useState(data);
  // console.log(postData);
  // console.log(props);
  
  
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
        postData.map( (post) =>(
          <div className='post-tunnel' key={post.timestamp}>
            <Post post={post}/>
          </div>
        ))
     }
    </div>
  );
};

export default PostsPage;
