const express = require('express');
const app = express();
const path = require('path');
require(path.join(__dirname,'/dbConnection.js'));

app.use(express.static(__dirname + '/public'));

//Settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');



//Routes
app.use(require('./routes/index'));


//Listen the server
app.listen(app.get('port'),()=>{
        console.log("server on port ", app.get('port'));
})


