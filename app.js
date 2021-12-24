const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view ')


app.get('/' , (req,res)=>{
    res.status(200).send('INDEX SAYFASI');
})











const port = 3000;
app.listen(port , ()=>{
    console.log(`Sunucu ${port} portu ile başlatıldı.`);
})