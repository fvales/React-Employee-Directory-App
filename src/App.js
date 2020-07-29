import React from 'react';
import './App.css';
import Layout from "./components/Layout/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import EmployeeDirectory from './containers/EmployeeDirectory/EmployeeDirectory';
import { Route } from "react-router-dom"
import Employee from './components/Employee/EmployeeDetail/Employee';
import Resume from './components/Employee/EmployeeDetail/MoreInfo/Resume';

function App() {
  return (
    <Layout>
      <Route
        path="/"
        exact
      ><Dashboard /></Route>
      <Route
        exact
        path="/Employee_Directory"
      ><EmployeeDirectory /></Route>
      <Route
        exact
        path="/employees/:employee_id"
        component={Employee}
      />
      <Route
        exact
        path="/employees/:employee_id/resume"
        component={Resume}
      />
    </Layout>
  );
}

export default App;
