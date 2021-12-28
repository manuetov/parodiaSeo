const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');
// const { use } = require('./routes');

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//middlewares
app.use(morgan('dev'));

//routes
app.use(require('./routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// listening the server
app.listen(app.get('port'), () =>{
    console.log('La aplicación está corriedo. Server on port', app.get('port'));
});

