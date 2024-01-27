const express = require("express");
const mongoose = require("mongoose");
const app = express()
const port = 8000;
app.use(express.json());
app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`);
})

//********************************** Connection with DB********************************* */
const uri = "mongodb+srv://deepanshidey03:ZmYkKdDeo6YDiJDt@cluster0.kwz2v2j.mongodb.net/ReThread";
mongoose
  .connect(uri)
  .then(() => console.log("MongoDB connected…"))
  .catch((err) => console.log(err));

//************************************ Defining Schema *********************************** */

const Schema = mongoose.Schema;

const StudentSchema = new Schema({
      uid: {
        type: Number,
        required: true,
        trim: true,
        minlength: 3
      },
      sem1: {
        type: Number,
        required: true,
        trim: true,
      },
      sem2: {
        type: String,
        required: true,
        trim: true,
      },
      cgpa: {
        type: Number,
        required: true,
        trim: true,
      }
});



//******************************** Collection Creation ******************************/
const Students = mongoose.model("students", StudentSchema);

//*****************************  Sample document entries ****************************/
const student1 = new Students({
  uid: 12102975,
  sem1:9.45,
  sem2:9.56,
  cgpa: 9.52
});

const student2 = new Students({
    uid: 12102976,
    sem1:9.45,
    sem2:9.56,
    cgpa: 9.52
});

const student3 = new Students({
    uid: 12102977,
    sem1:9.45,
    sem2:9.56,
    cgpa: 9.52
});


// ************************* Add sample documents to the database ***************************
// const addDocsToDB = async () => {
//   try {
//     await student1.save();
//     console.log("Student 1 details added successfully!");
//     await student2.save();
//     console.log("Student 2 details added successfully!");
//     await student3.save();
//     console.log("Student 3 details added successfully!");

//   } catch (error) {
//     console.error("Error adding students:", error);
//   }
// };
// addDocsToDB();

//************************************* Routes ******************************************** */


// Route to view all students
app.get("/students", async (req, res) => {
    try {
        const students = await Students.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Add a new student
app.post("/add-student", async (req, res) => {
    try {
      const doc = await Students.findOne();
      doc.students.push(req.body);
      await doc.save();
      res.status(201).send("Student added successfully");
    } catch (error) {
      res.status(500).send(error);
    }
});

// PUT - Update a student completely
app.put("/update-student/:uid", async (req, res) => {
    try {
        const doc = await Students.findOneAndUpdate(
            { "students.uid": req.params.uid },
            { $set: { "students.$": req.body } },
            { new: true }
        );
        res.status(200).send("Student updated successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});

// PATCH - Partially update a student
app.patch("/update-student/:uid", async (req, res) => {
    try {
        const doc = await Students.findOneAndUpdate(
            { "students.uid": req.params.uid },
            { $set: { "students.$": req.body } },
            { new: true }
        );
        res.status(200).send("Student updated successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});

// DELETE - Remove a student
app.delete("/delete-student/:uid", async (req, res) => {
    try {
        const doc = await Students.findOneAndUpdate(
            { "students.uid": req.params.uid },
            { $pull: { students: { uid: req.params.uid } } },
            { new: true }
        );
        res.status(200).send("Student deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});
