var express = require('express');
var app = express();
import path from 'path';

app.use(express.static(__dirname + '/public'));

app.use('*', function (req, res) {
  res.sendFile(path.resolve('./public/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
