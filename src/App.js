import logo from './logo.svg';
import cloth from "./public/cloth.jpg";
import combo from "./public/combo.jpg";
import blanket from "./public/blanket.png";
import sri from "./public/sri.jpg";
import ukr from "./public/ukr.png";
import phil from "./public/phil.png";
import mex from  "./public/mex.png";
import techsupport from "./public/techsupport.png";
import dollar from "./public/dollar.png";
import firebase from 'firebase/compat/app';

import React, { useEffect, useState } from 'react';
import SignInScreen from './SignInScreen';
import DriveModal from './DriveModal';
import Header from './Header';
import CameraModal from './CameraModal'

import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

import 'firebase/compat/auth';
import './App.css';
const config = {
  apiKey: "AIzaSyCeakkn-rE6X9T-EgZqf302YdOcxcxJ4LM",
  authDomain: "wecom-bb73f.firebaseapp.com",
  projectId: "wecom-bb73f",
  storageBucket: "wecom-bb73f.appspot.com",
  messagingSenderId: "842801733369",
  appId: "1:842801733369:web:fef189a86523903a524c28"
};
firebase.initializeApp(config);
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID 
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};


function App() {
  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
  const [screenName, setScreenName] = useState("menu");
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
    <DriveModal onClicker={() => {
      setScreenName("camera");
    }} img={drive.img} key={getKeyByValue(drives, drive)}>{getKeyByValue(drives, drive)}</DriveModal>
  );
  return (
    <div className="App place-self-center place-content-center" style={{display: "flex", flexDirection: "column"}}>
      <Header setIsSignedIn={setIsSignedIn} firebase = {firebase}/>

      <SignInScreen   firebase = {firebase} config = {config} uiConfig = {uiConfig} isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>

      {(screenName == "menu") ? <DriveModal onClicker={() => {
        window.location.href = "https://www.gofundme.com/f/children-in-need-of-education?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1";
      }} img={dollar} key={"Donate"}>{"Donate"}</DriveModal> : <></>}
      {(screenName == "menu") ? <div id="drives" className='place-self-center place-content-center grid grid-cols-4 gap-4' style={{paddingTop: "20px"}}>
        
        {drivesDrived}
        </div> : <></>}
      {(screenName == "camera" ? <CameraModal Camera = {Camera}/> : <></>)}
    </div>
  );
}

export default App;
