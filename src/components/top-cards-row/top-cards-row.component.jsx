import React from "react";
import { topCardsContent } from "../../constants";
import { Container } from "./top-cards-row.styles";
import BigCard from "../UI/big-card/big-card.component";

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
