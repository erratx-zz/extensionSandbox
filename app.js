const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const {getHomePage} = require('./routes/index');
const port = 5000;

app.set('port', process.env.port || port);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(fileUpload());

app.get('/', getHomePage);

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});
