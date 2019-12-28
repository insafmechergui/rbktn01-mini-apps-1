const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(express.static('client'));
app.use(bodyParser());

app.get('/', (req, res) => {
  // JUST TRY!!
  res.render('client/index');

});

app.post('/', (req, res, next) => {
  var request = JSON.stringify(req.body.result);
var parseRequest = JSON.parse(request);
console.table(parseRequest)


res.end(parseRequest);

});

app.listen(port, () => console.log(`listening on port ${port}!`));