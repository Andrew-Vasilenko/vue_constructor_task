/*
*	Primary file
*/

// dependencies
// const express = require('express')	
// const app = express()
const http = require('http')
const WebSocketServer = require('websocket').server


const exampleData = [
    { title: "Вжух", name: 'submit', type: "Button", action: "alert" },

    { title: "Группа 1", name: 'testGroup', type: "Group", childs: [
        { title: "Заголовок2", name: 'title', type: "Label" },
        { title: "Имя", name: 'firstName', type: "Input" },
        { title: "Лог", name: 'print', type: "Button", action: "console.log" }
    ]},

    { title: "Заголовок2", name: 'subtitle', type: "Label" },
    { title: "Телефон", name: 'phone', type: "Input" }
]


// app.get("/getData", (req, res) => {
//     res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
// 	res.status(200).send(
//         
    
//     )
// })


// http server
const server = http.createServer(function(request, response) {
    // обработаем HTTP-запрос. 
});
server.listen(3000, () => {
    console.log("Server is listening on port 3000")
});

// ws server
const ws = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false 
});

function originIsAllowed(origin) {
    if (origin === "http://localhost:8080")
    return true
}

ws.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
        request.reject()
        console.log("Connection from origin " + request.origin + " rejected.")
        return
    } else {
        const connection = request.accept(null, request.origin)
        console.log("WS connection with " + request.origin + " established")

        connection.send(JSON.stringify(exampleData))

        connection.on('close', function(event) {
            console.log("WS connection with " + request.origin + " closed.")
        });
    }
});