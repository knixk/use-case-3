import React from "react";
import Popup from "./components/Popup";
import { MyProvider } from "./Context";
import "./App.css";

// braze.showInAppMessage('hello')

function App() {
  return (
    <MyProvider>
      <div className="app">
        <h3>Home</h3>
        <Popup></Popup>
      </div>
    </MyProvider>
  );
}

export default App;
