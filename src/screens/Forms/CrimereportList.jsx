import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import NavbarDash from "../../Components/Navbar/NavbarDash"
import NavbarCrime from "../../Components/Navbar/NavbarCrime"

const CrimereportList = () => {
  const [crimes, setCrime] = useState([]);

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
  
      {crimes?.map((crime, ind) => {
        return (
          <div className="patientDetail" key={ind}>
            <img
              className="center"
              src={crime.imageUrl}
              alt="file"
              width={200}
            />
            <p>
              Date of Crime: <b> {crime.date}</b>
            </p>
            <p>
              Name: <b> {crime.name}</b>
            </p>
            <p>
              City: <b>{crime.city}</b>
            </p>
            <p>
              Crime: <b>{crime.crime}</b>
            </p>
            <p>
             Informer Mobile: <b>{crime.phone}</b>
            </p>
          </div>
        );
      })}
    </div>

  </>
};

export default CrimereportList;
