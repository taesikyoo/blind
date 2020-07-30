import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TimelinePage from "./pages/TimelinePage";

function App() {
  return (
    <>
      <Route component={ LoginPage } path="/" exact/>
      <Route component={ TimelinePage } path="/timeline"/>
    </>
  );
}

export default App;
