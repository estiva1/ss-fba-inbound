import React from "react";
import BigCard from "../UI/big-card/big-card.component";
import { Container } from "./top-cards-row.styles";
import { topCardsContent } from "../../constants";

const TopCardsRow = () => {
  return (
    <Container>
      {topCardsContent.map((card, index) => (
        <BigCard key={`card-${index}`} card={card} />
      ))}
    </Container>
  );
};

export default TopCardsRow;
