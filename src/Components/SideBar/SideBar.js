// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="bg-gray-200 w-1/4 h-screen">
      <div className="p-4">
        <h1 className="text-lg font-semibold">Sidebar</h1>
        <ul className="mt-4">
          <li><Link to='/create' className="py-2">Create Project</Link></li>
          <li><Link to='/projects' className="py-2">Projects</Link></li>
          <li className="py-2">Link 3</li>
          <li className="py-2">Link 4</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
