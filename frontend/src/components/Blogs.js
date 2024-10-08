import React, { useState } from 'react'

const Blogs = ({blogs}) => {

    // if (blogs.numberOfLikes>=0){
    //     document.getElementById('likes').innerHTML = blogs.numberOfLikes
    // }

    const [numberOfLikes,setnumberOfLikes] = useState(blogs.numberOfLikes)

    const LikeCounter = async ()=>{

        console.log('program exceuted',blogs._id)
        const origina_data = await fetch(`/api/blogs/${blogs._id}`)
        const jsondata = await origina_data.json()
        if (!numberOfLikes){
            setnumberOfLikes(1)
        }

        else{

          if (origina_data.ok){
            setnumberOfLikes(jsondata.numberOfLikes+1)
          }

          
          
         
            
        }

        const NumberOflikes = {numberOfLikes}

    

       

        const res = await fetch(`/api/blogs/${blogs._id}`,{
            method:"PATCH",
            body: JSON.stringify(NumberOflikes),
            headers:{
                'Content-Type':'application/json'
            }
                      
        })

        const data = res.json()

        if (res.ok){
            console.log('success',data,data.numberOfLikes)
        }
    }

  return (
    <div className='blogs'>
      <img src={blogs.image} />
      <div className='blog-cards'>
        <p className='title'>{blogs.title}</p>
        <p className='main'>{blogs.main}</p>
      </div>

      <div className='likes-comments'>
        <button onClick={LikeCounter}><img src='https://cdn-icons-png.flaticon.com/128/2107/2107845.png'/></button>
        <p id='likes'>{blogs.numberOfLikes+numberOfLikes}</p>
      </div>
    </div>
  )
}

export default Blogs
