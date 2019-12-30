const express = require('express');
const app = express();
app.use(express.static('public'));
const bodyParser = require('body-parser')

const port = 5000;

// app.get('/accout', (req, res) => {
//     res.render('index')
// })
app.post('/account', (req, res, next) => {
    console.log(req.body)
})


app.listen(port, () => console.log(`listening on port ${port}!`));