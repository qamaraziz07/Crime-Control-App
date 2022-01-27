import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Admindashboard from "../screens/admin/Admindashboard";
import Adminlogin from "../screens/admin/Adminlogin"
import RegisterUser from "../screens/user/Userregister";
import Userlogin from "../screens/user/Userlogin";
import Dashboard from "../screens/Forms/DashBoard";
import Complaint from "../screens/Forms/Complaint";
import Crimereport from "../screens/Forms/Crimereport";
import Missingreport from "../screens/Forms/Missingreport";





const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admindashboard" element={<Admindashboard />} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path="/userRegister" element={<RegisterUser/>}/>
      <Route path="/userlogin" element={<Userlogin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/complain" element={<Complaint/>}/>
      <Route path="/crimereport" element={<Crimereport/>}/>
      <Route path="/missingreport" element={<Missingreport/>}/>
      
      

      </Routes>
  );
};

export default MainRoutes;
