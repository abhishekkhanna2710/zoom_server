const express = require("express");
const app = express();
const cors = require('cors')



require("./db/connection")

// store data in json
app.use(express.json())

// require("../../client/build")
// schema
const User = require("./models/userSchema")

// router file linked using middleware
app.use(require("./router/auth"))


// app.use(cors({
//     origin:["http://localhost:8000", "https://zoom_car_pros.onrender.com"]
// }))

//static files
app.use(express.static(path.join(__dirname, "./client/build")))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Hi my project project reloading 2.0.....");
})

app.listen(port, () => {
    console.log(`app is listening on port number ${port}`)
})


