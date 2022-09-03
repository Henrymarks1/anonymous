const express = require('express')
const bodyParser = require('body-parser')
// const fetch = require('node-fetch');

const app = express()
const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res) =>{
    res.send('Welcome to the Anon API, created by Henry Marks and Andy Negrut!')
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})
