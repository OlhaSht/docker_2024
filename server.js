const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res)=>{
    res.send('Hi from docker!!!!!!')
})

app.get('/bye', (req, res)=>{
 res.send('Bye!')
})

app.listen(PORT);