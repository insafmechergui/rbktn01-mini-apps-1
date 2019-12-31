const express = require('express');
const app = express();
app.use(express.static('public'));
//const bodyParser = require('body-parser');

const port = 4000;



app.listen(port, () => console.log(`listening on port ${port}!`));