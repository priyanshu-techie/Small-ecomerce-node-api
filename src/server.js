// made the api live at https://small-ecomerce-node-api.onrender.com/products
// go check it out
const express = require('express');
const app = express();
const fs= require('fs');

const port = process.env.PORT || 8000;

app.get('/products',(req,res)=>{
    // if you want to send then you can directly send the json data
    res.sendFile(__dirname+"/data.json");
})
app.get('/products/:index',(req,res)=>{
    const index=req.params.index
    const unParsedData = fs.readFileSync(__dirname+'/data.json','utf-8');
    // but if you want to do some operation on the json data then you need to parse it first to convert into js object 
    const data=JSON.parse(unParsedData);
    res.send(data[index]);
})
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/documentation.html');
})
app.listen(port,() => {
    console.log(`The server is running at Port ${port}. Go to http://localhost:8000 to check it out.`);
})