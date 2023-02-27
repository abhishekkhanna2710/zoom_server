const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://abhikhanna2710:12345@cluster0.sbhcdii.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Connected....")
    }).catch((e) => {
        console.log("Not connected")
    })