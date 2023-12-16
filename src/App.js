// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "./Components/SideBar/SideBar";
import Header from "./Components/Header/Header";
import Create from "./Components/Create/Create";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Header />
          <div>
            <h1 className="text-pink-700 justify-center flex pt-4 font-bold text-lg">
              Welcome to the Project Management App.
            </h1>
          </div>
          <Switch>
            {/* <Route path="/" /> */}
            <Route path="/create" component={Create} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
