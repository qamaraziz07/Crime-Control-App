import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { db ,storage} from "../../firebase";
import InputImage from "../../Components/InputImage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import NavbarCrime from '../../Components/Navbar/NavbarCrime';
import NavbarDash from '../../Components/Navbar/NavbarDash';

const Crimereport = () => {

  // const [user, setUser] = useState(localStorage.getItem("user"));
  // console.log(user.uid);
  const  data=JSON.parse(localStorage.getItem('user'));

  console.log(data.uid);
  const crimeId=`${data.uid}_${Date.now()}`;


  const [image, setImage] = useState("");
  const [crimeDetail, setCrimeDetail] = useState({
    name: "",
    phone:"",
    date: "",
    city: "",
    crime:"",
    crimeId:crimeId,
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
          const docRef = addDoc(collection(db, "Crimes"), {
            ...crimeDetail,
            imageUrl: data,
          });
          console.log("Document written with ID: ", docRef);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setCrimeDetail((prev) => ({
      ...prev,
      name: "",
      phone:"",
      date: "",
      city: "",
      imageUrl: "",
      crime:"",
      crimeId:"",
      
    }));
    setImage(null)

    // navigate('/complaint');
    alert("Crime Report Registered..")
  };

  return (<>
  <div>
    <NavbarDash/>   
    <NavbarCrime/> 
  </div>
  <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register Crime Report</h1>
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
          value={crimeDetail.name}
          onChange={(value) => {
            setCrimeDetail((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          required={true}
          type="number"
          placeholder="Mobile No"
          value={crimeDetail.phone}
          onChange={(value) => {
            setCrimeDetail((prev) => ({
              ...prev,
              phone: value,
            }));
          }}
        />
          <Input
            required={true}
            type="date"
            value={crimeDetail.date}
            onChange={(value) => {
              setCrimeDetail((prev) => ({
                ...prev,
                date: value,
              }));
            }}
          />
          <Input
            required={true}
            type="text"
          placeholder="Write Crime here.."
            value={crimeDetail.crime}
            onChange={(value) => {
              setCrimeDetail((prev) => ({
                ...prev,
                crime: value,
              }));
            }}
          />
          <select 
    value={crimeDetail.city}
    onChange={(e) => {
      setCrimeDetail((prev) => ({
        ...prev,
        city: e.target.value,
      }));
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
        <br/>
        
        <Button type="submit" title="REGISTER" />
      </form>
    </div>
  </>
  );
};

export default Crimereport;
