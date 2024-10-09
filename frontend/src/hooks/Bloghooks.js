import { useContext } from "react";
import { BlogContext } from "../context/Blogcontext";

export const useblogContext = ()=>{
    const context = useContext(BlogContext)

    if (!context){
        throw Error('Blog context must be used inside Blogs provider.')
    }
    return context
}