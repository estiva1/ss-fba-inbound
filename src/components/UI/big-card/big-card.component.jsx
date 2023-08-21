import React from "react";
import { CardContainer, CardDescriptionText, CardValue } from "./big-card.styles";

const BigCard = ({ card }) => {
  const { name, value, cardColor, cardBorder } = card || {};

  return (
    <CardContainer border={cardBorder} backgroundColor={cardColor}>
      <CardDescriptionText>{name}</CardDescriptionText>
      <CardValue>{value}</CardValue>
    </CardContainer>
  );
};

export default BigCard;
