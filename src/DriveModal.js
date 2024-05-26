// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from 'react';

function DriveModal(props) {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    const driveStyle = (bg) => ({
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundImage: bg,
        width: 240,
        height: 136,
        borderRadius: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    });

    return (
        <div onMouseEnter={onHover}
        onMouseLeave={onLeave} onClick={function() {
            props.onClicker()
        }} className='bg-blend-lighten hover:bg-blend-darken' style={
            driveStyle("url("+ props.img +")")
        }>
            {hover ? <p style={{margin: "auto", color: "white", fontSize: "2em", userSelect: "none"}}>{props.children}</p> : ""}
        </div>
    );
}
  
export default DriveModal;