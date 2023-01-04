import React from "react";
import useMouseTracker from "./MouseTracker";


function App (props) {
  const {coordinates} = useMouseTracker()
    
    return (
      <section>
        <p>X: {coordinates.x}</p>
        <p>Y: {coordinates.y}</p>
      </section>
    );
  
}

export default App;
