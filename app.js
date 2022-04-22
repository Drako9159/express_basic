//Usando objeto express
const express = require('express')
// App de Express
const app = express()
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000
//path inicial, responderá a la url localhost:3000
app.get('/',(req, res) => {
    res.send('Hello World!')
})
//Respondiendo texto
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})
// Regresando un objeto
// localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer.msg)
})
// Query Params: Recibir parámetros por la url
// http://localhost:3000/explorers/carlo
// req.params = {"explorerName":"carlo"}
/*Agrega una nueva ruta, indica que recibirá un parámetro: /explorers/:explorerName, esto indicará que :explorerName será un valor enviado por la url.
El objeto req contiene la propiedad params, esta propiedad contiene los Query Params (parámetros) enviados por la url. (req.params) */
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})


//Con esto inicializamo esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})