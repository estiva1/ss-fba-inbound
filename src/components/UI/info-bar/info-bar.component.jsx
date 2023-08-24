import React from "react";
import { Container, Exclamation, InfoText, SpoilerText } from "./info-bar.styles";
import Stack from "@mui/material/Stack";

const InfoBar = ({ infoText, spoilerText }) => {
  return (
    <Container>
      <Stack direction="row" spacing="8px" alignItems="center">
        <Exclamation />
        <InfoText>{infoText}</InfoText>
      </Stack>
      <SpoilerText>{spoilerText}</SpoilerText>
    </Container>
  );
};

export default InfoBar;
