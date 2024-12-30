import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);


app.get('/', (req, res)=>{
    res.send('Server is Ready!')
})

app.listen(5000, ()=> {
    connectDB()
    console.log("Server is runing on 5000 hello hi")
})
