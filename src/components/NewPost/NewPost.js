import axios from "axios";
import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../store/PostContext";
import "./NewPost.css";

const NewPost = (props) => {

  const navigate = useNavigate();
  
  const { setSelected, fetchFlag, selectedPost, changeFetchFlag } = useContext(PostContext);

  const newPostForm = useRef();

  const addButtonClicked = (event) => {
      event.preventDefault();
      const formData = newPostForm.current;
      const newPost = {
          title: formData['title'].value,
          author: formData['author'].value,
          content: formData['content'].value
      }
    axios
      .post("http://localhost:8080/api/v1/posts", newPost)
      .then((response) => {
        // re-load
        formData.reset();
        // changeFetchFlag();
        navigate("/posts")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="newPost">
      <h1>Add a Post</h1>
      <form action="#" ref={newPostForm}>
        <label htmlFor="#">Title</label>
        <input type="text" label={"title"} name={"title"}/>

        <label htmlFor="#">Author</label>
        <input type="text" label={"author"} name={"author"}/>

        <label htmlFor="#">Content</label>
        <textarea name={"content"} rows="4" cols="50"></textarea>

        <button onClick={addButtonClicked}>Add Post</button>
      </form>
    </div>
  );
};

export default NewPost;
