import bodyParser from 'body-parser';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';

dotenv.config();
const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use('/posts',postRoutes);
app.get('/',(req,res)=>res.send("Welcome"));

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology:true});

const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`The server started at port:${PORT}`));

mongoose.set('useFindAndModify', false);