import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import SignInScreen from './SignInScreen';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <div className="App">
      {
        <SignInScreen isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn}/>
      }
    </div>
  );
}

export default App;
