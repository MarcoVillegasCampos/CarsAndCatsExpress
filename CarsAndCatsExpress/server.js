var express = require("express");

var app = express();
app.set('views', __dirname + '/views'); 





  app.listen(8000, function() {
    console.log("listening on port 8000");
  })


  app.use(express.static(__dirname + "/static"));

