const express = require("express");
const app = express();
const cors = require('cors')



require("./src/db/connection")

// store data in json
app.use(express.json())


// schema
const User = require("./src/models/userSchema")

// router file linked using middleware
app.use(require("./src/router/auth"))


const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hi my project project reloading 2.0.....");
})

app.listen(port, () => {
    console.log(`app is listening on port number ${port}`)
})


