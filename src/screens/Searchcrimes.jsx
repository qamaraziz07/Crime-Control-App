import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Searchcrimes = () => {

  const [searchCrime, setSearchCrime] = useState("");
  const [filteredCrime, setFilteredCrime] = useState(null);
  const [notFound, setNotFound] = useState("");
  const [crimes, setCrimes] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Crimes"), (snapshot) => {
        setCrimes(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  const findCrime = () => {
    const search = crimes.filter((ele) => {
      return ele.city.toLowerCase() === searchCrime.toLowerCase();
    });
    if (search.length) {
        setFilteredCrime(search);
    } else {
        setFilteredCrime("");
      setNotFound("Crime not found");
    }
  };
  return (
      
  <div className="singlemissing">
      <div>
      <select 
    value={searchCrime}
    onChange={(e) => {
      setSearchCrime(e.target.value);
    }}
    style={{
      padding: "10px",
      fontSize: "18px",
      width: "300px",
    }}
    >
            <option value="">Select city</option>
      <option value="NewYork">New York</option>
      <option value="California">California </option>
      <option value="Alaska">Alaska </option>
      <option value="Arizona">Arizona</option>
      <option value="NewJersey">New Jersey</option>
      <option value="Colorado">Colorado </option>
      <option value="Florida">Florida </option>
      <option value="Georgia">Georgia </option>
      <option value="Hawaii">Hawaii</option>
      <option value="NewMexico">New Mexico</option>
</select>
        <button
          style={{
            padding: "10px",
            fontSize: "18px",
          }}
          onClick={findCrime}
        >
          Find
        </button>
        <br />
      </div>
      <br />
      {filteredCrime ? (
        filteredCrime.map((crime, ind) => {
          return (
            <div
              className="missingDetail"
              key={crime.city + crime.age + ind}
            >
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
        })
      ) : (
        <h3>{notFound}</h3>
      )}
    </div>
  );
};

export default Searchcrimes;
