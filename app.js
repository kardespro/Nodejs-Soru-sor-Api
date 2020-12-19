var express = require('express');
var app = express();
var fs = require("fs");

app.get('/api/soru/:soru', function (req, res) {
   
   fs.readFile( __dirname + "/api/" + "sorular.json", 'utf8', function (err, data) {
      var cevap = JSON.parse( data );
      var user = users["soru" + req.params.soru + "Cevap:" +cevap] 
      console.log("Started api");
      res.end( JSON.stringify(user));
   });
})

var server = app.listen(6060, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Api Başlatıldı! SITEN:" +host)
})
