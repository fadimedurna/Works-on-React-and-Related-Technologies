import React, { useContext } from "react";
import { UserContext } from "./index";

function App() {
  // 2) useContext Hook solution
  const value = useContext(UserContext);

  return (
    <div>
      {/* So if we say we have navbar and we want to send prop that 
    created in index.js to Navbar component. */}
      {/* <Navbar username={props.username} /> */}
      {/* This creates prop drilling problem. Prop drilling occurs when you need to 
    pass down data through multiple nested components to reach the ones that require the data. 
    In the base, it means that when we need data in Navbar component but we need to pass it through from App.js. 
    Likewise, the process of unnecessarly passing prop data through all components throughout the component tree creates prop drilling problem. */}
      {/*1) React Context Solution */}
      {/* <UserContext.Consumer>
        {(value) => <div>Hello, {value}</div>}
      </UserContext.Consumer> */}
      {/* 2) useContext Hook solution continue in this line... */}
      Hello, {value}
    </div>
  );
}

export default App;
