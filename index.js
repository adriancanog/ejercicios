var express = require('express');
var app = express();

app.get('/', function(req, res) {
  let nombre = "adrian";
  res.send(nombre);
});

app.get('/ads', function(req, res){
  res.send("Bienvenidoss a ADS");
})

  
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
