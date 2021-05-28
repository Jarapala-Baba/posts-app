import React, { useState, useEffect } from 'react';
import './App.css';
import api from "../api/posts"
import { uuid } from "uuidv4";
import Header from "./Header";
import AddPost from "./AddPost";
import PostsList from "./PostsList";

function App() {
  const LOCAL_STORAGE_KEY = "posts";
  const [posts, setPosts] = useState([]);

  //Retrive Posts
  const retrivePosts=async()=>{
    const response=await api.get("/posts");
    return response.data;
  }

  const addPostHandler = async (post) => {
   
    const response=await api.post("/posts",post)
    setPosts([...posts, response.data])
  }

  const removePostHandler = async(id) => {
    await api.delete(`posts/${id}`);
    const newPostList = posts.filter((post) => { return post.id !== id });
    
    setPosts(newPostList);
  }

  useEffect(() => {
    const getAllPosts =async ()=>{
      const allPosts=await retrivePosts();
      if(allPosts) setPosts(allPosts);
    }
    getAllPosts();
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts))
  }, [posts])

  return (
    <div className="ui container">
      <Header />
      <AddPost addPostHandler={addPostHandler} />
      <PostsList posts={posts} getPostId={removePostHandler}/>
    </div>
  );
}

export default App;
