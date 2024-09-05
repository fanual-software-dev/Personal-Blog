
const mongoose = require('mongoose')
const BlogModels = require('../models/BlogModels')

// get a bunch of blogs

const GetBlogs = async (req,res)=>{

    const blogs = await BlogModels.find({}).sort({createdAt:-1})

    if (!blogs){
        return res.status(404).json({err:'Opps! No blogs found'}) 
    }

    res.status(200).json(blogs)
}

// get a single blog

const GetBlog = async (req,res)=>{
    
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'Opps! No such blog found'})
    }

    const blog = await BlogModels.findById(id)

    if (!blog){
        res.status(404).json({error:'OOps! No such blog found'})
    }

    res.status(200).json(blog)
}

// add a blog 

const CreateBlog = async (req,res)=>{

    const {title,main,image,numberOfLikes} = req.body

    try{
        const newBlog = await BlogModels.create({title,main,image,numberOfLikes})
        res.status(200).json(newBlog)
    }

    catch(err){
        res.status(505).json({error:err.mesaage})
    }

}

// delete blog

const DeleteBlog = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'Opps! No such blog found'})
    }

    const blog = await BlogModels.findOneAndDelete({_id:id})

    if (!blog){
        res.status(404).json({error:'OOps! No such blog found'})
    }

    res.status(200).json(blog)
}

const UpdateBlog = async (req,res)=>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'Opps! No such blog found'})
    }

    const blog = await BlogModels.findOneAndUpdate({_id:id},{...req.body})

    if (!blog){
        res.status(404).json({error:'OOps! No such blog found'})
    }

    res.status(200).json(blog)
}

module.exports = {GetBlogs,GetBlog,CreateBlog,DeleteBlog,UpdateBlog}