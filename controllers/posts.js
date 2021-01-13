import mongoose from 'mongoose';
import NewPost from '../model/post.js';

export const getPosts=async (req,res)=>{
 try {
    const allPosts=await NewPost.find();
    res.status(201).json(allPosts); 
 } catch (error) {
     res.status(401).json(error);
 }
}
export const createPost=async(req,res)=>{
    const data=req.body;
    const post=new NewPost(data);
    
    try {
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json(error);
    }
   
}

export const getSpecificPost=async (req,res)=>{
    try {
        const {id}=req.params;
        const post=await NewPost.findById(id);
        res.status(201).json(post);
    } catch (error) {
        res.status(401).json(error);
    }
}

export const updatePost=async (req,res)=>{
    
        const {id}=req.params;
        const post=req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send("The post was not updated");
        const updatedPost=await NewPost.findByIdAndUpdate(id,post,{new:true});
        res.status(200).json(updatedPost);

}

export const deletePost=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) res.status(401).send("The was not deleted");
    await NewPost.findByIdAndRemove(id);
    res.json({message: "The post was deleted successfully"});
}