import React, { useContext } from "react";
import "./style.css";
import Mars from "../../../assets/icons/mars.png";

import { DataContext } from "../../../context";

export const TopNavbar = () => {
  const { signUser, setSignUser } = useContext(DataContext);
  return (
    <header className="topWrapper">
      <img src={Mars} alt="" />
      <h1>{signUser}</h1>
    </header>
  );
};
export default TopNavbar;
