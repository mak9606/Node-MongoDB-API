import mongoose from 'mongoose';


const modelSchema= mongoose.Schema({
    title:{
    type:String,
     required: true 
    },

    description:{
        type:String,
         required: true 
        },
    date:{
        type:Date,
         default: Date.now 
        },
});

const NewPost=mongoose.model('RestApi',modelSchema);

export default NewPost;