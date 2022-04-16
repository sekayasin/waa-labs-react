import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostContext } from "../../store/PostContext";
import Comment from "../Comment/Comment";
import "./PostDetails.css";

const PostDetails = (props) => {
  const [postDetail, setPostDetail] = useState({});
  const [postContent, setPostContent] = useState({});
  const [postComment, setPostComment] = useState([]);

  const naviagate = useNavigate()
  const params = useParams()

  const {setSelected, fetchFlag, selectedPost, changeFetchFlag} = useContext(PostContext)

  const getPostData = () => {
    let endpoints = [
      "http://localhost:8080/api/v1/posts/" + params.id,
      "http://localhost:8080/api/v1/posts/" + params.id + "/content",
      "http://localhost:8080/api/v1/posts/" + params.id + "/comments",
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
  }, [params.id]);

  const deleteSelectedPost = (id) => {
    axios
      .delete("http://localhost:8080/api/v1/posts/" + id)
      .then((response) => {
        // re-fetch
        // changeFetchFlag();
        naviagate("/")
      })
      .catch((err) => console.log(err.message));
  };

  let postDetailsDisplay = null;

  if (params.id) {
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
            deleteSelectedPost(params.id);
          }}
        >
          delete
        </a>
        <div>
          <h3>Comments</h3>
          <div>
            {postComment !== null
              ? postComment.map((comment) => {
                  return <Comment comment={comment.comment} key={comment.id}/>;
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
