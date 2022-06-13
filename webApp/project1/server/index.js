const express = require("express");
const app = express();
const mongoose = require('mongoose')
const UserModel = require('./models/users')

const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://root:root@cluster0.fc8zz.mongodb.net/usrDatabase?retryWrites=true&w=majority");


app.get ("/r", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        }else {
            res.json(result);
        }
    });
} );


app.post("/s", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user)
});

app.listen(4000, () => {
    console.log("Server is running");
});