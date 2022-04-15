const express=require('express');
const app=express();

const PORT=9000;
app.get('/',(req,res)=>{
    res.status(200).json('hehe')
})

app.listen(PORT,()=>console.log(`Server listening on Port ${PORT}`));