import { useContext } from "react";
import { MyContext } from "../Context";
import * as braze from "@braze/web-sdk";

// const externalId = 43312343;

function Form() {
  const { email, setEmail } = useContext(MyContext);

  const handleClick = (e) => {
    e.preventDefault();
    // braze.changeUser(email);
    try {
      braze.changeUser({
        userIdentity: {
          external_id: email,
        },
      });
      console.log("User aliasing successful");
      // console.log("Your external Id is set as your email");
      alert("Your external Id is set as your email");
    } catch (error) {
      console.error("Error aliasing user:", error);
    }

    // braze
    //   .aliasUser(email, externalId)
    //   .then(() => {
    //     console.log("External ID set successfully");
    //   })
    //   .catch((error) => {
    //     console.error("Error setting external ID:", error);
    //   });
  };

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleClick}>Sign Up</button>
      </form>
    </div>
  );
}

export default Form;
