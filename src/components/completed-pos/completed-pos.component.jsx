import React from "react";
import InfoBar from "../UI/info-bar/info-bar.component";
import { Container, TwoPeoplePicture } from "./completed-pos.styles";

const CompletedPOS = () => {
  return (
    <Container>
      <InfoBar infoText="There are X number of PO's in completed PO's." spoilerText="Click Here to View" />
      <TwoPeoplePicture />
    </Container>
  );
};

export default CompletedPOS;
