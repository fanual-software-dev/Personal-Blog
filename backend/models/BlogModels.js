const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Blogschema = new Schema({

    title:{
        type: String,
        required: true
    },

    main:{
        type: String,
        required: true
    },

    image:{
        type: String,
        required: false
    },

    numberOfLikes:{
        type: Number,
        required: false
    }
},{timestamps:true})


module.exports = mongoose.model('Blog',Blogschema)