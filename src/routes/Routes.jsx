import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Components/Navbar/NavbarHome";
// import Admindashboard from "../screens/admin/Admindashboard";
// import Adminlogin from "../screens/admin/Adminlogin"
import RegisterUser from "../screens/user/Userregister";
import Userlogin from "../screens/user/Userlogin";
import Dashboard from "../screens/Forms/DashBoard";
import Complaint from "../screens/Forms/Complaint";
import ComplaintList from "../screens/Forms/ComplaintList";
import Crimereport from "../screens/Forms/Crimereport";
import CrimereportList from "../screens/Forms/CrimereportList";
import Missingreport from "../screens/Forms/Missingreport";
import MissingpersonList from"../screens/Forms/MissingpersonList"





const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/admindashboard" element={<Admindashboard />} /> */}
      {/* <Route path="/adminlogin" element={<Adminlogin />} /> */}
      <Route path="/signup" element={<RegisterUser/>}/>
      <Route path="/login" element={<Userlogin/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/complaint" element={<Complaint/>}/>
      <Route path="/complaintlist" element={<ComplaintList/>}/>
      <Route path="/crimereport" element={<Crimereport/>}/>
      <Route path="/crimereportlist" element={<CrimereportList/>}/>
      <Route path="/missingreport" element={<Missingreport/>}/>
      <Route path="/missingpersonlist" element={<MissingpersonList/>}/>

      
      

      </Routes>
  );
};

export default MainRoutes;
