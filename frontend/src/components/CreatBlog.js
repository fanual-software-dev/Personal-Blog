import React, { useState } from 'react'
import { useblogContext } from '../hooks/Bloghooks'

const CreatBlog = () => {
    
    const {dispatch} = useblogContext()
    const [title,setTitle] = useState('')
    const [main,setMain] = useState('')
    const [image,setImage] = useState('')
    const [numberOfLikes,setNumberofLikes] = useState(0)

    const CREATE_BLOG = async (e)=>{
        e.preventDefault()
        const blogs = {title,main,image,numberOfLikes} 
        const res = await fetch('/api/blogs',{
            method:'POST',
            body:JSON.stringify(blogs),
            headers:{
                'Content-Type':'application/json'
            }

        })

        const blog = await res.json()

        if (res.ok){
           
            setImage('')
            setTitle('')
            setMain('')
            setNumberofLikes(0)
            dispatch({type:'CREATE_BLOG',payload:blog})
        }

        else {
            alert('Opps! some error occured while creating the blog')
        }

    }

  return (
    <div className='form-div'>
        < form onSubmit={CREATE_BLOG}>
            <div className='input-div'>
                <label>Title</label>
                <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Type your story title' required/>
            </div>

            <div className='input-div'>
                <label>Image Url</label>
                <input type='text' onChange={(e)=>setImage(e.target.value)} value={image} placeholder='Put image url' required/>
            </div>

            <div className='input-div'>
                <label>Story</label>
                <textarea onChange={(e)=>setMain(e.target.value)} value={main} placeholder='we wanna hear about Your story. Start Writing...' required/>
            </div>

            <button type='submit' className='form-button'>Create Blog</button>
        </form>
      
    </div>
  )
}

export default CreatBlog
