/*
*   Primary file
*/

// dependencies
const express = require('express')  
const app = express()
const http = require('http')

const elementsArray = [
    { title: "Вжух", name: 'submit', type: "Button", action: "alert" },

    { title: "Группа 1", name: 'testGroup', type: "Group", childs: [
      { title: "Заголовок2", name: 'title', type: "Label" },
      { title: "Имя", name: 'firstName', type: "Input" },
      { title: "Лог", name: 'print', type: "Button", action: "console.log" }
    ]},

    { title: "Заголовок2", name: 'subtitle', type: "Label" },
    { title: "Телефон", name: 'phone', type: "Input" }
]

// routes

app.get("/", (req, res) => {    
    res.status(200).send(
        'Use GET "/getData" to obtain mock data'
    )
})

app.get("/getData", (req, res) => {
    console.log("Someone is knocking...")
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': 'http://localhost:8080'
    })
    res.write('event: elementsArray\ndata: '+ JSON.stringify(elementsArray) +'\n\n');
    res.end()
})

// server
var server = app.listen(3000, () => console.log("Server is listening on port 3000"))
