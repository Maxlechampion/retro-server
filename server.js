// import
let express = require('express');

// instantiate server
let server = express();

// configure route
server.get('/', function(req,res){
    res.setHeader('content-type','text/html');
    res.status(200).send('<h1> Bonjour sur mon server</h1>');
});


server.listen(8080,function(){
    console.log('Server en écoute:)')
});
