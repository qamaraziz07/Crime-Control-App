import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import NavbarComplaint from '../../Components/Navbar/NavbarComplaint';
import NavbarDash from '../../Components/Navbar/NavbarDash';

const ComplaintList = () => {

  const [complaint, setComplaint] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Complaints"), (snapshot) => {
      setComplaint(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  return (

    <>
  <div>
    <NavbarDash/>
    <NavbarComplaint/>
      <div className="patientsList">
      <h1>Complaint List </h1>
  
      {complaint?.map((complain, ind) => {
        return (
          <div className="patientDetail" key={ind}>
            <img
              className="center"
              src={complain.imageUrl}
              alt="file"
              width={200}
            />
            <p>
              Date of Complaint: <b> {complain.date}</b>
            </p>
            <p>
              Name: <b> {complain.name}</b>
            </p>
            <p>
              City: <b> {complain.city}</b>
            </p>
            <p>
              Crime: <b>{complain.complain}</b>
            </p>
            <p>
             Informer Mobile: <b>{complain.phone}</b>
            </p>
          </div>
        );
      })}
    </div>

  </div>
  </>
    );
};

export default ComplaintList;
