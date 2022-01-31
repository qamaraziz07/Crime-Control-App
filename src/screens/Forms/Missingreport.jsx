import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import { db ,storage} from "../../firebase";
import InputImage from "../../Components/InputImage";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import NavbarDash from '../../Components/Navbar/NavbarDash';
import NavbarMissing from '../../Components/Navbar/NavbarMissing';

const Missingreport = () => {
  const [image, setImage] = useState("");
  const [missingDetail, setMissingDetail] = useState({
    name: "",
    age:"",
    missDtl:"",
    InfName:"",
    phone:"",
    date: "",
    city: "",
    gender:"",
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
          const docRef = addDoc(collection(db, "Missing"), {
            ...missingDetail,
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
    setMissingDetail((prev) => ({
      ...prev,      
      name: "",
      age:"",
      missDtl:"",
      InfName:"",
      phone:"",
      date: "",
      city: "",
      gender:"",
      imageUrl: "",
      
    }));
    // navigate('/complaint');
    alert("Missing Report Registered..")
  };

  return (
  <>
    <div>
    <NavbarDash/>
    <NavbarMissing/>
  </div>
  <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register Missing Report</h1>
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
          placeholder="Missing FullName"
          type="text"
          value={missingDetail.name}
          onChange={(value) => {
            setMissingDetail((prev) => ({
              ...prev,
              name: value,
            }));
          }}
        />
        <Input
          required={true}
          placeholder="Missing Person Age"
          type="number"
          value={missingDetail.age}
          onChange={(value) => {
            setMissingDetail((prev) => ({
              ...prev,
              age: value,
            }));
          }}
        />

        <select
        value={missingDetail.gender}
        onChange={(e) => {
          setMissingDetail((prev) => ({
            ...prev,
            gender: e.target.value,
          }));
        }}>
        <option value="">Gender</option>
      <option value="male">Male</option>
      <option value="Female">Female</option>
        </select>

        <Input
          required={true}
          placeholder="Missing Person Details"
          type="text"
          value={missingDetail.missDtl}
          onChange={(value) => {
            setMissingDetail((prev) => ({
              ...prev,
              missDtl: value,
            }));
          }}
        />
        <Input
          required={true}
          placeholder="Informer FullName"
          type="text"
          value={missingDetail.InfName}
          onChange={(value) => {
            setMissingDetail((prev) => ({
              ...prev,
              InfName: value,
            }));
          }}
        />
        <Input
          required={true}
          type="number"
          placeholder="Informer Mobile"
          value={missingDetail.phone}
          onChange={(value) => {
            setMissingDetail((prev) => ({
              ...prev,
              phone: value,
            }));
          }}
        />
          <Input
            required={true}
            type="date"
            value={missingDetail.date}
            onChange={(value) => {
              setMissingDetail((prev) => ({
                ...prev,
                date: value,
              }));
            }}
          />
          <select 
    value={missingDetail.city}
    onChange={(e) => {
      setMissingDetail((prev) => ({
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

export default Missingreport;
