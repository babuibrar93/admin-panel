import React, { useState } from "react";
import "./Card.css";

import { AnimateSharedLayout } from "framer-motion";

import ExpendedCard from "./ExpendedCard/ExpendedCard";
import CompactCard from "./CompactCard/CompactCard";

const Card = (props) => {
  const [expended, setExpended] = useState(false);

  return (
    <AnimateSharedLayout>
      {expended ? (
        <ExpendedCard param={props} expended={() => setExpended(false)} />
      ) : (
        <CompactCard param={props} expended={() => setExpended(true)} />
      )}
    </AnimateSharedLayout>
  );
};

export default Card;
