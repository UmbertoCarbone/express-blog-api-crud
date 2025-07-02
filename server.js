const express = require("express")
const app = express()
const port = 3041

const blogrouter = require("./routes/posts")

app.use(express.static("public"))
//funzione post
app.use(express.json());

app.use("/blog", blogrouter)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

