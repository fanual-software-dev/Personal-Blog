import React, { useState } from 'react'
import { useblogContext } from '../hooks/Bloghooks'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Blogs = ({blogs}) => {

  const {dispatch} = useblogContext()
  
  const ADD_LIKE = async () => {

    const numberOfLikes = blogs.numberOfLikes+1
    const blog = {numberOfLikes}
    const res = await fetch(`/api/blogs/${blogs._id}`,{
      method:'PATCH',
      body:JSON.stringify(blog),
      headers:{
        'Content-Type':'application/json'
      }
    })

    const data = await res.json()

    if (res.ok){
      dispatch({type:'ADD_LIKE',payload:data})
    }

  }

  const DELETE_BLOG = async()=>{

    const res = await fetch(`/api/blogs/${blogs._id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })

    const blog = await res.json()

    if (res.ok){
      dispatch({type:'DELETE_BLOG',payload:blog})
    }

    else{
      alert('Opps! something went wrong while deleting the blog')
    }

  }


  return (
    <div className='blogs'>
      <img src={blogs.image} alt='image not found'/>
      <div className='blog-cards'>
        <p className='title'>{blogs.title}</p>
        <p className='main'>{blogs.main}</p>
      </div>

      <div className='likes-comments-div'>
        <div className='likes-comments'>
          <button onClick={ADD_LIKE}><img src='https://cdn-icons-png.flaticon.com/128/2107/2107845.png' alt='image not found'/></button>
          <p id='likes'>{blogs.numberOfLikes}</p>
        </div>
        <p className='time'>{formatDistanceToNow(new Date(blogs.createdAt),{addSuffix:true})}</p>
        <span onClick={DELETE_BLOG} className='material-icons'>delete</span>
      </div>
    </div>
  )
}

export default Blogs
