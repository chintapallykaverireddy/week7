const express=require('express');
const app=express();
const PORT=process.env.PORT || 3006;

app.get('/',(req,res)=>{
   res.send("Hello world ! I am a containerized application !!!");
});

app.listen(PORT,()=>{
    console.log(`server is running on localhost:${PORT}`);
})