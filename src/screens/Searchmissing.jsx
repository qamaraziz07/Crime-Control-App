import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

const Searchmissing = () => {

  const [searchMissing, setSearchMissing] = useState("");
  const [filteredmissing, setFilteredmissing] = useState(null);
  const [notFound, setNotFound] = useState("");
  const [missing, setmissing] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, "Missing"), (snapshot) => {
      setmissing(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });
  }, []);

  const findmissing = () => {
    const search = missing.filter((ele) => {
      return ele.city.toLowerCase() === searchMissing.toLowerCase();
    });
    if (search.length) {
      setFilteredmissing(search);
    } else {
      setFilteredmissing("");
      setNotFound("missing not found");
    }
  };
  return (
      
  <div className="singlemissing">
      <div>
      <select 
    value={searchMissing}
    onChange={(e) => {
      setSearchMissing(e.target.value);
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
          onClick={findmissing}
        >
          Find
        </button>
        <br />
      </div>
      <br />
      {filteredmissing ? (
        filteredmissing.map((missing, ind) => {
          return (
            <div
              className="missingDetail"
              key={missing.city + missing.age + ind}
            >
              <img
                className="center"
                src={missing.imageUrl}
                alt="file"
                width={200}
              />
              <p>
                Date of Missing: <b> {missing.date}</b>
              </p>
              <p>
                Missing Name: <b> {missing.name}</b>
              </p>
              <p>
                Missing Age: <b>{missing.age}</b>
              </p>
              <p>
                Missing Gender: <b>{missing.gender}</b>
              </p>
              <p>
                Missing Details: <b>{missing.missDtl}</b>
              </p>
              <p>
                Missing City: <b>{missing.city}</b>
              </p>
              <p>
              Informer Name: <b>{missing.InfName}</b>
            </p>
            <p>
             Informer Mobile: <b>{missing.phone}</b>
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

export default Searchmissing;
