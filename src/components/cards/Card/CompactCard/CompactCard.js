import React from "react";
import "./CompactCard.css";
import { motion } from "framer-motion";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CompactCard = ({ param, expended }) => {
  const Png = param.png;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShahdow: param.color.boxShahdow,
      }}
      onClick={expended}
      layoutId="layoutCards"
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span style={{ color: "white" }}>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
};

export default CompactCard;
