import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../featur/posts/postSlise";
import Post from "./Post";

function PostList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.post.data);
  const loading = useSelector((state) => state.post.loading);
  const error = useSelector((state) => state.post.error);
  useEffect(() => {
    dispatch(fetchPost("https://jsonplaceholder.typicode.com/posts"));
  }, [dispatch, "https://jsonplaceholder.typicode.com/posts"]);
  console.log(data);
  console.log(loading);
  console.log(error);
  

  if (loading == "pending") {
    return <p>loading...</p>;
  }

  if(error){
    return <p>{error}</p>;
  }



  return (
    <div className="postList" >
      {data.map((item) => {
        return (
          <Post
            body={item.body}
            title={item.title}
            id={item.id}
            key={item.id}
          />
        );
      })}
    </div>
  );
}

export default PostList;
