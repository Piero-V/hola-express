var express= require('express');
var app = express();

app.get('/',c_inicio);
app.get('/saludo',c_saludo);

function c_inicio(req,res){
    res.send('<h1>Hola express</h1>');
}
function c_saludo(req,res){
    res.send('<h1>Hola Piero</h1>');
}

function c_server(res,res){
    var host = server.address().address;
    var port  = server.address().port;

    console.log(host + '|'+port);

}
var server = app.listen(8000,c_server);


