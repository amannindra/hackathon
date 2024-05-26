// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';

function Header(props) {


    return (
      <div id="header" className='flex items-stretch justify-between p-20 pt-0 lg:px-8' style={{width: "100%"}}>
        <div className="flex">
          <a className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://lh3.googleusercontent.com/oe4ma0QoIBmjX8cY7j6iovlfEgFJ1EPUB3yqbknnHkvKhLv4pWmKiq-x2BR5uq9k9NlXkg21qgaCa734VnVvzgo=w16383" alt=""/>
          </a>
        </div>
        <a href="#" className="text-2xl font-semibold leading-6 text-gray-900">WeComm</a>
        <div className="flex"  onClick={() => {props.firebase.auth().signOut(); props.setIsSignedIn(false)}}>
          <a href='#' className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://cdn-icons-png.freepik.com/256/552/552848.png" alt=""/>
          </a>
        </div>
      </div>
    );
}
  
export default Header;