const express = require('express');
const res = require('express/lib/response');
const app = express();

app.set('view engine' , 'ejs');


//MIDDLEWARE

app.use(express.static('public'));

app.get('/' , (req,res)=>{
    res.status(200).render('index' , {
        page_name : 'index',
    });
})

app.get('/about' , (req,res)=>{
    res.status(200).render('about', {
        page_name : 'about',
    });
})












const port = 3000;
app.listen(port , ()=>{
    console.log(`Sunucu ${port} portu ile başlatıldı.`);
})