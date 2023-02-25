const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const filePath = path.join(__dirname,'Arslan-CV3.pdf');
;

app.get('/', function(request, response){
   fs.readFile(filePath, function (err,data){
      response.contentType("application/pdf");
      response.send(data);
   });

 });




app.listen(5001, () => console.log('listening'))