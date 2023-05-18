import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import ComponentHome from "../components/pages/HomePage/home";
import App from "../App";

export const SignIn = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((res) => {
      setValue(res.user.email);
      localStorage.setItem("email", res.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <div>
      <button onClick={handleClick}>sign in with google</button>
    </div>
  );
};
export default SignIn;
