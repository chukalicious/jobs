require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({ extended: true })) 
app.use(cors())



app.get("/", (req, res) => {
    res.send({message: `Api is up 😊`} )
}
)   






app.listen(port, () => {
    console.log(`Server is running in port ${port}`)
    })  