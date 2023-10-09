import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const btnName = "Login";

  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  console.log("header rendered");

  //if no dependecyu array => useEffect is called on every render
  //if the dependency array is empty then useEffect is called on only initial render(just once)
  //if we put something in that dependency array then it will only be called when dependency changes
  //if dependency array is [btnNameReact] => called everytime btnNameReact is updated
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-56" alt="logo" src={LOGO_URL} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✔" : "❌"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          {/* <li><a href="/about">About</a></li> */}
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4"> Cart</li>
          <button
            className="login px-4"
            onClick={() => {
              // btnName = "Logout";
              // setBtnNameReact("Logout");
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
