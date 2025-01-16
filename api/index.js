const express = require("express")
const path= require('path')
const cors = require("cors")
const get_data = require(path.join(__dirname, '../', 'get_data.js'))

const app = express()
app.use(
  cors({
    origin: ["http://localhost:8158", "http://localhost:8080"]
  })
)
const port = 5000

app.get("/", (req, res) => {
  res.send(get_data())
})

app.listen(port, () => {
  
  console.log("Server is running on port: ", port)
})

module.exports= app