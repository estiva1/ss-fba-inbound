import React from "react";
import { Container, Exclamation, HorizontalBar, InfoText, SpoilerText, TwoPeoplePicture } from "./completed-pos.styles";
import Stack from "@mui/material/Stack";

const CompletedPOS = () => {
  return (
    <Container>
      <HorizontalBar>
        <Stack direction="row" spacing="8px" alignItems="center">
          <Exclamation />
          <InfoText>There are X number of PO's in completed PO's.</InfoText>
        </Stack>
        <SpoilerText>Click Here to View</SpoilerText>
      </HorizontalBar>
      <TwoPeoplePicture />
    </Container>
  );
};

export default CompletedPOS;
