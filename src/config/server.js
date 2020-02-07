const port = 3003;
const bodyParser = require('body-parser');
const express = require('express');
const app  = express();

//express é baseado num padrao de cadeia de middleware
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json())

app.listen(port, ()=>{
    console.log(`Foi que foi ${port}`)
})





