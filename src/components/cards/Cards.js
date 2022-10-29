import React from "react";
import Card from "./Card/Card";
import { cardData } from "./Data";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards">
      {cardData?.map((card, index) => {
        return (
          <div className="parentCards">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
