var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


io.on('connection', function (socket){
    console.log("A user Connected");

    socket.emit('test event', 'Hii its Prasad!');
})

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

server.listen(3000,()=> {
    console.log("Socket.io server islisteninng on port 3000")
});