import React from "react";

export default function Loading() {
  return (
    <div>
      <lord-icon
        src="https://cdn.lordicon.com/ymrqtsej.json"
        trigger="loop"
        delay="500"
        colors={{primary:"#fff",secondary:"#fff"}}
        stroke="25"
        style={{width:"100%",height:"500px"}}>    
      </lord-icon>
    </div>
  );
}
