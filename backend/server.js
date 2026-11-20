const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! Backend is working.");
});

app.get("/students", (req, res) => {
    res.json({
        message: "Students data received successfully"
    });
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed:", error);
    });

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});