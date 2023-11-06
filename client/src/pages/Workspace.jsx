import React from "react";
import { NavLink } from "react-router-dom";
const Workspace = () => {
  return (
    <>
      <nav className="flex p-3 text-white justify-between items-center font-bold font-mono bg-black">
        <div className="flex items-center cursor-pointer w-1/3">
          <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg w-20">
            <NavLink className="" to="/main">
              New +
            </NavLink>
          </button>
        </div>
        <div className="flex items-center cursor-pointer w-1/3">
          <span className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg">
            Nimit's Workspace
          </span>
        </div>
        <div className="flex items-center justify-end gap-5 text-md w-1/3">
          <NavLink className="text-xm hover:text-lightgreen" to="/">
            Home
          </NavLink>
          <button className="border-2 border-lightgreen hover:border-white transition duration-500 p-2 rounded-lg w-20">
            <NavLink className="" to="/login">
              Login
            </NavLink>
          </button>
        </div>
      </nav>
    </>
  );
};
export default Workspace;
