const express=require("express");
const app=express();

 
// app.get("/profile",(req,res)=>{
//     const {username}=req.query;
//     console.log(username);
//     //search username in db 
//     res.send("profile page of "+username);
// })

// app.get("/profile/:id" ,(req,res)=>{
//     const{id} = req.params;
//     console.log(id);
//     res.send ("profile page of user " + " " + id )
// })

app.get("/profile/:id/:username" ,(req,res)=>{
    const{id,username} = req.params;
    console.log(id);
    res.send ("profile page of user " + " " + id +" " + username );
})




app.listen(5656,()=>{
    console.log("server started");
})