import { useContext } from "react";
import { MyContext } from "../Context";
import axios from "axios";
import dateFormat from "dateformat";

function Form() {
  const { email, setEmail } = useContext(MyContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (email === "") {
      return;
    }

    // send a api req to braze user's track endpoint

    const now = new Date();
    const timestamp = dateFormat(now, "isoDateTime");

    const data = {
      attributes: [
        {
          email: email,
          signed_up_email: true,
        },
      ],
      events: [
        {
          name: "Signed up for email",
          time: timestamp,
        },
      ],
    };

    axios.post("/users/track", data).then((res) => console.log(res));
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
