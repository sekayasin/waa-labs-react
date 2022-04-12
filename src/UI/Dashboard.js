import { useState } from "react";
import "./Dashboard.css";
import Posts from "../containers/Posts/Posts";
import UpdateTitle from "../components/UpdateTitle/UpdateTitle";
import PostDetails from "../components/PostDetails/PostDetails";

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

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);

  const [title, setTitle] = useState("");

  const [selectedPost, setSelectedPost] = useState(0);

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const addButtonClicked = () => {
    setPosts(
      posts.map((post) => (post.id === 111 ? { ...post, title: title } : post))
    );
  };

  const setSelected = (id) => {
    setSelectedPost(id);
  }

  return (
    <div className="Content">
      <div className="Posts">
        <Posts posts={posts} setSelected={setSelected} />
      </div>
      <div className="UpdateTitle">
        <UpdateTitle
          title={title}
          onChange={(event) => onChange(event)}
          addButtonClicked={addButtonClicked}
        />
      </div>
      <div className="PostDetails">
        <PostDetails postId={selectedPost} posts={posts} />
      </div>
    </div>
  );
};

export default Dashboard;
