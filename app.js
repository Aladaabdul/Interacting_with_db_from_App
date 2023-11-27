const express = require("express");
require("dotenv").config()
const bookRouter = require("./routes/book")
const {connectTomongo} = require("./db")
const PORT = process.env.PORT

const app = express()

// Connecting To Database
connectTomongo()

app.use(express.json())
app.use('/books', bookRouter)

app.get("/", (req, res) => {
    res.send("Welcome Home")
})

app.listen(PORT, () => {
    console.log(`http:\\localhost:${PORT}`)
})