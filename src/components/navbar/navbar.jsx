import React from "react";
import data from "../../utils/mook";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './style.css'
export const Navbar = () => {
  return (
    <>
      <header>
        {data.map(({ path, title, id, img }) => {
          return (
            <div key={id}>
              <Outlet />
              <NavLink className='Link-text' to={path}>
                <div className="wrapper">
                  <img src={img} alt="" />
                  <h1>{title}</h1>
                </div>
              </NavLink>
            </div>
          );
        })}
      </header>
    </>
  );
};

export default Navbar;
