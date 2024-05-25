import logo from './logo.svg';
import cloth from "./public/cloth.jpg";
import combo from "./public/combo.jpg";
import blanket from "./public/blanket.png";
import sri from "./public/sri.jpg";
import ukr from "./public/ukr.png";
import phil from "./public/phil.png";
import mex from  "./public/mex.png";
import techsupport from "./public/techsupport.png";

import './App.css';
import React, { useEffect, useState } from 'react';
import SignInScreen from './SignInScreen';
import DriveModal from './DriveModal';

function App() {
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  const [isSignedIn, setIsSignedIn] = useState(false);
  const drives = {
    "Cloth Drive": {img: cloth},
    "Community Books Drive": {img: combo},
    "Blanket Drive": {img: blanket},
    "Sri Lanka Drive": {img: sri},
    "Ukraine Soldiers and Infants": {img: ukr},
    "Phillipines Drive": {img: phil},
    "Mexico Schools Supplies Drive": {img: mex},
    "Indian Financial Drive": {img: techsupport},
  }
  const drivesDrived = Object.values(drives).map((drive) =>
    <DriveModal img={drive.img} key={getKeyByValue(drives, drive)}>{getKeyByValue(drives, drive)}</DriveModal>
  );
  return (
    <div className="App place-self-center place-content-center" style={{display: "flex", flexDirection: "column"}}>
      {
        isSignedIn ? <SignInScreen isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/> : false
      }
      <DriveModal img={"./public/all.png"} key={"All"}>{"All"}</DriveModal>
      <div id="drives" className='place-self-center place-content-center grid grid-cols-4 gap-4' style={{width: "700px",paddingTop: "20px"}}>
        
        {drivesDrived}
        </div>
    </div>
  );
}

export default App;
