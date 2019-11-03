//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
<<<<<<< HEAD
app.use(express.static(__dirname + '/dist/<afrihow>'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/<afrihow>/index.html'));
=======
app.use(express.static(__dirname + '/dist/afrihow'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/afrihow/index.html'));
>>>>>>> 6bde111838bc7b749af7c109837c66737788b8a8
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
