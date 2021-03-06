import express from 'express';
import { getPosts, createPost, getSpecificPost, updatePost,deletePost } from '../controllers/posts.js';

const router=express.Router();

router.get('/',getPosts);
router.post('/',createPost);
router.get('/:id',getSpecificPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);

export default router;