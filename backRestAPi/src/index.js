const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
app.use(express.json())

app.use(cors({
  origin: "http://localhost:4321",   // asal frontend Astro
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept"]
}));

const barangRoutes = require("./barang/barang.routes")
app.use('/barangs', barangRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})
app.get('/home', (req, res) => {
    res.send('Hello World VBRo!')
})
