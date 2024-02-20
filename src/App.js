import React from "react";
import Popup from "./components/Popup";
import { MyProvider } from "./Context";
import SignUp from "./components/SignUp";
import "./App.css";

// braze.showInAppMessage('hello')

function App() {
  return (
    <MyProvider>
      <div className="app">
        <h3>Home</h3>
        <SignUp />
        <Popup></Popup>
      </div>
    </MyProvider>
  );
}

export default App;
