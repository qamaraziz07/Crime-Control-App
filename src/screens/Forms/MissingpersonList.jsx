import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import NavbarDash from '../../Components/Navbar/NavbarDash';
import NavbarMissing from '../../Components/Navbar/NavbarMissing';

const MissingpersonList = () => {
  const [missing, setMissing] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Missing"), (snapshot) => {
      setMissing(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);
  return <>
    <NavbarDash/>
    <NavbarMissing/>
    <div className="patientsList">
      <h1>Missing Person List </h1>
  
      {missing?.map((mising, ind) => {
        return (
          <div className="patientDetail" key={ind}>
            <img
              className="center"
              src={mising.imageUrl}
              alt="file"
              width={200}
            />
            <p>
              Date of Complaint: <b> {mising.date}</b>
            </p>
            <p>
              Name: <b> {mising.name}</b>
            </p>
            <p>
              Age:<b>{mising.age}</b>
            </p>
            <p>
              Details: <b>{mising.missDtl}</b>
            </p>
            <p>
              Informer Name: <b>{mising.InfName}</b>
            </p>
            <p>
             Informer Mobile: <b>{mising.phone}</b>
            </p>
          </div>
        );
      })}
    </div>

  </>
};

export default MissingpersonList;
