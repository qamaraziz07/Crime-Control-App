import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import NavbarDash from "../../Components/Navbar/NavbarDash"
import NavbarCrime from "../../Components/Navbar/NavbarCrime"

const CrimereportList = () => {
  const [crime, setCrime] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Crimes"), (snapshot) => {
      setCrime(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);
  return<>
    <NavbarDash/>
    <NavbarCrime/>
    <div className="patientsList">
      <h1>Crime List </h1>
  
      {crime?.map((complain, ind) => {
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
              Crime: <b>{complain.complain}</b>
            </p>
            <p>
             Informer Mobile: <b>{complain.phone}</b>
            </p>
          </div>
        );
      })}
    </div>

  </>
};

export default CrimereportList;
