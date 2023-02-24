const express = require("express");
const router = new express.Router();
const bcrypt = require('bcryptjs');


const User = require("../models/userSchema")
const Cars = require("../models/dataSchema")


router.get("/", (req, res) => {
    res.send("Hi my project project reloading 2.0.....");
})

/****************   Old registeration of thapa ****************/

router.post("/signup", async (req, res) => {

    const { name, email, password, cpassword } = req.body;

    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled credentials properly" })
    }

    try {

        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already Exists" })
        } else if (password != cpassword) {
            return res.status(423).json({ error: "Password is not matching" })

        } else {
            const user = new User({ name, email, password, cpassword })
            await user.save();
            return res.status(201).json({ message: "User Registered Sucessfully" })

        }


    } catch (error) {
        console.log(error)
    }

})








// **********Login Route**************

router.post("/login", async (req, res) => {
    // console.log(req.body)
    // res.json({message: "awesome"})

    try {
        let token;
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ error: "Please fill the Details" })
        }

        const userLogin = await User.findOne({ email: email });
        if (!userLogin) {
            return res.status(402).json({ error: "User Not found" })
        }

        console.log(userLogin)

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)


            token = await userLogin.generateAuthToken();
            console.log(token)

            if (!isMatch) {
                res.status(400).res.json({ message: "Invalid Credentials" });

            } else {
                res.json({ message: "User Signin Successfully" });
            }
        }
        else {
            res.status(400).res.json({ message: "Invalid Credentials" });

        }



    } catch (error) {
        console.log(error)
    }
})


//***********POST API DATA****************************************/


router.post("/BookingCars", async (req, res) => {
    const carsArray = req.body;

    try {
        for (const car of carsArray) {
            const { image_url, name, price, trans, fuel, seat, Mileage, rating } = car;
            const data = new Cars({ image_url, name, price, trans, fuel, seat, Mileage, rating });
            await data.save();
        }

        return res.status(200).send({ message: "Cars saved successfully" });
    } catch (error) {
        console.log(error);
    }
})


// Getting all the car data

router.get("/BookingCars", async (req, res) => {
    try {

        const cars = await Cars.find();
        return res.status(200).send(cars);

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;


