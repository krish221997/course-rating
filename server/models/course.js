var mongoose = require('mongoose');
var Course = mongoose.model('Course',{
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    category:{
        type:String,
        required:true,
        trim:true,
        minlength:1
    },
    url: {
        type: String,
        //required: true
    },
    author: {
        type: String,
        default: 'admin',
    },
    description:{
        type:String,
        //required:true,
        maxlength:100,
        trim:true

    }
});

module.exports = { Course };