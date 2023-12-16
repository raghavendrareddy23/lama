import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../Assets/Group 16.png";
import { FaPlus } from "react-icons/fa";

const Create = () => {
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState("");

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    // Reset project name when the form is closed
    setProjectName("");
  };

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/projects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ projectName }),
        });
  
        if (response.ok) {
          // Handle success - show a success message or redirect the user
          console.log('Project created successfully');
        } else {
          // Handle errors - show an error message
          console.error('Failed to create project');
        }
      } catch (error) {
        console.error('Error creating project', error);
      }
    // Handle form submission here
    console.log("Project name:", projectName);
    // Close the form after submission
    closeForm();
  };
  return (
    <div className="relative">
      <Link to="/" className="absolute top-4 left-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      </Link>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-roboto font-bold mb-4 text-customPurple">
          Create a New Project
        </h1>
        <img src={img} alt="Placeholder" className="mb-4" />
        <button
          className="bg-darkPurple w-80 h-11 text-white px-4 py-2 rounded-md flex justify-center"
          onClick={openForm}
        >
          <FaPlus className="pt-1 flex" /> Create a New Project
        </button>

        {/* Popup form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-8 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Create Project</h2>
              <form onSubmit={handleSubmit}>
                <label className="block mb-4">
                  Enter project name:
                  <input
                    type="text"
                    value={projectName}
                    onChange={handleInputChange}
                    className="block border border-gray-300 rounded-md w-full p-2"
                  />
                </label>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="mr-4 px-4 py-2 rounded-md border border-gray-300"
                    onClick={closeForm}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-darkPurple text-white rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Create;
