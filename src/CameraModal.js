// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CameraModal(props) {

  function SmallAman(props) {
    return (
      <div style={{backgroundColor: "white", height: "100px"}}>{props.aman}</div>
    )
  }

  const [amans, setAmans] = useState(["Add Items here"]);
  const amansMapped = Object.values(amans).map((aman) =>
    <SmallAman aman={aman} key={aman}/>
  );

  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    axios.post("https://87c9-206-213-190-64.ngrok-free.app/images", {
      img: dataUri
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => {
      setAmans([...amans, response.data]);
    })
    .catch((err) => {
      console.log("Unable to fetch -", err);
    });
  }

    return (
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <props.Camera 
          onTakePhoto = { (dataUri) => {handleTakePhoto(dataUri); } }
        />
        <div style={{height: "576px",width: "700px", backgroundColor: "#d3d3d3", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        {amansMapped}
        </div>
      </div>
    );
}
  
export default CameraModal;