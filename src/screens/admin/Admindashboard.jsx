import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin';
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
const Admindashboard = () => {

  const [Complaint, setComplaint] = useState([]);
  const [Crime, setCrime] = useState([]);
  const [Missing, setMissing] = useState([]);

  const [data, setData] = useState([]);


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
  
  useEffect(()=>{
    setData([...Complaint,...Crime,...Missing,])
  },[Complaint,Missing,Crime])
  console.log({data});
localStorage.setItem('Userdata',JSON.stringify(data))

  return (
  <>
    <NavbarAdmin/>
    <div className="form">
      <h1>Admin Dashboard</h1>

<br/>
      <Table>
          <thead>
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>City</th>
                <th>Complain</th>
                <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val) => {
              console.log({data})
              return (
                <tr key={val.id}>
                  <td>{val.date}</td>
                  <td>{val.name}</td>
                  <td>{val.city}</td>
                  <td>{val.complain || val.missDtl ||val.crime }</td>
                  <td> 
                    <Link to={`/userdetails/${val.id}`}>
                    <Button id="dataBtn">CHECK</Button>
                    </Link>
                    </td>
                </tr>
              );
            })}
            
          </tbody>
        </Table>
    </div>
    </>
  )
};

export default Admindashboard;
