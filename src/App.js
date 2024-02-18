import React, { useContext } from "react";
import Popup from "./components/Popup";
import { MyProvider } from "./Context";
import "./App.css";

import * as braze from "@braze/web-sdk";

// braze.initialize("bfe1d7a8-2c42-428e-a5fd-5757c0f6507d", {
//   baseUrl: "sdk.fra-02.braze.eu",
//   enableLogging: true,
// });

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

/* 

*/