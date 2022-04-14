import { useEffect, useState } from "react";
import Post from "../../components/Post/Post";
import axios from "axios"

const DUMMY_POSTS = [
  {
    id: 111,
    title: "Happiness",
    author: "John",
    post_details: "Enjoy greater efficiency and accomplish more, bla bla bla bla...",
  },
  {
    id: 112,
    title: "MIU",
    author: "Dean",
    post_details: "Maharishi International University, bla bla bla bla bla...",
  },
  {
    id: 113,
    title: "Enjoy Life",
    author: "Jasmine",
    post_details: "Life is found in layers, bla bla bla bla...",
  },
];


const Posts = (props) => {

  const [posts, setPosts] = useState(DUMMY_POSTS);

  const fetchPosts = () => {
    axios.get('http://localhost:8080/api/v1/posts')
    .then(response => {
      setPosts(response.data);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

  useEffect( () => {
    fetchPosts()
  }, [props.fetchFlag]);

  const postList = posts.map((post) => {
    return (
      <Post
        title={post.title}
        author={"Author: " + post.author}
        key={post.id}
        setSelected={() => {
          props.setSelected(post.id);
        }}
      />
    );
  });

  return postList;
};

export default Posts;
