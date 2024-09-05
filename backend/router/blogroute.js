const express = require('express')

const router = express.Router()

const {GetBlogs,GetBlog,CreateBlog,DeleteBlog,UpdateBlog} = require('../controllers/BlogControllers')

// get a bunch of blogs

router.get('/',GetBlogs)

// get a single blog

router.get('/:id',GetBlog)

// add new blog

router.post('/',CreateBlog)

// delete a blog

router.delete('/:id',DeleteBlog)

// update a blog

router.patch('/:id',UpdateBlog)


module.exports = router