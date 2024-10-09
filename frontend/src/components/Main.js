import React from 'react'
import Blogs from './Blogs'

import { useEffect } from 'react'
import { useblogContext } from '../hooks/Bloghooks'
import CreatBlog from './CreatBlog'

const Main = () => {

    const {blogs, dispatch} = useblogContext()
    useEffect(()=>{

        const featchBlogs = async ()=>{

            const response = await fetch('/api/blogs')
            const blogs = await response.json()
            if (response.ok){
                dispatch({type:'SET_BLOGS',payload:blogs})
                console.log(blogs)
            } else{
                console.log('error while fetching data')
            }
        }

        
        featchBlogs()

    },[dispatch])

  return (
    <div className='main-page-div'>
      <div className='main-page'>
        {blogs && blogs.map((blog)=>(
          <Blogs key={blog._id} blogs={blog}/>
        ))}
      </div>

      <CreatBlog></CreatBlog>
    </div>
  )
}

export default Main
