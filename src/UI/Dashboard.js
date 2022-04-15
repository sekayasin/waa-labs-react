import { useState } from "react";
import "./Dashboard.css";
import Posts from "../containers/Posts/Posts";
import PostDetails from "../components/PostDetails/PostDetails";
import NewPost from "../components/NewPost/NewPost";
import { PostContext } from "../store/PostContext";

const Dashboard = () => {
  const [selectedPost, setSelectedPost] = useState(0);

  const [fetchFlag, setFetchFlag] = useState(true);

  const setSelected = (id) => {
    setSelectedPost(id);
  };

  const changeFetchFlag = () => {
    setFetchFlag(!fetchFlag);
  };

  return (
    <div className="Content">
      <PostContext.Provider value={{setSelected, fetchFlag, selectedPost, changeFetchFlag}}>
        <div className="Posts">
          <Posts />
        </div>
        <div className="PostDetails">
          <PostDetails />
        </div>
        <div>
          <NewPost />
        </div>
      </PostContext.Provider>
    </div>
  );
};

export default Dashboard;
