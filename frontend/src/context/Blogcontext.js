import React, { createContext, useReducer } from 'react'

export const BlogContext = createContext()

export const Blogreducer = (state,action)=>{

  switch (action.type){
    case 'SET_BLOGS':
      return{
        blogs:action.payload
      }
    case 'CREATE_BLOG':

    return {
      blogs:[action.payload,...state.blogs]
    }

    case 'DELETE_BLOG':
      return {
        blogs: state.blogs.filter((b) => b._id!==action.payload._id)
      }
    default :
    
    return{
      state
    }
  }

}

export const BlogContextProvider = ({children}) => {
    
  const [state,dispatch]= useReducer(Blogreducer,{
      blogs:null
    })

  return (
    <BlogContext.Provider value={{...state,dispatch}}>
      {children}
    </BlogContext.Provider>
  )
}


