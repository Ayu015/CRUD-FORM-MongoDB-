const cors = require("cors");

const Student = require("./models/Student");

const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello! Backend is working.");
});

app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);

    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
        console.log("MongoDB Connection Failed:", error);
    });

    
    
    app.post("/students", async (req, res) => {
        try {
            const newStudent = new Student(req.body);
            
            await newStudent.save();
            
            res.status(201).json({
                message: "Student added successfully!",
                student: newStudent
            });
            
        } catch (error) {
            res.status(500).json({
                message: "Error adding student",
                error: error.message
            });
        }
    });



    app.listen(5000, () => {
        console.log("Server is running on port 5000");
    });