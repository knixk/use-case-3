import { useContext } from "react";
import { MyContext } from "../Context";

function Form() {
  const { email, setEmail } = useContext(MyContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (email === "") {
      return;
    }

    // send a api req to user's track endpoint

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
