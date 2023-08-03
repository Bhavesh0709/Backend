import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app=  express();
app.use(express.json());
app.use(cors());

 const db = mysql.createConnection({
    user : "root",
    password : "toor",
    database : "test",
    host : "localhost"
 })

 app.get('/State',(req,res)=>{
    const q= 'SELECT * FROM state';
    db.query(q,(err,data)=>{
        if(err)
            return res.json(err);
        return res.json(data);
    })
 })

 app.post('/addState',(req,res)=>{
    const abc= req.body.StateNAME;
        console.log(abc);

 })

app.listen(8080,()=>{
    console.log("server is running");
})

