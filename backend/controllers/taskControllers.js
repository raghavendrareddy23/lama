// const express = require("express");
const Project = require("../models/ProjectModel");

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ status: false, data: projects });
  } catch (err) {
      console.error(err);
      return res.status(500).json({status: false, msg: "Internal Server Error"})
  }
};
