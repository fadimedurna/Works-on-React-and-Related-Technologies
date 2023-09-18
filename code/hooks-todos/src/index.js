import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/* First solution of preventing prop drilling id React Context. */

export const UserContext = React.createContext();
const username = "Fadime";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserContext.Provider value={username}>
    <App />
  </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
