const http  =  require('http')
const app  =  require('express')()
//creating the server
const server = http.createServer(app)

const io = require('socket.io')(server)

app.get('/',async(req, res)=>
{
    res.sendFile(__dirname+'/index.html') //sending the file through the Socket io
})

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg); //emiting the event from  the server to all the sockets
    });
});

server.listen(3000,()=>
{
    console.log(`Server is listening on the ${3000} port `)
})