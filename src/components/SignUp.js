import React from "react";
import { useContext } from "react";
import { MyContext } from "../Context";
import * as braze from "@braze/web-sdk";
import axios from "axios";

const Signup = () => {
  const { formData, setFormData } = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    const payload = {
      email: formData.email1,
    };

    try {
      axios.post("/identify", payload).then((res) => {
        console.log(res.data, ": ext id");
        const external_id = res.data;
        braze.changeUser(external_id);
      });
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
