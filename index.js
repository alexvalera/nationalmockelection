const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const path = require('path');

/*SET UP VIEW ENGINE AND STATIC DIRECTORIES*/
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(__dirname + '/public'));
app.use(express.static('dist'));

/*ROUTES*/

app.get('/', (req,res)=> {
  res.render('index', { title: 'Hey', message: 'Hello there!' });
}); 

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port); 