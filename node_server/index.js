/*
*	Primary file
*/

// dependencies
const express = require('express')	
const app = express()
const http = require('http')

// routes

app.get("/", (req, res) => {    
    res.status(200).send(
        'Use GET "/getData" to obtain mock data'
    )
})

app.get("/getData", (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:8080')
	res.status(200).send(
        [
            { title: "Вжух", name: 'submit', type: "Button", action: "alert" },
    
            { title: "Группа 1", name: 'testGroup', type: "Group", childs: [
              { title: "Заголовок2", name: 'title', type: "Label" },
              { title: "Имя", name: 'firstName', type: "Input" },
              { title: "Лог", name: 'print', type: "Button", action: "console.log" }
            ]},
    
            { title: "Заголовок2", name: 'subtitle', type: "Label" },
            { title: "Телефон", name: 'phone', type: "Input" }
        ]
    
    )
})


// server
var server = app.listen(3000, () => console.log("Server is listening on port 3000"))