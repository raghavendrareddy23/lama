import React, { useEffect, useState } from "react";
import api from "../../api/api";
// import { FaPlus } from 'react-icons/fa';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/projects');
        ; // Make sure the endpoint is a string
        if (response.status === 200) {
          const data = response.data; // Assuming the data is in the 'data' property
          setProjects(data);
        } else {
          throw new Error('Error fetching projects');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

  const createIconFromProjectName = (projectName) => {
    // Function to create icon from project name
    const words = projectName.split(" ");
    const initials = words.map((word) => word.charAt(0).toUpperCase());
    return initials.join("");
  };

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project._id} className="project-item">
          <div className="project-icon">
            {createIconFromProjectName(project.projectName)}
          </div>
          <div className="project-details">
            <h3>{project.projectName}</h3>
            {/* Other details if needed */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
