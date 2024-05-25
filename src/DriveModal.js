// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';

function DriveModal(props) {

    const driveStyle = (bg) => ({
        backgroundImage: bg,
        width: 155,
        height: 116,
        borderRadius: "20px"
    });

    return (
        <div className='bg-blend-lighten hover:bg-blend-darken' style={
            driveStyle("url("+ props.img +")")
        }>

        </div>
    );
}
  
export default DriveModal;