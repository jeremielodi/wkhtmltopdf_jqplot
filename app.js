const express = require('express');
const routes  = require('./routes');
const app = express();

app.use(express.static(__dirname + '/client'));

app.get('/pdf', routes);

// demarrage du serveur
app.listen(8080);
console.log('application runs on port 8080');