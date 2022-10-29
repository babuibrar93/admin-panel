import React, { useState } from "react";
import "./Sidebar.css";
import logo from "../../images/logo.png";
import { sideBarData } from "./Data/Data";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={logo} alt="" />
        <span>
          Sh<span>o</span>ps{" "}
        </span>
      </div>

      <div className="menu">
        {sideBarData?.map((data, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              onClick={() => setSelected(index)}
            >
              <data.icon />
              <span>{data.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
