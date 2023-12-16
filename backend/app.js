const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const ProjectRoute = require("./routes/ProjectRoute");

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL;
// mongoose.connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true }, err => {
//   if (err) throw err;
//   console.log("Mongodb connected...");
// });
mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

const projectSchema = new mongoose.Schema({
  projectName: String,
});

const Project = mongoose.model("Project", projectSchema);

// Endpoint to receive form data and store it
app.post("/projects", async (req, res) => {
  try {
    const { projectName } = req.body;
    // Validate or process data here as needed

    // Save data to the database
    const newProject = new Project({ projectName });
    await newProject.save();

    res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
});

app.use('/api/projects', ProjectRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
