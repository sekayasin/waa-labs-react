import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";
import "./PostDetails.css";
const PostDetails = (props) => {
  const [postDetail, setPostDetail] = useState({});
  const [postContent, setPostContent] = useState({});
  const [postComment, setPostComment] = useState([]);

  const getPostData = () => {
    let endpoints = [
      "http://localhost:8080/api/v1/posts/" + props.postId,
      "http://localhost:8080/api/v1/posts/" + props.postId + "/content",
      "http://localhost:8080/api/v1/posts/" + props.postId + "/comments",
    ];
    Promise.all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        ([
          { data: post_detials },
          { data: post_content },
          { data: post_comments },
        ]) => {
          setPostDetail(post_detials);
          setPostContent(post_content);
          setPostComment(post_comments);
        }
      )
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getPostData();
  }, [props.postId]);

  const deleteSelectedPost = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/posts/" + id)
      .then((response) => {
        // re-fetch
        props.changeFetchFlag();
      })
      .catch((err) => console.log(err.message));
  };

  let postDetailsDisplay = null;

  if (props.postId !== 0) {
    postDetailsDisplay = (
      <div className="PostDetailsContent" key={postDetail.id}>
        <h1>{postDetail.title}</h1>
        <h2>{postDetail.author}</h2>
        <p>{postContent.content}</p>
        <a
          href="#edit"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          edit
        </a>
        <a
          href="#delete"
          onClick={(event) => {
            event.preventDefault();
            deleteSelectedPost(props.postId);
          }}
        >
          delete
        </a>
        <div>
          <h3>Comments</h3>
          <div>
            {postComment !== null
              ? postComment.map((comment) => {
                  return <Comment comment={comment.comment} />;
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
  return postDetailsDisplay;
};

export default PostDetails;
