import React from 'react'
import Blogs from './Blogs'

import { useState, useEffect } from 'react'

const Main = () => {

    const [blogs,setBlogs] = useState(null)
    useEffect(()=>{

        const featchWorkouts = async ()=>{

            const response = await fetch('/api/blogs')
            const blogs = await response.json()
            if (response.ok){
                setBlogs(blogs)
            } else{
                console.log('error while fetching data')
            }
        }

        
        featchWorkouts()

    },[])

  return (
    <div className='main-page'>
      {blogs && blogs.map((blog)=>(
        <Blogs key={blog._id} blogs={blog}/>
      ))}
    </div>
  )
}

export default Main
