import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from '../Redux/posts/fetchPost';

function PostList() {
    const dispatch = useDispatch()
    const { loading, post, error } = useSelector((state) => state.postsState);
    useEffect(()=>{
        dispatch(fetchPost())
    },[dispatch])
    console.log(post)
    console.log(error)
    console.log(loading);
    

  return (
    <div>
      
    </div>
  )
}

export default PostList
