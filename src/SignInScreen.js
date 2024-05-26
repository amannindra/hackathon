// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
  
  function SignInScreen(props , firebase) {
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = props.firebase.auth().onAuthStateChanged(user => {
        props.setIsSignedIn(!!user);
        console.log(props.setIsSignedIn(!!user))
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
    

    if (!props.isSignedIn) {
      return (
        <div style={{position: "absolute", backgroundColor: "rgba(0,0,0,0.75)", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <h1 style={{color: "white"}}>My App</h1>
          <p style={{color: "white"}}>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={props.uiConfig} firebaseAuth={props.firebase.auth()} />
        </div>
      );
    } 
    else{
      return (

        <div >
            

        </div>
    );
    }

    
  }
  
  export default SignInScreen;