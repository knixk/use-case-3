import { useContext } from "react";
import { MyContext } from "../Context";
import * as braze from "@braze/web-sdk";
    
function Form() {
  const { email, setEmail } = useContext(MyContext);

  const handleClick = (e) => {
    e.preventDefault();
    try {
      braze.changeUser({
        userIdentity: {
          external_id: email,
        },
      });
      console.log("User aliasing successful");
    } catch (error) {
      console.error("Error aliasing user:", error);
    }
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
