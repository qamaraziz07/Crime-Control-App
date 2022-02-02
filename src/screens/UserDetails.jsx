import React,{useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup,Button } from "react-bootstrap";

const UserDetails = () => {
  const {id}=useParams();
  const [loading,setLoading] = useState(true);
  const value = JSON.parse(localStorage.getItem("Userdata"))
  const [status, setStatus] = useState([]);
  // console.log({status});

  useEffect(() => {
    let obj = value.find(item => item.id === id);
    setStatus(obj);
    setLoading(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h3 className="head">Status Details</h3>
      <br/>
    <div className="crd">
      <Card style={{ width: "18rem" }} >
        <Card.Header style={{ fontWeight: "bold" }}>
          Name: {status?.name}
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Date: {status?.date}</ListGroup.Item>
          <ListGroup.Item>City: {status?.city}</ListGroup.Item>
          <ListGroup.Item>Complain: {status?.complain}</ListGroup.Item>
          <ListGroup.Item>Mobile No: {status?.phone}</ListGroup.Item>
        </ListGroup>
        <select>
                        <option value="">Status</option>
                        <option value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                    <Button id="dataBtn">Update</Button>
        </Card>
      </div>
    </>
  );
};

export default UserDetails;
