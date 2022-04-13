import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoute.js';

//create variable
const app = express();

//connection on db
//if using node v.17, change localhost to 127.0.0.1
mongoose.connect('mongodb://127.0.0.1:27017/fullstack_crud-db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error',(error)=> console.log(error)); //when error db
db.once('open', ()=> console.log('Database Connected masszeehh ...')); //when connected on db

//middleware
app.use(cors());
app.use(express.json());
app.use(UserRoute);

//notif when server ready
app.listen(5000,()=> console.log('Server running massszeehh ...'));