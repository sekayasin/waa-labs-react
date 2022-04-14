import { useState } from "react";
import "./Dashboard.css";
import Posts from "../containers/Posts/Posts";
import PostDetails from "../components/PostDetails/PostDetails";
import NewPost from "../components/NewPost/NewPost";

const Dashboard = () => {

  const [selectedPost, setSelectedPost] = useState(0);

  const [fetchFlag, setFetchFlag] = useState(true);

  const setSelected = (id) => {
    setSelectedPost(id);
  }

  const changeFetchFlag = () => {
    setFetchFlag(!fetchFlag);
  }

  return (
    <div className="Content">
      <div className="Posts">
        <Posts setSelected={setSelected} fetchFlag={fetchFlag}/>
      </div>
      <div className="PostDetails">
        <PostDetails postId={selectedPost} changeFetchFlag={changeFetchFlag}/>
      </div>
      <div>
        <NewPost changeFetchFlag={changeFetchFlag}/>
      </div>
    </div>
  );
};

export default Dashboard;
