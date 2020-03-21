const express=require("express");
const app=express();
const server=require('http').Server(app);
const io=require('socket.io')(server)

io.on('connection',function(socket){
    console.log(socket.id);
    socket.on("color",function(color){
        socket.broadcast.emit("colorE",color);
    })
    socket.on("pencil",function(undostack){
         socket.broadcast.emit("pencilDraw",undostack);
    })
    socket.on("sticky",function(status){
          socket.emit("stickyC",status)
    })
})

app.use(express.static('client'));

server.listen(3000,function(){
    console.log("server started at 3000");
})