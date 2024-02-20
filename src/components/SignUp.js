import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
import * as braze from "@braze/web-sdk";

const Signup = () => {
  const { formData, setFormData } = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any signup logic, like sending the form data to a server
    console.log("Form submitted:", formData);
    try {
      braze.changeUser({
        userIdentity: {
          external_id: formData.email1,
        },
      });
      console.log("User aliasing successful");
    } catch (error) {
      console.error("Error aliasing user:", error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Become a member</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email1"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
