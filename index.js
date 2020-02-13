require('dotenv').config()
const express = require('express')

const server = express();

server.use(express.json());

server.get('/', (req,res) => {

    res.status(200).send('<h1>API is working</h1>')
})

// make the port dynamic
const port = process.env.PORT;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`))