import React from "react";
import { UpdatesData } from "../Data";
import "./Updates.css";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update) => {
        return (
          <div className="update">
            <img src={update.img} alt="img" />
            <div className="noti">
              <div style={{ marginBottom: "0.7rem" }}>
                <span>{update.name} </span>
                <span>{update.noti}</span>
              </div>
              <div>{update.time}</div>
              <hr />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
