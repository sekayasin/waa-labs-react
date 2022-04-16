import React, { useState } from "react";
import "./Dashboard.css";
import Posts from "../containers/Posts/Posts";
import PostDetails from "../components/PostDetails/PostDetails";
import NewPost from "../components/NewPost/NewPost";
import { PostContext } from "../store/PostContext";
import { Route, Routes } from "react-router-dom";
import PageRoutes from "./PageRoutes";
import Header from "../containers/Header/Header";
import "../containers/Header/Header.css";

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
    <React.Fragment>
      <PostContext.Provider value={{setSelected, fetchFlag, selectedPost, changeFetchFlag}}>
        <div className="header">
          <Header/>
        </div>
        <div>
          <PageRoutes />
        </div>
      </PostContext.Provider>
    </React.Fragment>
  );
};

export default Dashboard;
