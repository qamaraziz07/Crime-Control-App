import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
// import { useNavigate } from "react-router";
import { db ,storage} from "../../firebase";
import InputImage from "../../Components/InputImage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import NavbarDash from '../../Components/Navbar/NavbarDash';
import NavbarComplaint from "../../Components/Navbar/NavbarComplaint"

const Complaint = () => {


  // const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [complaintDetail, setComplaintDetail] = useState({
    name: "",
    phone:"",
    date: "",
    city: "",
    complain:"",
  });


  const fileUpload = async () => {
    return new Promise((resolve, reject) => {
      const fileRef = ref(storage, `Images/${Date.now() + image.name}`);
      console.log({fileRef});

      const uploadTask = uploadBytesResumable(fileRef, image);
      console.log({uploadTask});

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          
    },
    (error) => {
        console.log(error);
          reject(error);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fileUpload()
        .then((data) => {
          console.log(data);
          const docRef = addDoc(collection(db, "Complaints"), {
            ...complaintDetail,
            imageUrl: data,
          });
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setComplaintDetail((prev) => ({
      ...prev,
      name: "",
      phone:"",
      date: "",
      city: "",
      imageUrl: "",
      complain:"",
      
    }));
    // navigate('/complaint');
    alert("Complaint Registered..")
  };

  return (<>
  <div>
    <NavbarDash/>   
    <NavbarComplaint/> 
  </div>
  <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register Complaints</h1>
        <br/>
        <InputImage
          title="Select Image:"
          value={image}
          onChange={(files) => {
            if (files?.length) {
            console.log({files})
              setImage(files[0]);
              console.log(files[0]);
            } else {
              setImage(null);
            }
          }}
        />
        <Input
          required={true}
          placeholder="Name"
          type="text"
          value={complaintDetail.name}
          onChange={(value) => {
            setComplaintDetail((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          required={true}
          type="number"
          placeholder="Mobile No"
          value={complaintDetail.phone}
          onChange={(value) => {
            setComplaintDetail((prev) => ({
              ...prev,
              phone: value,
            }));
          }}
        />
          <Input
            required={true}
            type="date"
            value={complaintDetail.date}
            onChange={(value) => {
              setComplaintDetail((prev) => ({
                ...prev,
                date: value,
              }));
            }}
          />
          <Input
            required={true}
            type="text"
          placeholder="Write Complain here.."
            value={complaintDetail.complain}
            onChange={(value) => {
              setComplaintDetail((prev) => ({
                ...prev,
                complain: value,
              }));
            }}
          />
        
        
        <Button type="submit" title="REGISTER" />
      </form>
    </div>
  </>
  );

};

export default Complaint;

