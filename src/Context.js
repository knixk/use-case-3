// Step 1: Create a Context
import React, { createContext, useContext, useState } from "react";

// Create a new context
export const MyContext = createContext();

// Step 2: Provide the Context
export const MyProvider = ({ children }) => {
  const [email, setEmail] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email1: "",
    password: "",
  });

  // Wrap children with the Provider and pass the state and any functions to update the state
  return (
    <MyContext.Provider value={{ email, setEmail, formData, setFormData }}>
      {children}
    </MyContext.Provider>
  );
};

// Step 3: Consume the Context
const ChildComponent = () => {
  // Use the useContext hook to access the context
  const { email, setEmail } = useContext(MyContext);

  return (
    <div>
      <h2>email from Context: {email}</h2>
      <button onClick={() => setEmail("updated value")}>Update Value</button>
    </div>
  );
};

// Usage
const App = () => {
  return (
    // Wrap the component tree with the Provider
    <MyProvider>
      <ChildComponent />
    </MyProvider>
  );
};

export default App;
