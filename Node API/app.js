 
const express = require('express');  
const bodyParser = require('body-parser')      
const app = express(); 
app.use(bodyParser.urlencoded({ extended: true }))  
var cors = require('cors');
app.use(cors());
app.set('view engine', 'ejs')  
app.use(express.static('public'))  
app.use(bodyParser.json())  
app.use('/v1', require('./routes/v1').v1); 
var port = process.env.PORT|| 500
app.listen(port, function() {
        console.log('Listening on '+port)

    }) 
 
app.get('/', (req, res) => {  
       res.sendFile(__dirname + '/index.html')
})
 

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
 