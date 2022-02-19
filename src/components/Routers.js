import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import App from "../App";
import Post from "./Post";
import data from "./data";

const Routers = () => {
  const [postsInfo, setData] = useState(data);

  const liked = (i, likeStatus, likeCount) => {
    const upDatepostsInfo = [...postsInfo];
    upDatepostsInfo[i].isLike = likeStatus;
    upDatepostsInfo[i].like = likeCount;
    setData(upDatepostsInfo);
  };
  const addComment = (i, updateComment) => {
    const updated = [...postsInfo];
    updated[i].comments = updateComment;
    setData(updated);
  };
  const deletAnyPost = (index) => {
    const updated = [...postsInfo];
    updated.splice(index, 1);
    setData(updated);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App
                postsInfo={postsInfo}
                liked={liked}
                deletAnyPost={deletAnyPost}
              />
            }
          />
          <Route
            path="/posts/:id"
            element={
              <Post
                postsInfo={postsInfo}
                liked={liked}
                addComment={addComment}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
