const express = require("express");
const app = express();
const cors = require('cors')
require("./db/connection")

// store data in json
app.use(express.json())

// schema
const User = require("./models/userSchema")

// router file linked using middleware
app.use(require("./router/auth"))


const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hello Zoom Car.....");
})

app.listen(port, () => {
    console.log(`app is listening on port number ${port}`)
})


