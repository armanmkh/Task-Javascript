const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(__dirname))

app.get('/', (req,res)=>{

res.send('ok');

});
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
console.log('ok');
})