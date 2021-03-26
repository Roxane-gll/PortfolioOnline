const express = require('express');
const app=express();
const http = require('http').Server(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});
app.use(express.static('public'));

http.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
});