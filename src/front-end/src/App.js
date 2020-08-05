import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Timeline from "./pages/Timeline";

function App() {
  return (
      <>
        <Route component={LoginPage} path="/" exact/>
        <Route component={Timeline} path="/timeline"/>
      </>
  );
}

export default App;
