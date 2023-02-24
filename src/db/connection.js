const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/zoom_car")
    .then(() => {
        console.log("Connected....")
    }).catch((e) => {
        console.log("Not connected")
    })